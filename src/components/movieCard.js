

export const createMovieCard = (movie) => {
    return ` <img src="${movie.Poster}" alt="" class="max-h-60 min-h-60 object-cover rounded-t-xl lg:max-h-68 lg:min-h-68 lg:rounded-xl transition-all duration-300 ease-in-out lg:hover:scale-110" data-content="movie_poster">
                  <div class="px-3 pb-3 lg:p-1">
                    <h1 class="text-primary-text text-sm lg:text-base lg:font-bold lg:min-h-14">${movie.Title}</h1>
                    <div class="flex justify-between">
                      <p class="text-xs lg:text-xs">${movie.Year}</p>
                      <div class="flex items-center gap-1">
                        <img src="src/assets/star.svg" alt="star" class="w-4">
                        <p class="text-primary-text text-xs">${movie.movieData.imdbRating}</p>
                      </div>
                    </div>
                  </div>`
}

export const createSaveButton = (bgValue) => {
        return `<button class="absolute top-2 right-2 z-10 ${bgValue} text-white text-xs p-1 rounded-full backdrop-blur-sm hover:bg-black/85 transition" data-content="save_button">
          <img src="src/assets/save.svg" alt="" class="w-4 invert lg:w-6">
        </button>`
}