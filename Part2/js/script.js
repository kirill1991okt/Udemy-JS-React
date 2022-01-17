const tabItem = document.querySelectorAll('.tabheader__item'),
  tabContent = document.querySelectorAll('.tabcontent'),
  tabItems = document.querySelector('.tabheader__items');

function hideContent() {
  tabContent.forEach((item) => {
    item.classList.add('hide');
    item.classList.remove('show');
  });

  tabItem.forEach((item) => {
    item.classList.remove('tabheader__item_active');
  });
}

function showContent(i = 0) {
  tabContent[i].classList.add('show', 'fade');
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