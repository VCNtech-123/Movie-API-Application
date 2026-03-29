
import { createMovieCard, createSaveButton } from './movieCard.js';
import { showMovieInfoCard } from './movieInfo.js';
import { movieExist } from '../utils/helper.js'

export const renderMovies = (movies, savedMovies) => {
    const movieContainer = document.querySelector('[data-content="movie_container"]');
    movieContainer.innerHTML = '';

    movies.forEach (movie => {
        const newMovieCard = document.createElement('div');
        newMovieCard.classList.add('w-[calc(50%-0.5rem)]', 'flex', 'flex-col', 'gap-2', 'bg-secondary-bg', 'rounded-xl', 'overflow-hidden', 'relative', 'lg:w-[calc(16.66%-1rem)]', 'lg:bg-transparent');
        newMovieCard.dataset.id = movie.imdbID;
        newMovieCard.dataset.content = 'movie_card';
        newMovieCard.innerHTML = createMovieCard(movie);

        if(movieExist(savedMovies, newMovieCard.dataset.id)) {
            newMovieCard.insertAdjacentHTML('afterbegin', createSaveButton('bg-saved-bg/70'));
        }  
        else {
             newMovieCard.insertAdjacentHTML('afterbegin', createSaveButton('bg-black/70'))
        }
        movieContainer.appendChild(newMovieCard);
    })
}

export const renderInfoCard = (infoCard) => {
    const containerScreen = document.querySelector('[data-content="current_screen"]');

    const existing = document.querySelector('[data-content="movie_info"]');
    if (existing) existing.remove();

    const card = document.createElement('div');
    card.classList.add('fixed', 'inset-0', 'z-50', 'flex', 'items-center', 'justify-center', 'p-4', 'bg-black/60', 'backdrop-blur-sm');
    card.dataset.id = infoCard.imdbID;
    card.dataset.content = 'movie_info';
    card.innerHTML = showMovieInfoCard(infoCard);

    const closeBtn = card.querySelector('[data-content="x_button"]');
    if (closeBtn) {
        closeBtn.onclick = () => card.remove();
    }

    card.onclick = (e) => {
        if (e.target === card) card.remove();
    };

    containerScreen.appendChild(card);
}

export const saveStateHeader = (number) => {
    const movieContainer = document.querySelector('[data-content="movie_container"]');
    movieContainer.insertAdjacentHTML('afterbegin', `<p class="w-full block text-lg font-bold text-secondary-text">Saved ( <span class="text-primary-text">${number}</span> )</p>`)
}

export const toggleLoadingScreen = () => {
    const movieContainer = document.querySelector('[data-content="movie_container"]');
    movieContainer.innerHTML = '';
    
    const loadingElement = document.querySelector('[data-content="loading_screen"]');
    loadingElement.classList.toggle('hidden');
}

export const updateSaveCounter = (movies) => {
    const savedCounter = document.querySelector('[data-content="saved_movie"]');
    savedCounter.textContent = movies.length;
}

