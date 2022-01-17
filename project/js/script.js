/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту 

*/

'use strict';

document.addEventListener('DOMContentLoaded', () => {

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
    const promoBg = document.querySelector('.promo__bg');
    const promoGenre = promoBg.querySelector('.promo__genre');
    const promoInteractiveList = document.querySelector('.promo__interactive-list');

    const addForm = document.querySelector('.add');
    const addInput = addForm.querySelector('.adding__input');
    const addCheck = addForm.querySelector('[type="checkbox"]');

    function removeElement(el) {
        el.forEach(item => item.remove());
    }


    function someChanges() {

        promoBg.style.backgroundImage = 'url("img/bg.jpg")';

        promoGenre.textContent = 'ДРАМА';
    }

    function sortArr(arr) {
        arr.sort();
    }

    function createMovieList(movie, parent) {


        parent.innerHTML = '';

        sortArr(movie);

        movie.forEach((film, index) => {
            parent.innerHTML += `<li class="promo__interactive-item">
            ${index + 1} ${film}<div class="delete"></div></li>`;
        });



        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movie.splice(i, 1);

                createMovieList(movie, parent);

            });

        });

    }


    /*

    / для отработки задания, сделал еще такой вариант

    promoInteractiveList.remove();

    const ul = document.createElement('ul');

    ul.classList.add('promo__interactive-list');

    promoTitle.after(ul);
    */


    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let inputValue = addInput.value;
        let checked = addCheck.checked;

        if (inputValue) {

            if (inputValue.length > 21) {
                inputValue = `${inputValue.slice(0, 21)}...`;
            }

            movieDB.movies.push(inputValue);

            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, promoInteractiveList);

        } else {
            alert('введите название фильма!!!');
        }

        if (checked && inputValue) {
            console.log("Добавляем любимый фильм");
        }

        e.target.reset();

    });

    someChanges();
    removeElement(adv);
    createMovieList(movieDB.movies, promoInteractiveList);

});