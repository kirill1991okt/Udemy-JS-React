const inputRub = document.querySelector('#rub'),
  inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'js/current.json');
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send();

  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.response);
      console.log(data.current.usd);
      inputUsd.value = (inputRub.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = 'Что-то пошло не так...';
    }
  });
});
