const API_KEY = "2fd72574998afbdc647c357596875694";

const requests = {
  fetchTrending: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

  //https://api.themoviedb.org/3/movie/top_rated?api_key=2fd72574998afbdc647c357596875694&language=en-US&page=1
};

export default requests;
