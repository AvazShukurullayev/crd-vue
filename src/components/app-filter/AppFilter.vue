<template>
  <div class="btn-group">
    <PrimaryButton
      v-for="btn in filterButtons"
      :key="btn.name"
      :class="[filter == btn.name ? 'btn-dark' : 'btn-outline-dark']"
      @click="filterHandler(btn.name)"
    >
      {{ btn.title }}
    </PrimaryButton>
  </div>
</template>

<script>
export default {
  name: "AppFilter",
  props: {},
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

<style></style>
