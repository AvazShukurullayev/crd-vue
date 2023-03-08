<template>
  <div class="btn-group">
    <button
      v-for="btn in filterButtons"
      :key="btn.name"
      class="btn"
      :class="[filter == btn.name ? 'btn-dark' : 'btn-outline-dark']"
      @click="filterHandler(btn.name)"
    >
      {{ btn.title }}
    </button>
  </div>
</template>

<script>
export default {
  name: "AppFilter",
  props: {},
  components: {},
  data() {
    return {
      filterButtons: [
        { title: "Barcha kinolar", name: "all" },
        { title: "Mashxur kinolar", name: "popular" },
        { title: "Eng ko'p ko'rilgan kinolar", name: "mostViewers" },
      ],
      filter: "all",
    };
  },
  methods: {
    filterHandler(filter) {
      this.filter = filter;
      this.$emit("onFilter", this.filter);
    },
  },
};
</script>

<style scoped></style>
