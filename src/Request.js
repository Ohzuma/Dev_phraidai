const key = "a86dfbf17c55dc2d307e30995dabae8f";
const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-Us&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-Us&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-Us&page=1`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?query=Horror&api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-Us&page=1`,
};

export default requests;
