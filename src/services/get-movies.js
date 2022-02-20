import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const KEY_V3 = '9eab4199b01913b6a81b6702a89a7ff0';

export async function getPopularMovies(page) {
  const response = await axios.get(
    `/trending/all/day?page=${page}&api_key=${KEY_V3}`
  );

  return response.data;
}

export async function getMovieByName(movieName, page) {
  const response = await axios.get(
    `/search/movie?query=${movieName}&api_key=${KEY_V3}&page=${page}&include_adult=true`
  );

  return response.data;
}

export async function getMovieDetails(movieId) {
  const response = await axios.get(`/movie/${movieId}?api_key=${KEY_V3}`);

  return response.data;
}

export async function getMovieCast(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY_V3}`
  );

  return response.data;
}

export async function getMovieReviews(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${KEY_V3}`
  );

  return response.data;
}
