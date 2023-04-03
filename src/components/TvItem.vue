<script>

import { store } from "../store";

import "../../node_modules/flag-icons/css/flag-icons.min.css";

export default {

  name: "TvItem",

  data() {
    return {

      store,

    };
  },

  props: {
    tvShow: Object,
  },

  computed: {

    convertLangToCountry() {
      let language = this.tvShow.original_language;

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
          break;
        case "da":
          language = "dk";
          break;
        case "":
          language = "xx";
          break;

      }
      return language;
    },

    getTvShowImagePath() {

      let imagePath = this.store.APIimageBase + this.store.APIimageSize + this.tvShow.poster_path;

      if (this.tvShow.poster_path == null) {
        return "https://image.tmdb.org/t/p/w342//9p10J9Xp7MuaVac56g8BwAuXEsA.jpg";
      };

      return imagePath;

    },

    getTvShowRating() {

      let tvShowRating = Math.ceil(Math.floor(this.tvShow.vote_average) / 2);

      if (tvShowRating == 0) {
        tvShowRating = 1;

        return tvShowRating;
      }


      return tvShowRating;
    },
  },

}

</script>

<template>
  <div class="tv-shows">

    <div>{{ tvShow.name }}</div>

    <div>{{ tvShow.original_name }}</div>

    <div>{{ tvShow.original_language }}</div>
    <span class="fi" :class="'fi-' + convertLangToCountry"></span>

    <div>{{ getTvShowRating }}</div>

    <div class="rating">
      <i v-for="star in getTvShowRating" class="fa-solid fa-star"></i>
      <i v-for="star in (5 - getTvShowRating)" class="fa-regular fa-star"></i>
    </div>

    <img :src="getTvShowImagePath" alt="test">

  </div>
</template>

<style lang="scss" scoped>
.tv-shows {
  width: calc(100% / 4 - 20px / 4 * 3);
  display: flex;
  flex-direction: column;
}
</style>
