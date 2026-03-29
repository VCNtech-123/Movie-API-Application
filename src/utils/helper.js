

export const debounce = (func, delay) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay)
    }
}

export const movieTypeMovie = (movies) => {
    return movies.filter( movie => movie.Type.toLowerCase() === "movie");
}

export const seriesTypeMovie = (movies) => {
    return movies.filter( movie => movie.Type.toLowerCase() === "series");
}

export const movieFinder = (movies, id) => {
    return movies.find(movie => movie.imdbID === id);
}

export const movieFinderIndex = (movies, id) => {
    return movies.findIndex(movie => movie.imdbID === id);
}

export const movieExist = (savedMovies, movieId) => {
    return savedMovies.some(movie => movie.imdbID === movieId);
}
