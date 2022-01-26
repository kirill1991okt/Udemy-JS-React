const box = document.querySelector('.box');
const btn = document.querySelector('button');

const width = box.clientWidth;
const height = box.clientHeight;

// const width1 = box.offsetWidth;
// const height1 = box.offsetHeight;

console.log(width, height);
// console.log(width1, height1);



const scroll = box.scrollHeight;

btn.addEventListener('click', () => {
    box.style.height = scroll + 'px';
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);

console.log(style);