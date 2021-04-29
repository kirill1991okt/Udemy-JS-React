/*

1) Первую часть задания повторить по уроку


2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы


3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно

*/

'use strict';



let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let lastFilm1;
// let rate1;

// do{
//     lastFilm1 = prompt('Один из последних просмотренных фильмов?', '');
//     rate1 = +prompt('На сколько оцените его?', '');

// } while(lastFilm1 == null || lastFilm1 == '' || lastFilm1.length > 50 || rate1 == null || rate1 == '');

// personalMovieDB.movies[lastFilm1] = rate1;


function rememberMyFilm() {
    for (let i = 0; i < 2; i++) {
        let lastFilm1 = prompt('Один из последних просмотренных фильмов?', '');
        let rate1 = +prompt('На сколько оцените его?', '');

        if (lastFilm1 == null || lastFilm1 == '' || lastFilm1.length > 50 || rate1 == null || rate1 == '') {
            i--;
            console.log('error');
        } else {
            personalMovieDB.movies[lastFilm1] = rate1;
        }
    }
}

// rememberMyFilm();

function detectPersonLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }

}

// detectPersonLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}

writeYourGenres();