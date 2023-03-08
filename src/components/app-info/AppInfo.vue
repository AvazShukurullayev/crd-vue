<template>
  <div class="app-info">
    <p class="fs-2 text-uppercase">Barcha kinolar soni: {{ allMoviesCount }}</p>
    <p class="fs-5 text-uppercase">Maxshur kinolar soni: {{ likeMoviesCount }}</p>
    <p class="fs-5 text-uppercase">Ko'p ko'rilgan kinolar soni: {{ favouriteMoviesCount }}</p>
  </div>
</template>

<script>
export default {
  name: "AppInfo",
  components: {},
  props: {
    allMoviesCount: {
      type: Number,
      required: true,
    },
    likeMoviesCount: {
      type: Number,
      required: true,
    },
    favouriteMoviesCount: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.app-info {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
