import './style.css'

import * as utilities from './utils/helper';
import { fetchMovies } from './utils/fetch';
import { renderMovies, renderInfoCard } from './components/renderMovie';
import { showMovieInfoCard } from './components/movieInfo'

const searchBar = document.querySelector('[data-content="movie_search"]');
let movies = [];

const debounceSearch = utilities.debounce(async (searchValue) => {
  movies = await fetchMovies(searchValue);
  renderMovies(movies)
  console.log(movies);
}, 800);


searchBar.addEventListener('input', e => {
  debounceSearch(e.target.value);
  console.log(movies)
});


const header = document.querySelector('[data-content="header"]');

header.addEventListener('click', e => {
  const movieButton = e.target.closest('[data-button="movies"]');
  const seriesButton = e.target.closest('[data-button="series"]');

  if (!movieButton && !seriesButton) return;

  const movieEl = header.querySelector('[data-button="movies"]');
  const seriesEl = header.querySelector('[data-button="series"]');

  const isMovie = !!movieButton;
  const targetBtn = isMovie ? movieEl : seriesEl;
  const otherBtn = isMovie ? seriesEl : movieEl;

      movies = isMovie ? utilities.movieTypeMovie(movies) : utilities.seriesTypeMovie(movies);
      renderMovies(movies);

      targetBtn.classList.add('bg-tertiary-bg');
      otherBtn?.classList.remove('bg-tertiary-bg');
})

const movieContainer = document.querySelector('[data-content="movie_container"]');

movieContainer.addEventListener('click', e => {
  const targetCard = e.target.closest('[data-content="movie_poster"]');

    if (targetCard) {
      console.log(true)
      const infoCard = utilities.movieFinder(movies, targetCard.dataset.id);
      renderInfoCard(infoCard);
    }
})





