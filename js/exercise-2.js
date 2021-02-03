function increaseCounter() {
    const element = document.querySelector('#counter');
    let num = parseInt(element.value, 10);
    num += 1;
    element.value = num;
}

function decreaseCounter() {
    const element = document.querySelector('#counter');
    let num = parseInt(element.value, 10);
    num += 1;
    element.value = num;
}
document.querySelector('#counter').value = 0;
const plusbtn = document.querySelector('#plus-counter');
plusbtn.addEventListener('click', () => {
    increaseCounter();
});
const minusbtn = document.querySelector('#minus-counter');
minusbtn.addEventListener('click', () => {
    decreaseCounter();
});
