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
  <div id="main-container">
    <div id="header-container">
      <div class="logo">
        <h1>Boolflix</h1>
      </div>
      <div id="search-container">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input v-model="store.MovieNameSearch" type="text" placeholder="Cerca per titolo"
          @keyup.enter="$emit('userSearch')">
        <button @click="$emit('userSearch')">Cerca</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#main-container {
  width: 100%;
  position: fixed;
  z-index: 3;
  background-color: #141414ed;
}

#header-container {
  margin: 0 auto;
  max-width: 1440px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 50px;

  .logo {
    cursor: pointer;
    color: #e50914;
  }

  #search-container {
    position: relative;

    display: flex;
    gap: 10px;

    input {
      background-color: #141414;
      border: transparent;
      height: 30px;
      padding-left: 40px;
      border: .1px solid white;
      cursor: pointer;
    }

    input:focus-visible {
      outline: 1px solid white;
      border-radius: 0;
      color: white;
    }

    input::placeholder {
      color: grey;
    }

    .fa-solid {
      position: absolute;
      z-index: 2;
      left: 13px;
      top: 7.4px;
      color: white;
    }

    button {
      background-color: #141414;
      height: 30px;
      padding: 0 2em;
      border: 1px solid white;
      cursor: pointer;
    }

    button:hover {
      background-color: white;
      color: black;
    }

  }


}
</style>
