/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;

    function start () {
        numberOfFilms = +prompt ('Сколько фильмов ты посмотрел' , '' );
   
        while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt ('Сколько фильмов ты посмотрел' , '' );
        }
    }
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

function rememberMyFilms () {
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
}

rememberMyFilms ();

function detectPersonaLevel () {
    if (personalMovieDB.count < 10)  {
        console.log('Просмотрено довольно мало');
    } else if (personalMovieDB.count >10 && personalMovieDB <30) {
        console.log('Вы прикрасный зритель');
    } else if(personalMovieDB.count >= 30 ) {
        console.log ('Вы киноман');
    } else {
        console.log('ошибка');
    }     
}
detectPersonaLevel ();

function showMyDB (hideen) {
    if (!hideen) {
        console.log(personalMovieDB)
    }
}
showMyDB (personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
       const geners = prompt(`Ваш любимый жанр под номером ${i}`) 
       personalMovieDB.geners[i - 1] = geners
    }
}
writeYourGenres ();