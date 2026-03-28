import { toggleLoadingScreen } from '../components/renderMovie.js'


export const fetchMovies = async (movieUrl) => {

    try {
        toggleLoadingScreen();
        const response = await fetch(movieUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

         const data = await response.json();
         toggleLoadingScreen();
        return data;
    } catch (e){
        console.error("Failed to fetch movies:", error);
        return null;
    }
    
};