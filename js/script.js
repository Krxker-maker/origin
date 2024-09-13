"use strict";
const numberofFilms = +prompt('Сколько фильмов вы посмотрели?',"");
const personalMovieDB = {
count: numberofFilms,
movies: {},
actors: {},
genres:[],
privat:false,
};

const a = prompt('Один из последних просмотреных фильмов?',''),
      b =  prompt('Насколько оцените его?',''),
      c = prompt('Один из последних просмотреных фильмов?',''),
      d = prompt('Насколько оцените его?','');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;
      console.log(personalMovieDB);