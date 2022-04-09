'use strict';
const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели','');
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},  
    genres: [],
    privat: false
};

const a = prompt('один из последних просмотренных фильмов',''),
      b = prompt('на сколько оцените фильм',''),
      c = prompt('один из последних просмотренных фильмов',''),
      d = prompt('на сколько оцените фильм','');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;
console.log(personalMovieDb);