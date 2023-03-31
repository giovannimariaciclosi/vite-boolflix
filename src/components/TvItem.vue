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

  methods: {

    flagIcons() {

      let language = this.tvShow.original_language;
      console.log(language)

      if (language == "en") {
        language = "gb";
      } else if (language == "") {
        language = "xx";

        return language;
      }
    }

  },
}

</script>

<template>
  <div class="tv-shows">

    <div>{{ tvShow.name }}</div>

    <div>{{ tvShow.original_name }}</div>

    <div>{{ tvShow.original_language }}</div>
    <span class="fi" :class="`fi-${flagIcons()}`"></span>
    <span class="fi" :class="'fi-' + tvShow.original_language"></span>

    <div>{{ tvShow.vote_average }}</div>

  </div>
</template>

<style lang="scss" scoped>
.tv-shows {
  width: calc(100% / 4 - 20px / 4 * 3);
}
</style>
