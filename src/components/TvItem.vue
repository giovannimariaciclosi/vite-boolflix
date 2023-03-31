<script>

import "../../node_modules/flag-icons/css/flag-icons.min.css";

export default {

  name: "TvItem",

  data() {
    return {
    };
  },

  props: {
    tvShow: Object,
  },

  computed: {

    convertLangToCountry() {
      let language = this.tvShow.original_language;
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
          break;
        case "da":
          language = "dk";
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
  <div class="tv-shows">

    <div>{{ tvShow.name }}</div>

    <div>{{ tvShow.original_name }}</div>

    <div>{{ tvShow.original_language }}</div>
    <span class="fi" :class="'fi-' + convertLangToCountry"></span>

    <div>{{ tvShow.vote_average }}</div>

  </div>
</template>

<style lang="scss" scoped>
.tv-shows {
  width: calc(100% / 4 - 20px / 4 * 3);
}
</style>
