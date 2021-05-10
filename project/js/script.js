/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img');
const img = document.getElementsByTagName('img');
const promoBg = document.querySelector('.promo__bg');
const promoGenre = promoBg.querySelector('.promo__genre');
const promoInteractiveList = document.querySelector('.promo__interactive-list');
const promoTitle = document.querySelector('.promo__interactive-title');

adv.forEach(item => item.remove());

promoBg.style.backgroundImage = 'url("img/bg.jpg")';

promoGenre.textContent = 'ДРАМА';

promoInteractiveList.innerHTML = '';


/*

/ для отработки задания, сделал еще такой вариант

promoInteractiveList.remove();

const ul = document.createElement('ul');

ul.classList.add('promo__interactive-list');

promoTitle.after(ul);
*/

movieDB.movies.sort();

movieDB.movies.forEach((film, index) => {
    promoInteractiveList.innerHTML += `<li class="promo__interactive-item">
    ${index + 1} ${film}<div class="delete"></div></li>`;
});