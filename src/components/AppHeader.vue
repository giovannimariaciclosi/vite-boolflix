<script>
import AppSearch from './AppSearch.vue';

import { store } from "../store";


export default {

  name: "AppHeader",

  data() {
    return {

      store,

    };
  },

  components: { AppSearch }
}
</script>

<template>
  <div id="header-container">
    <div>Boolflix</div>
    <AppSearch></AppSearch>
  </div>
</template>

<style lang="scss" scoped>
#header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1em;
}
</style>
