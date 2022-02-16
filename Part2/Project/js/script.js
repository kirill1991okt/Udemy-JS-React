window.addEventListener('DOMContentLoaded', () => {
  //Tabs
  const tabItem = document.querySelectorAll('.tabheader__item'),
    tabContent = document.querySelectorAll('.tabcontent'),
    tabItems = document.querySelector('.tabheader__items');

  function hideContent() {
    tabContent.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabItem.forEach((item) => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showContent(i = 0) {
    tabContent[i].classList.add('show', 'fade');
    tabContent[i].classList.remove('hide');
    tabItem[i].classList.add('tabheader__item_active');
  }

  hideContent();
  showContent();

  tabItems.addEventListener('click', (event) => {
    const target = event.target;
    console.log(target);

    if (target && target.className == 'tabheader__item') {
      tabItem.forEach((item, index) => {
        if (target == item) {
          hideContent();
          showContent(index);
        }
      });
    }
  });

  // Timer

  const deadline = Date.parse(new Date()) + (10 * 24 * 60 * 60 * 1000); // можем указывать количество дней до конца акции

  function getTimeRemaining(endTime) {
    let t = endTime - Date.parse(new Date());

    const days = Math.floor((t / (1000 * 60 * 60 * 24)));
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / (1000 * 60)) % 60);
    const seconds = Math.floor((t / 1000) % 60);


    return {
      total: t,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function addZero(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setTimerOnPage(selector, endTime) {

    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds');

    countTime();

    let timerID = setInterval(countTime, 1000);


    function countTime() {
      let newTimer = getTimeRemaining(endTime);

      days.innerHTML = addZero(newTimer.days);
      hours.innerHTML = addZero(newTimer.hours);
      minutes.innerHTML = addZero(newTimer.minutes);
      seconds.innerHTML = addZero(newTimer.seconds);

      if (newTimer.total <= 0) {
        clearInterval(timerID);
      }
    }
  }

  setTimerOnPage('.timer', deadline);

  // Модальное окно

  const modalBtn = document.querySelectorAll('[data-modal]'),
    modalClose = document.querySelector('[data-close]'),
    modal = document.querySelector('.modal');

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearTimeout(modalTimerId);
  }

  modalBtn.forEach(item => {
    item.addEventListener('click', openModal);
  });

  function closeModalWindow() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }


  modalClose.addEventListener('click', closeModalWindow);

  modal.addEventListener('click', (e) => {
    // console.log(e);
    if (e.target === modal) {
      closeModalWindow();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModalWindow();
    }
  });

  const modalTimerId = setTimeout(openModal, 7000);

  function openModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', openModalByScroll);
    }

  }

  window.addEventListener('scroll', openModalByScroll);


  // Создание табов динамически

  class MenuCards {
    constructor(src, alt, title, descr, price, parenElement, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parenElement = document.querySelector(parenElement);
      this.classes = classes;
      this.transfer = 2.6;

    }

    changeToBYN() {
      return this.price * this.transfer;
    }

    render() {
      const div = document.createElement('div');

      if (this.classes.length === 0) {
        this.classes = 'menu__item';
        div.classList.add(this.classes);
      } else {
        this.classes.forEach(classNames => div.classList.add(classNames));
      }
      div.innerHTML = ` 
          <img src=${this.src} alt=${this.alt} />
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">
            ${this.descr}
          </div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.changeToBYN()}</span> руб/день</div>
          </div>
      `;
      this.parenElement.append(div);
    }
  }

  new MenuCards(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    10,
    '.menu .container',

  ).render();

  new MenuCards(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки,но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    20,
    '.menu .container',
  ).render();

  new MenuCards(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля,овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    15,
    '.menu .container',
  ).render();

});