const baseURL = import.meta.env.BASE_URL;

export const showMovieInfoCard = (movie) => {
    return `
            <div class="relative bg-secondary-bg flex flex-col w-full max-w-lg md:max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-white/5 animate-in fade-in zoom-in duration-300">
              <button class="absolute top-4 right-4 z-50 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full transition-all border border-white/10 group" data-content="x_button">
                <div class="relative w-5 h-5 flex items-center justify-center">
                  <div class="absolute w-5 bg-white h-[1.5px] rotate-45 group-hover:rotate-90 transition-transform"></div>
                  <div class="absolute w-5 bg-white h-[1.5px] -rotate-45 group-hover:rotate-0 transition-transform"></div>
                </div>
              </button>
              <div class="relative h-48 md:h-64 overflow-hidden">
                <img src="${movie.Poster}" alt="Avengers" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-secondary-bg via-transparent to-transparent"></div>
              </div>
              <div class="p-6 -mt-12 relative z-10 flex flex-col gap-4">
                <div class="flex items-end justify-between gap-4">
                  <div>
                    <h2 class="text-3xl font-extrabold text-primary-text tracking-tight">${movie.Title}</h2>
                    <div class="flex items-center gap-2 mt-1">
                      
                       ${movie.movieData.Genre.split(', ').map((genres) => {
                        return `<span class="px-2 py-0.5 bg-primary-text/10 text-primary-text text-[10px] font-bold uppercase rounded border border-primary-text/20">${genres}</span>`
                       }).join('')} 
                      
                    </div>
                  </div>  
                  <div class="flex flex-col items-end">
                    <div class="flex justify-center items-center gap-1.5 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
                      <img src="${baseURL}assets/star.svg" alt="star" class="w-4">
                      <p class="text-yellow-500 font-bold text-sm">${movie.movieData.imdbRating}</p>
                    </div>
                    <p class="text-[10px] text-primary-text/40 mt-1 uppercase tracking-widest">IMDb Rating</p>
                  </div>
                </div>
                <div class="space-y-2">
                  <h3 class="text-xs font-bold uppercase tracking-widest text-primary-text/50">Synopsis</h3>
                  <p class="text-sm text-primary-text/80 leading-relaxed line-clamp-4">
                    ${movie.movieData.Plot}
                  </p>
                </div>
                <div class="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div>
                    <p class="text-[10px] font-bold uppercase text-primary-text/40">Director</p>
                    <p class="text-xs text-primary-text">${movie.movieData.Director}</p>
                  </div>
                  <div>
                    <p class="text-[10px] font-bold uppercase text-primary-text/40">Runtime</p>
                    <p class="text-xs text-primary-text">${movie.movieData.Runtime}</p>
                  </div>
                </div>
              </div>
            </div>
          `
}