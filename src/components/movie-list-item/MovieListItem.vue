<template>
  <MyLi
    class="list-group-item d-flex justify-content-between align-items-center"
    :class="{ like: movie.like, favourite: movie.favourite }"
  >
    <MySpan
      class="list-group-item__span"
      @click="$emit('onToggle', { id: movie.id, prop: 'like' })"
    >
      {{ movie.name }}
    </MySpan>
    <input
      class="list-group-item__input text-center"
      type="number"
      :value="movie.viewers"
    />
    <div class="d-flex justify-content-center align-items-center">
      <SmallButton
        class="btn-cookie"
        @click="$emit('onToggle', { id: movie.id, prop: 'favourite' })"
      >
        <i class="fas fa-cookie"></i>
      </SmallButton>
      <SmallButton class="btn-trash" @click="$emit('onRemove', movie.id)">
        <i class="fas fa-trash"></i>
      </SmallButton>
      <i class="fas fa-star"></i>
    </div>
  </MyLi>
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
  data() {
    return {};
  },
  methods: {},
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
