import './style.css'

import * as utilities from './utils/helper';
import { fetchMovies } from './utils/fetch';
import { renderMovies } from './components/renderMovie';

const searchBar = document.querySelector('[data-content="movie_search"]');

const debounceSearch = utilities.debounce(async (searchValue) => {
  const movies = await fetchMovies(searchValue);
  renderMovies(movies)
  console.log(movies);
}, 800)

const movieContainer = document.querySelector('[data-content="movie_container"]');
console.log(movieContainer)

searchBar.addEventListener('input', e => {
  debounceSearch(e.target.value);
  console.log()
});





