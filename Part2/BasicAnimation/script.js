const btn = document.querySelector('.btn');

btn.addEventListener('click', myAnimation);

function myAnimation() {
    const box = document.querySelector('.box');
    let i = 0;

    let id = setInterval(frame, 10);

    function frame() {
        if (i === 300) {
            clearInterval(id);
        } else {
            i++;
            box.style.top = i + 'px';
            box.style.left = i + 'px';
        }
    }
}