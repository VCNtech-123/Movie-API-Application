import './style.css'

import * as utilities from './utils/helper';
import { fetchMovies } from './utils/fetch';
import { renderMovies } from './components/renderMovie';

const searchBar = document.querySelector('[data-content="movie_search"]');

const debounceSearch = utilities.debounce(async (searchValue) => {
  const movies = await fetchMovies((`http://www.omdbapi.com/?apikey=cdee90bf&s=${searchValue}`));
  console.log(movies.Search);
  renderMovies(movies.Search);
}, 800)

const movieContainer = document.querySelector('[data-content="movie_container"]');
console.log(movieContainer)

searchBar.addEventListener('input', e => {
  debounceSearch(e.target.value);
});





