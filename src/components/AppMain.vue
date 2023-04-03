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
  <div class="main-container" v-if="store.movies.length > 0">
    <h2>Movies:</h2>
    <div class="cards-container">
      <MovieItem v-for="movie in store.movies" :movie="movie"></MovieItem>
    </div>
  </div>
  <div v-else></div>


  <div class="main-container" v-if="store.tvShows.length > 0">
    <h2>TV Shows:</h2>
    <div class="cards-container">
      <TvItem v-for="tvShow in store.tvShows" :tvShow="tvShow"></TvItem>
    </div>
  </div>
  <div v-else></div>
</template>

<style lang="scss" scoped>
.main-container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 10px;
  padding-bottom: 10px;

  h2 {
    padding-top: 80px;
  }
}

.cards-container {
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  margin: 0 auto;
  max-width: 1440px;
}
</style>
