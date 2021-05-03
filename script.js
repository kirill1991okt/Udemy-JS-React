/*

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"

*/

'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilm: function () {
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
    },
    detectPersonLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if (genre != null && genre != '') {
                personalMovieDB.genres[i] = genre;
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, index) => console.log(`Любимый жанр № ${index + 1} - это ${item}`));
    },

};