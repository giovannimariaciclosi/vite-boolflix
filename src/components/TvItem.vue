<script>

export default {

  name: "TvItem",

  data() {
    return {
    };
  },

  props: {
    tvShow: Object,
  },

}

</script>

<template>
  <div class="tv-shows">

    <div>{{ tvShow.name }}</div>

    <div>{{ tvShow.original_name }}</div>

    <div>{{ tvShow.original_language }}</div>

    <div>{{ tvShow.vote_average }}</div>

  </div>
</template>

<style lang="scss" scoped>
.tv-shows {
  width: calc(100% / 4 - 20px / 4 * 3);
}
</style>
