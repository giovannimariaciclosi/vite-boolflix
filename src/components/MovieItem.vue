<script>

import "../../node_modules/flag-icons/css/flag-icons.min.css";

export default {

  name: "AppMain",

  data() {
    return {
    };
  },

  props: {
    movie: Object,
  },

  computed: {

    convertLangToCountry() {
      let language = this.movie.original_language;
      console.log(language)

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
    }
  },


}

</script>

<template>
  <div class="movie">

    <div>{{ movie.title }}</div>

    <div>{{ movie.original_title }}</div>

    <div>{{ movie.original_language }}</div>
    <span class="fi" :class="'fi-' + convertLangToCountry"></span>

    <div>{{ movie.vote_average }}</div>

  </div>
</template>

<style lang="scss" scoped>
.movie {
  width: calc(100% / 4 - 20px / 4 * 3);
}
</style>
