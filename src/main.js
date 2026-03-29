import './style.css'

import * as utilities from './utils/helper';
import * as file from './utils/saveData'
import { fetchMovies } from './utils/fetch';
import { renderMovies, renderInfoCard, updateSaveCounter, saveStateHeader } from './components/renderMovie';

const searchBar = document.querySelector('[data-content="movie_search"]');
let savedMovies = file.loadData('SavedMovies');
let movies = savedMovies;

renderMovies(savedMovies, savedMovies);
saveStateHeader(savedMovies.length);
updateSaveCounter(savedMovies);

const debounceSearch = utilities.debounce(async (searchValue) => {
  movies = await fetchMovies(searchValue);
  renderMovies(movies, savedMovies)
}, 800);

searchBar.addEventListener('input', e => {
  debounceSearch(e.target.value);
});

const header = document.querySelector('[data-content="header"]');

header.addEventListener('click', e => {
  const movieButton = e.target.closest('[data-button="movies"]');
  const seriesButton = e.target.closest('[data-button="series"]');

  if (!movieButton && !seriesButton) return;
  e.preventDefault();

  const movieEl = header.querySelector('[data-button="movies"]');
  const seriesEl = header.querySelector('[data-button="series"]');

  const isMovie = !!movieButton;
  const targetBtn = isMovie ? movieEl : seriesEl;
  const otherBtn = isMovie ? seriesEl : movieEl;

      const filteredArray = isMovie ? utilities.movieTypeMovie(movies) : utilities.seriesTypeMovie(movies);
      renderMovies(filteredArray, savedMovies);

      targetBtn.classList.add('bg-tertiary-bg');
      otherBtn?.classList.remove('bg-tertiary-bg');

});

const movieContainer = document.querySelector('[data-content="movie_container"]');

movieContainer.addEventListener('click', e => {
  const targetCard = e.target.closest('[data-content="movie_card"]');
  const targetSaveButton = e.target.closest('[data-content="save_button"]');

    if (targetSaveButton) {
      const saved = 'bg-saved-bg/70';
      const notSaved = 'bg-black/70';

        
      if (utilities.movieExist(savedMovies, targetCard.dataset.id)){
        const cardToRemove = utilities.movieFinderIndex(savedMovies, targetCard.dataset.id);
        savedMovies.splice(cardToRemove, 1);
        renderMovies(movies, savedMovies);
        updateSaveCounter(savedMovies);
      }
      else {
        savedMovies.push(utilities.movieFinder(movies, targetCard.dataset.id));
        renderMovies(movies, savedMovies);
        updateSaveCounter(savedMovies);
      }
      
      targetSaveButton.classList.toggle(saved);
      targetSaveButton.classList.toggle(notSaved);
      
      file.saveData('SavedMovies', savedMovies);
      return
    }

    if (targetCard) {
      const infoCard = utilities.movieFinder(movies, targetCard.dataset.id);
      renderInfoCard(infoCard);
    }
});

const viewSavedButton = document.querySelector('[data-button="watch_list"]');

viewSavedButton.addEventListener('click', (e) => {
  movies = savedMovies
  renderMovies(savedMovies, savedMovies);
  saveStateHeader(savedMovies.length);
});



