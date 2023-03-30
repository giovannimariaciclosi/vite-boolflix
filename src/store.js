import { reactive } from "vue";

export const store = reactive({
  movies: [],

  APIbaseSearchMovie: "https://api.themoviedb.org/3/search/movie?",

  APIkey: "api_key=1ef1a2793ae254c50f336ba47aa2bac5&",

  languageIT: "language=it-IT&",

  safeForWork: "include_adult=false&",

  isLoading: true,

  APIsearchQuery: "query=",

  MovieNameSearch: "",
});
