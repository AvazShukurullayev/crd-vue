<template>
  <div class="app container font-monospace">
    <div class="content">
      <AppInfo
        :allMoviesCount="movies.length"
        :likeMoviesCount="movies.filter((c) => c.like).length"
        :favouriteMoviesCount="movies.filter((c) => c.favourite).length"
      />
      <Box>
        <SearchPanel @onChangeHandler="onChangeHandler" />
        <AppFilter @onFilter="onFilter" />
      </Box>

      <Box v-if="!movies.length && !isLoading">
        <Paragraph class="text-center text-danger fs-3">Kinolar yo'q</Paragraph>
      </Box>
      <Box v-else-if="isLoading" class="text-center">
        <MyLoader />
      </Box>
      <MovieList
        v-else
        :movies="onFilterHandler(onSearchHandler(movies, term), filter)"
        @onToggle="onToggleHandler"
        @onRemove="onRemoveHandler"
      />

      <Box class="d-flex justify-content-center">
        <nav aria-label="pagination">
          <ul class="pagination">
            <li
              v-for="pageNumber in totalPages"
              :key="pageNumber"
              @click="changePageHandler(pageNumber)"
              :class="{ active: pageNumber === page }"
              class="page-item"
              aria-current="page"
            >
              <span class="page-link">{{ pageNumber }}</span>
            </li>
          </ul>
        </nav>
      </Box>
      <MovieAddForm @createMovie="createMovie" />
    </div>
  </div>
</template>

<script>
import AppInfo from "@/components/app-info/AppInfo.vue";
import SearchPanel from "@/components/search-panel/SearchPanel.vue";
import AppFilter from "@/components/app-filter/AppFilter.vue";
import MovieList from "@/components/movie-list/MovieList.vue";
import MovieAddForm from "@/components/movie-add-form/MovieAddForm.vue";

import axios from "axios";

export default {
  name: "App",
  components: { AppInfo, SearchPanel, AppFilter, MovieList, MovieAddForm },
  data() {
    return {
      movies: [],
      term: "",
      filter: "all",
      isLoading: false,
      limit: 10,
      page: 1,
      totalPages: 0,
    };
  },
  methods: {
    async createMovie(item) {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          item
        );
        console.log(response.data);
        this.movies.push(response.data)
      } catch (error) {
        alert(error.message);
      }
      // this.movies.push(item);
    },
    onToggleHandler({ id, prop }) {
      this.movies = this.movies.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
    },

    async onRemoveHandler(id) {
      try {
        const response = await axios.delete(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        console.log("response delete => ", response);
        this.movies = this.movies.filter((c) => c.id !== id);
      } catch (error) {
        alert(error.message);
      }
    },
    onSearchHandler(arr, term) {
      if (term.length == 0) {
        return arr;
      }
      return arr.filter((c) =>
        c.name.toLowerCase().includes(term.toLowerCase())
      );
    },
    onChangeHandler(par) {
      console.log("parametr => ", par);
      this.term = par;
    },
    onFilterHandler(arr, filter) {
      switch (filter) {
        case "popular":
          return arr.filter((c) => c.like);
        case "mostViewers":
          return arr.filter((c) => c.viewers > 500);
        default:
          return arr;
      }
    },
    onFilter(filter) {
      this.filter = filter;
    },
    async getApi() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: this.limit,
              _page: this.page,
            },
          }
        );
        const newArr = response.data.map((item) => ({
          name: item.title,
          viewers: item.id * 100,
          id: item.id,
          like: false,
          favourite: false,
        }));
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.movies = newArr;
        console.log(response.data);
      } catch (error) {
        alert(error.message);
      } finally {
        this.isLoading = false;
      }
    },
    changePageHandler(page) {
      this.page = page;
      // this.getApi();
    },
  },
  mounted() {
    this.getApi();
  },
  watch: {
    page() {
      this.getApi();
    },
  },
};
</script>

<style>
.app {
  min-height: 100vh;
}
.content {
  padding: 2rem 0;
}
</style>

<!--  /* onLikeHandler(id) {
      this.movies = this.movies.map((item) => {
        if (item.id === id) {
          item.like = !item.like;
        }
        return item;
      });
    },
    onFavouriteHandler(id) {
      this.movies = this.movies.map((item) => {
        if (item.id === id) {
          item.favourite = !item.favourite;
        }
        return item;
      });
    }, */ -->

<!-- 

      setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
          );
          const newArr = response.data.map((item) => ({
            name: item.title,
            viewers: item.id * 100,
            id: item.id,
            like: false,
            favourite: false,
          }));
          this.movies = newArr;
          this.isLoading = false;
          console.log(response.data);
        }, 3000);


     -->
