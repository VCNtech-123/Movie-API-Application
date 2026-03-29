# CineScene 

CineScene is a movie search app I built with JavaScript, Tailwind CSS, and Vite. The app lets users search for movies from the OMDb API, filter results by type, open a details view, and save movies to a personal watchlist using localStorage. I wanted this project to feel more modern than my earlier apps, so I used Vite for the setup and Tailwind for styling instead of writing everything in plain CSS.

This project helped me understand a lot of things that felt confusing at first, especially working with Vite, project structure, and deployment. I also practiced debouncing for the search input, handling multiple API requests, and managing saved movie state across renders. One of the more frustrating parts was realizing that search results and saved movies needed to be treated as separate pieces of state, otherwise filtering and rendering started behaving in weird ways. I also learned how GitHub Actions works when deploying a Vite app to GitHub Pages.

Overall, this project gave me a better feel for how a more modern frontend workflow works compared to plain HTML, CSS, and JavaScript projects. It was also my first time using Tailwind CSS in a real app, so it became a good bridge between vanilla frontend practice and more tool-based development.

## Features

- Search movies using the OMDb API
- Debounced search input
- Filter by movie or series
- View movie details in a modal
- Save movies to a watchlist
- Persist saved movies with localStorage
- Responsive UI built with Tailwind CSS

## Built With

- HTML
- Tailwind CSS
- JavaScript
- Vite
- OMDb API

## Live Demo

[View Live](https://vcntech-123.github.io/Movie-API-Application/)

## Author

**John Francis Vecina**
