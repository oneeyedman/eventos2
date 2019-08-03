'use strict';

const movieList = document.querySelector('.movies');

const myMovies = [
  'Sleuth',
  'Dune',
  'Mulholland drive',
  'The invitation',
  'Logan\'s run'
];

/**
 * Esta función escribe en la página 
 * las películas
 *
 */
function writeMyMovies() {
  let result = '';
  for (const item of myMovies) {
    result += `
      <li class="movie">
        <div class="movie__name">${item}</div>
        <button class="movie__btn">A la consola!!</button>
      </li>
    `;
  }
  movieList.innerHTML = result;

  // Ahora que existe el html puedo buscar lo nuevo
  const buttons = document.querySelectorAll('.movie__btn');
  for (const btn of buttons) {
    btn.addEventListener('click', writeMovieName)
  }
}

function writeMovieName(event) {
  const movieName = event.currentTarget.parentElement.querySelector('.movie__name').innerHTML;

  console.log(movieName);
}

writeMyMovies();