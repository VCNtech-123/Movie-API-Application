import { toggleLoadingScreen } from '../components/renderMovie.js'


export const fetchMovies = async (searchValue) => {
    try {
        toggleLoadingScreen();
        let allMovies = [];
        let moreCard = true;
        let page = 1;
        while (moreCard && page < 5) {
            const response = await fetch(`https://www.omdbapi.com/?apikey=770599fc&s=${searchValue}&page=${page}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json(); 
            if (data.Response === "False") {
                moreCard = false;
            }
            else {
                allMovies.push(...data.Search);
                page++
            }
        }
        
        const movies = await Promise.all(allMovies.map(async (movie) => {
            const imdbResponse = await fetch(`https://www.omdbapi.com/?apikey=770599fc&i=${movie.imdbID}`);
            const movieData = await imdbResponse.json();
            return {...movie, movieData }
            }));
        
        return movies;
    } catch (error){
        console.error("Failed to fetch movies:", error);
        return [];
    }
    finally {
        toggleLoadingScreen();
    }
}
