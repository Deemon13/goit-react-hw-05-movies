import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const KEY_V3 = '9eab4199b01913b6a81b6702a89a7ff0';
// const KEY_V4 =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWFiNDE5OWIwMTkxM2I2YTgxYjY3MDJhODlhN2ZmMCIsInN1YiI6IjVlMDFmY2IxZDFhODkzMDAxNDhlNmQ4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHE4H3CqrQLS2go2yduVI0CCNdmqAt4fAIpUHWr9wa0';

//trending
//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
export async function getPopularMovies(page) {
  const response = await axios.get(
    `/trending/all/day?page=${page}&api_key=${KEY_V3}`
  );
  //   console.log('response:', response);
  //   console.log('response.data:', response.data);

  return response.data;
}
