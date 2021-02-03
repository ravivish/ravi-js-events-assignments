document.querySelector('#btncounter').value = 0;
const element = document.querySelector('#btncounter');
window.addEventListener('click', () => {
    let a = parseInt(element.value, 10);
    a += 1;
    element.value = a;
});
