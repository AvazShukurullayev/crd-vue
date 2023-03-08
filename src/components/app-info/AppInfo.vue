<template>
  <Box>
    <Paragraph class="fs-2 text-uppercase">Barcha kinolar soni: {{ allMoviesCount }}</Paragraph>
    <Paragraph class="fs-5 text-uppercase">Maxshur kinolar soni: {{ likeMoviesCount }}</Paragraph>
    <Paragraph class="fs-5 text-uppercase">Ko'p ko'rilgan kinolar soni: {{ favouriteMoviesCount }}</Paragraph>
  </Box>
</template>

<script>
export default {
  name: "AppInfo",
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

<style></style>
