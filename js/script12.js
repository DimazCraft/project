"use strict";

//1 задание
const numberOfMovies = prompt("Сколько фильмов ты посмотерл?", "");
console.log(numberOfMovies);

//2 задание
const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//3 задание 
const film1 = prompt("Назовите один из последних просмотреных фильмов?", ""), 
    rank1 = prompt("На сколько его оцените?", ""), 
    film2 = prompt("Назовите один из последних просмотреных фильмов?", ""), 
    rank2 = prompt("На сколько его оцените?", ""); 

personalMovieDB.movies[film1] = rank1; 
personalMovieDB.movies[film2] = rank2; 

console.log(personalMovieDB);