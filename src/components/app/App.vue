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
      <MovieList
        :movies="onFilterHandler(onSearchHandler(movies, term), filter)"
        @onToggle="onToggleHandler"
        @onRemove="onRemoveHandler"
      />
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
export default {
  name: "App",
  components: { AppInfo, SearchPanel, AppFilter, MovieList, MovieAddForm },
  data() {
    return {
      movies: [
        {
          name: "Omar",
          viewers: 811,
          favourite: false,
          like: false,
          id: 1,
        },
        {
          name: "Ertugrul",
          viewers: 911,
          favourite: false,
          like: false,
          id: 2,
        },
        {
          name: "Empire of Osman",
          viewers: 1411,
          favourite: false,
          like: false,
          id: 3,
        },
        {
          name: "Otto Fon Bismark",
          viewers: 477,
          favourite: false,
          like: false,
          id: 4,
        },
      ],
      term: "",
      filter: "all",
    };
  },
  methods: {
    createMovie(item) {
      this.movies.push(item);
    },
    onToggleHandler({ id, prop }) {
      this.movies = this.movies.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
    },

    onRemoveHandler(id) {
      this.movies = this.movies.filter((c) => c.id !== id);
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
