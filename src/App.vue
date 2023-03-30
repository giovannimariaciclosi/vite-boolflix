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

      console.log(this.store.APIbaseSearchMovie + this.store.APIkey + this.store.languageIT + this.store.safeForWork + this.store.APIsearchQuery + this.store.MovieNameSearch);
      axios.get(this.store.APIbaseSearchMovie + this.store.APIkey + this.store.languageIT + this.store.safeForWork + this.store.APIsearchQuery + this.store.MovieNameSearch).then((res) => {
        console.log(res.data.results);
        this.store.movies = res.data.results;
        console.log(this.store.movies);
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
