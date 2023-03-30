<script>

import MovieItem from "./MovieItem.vue";

import { store } from "../store";

export default {

  name: "AppMain",

  data() {
    return {

      store,

    };
  },

  components: {
    MovieItem,
  },

}

</script>

<template>
  <div id="main-container">
    <MovieItem v-for="movie in store.movies" :movie="movie"></MovieItem>
  </div>
</template>

<style lang="scss" scoped>
#main-container {
  display: flex;
  flex-flow: row wrap;
  gap: 20px;

}
</style>
