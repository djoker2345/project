"use strict";

const numberOfFilms = prompt ('Сколько фильмов ты посмотрел' , '' );

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganers: [],
    privet: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Последний просмотреный фильм' , ''),
          b = prompt('На сколько ты его оценишь?' , ''); 

    
    if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
    personalMovieDB.movies[a] = b ;
    console.log("done");
    } else {
    console.log("error");
    i--;
    }
}

if (personalMovieDB.count < 10)  {
    console.log('Просмотрено довольно мало');
} else if (personalMovieDB.count >10 && personalMovieDB <30) {
    console.log('Вы прикрасный зритель');
} else if(personalMovieDB.count >= 30 ) {
    console.log ('Вы киноман');
} else {
    console.log('ошибка');
} 
console.log(personalMovieDB);