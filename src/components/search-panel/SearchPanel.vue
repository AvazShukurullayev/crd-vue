<template>
  <input
    type="text"
    class="search-input form-control"
    placeholder="Kinolarni qidirish..."
    :value="term"
    @input="onChangeHandler"
  />
</template>

<script>
export default {
  name: "SeachPanel",
  components: {},
  props: {},
  data() {
    return {
      term: "",
    };
  },
  methods: {
    onChangeHandler(e) {
      this.term = e.target.value;
      this.$emit("onChangeHandler", this.term);
    },
  },
};
</script>

<style>
.search-input {
  font-size: 20px;
  padding: 1rem;
  margin-bottom: 1.25rem;
}
</style>
