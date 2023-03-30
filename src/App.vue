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

  },

  methods: {

    searchMovie() {
      let APIfullSearchMovie = this.store.APIbaseSearchMovie + this.store.APIkey + this.store.languageIT + this.store.safeForWork + this.store.APIsearchQuery + this.store.MovieNameSearch;
      let APIfullSearchTvShow = this.store.APIbaseSearchTvShow + this.store.APIkey + this.store.languageIT + this.store.safeForWork + this.store.APIsearchQuery + this.store.MovieNameSearch;
      console.log(APIfullSearchMovie);
      console.log(APIfullSearchTvShow);

      axios.get(APIfullSearchMovie).then((res) => {

        // console.log(res.data.results);

        this.store.movies = res.data.results;
        // console.log(this.store.movies);
      });

      axios.get(APIfullSearchTvShow).then((res) => {

        console.log(res.data.results);

        this.store.tvShows = res.data.results;
        console.log(this.store.tvShows);
      });


    },

  },

}


</script>

<template>
  <AppHeader @userSearch="searchMovie()"></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>
