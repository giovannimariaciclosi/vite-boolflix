import { reactive } from "vue";

export const store = reactive({
  movies: [],
  tvShows: [],

  APIbaseSearchMovie: "https://api.themoviedb.org/3/search/movie?",
  APIbaseSearchTvShow: "https://api.themoviedb.org/3/search/tv?",

  APIimageBase: "https://image.tmdb.org/t/p/",
  APIimageSize: "w342/",

  APIkey: "api_key=1ef1a2793ae254c50f336ba47aa2bac5&",

  languageIT: "language=it-IT&",

  safeForWork: "include_adult=false&",

  isLoading: true,

  APIsearchQuery: "query=",

  //inizializzo una stringa per prendere il valore dell'input che inserirà l'utente
  MovieNameSearch: "",

  links: [
    {
      text: "Home",
      active: true,
    },
    {
      text: "Film",
      active: false,
    },
    {
      text: "Serie TV",
      active: false,
    },
  ],
});
