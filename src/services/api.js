import axios from "axios";

//URL: https://api.themoviedb.org/3/
//movie/now_playing?api_key=436c1fbd74faa58d39ef724702ed9ee1&language=pt-BR&page=1

export const key = '38a761ce7cec2c62ad363365e59e4407';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default api;