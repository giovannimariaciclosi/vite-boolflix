<script>
import AppHeader from './components/AppHeader.vue';

import { store } from "./store.js";
import axios from "axios";


export default {
  data() {
    return {

      store,

    }
  },

  components: {
    AppHeader,
  },

  created() {

  },

  methods: {

  },

}


</script>

<template>
  <AppHeader></AppHeader>
</template>

<style lang="scss" scoped></style>
