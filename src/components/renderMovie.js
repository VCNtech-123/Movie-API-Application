
import { createMovieCard } from './movieCard.js'

export const renderMovies = (movies) => {
    const movieContainer = document.querySelector('[data-content="movie_container"]');

    let cardHolder = '';

    movies.forEach (movie => {
        cardHolder += createMovieCard(movie);
    })
    
    movieContainer.innerHTML = cardHolder;
}

export const toggleLoadingScreen = () => {
    const loadingElement = document.querySelector('[data-content="loading_screen"]');
    loadingElement.classList.toggle('hidden');
}