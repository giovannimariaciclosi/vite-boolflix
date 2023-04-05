<script>

import { store } from "../store";


export default {

  name: "AppHeader",

  data() {
    return {

      store,

    };
  },



  methods: {
    changeActive(index) {
      for (let i = 0; i < this.store.links.length; i++) {
        this.store.links[i].active = false;
      };

      this.store.links[index].active = true;
    },

  },

  emits: ['userSearch', 'userSelect', 'filterGenres'],


}
</script>

<template>
  <div id="main-container">
    <div id="header-container">
      <div id="header-left">
        <h1 @click="$emit('userSelect'), changeActive(0)" id="logo">Boolflix</h1>
        <ul id="link">
          <!-- <li @click="$emit('home'), changeActive()" :class="store.links[0].active ? 'active' : ''">{{ store.links[0].text }}</li>
                                                            <li @click="$emit('tvShows')" :class="store.links[2].active ? 'active' : ''">{{ store.links[2].text }}</li> -->

          <li v-for="(link, index) in store.links" :class="store.links[index].active ? 'active' : ''"
            @click="changeActive(index), $emit('userSelect')">{{ link.text }}</li>
        </ul>
      </div>
      <div id="header-right">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input v-model="store.MovieNameSearch" type="text" placeholder="Cerca per titolo"
          @keyup.enter="$emit('userSearch')">
        <button @click="$emit('userSearch')">Cerca</button>

        <select @click="$emit('filterGenres')" v-model="store.selectedGenre" class="genre-selection" name="genre"
          id="genre">
          <option v-for="genre in store.moviesGenres" :value="genre.id">{{ genre.name }}</option>
        </select>
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

  padding: 10px 10px;

  #header-left {

    display: flex;
    align-items: center;
    gap: 50px;

    #logo {
      cursor: pointer;
      color: #e50914;
    }

    #link {
      list-style-type: none;
      display: flex;
      gap: 20px;
      cursor: pointer;

      li {
        transition: color .3s;
      }

      li:hover {
        color: grey;
      }

      li.active {
        font-weight: bold;
      }
    }
  }

  #header-right {
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

      &:focus-visible {
        outline: 1px solid white;
        border-radius: 0;
        color: white;
      }

      &::placeholder {
        color: grey;
      }
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

      &:hover {
        background-color: white;
        color: black;
      }

    }

    .genre-selection {
      background-color: #141414;
      border: transparent;
      height: 30px;
      border: .1px solid white;
      cursor: pointer;

      &:focus-visible {
        outline: 1px solid white;
        border-radius: 0;
        color: white;
      }
    }
  }
}
</style>
