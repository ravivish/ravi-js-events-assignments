document.querySelector('#Counter').value=0;
let plusbtn = document.querySelector('#plusCounter');
plusbtn.addEventListener('click',function(event){
    increaseCounter();
});
let minusbtn = document.querySelector('#minusCounter');
minusbtn.addEventListener('click',function(event){
    decreaseCounter();
});

function increaseCounter(){
    let element = document.querySelector('#Counter');
    element.value++;
}
function decreaseCounter(){
    let element = document.querySelector('#Counter');
    element.value--;
}