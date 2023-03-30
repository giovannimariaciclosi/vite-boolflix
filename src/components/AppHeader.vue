<script>

import { store } from "../store";


export default {

  name: "AppHeader",

  data() {
    return {

      store,

    };
  },

  emits: ['userSearch'],


}
</script>

<template>
  <div id="header-container">
    <div>Boolflix</div>
    <div id="search-container">
      <input v-model="store.MovieNameSearch" type="text" placeholder="cerca" @keyup.enter="$emit('userSearch')">
      <button @click="$emit('userSearch')">Cerca</button>
    </div>
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
