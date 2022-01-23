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

});