<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import { store } from "./store.js";
import axios from "axios";


export default {
  data() {
    return {

      store,

    }
  },

  components: {
    AppHeader,
    AppMain,
  },

  created() {

    this.trending();

  },

  methods: {

    searchMovie() {
      let APIfullSearchMovie = this.store.APIbaseSearchMovie + this.store.APIkey + this.store.languageIT + this.store.safeForWork + this.store.APIsearchQuery + encodeURIComponent(this.store.MovieNameSearch);
      let APIfullSearchTvShow = this.store.APIbaseSearchTvShow + this.store.APIkey + this.store.languageIT + this.store.safeForWork + this.store.APIsearchQuery + encodeURIComponent(this.store.MovieNameSearch);
      console.log(APIfullSearchMovie);
      console.log(APIfullSearchTvShow);

      axios.get(APIfullSearchMovie).then((res) => {

        console.log(res.data.results);

        this.store.movies = res.data.results;
        // console.log(this.store.movies);
      });

      axios.get(APIfullSearchTvShow).then((res) => {

        console.log(res.data.results);

        this.store.tvShows = res.data.results;
        // console.log(this.store.tvShows);
      });


    },

    trending() {
      let APIfullSearchMovie = "https://api.themoviedb.org/3/trending/movie/day?" + this.store.APIkey;
      let APIfullSearchTvShow = "https://api.themoviedb.org/3/trending/tv/day?" + this.store.APIkey;
      console.log(APIfullSearchMovie);
      console.log(APIfullSearchTvShow);


      axios.get(APIfullSearchMovie).then((res) => {

        console.log(res.data.results);

        this.store.movies = res.data.results;
        this.store.isLoading = false;
        // console.log(this.store.movies);
      });

      axios.get(APIfullSearchTvShow).then((res) => {

        console.log(res.data.results);

        this.store.tvShows = res.data.results;
        this.store.isLoading = false;
        // console.log(this.store.tvShows);
      });

    },

  },

}


</script>

<template>
  <header>
    <AppHeader @userSearch="searchMovie()"></AppHeader>
  </header>
  <main>
    <div class="loading" v-if="store.isLoading">Caricamento</div>
    <AppMain v-else></AppMain>
  </main>
</template>

<style lang="scss" scoped>
.loading {
  font-size: 2em;
}
</style>
