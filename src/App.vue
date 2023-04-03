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

    // all'avvio dell'app carico film e serie tv di tendenza
    this.trending();

  },

  methods: {

    searchMovie() {
      this.store.isLoading = true;
      this.store.movies = [];
      this.store.tvShows = [];

      // costruisco l'url per la chiamata API
      let APIfullSearchMovie = this.store.APIbaseSearchMovie + this.store.APIkey + this.store.languageIT + this.store.safeForWork + this.store.APIsearchQuery + encodeURIComponent(this.store.MovieNameSearch);
      let APIfullSearchTvShow = this.store.APIbaseSearchTvShow + this.store.APIkey + this.store.languageIT + this.store.safeForWork + this.store.APIsearchQuery + encodeURIComponent(this.store.MovieNameSearch);
      console.log(APIfullSearchMovie);
      console.log(APIfullSearchTvShow);

      axios.get(APIfullSearchMovie).then((res) => {

        console.log(res.data.results);

        this.store.movies = res.data.results;
        this.store.isLoading = false;
      });

      axios.get(APIfullSearchTvShow).then((res) => {

        console.log(res.data.results);

        this.store.tvShows = res.data.results;
        this.store.isLoading = false;
      });

      // se l'utente inserisce una stringa vuota visualizzo film e serie tv in tendenza
      if (this.store.MovieNameSearch == "") {
        this.trending()
      }
    },

    trending() {
      // costruisco l'url per la chiamata API
      let APIfullSearchMovie = "https://api.themoviedb.org/3/trending/movie/day?" + this.store.APIkey;
      let APIfullSearchTvShow = "https://api.themoviedb.org/3/trending/tv/day?" + this.store.APIkey;

      // eseguo la chiamata
      axios.get(APIfullSearchMovie).then((res) => {

        this.store.movies = res.data.results;
        this.store.isLoading = false;
      });

      // eseguo la chiamata
      axios.get(APIfullSearchTvShow).then((res) => {

        this.store.tvShows = res.data.results;
        this.store.isLoading = false;
      });

    },

    // Se l'utente clicca su "Home" prendo i film e le serie tv di tendenza e li visualizzo, se clicca su Film mostro solo i film, su Serie TV mostro solo le serie tv
    userSelect() {

      if (this.store.links[0].text == "Home" && this.store.links[0].active == true) {

        this.store.isLoading = true;
        this.store.movies = [];
        this.store.tvShows = [];

        // costruisco l'url per la chiamata API
        let APIfullSearchMovie = "https://api.themoviedb.org/3/trending/movie/day?" + this.store.APIkey;
        let APIfullSearchTvShow = "https://api.themoviedb.org/3/trending/tv/day?" + this.store.APIkey;

        axios.get(APIfullSearchMovie).then((res) => {
          this.store.movies = res.data.results;
          this.store.isLoading = false;
        });

        axios.get(APIfullSearchTvShow).then((res) => {
          this.store.tvShows = res.data.results;
          this.store.isLoading = false;
        });
      };

      if (this.store.links[1].text == "Film" && this.store.links[1].active == true) {

        this.store.isLoading = true;
        this.store.movies = [];
        this.store.tvShows = [];

        // costruisco l'url per la chiamata API
        let APIfullSearchMovie = "https://api.themoviedb.org/3/trending/movie/day?" + this.store.APIkey;

        axios.get(APIfullSearchMovie).then((res) => {
          this.store.movies = res.data.results;
          this.store.isLoading = false;
        });

      };

      if (this.store.links[2].text == "Serie TV" && this.store.links[2].active == true) {

        this.store.isLoading = true;
        this.store.movies = [];
        this.store.tvShows = [];

        // costruisco l'url per la chiamata API
        let APIfullSearchTvShow = "https://api.themoviedb.org/3/trending/tv/day?" + this.store.APIkey;

        axios.get(APIfullSearchTvShow).then((res) => {
          this.store.tvShows = res.data.results;
          this.store.isLoading = false;
        });

      };
    },

  },

}
</script>

<template>
  <header>
    <AppHeader @userSearch="searchMovie()" @userSelect="userSelect()">
    </AppHeader>
  </header>
  <main>
    <div class="loading" v-if="store.isLoading">Caricamento</div>
    <AppMain v-else></AppMain>
  </main>
</template>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
  font-size: 2em;
}
</style>
