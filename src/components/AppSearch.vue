<script>

import { store } from "../store";

export default {

  name: "AppSearch",

  data() {
    return {

      store,

    }
  }
}
</script>

<template>
  <div id="search-container">
    <input type="text" placeholder="cerca">
    <button>Cerca</button>
  </div>
</template>

<style lang="scss" scoped></style>
