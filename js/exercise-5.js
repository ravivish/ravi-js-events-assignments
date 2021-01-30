let element = document.querySelector('#hexvalue');
element.addEventListener('input', function (event) {
    let box = document.querySelector('.box');
    box.style.backgroundColor = element.value;
});