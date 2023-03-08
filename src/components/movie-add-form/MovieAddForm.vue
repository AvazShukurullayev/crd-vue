<template>
  <Box class="movie-add-form">
    <HeadingThree class="movie-add-form__title">
      Yangi kino qo'shish
    </HeadingThree>
    <form class="add-form d-flex" @submit.prevent>
      <input
        class="form-control new-movie"
        type="text"
        placeholder="Qanday kino?"
        required
        :value="name"
        @input="name = $event.target.value"
      />
      <input
        class="form-control new-movie"
        type="number"
        placeholder="Necha marotaba ko'rilgan?"
        required
        :value="viewers"
        @input="viewers = $event.target.value"
      />
      <PrimaryButton class="btn-outline-dark" type="submit" @click="addMovie">
        Qo'shish
      </PrimaryButton>
    </form>
  </Box>
</template>

<script>
export default {
  name: "MovieAddForm",
  props: {},
  data() {
    return {
      name: "",
      viewers: "",
    };
  },
  methods: {
    addMovie() {
      if (!this.name || !this.viewers) return;
      const newMovie = {
        name: this.name,
        viewers: this.viewers,
        favourite: false,
        like: false,
        id: Date.now(),
      };
      this.$emit("createMovie", newMovie);
      this.name = "";
      this.viewers = "";
    },
  },
};
</script>

<style>
.movie-add-form__title {
  margin-bottom: 1rem;
}
</style>
