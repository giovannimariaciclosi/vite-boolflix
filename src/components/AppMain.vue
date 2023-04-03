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
  <div class="main-container">
    <h2>Movies:</h2>
  </div>
  <div class="main-container">
    <MovieItem v-for="movie in store.movies" :movie="movie"></MovieItem>
  </div>

  <div class="main-container">
    <h2>TV Shows:</h2>
  </div>
  <div class="main-container">
    <TvItem v-for="tvShow in store.tvShows" :tvShow="tvShow"></TvItem>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  padding-top: 80px;
  text-align: center;
}

.main-container {
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  margin: 0 auto;
  max-width: 1440px;
  padding-top: 1em;
}
</style>
