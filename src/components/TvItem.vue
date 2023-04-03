<script>

import { store } from "../store";

import "../../node_modules/flag-icons/css/flag-icons.min.css";

export default {

  name: "TvItem",

  data() {
    return {

      store,

    };
  },

  props: {
    tvShow: Object,
  },

  computed: {
    // converto la lingua nell'iniziale del paese corrispondente per inserire le icone della bandiera
    convertLangToCountry() {
      let language = this.tvShow.original_language;

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
        case "te":
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
    },

    // costruisco il path per l'immagine di copertina della serie tv
    getTvShowImagePath() {

      let imagePath = this.store.APIimageBase + this.store.APIimageSize + this.tvShow.poster_path;

      // nel caso in cui non fosse presente una copertina, prendo quella di Pulp Fiction
      if (this.tvShow.poster_path == null) {
        return "https://image.tmdb.org/t/p/w342/9p10J9Xp7MuaVac56g8BwAuXEsA.jpg";
      };
      return imagePath;

    },

    // prendo il voto della serie (valore fino a 10) e lo trasformo in un numero da 1 a 5
    getTvShowRating() {

      let tvShowRating = Math.ceil(Math.floor(this.tvShow.vote_average) / 2);

      if (tvShowRating == 0) {
        tvShowRating = 1;

        return tvShowRating;
      }


      return tvShowRating;
    },
  },

}

</script>

<template>
  <div class="tv-show">

    <img class="tv-show-poster" :src="getTvShowImagePath" alt="Tv Show Poster Image">

    <div class="tv-show-info">
      <div class="title"><strong>Titolo: </strong>{{ tvShow.name }}</div>

      <div class="original-title"><strong>Titolo Originale: </strong>{{ tvShow.original_name }}</div>

      <span class="fi" :class="'fi-' + convertLangToCountry"></span>

      <div class="rating">
        <strong>Voto: </strong>
        <i v-for="star in getTvShowRating" class="fa-solid fa-star"></i>
        <i v-for="star in (5 - getTvShowRating)" class="fa-regular fa-star"></i>
      </div>

      <div class="overview"><strong>Descrizione: </strong><span>{{ tvShow.overview }}</span></div>

    </div>


  </div>
</template>

<style lang="scss" scoped>
.tv-show:hover .tv-show-poster {
  opacity: 0;
  transition: opacity .3s;
}

.tv-show:hover .tv-show-info {
  opacity: 1;
}

.tv-show {
  position: relative;

  width: calc(100% / 4 - 20px / 4 * 3);
  display: flex;
  flex-direction: column;

  height: 513px;
  cursor: pointer;

  overflow: hidden;

  .tv-show-poster {
    border: 1px solid white;
    height: 100%;
    width: 100%;
  }

  .tv-show-info {
    padding: 2em;
    position: absolute;
    opacity: 0;
    transition: opacity .3s;

    height: 100%;
    width: 100%;
    border: 1px solid white;

    .rating {
      padding-bottom: 1em;
    }

    .overview {
      line-height: 18px;

      span {
        font-size: .8em;
      }
    }
  }
}
</style>
