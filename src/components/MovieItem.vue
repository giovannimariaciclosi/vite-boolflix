<script>

import { store } from "../store";

import "../../node_modules/flag-icons/css/flag-icons.min.css";

export default {

  name: "AppMain",

  data() {
    return {

      store,

    };
  },

  props: {
    movie: Object,
  },

  computed: {

    convertLangToCountry() {
      let language = this.movie.original_language;

      switch (language) {
        case "en":
          language = "us";
          break;
        case "zh":
          language = "cn";
          break;
        case "ja":
          language = "jp";
          break;
        case "ko":
          language = "kr";
          break;
        case "el":
          language = "gr";
          break;
        case "hi":
          language = "in";
          break;
        case "te":
          language = "in";
          break;
        case "cs":
          language = "cz";
          break;
        case "he":
          language = "il";
        case "da":
          language = "dk";
          break;
          break;
        case "":
          language = "xx";
          break;

      }
      return language;
    },

    getMovieImagePath() {

      let imagePath = this.store.APIimageBase + this.store.APIimageSize + this.movie.poster_path;


      if (this.movie.poster_path == null) {
        return "https://image.tmdb.org/t/p/w342//9p10J9Xp7MuaVac56g8BwAuXEsA.jpg";
      };

      return imagePath;
    },

    getMovieRating() {

      let movieRating = Math.ceil(Math.floor(this.movie.vote_average) / 2);

      if (movieRating == 0) {
        movieRating = 1;

        return movieRating;
      }


      return movieRating;
    },


  },


}

</script>

<template>
  <div class="movie">

    <img class="movie-poster" :src="getMovieImagePath" alt="Movie Poster Image">

    <div class="movie-info">
      <div class="title"><strong>Titolo: </strong>{{ movie.title }}</div>

      <div class="original-title"><strong>Titolo Originale: </strong>{{ movie.original_title }}</div>

      <span class="fi" :class="'fi-' + convertLangToCountry"></span>

      <div class="rating">
        <strong>Voto: </strong>
        <i v-for="star in getMovieRating" class="fa-solid fa-star"></i>
        <i v-for="star in (5 - getMovieRating)" class="fa-regular fa-star"></i>
      </div>

      <div class="overview"><strong>Descrizione: </strong><span>{{ movie.overview }}</span></div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
.movie:hover .movie-poster {
  opacity: 0;
  transition: opacity .3s;
}

.movie:hover .movie-info {
  opacity: 1;
}

.movie {
  position: relative;

  width: calc(100% / 4 - 20px / 4 * 3);
  display: flex;
  flex-direction: column;

  height: 513px;
  cursor: pointer;

  overflow: hidden;

  .movie-poster {
    border: 1px solid white;
    height: 100%;
    width: 100%;
  }

  .movie-info {
    padding: 2em;
    position: absolute;
    opacity: 0;
    transition: opacity .3s;

    height: 100%;
    width: 100%;
    border: 1px solid white;

    .rating {
      padding-bottom: 1em;
    }

    .overview {
      line-height: 18px;

      span {
        font-size: .8em;
      }
    }
  }
}
</style>
