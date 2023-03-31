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
        return "https://image.tmdb.org/t/p/w200//9p10J9Xp7MuaVac56g8BwAuXEsA.jpg";
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
  <div :style="{ backgroundImage: 'url(' + getMovieImagePath + ')' }" class="movie">

    <div class="movie-info">
      <div>{{ movie.title }}</div>

      <div>{{ movie.original_title }}</div>

      <div>{{ movie.original_language }}</div>
      <span class="fi" :class="'fi-' + convertLangToCountry"></span>

      <div>{{ getMovieRating }}</div>

      <div class="rating">
        <i v-for="star in getMovieRating" class="fa-solid fa-star"></i>
      </div>
    </div>

    <!-- <div id="movie-poster">
                              <img :src="getMovieImagePath" alt="test">
                            </div> -->


  </div>
</template>

<style lang="scss" scoped>
.movie:hover {
  background-image: none;
}

.movie {
  width: calc(100% / 4 - 20px / 4 * 3);
  display: flex;
  flex-direction: column;

  height: 513px;
  cursor: pointer;


  #movie-poster {
    border: 1px solid white;
    cursor: pointer;

  }
}
</style>
