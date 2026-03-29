
import { createMovieCard } from './movieCard.js';
import { showMovieInfoCard } from './movieInfo.js';

export const renderMovies = (movies) => {
    const movieContainer = document.querySelector('[data-content="movie_container"]');

    let cardHolder = '';

    movies.forEach (movie => {
        cardHolder += createMovieCard(movie);
    })
    
    movieContainer.innerHTML = cardHolder;
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

export const toggleLoadingScreen = () => {
    const loadingElement = document.querySelector('[data-content="loading_screen"]');
    loadingElement.classList.toggle('hidden');
}