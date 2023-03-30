<script>

import MovieItem from "./MovieItem.vue";

import { store } from "../store";
import TvItem from "./TvItem.vue";

export default {

  name: "AppMain",

  data() {
    return {

      store,

    };
  },

  components: {
    MovieItem,
    TvItem
  },

}

</script>

<template>
  <h1>Movies:</h1>
  <div class="main-container">
    <MovieItem v-for="movie in store.movies" :movie="movie"></MovieItem>
  </div>

  <h1>TV Shows:</h1>
  <div class="main-container">
    <TvItem v-for="tvShow in store.tvShows" :tvShow="tvShow"></TvItem>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-flow: row wrap;
  gap: 20px;

}
</style>
