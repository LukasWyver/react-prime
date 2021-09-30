import axios from "axios";

// URL FILMES EM CARTAZ:
// https://api.themoviedb.org/3
// /movie/now_playing
// ?api_key=38a761ce7cec2c62ad363365e59e4407
// &language=pt-BR
// &page=1

export const key = "38a761ce7cec2c62ad363365e59e4407";

const api = axios.create({
  baseUrl: "https://api.themoviedb.org/3",
});

export default api;
