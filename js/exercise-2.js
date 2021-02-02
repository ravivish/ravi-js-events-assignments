function increaseCounter() {
    const element = document.querySelector('#Counter');
    element.value += 1;
}

function decreaseCounter() {
    const element = document.querySelector('#Counter');
    element.value -= 1;
}
document.querySelector('#Counter').value = 0;
const plusbtn = document.querySelector('#plusCounter');
plusbtn.addEventListener('click', () => {
    increaseCounter();
});
const minusbtn = document.querySelector('#minusCounter');
minusbtn.addEventListener('click', () => {
    decreaseCounter();
});
