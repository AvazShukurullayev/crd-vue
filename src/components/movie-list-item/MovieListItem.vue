<template>
  <li
    class="list-group-item d-flex justify-content-between align-items-center"
    :class="{ like: movie.like, favourite: movie.favourite }"
  >
    <span
      class="list-group-item__span"
      @click="$emit('onToggle', { id: movie.id, prop: 'like' })"
    >
      {{ movie.name }}
    </span>
    <input
      class="list-group-item__input text-center"
      type="number"
      :value="movie.viewers"
    />
    <div class="d-flex justify-content-center align-items-center">
      <button
        class="btn-cookie btn-sm"
        type="button"
        @click="$emit('onToggle', { id: movie.id, prop: 'favourite' })"
      >
        <i class="fas fa-cookie"></i>
      </button>
      <button
        class="btn-trash btn-sm"
        type="button"
        @click="$emit('onRemove', movie.id)"
      >
        <i class="fas fa-trash"></i>
      </button>
      <i class="fas fa-star"></i>
    </div>
  </li>
</template>

<script>
export default {
  name: "MovieListItem",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    /* onLike() {
      this.$emit("onLike", this.movie.id);
    }, */
    /* onFavourite() {
      this.$emit("onFavourite", this.movie.id);
    }, */
    /* onDelete() {
      this.$emit("onDelete", this.movie.id);
    }, */
  },
};
</script>

<style scoped>
.list-group-item {
  border: none;
  padding: 15px 20px;
  border-bottom: 1px solid #3d5a80;
}
.list-group-item:last-child {
  border-bottom: none;
}
.list-group-item__span {
  max-width: 550px;
  width: 100%;
  line-height: 35px;
  font-size: 20px;
  cursor: pointer;
}
.list-group-item__input {
  line-height: 35px;
  font-size: 20px;
  text-align: center;
  border: none;
  outline: none;
}
.list-group-item button {
  width: 35px;
  height: 35px;
  cursor: pointer;
  font-size: 17px;
  border: none;
  margin: 3px;
}
.list-group-item .btn-cookie {
  color: #e09f3e;
}
.list-group-item .btn-trash {
  color: #e5383b;
}
.list-group-item .fa-star {
  width: 35px;
  line-height: 35px;
  font-size: 16px;
  text-align: center;
  color: #ffd700;
  transform: translateX(30px);
  opacity: 0;
  transition: all 0.3s ease-in;
}
.list-group-item.like .fa-star {
  opacity: 1;
  transform: translateX(0);
}
.list-group-item.favourite .list-group-item__span,
.list-group-item.favourite .list-group-item__input {
  color: #e09f3e;
}
</style>
