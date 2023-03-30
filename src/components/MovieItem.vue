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

}

</script>

<template>
  <div class="movie">

    <div>{{ movie.title }}</div>

    <div>{{ movie.original_title }}</div>

    <div>{{ movie.original_language }}</div>
    <span class="fi" :class="'fi-' + movie.original_language"></span>

    <div>{{ movie.vote_average }}</div>

  </div>
</template>

<style lang="scss" scoped>
.movie {
  width: calc(100% / 4 - 20px / 4 * 3);
}
</style>
