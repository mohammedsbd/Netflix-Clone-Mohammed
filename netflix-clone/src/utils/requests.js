const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?with_genres=28&api_key=${API_KEY}`,
  fetchComedyMovies: `/discover/movie?with_genres=16&api_key=${API_KEY}`,
  fetchHorrorMovies: `/discover/movie?with_genres=27&api_key=${API_KEY}`,
  fetchRomanceMovies: `/discover/movie?with_genres=10749&api_key=${API_KEY}`,
  fetchDocumentaries: `/discover/movie?with_genres=16&api_key=${API_KEY}`,
  fetchTvShows: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1'`,
};

export default requests;