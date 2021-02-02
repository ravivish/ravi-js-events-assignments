const element = document.querySelector('#hexvalue');
element.addEventListener('input', () => {
    const box = document.querySelector('#box');
    box.style.backgroundColor = element.value;
});
