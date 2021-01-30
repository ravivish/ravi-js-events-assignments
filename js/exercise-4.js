let nametxt = document.querySelector('#name');
nametxt.addEventListener('input', function (event) {
    let sptext = document.querySelector('#len');
    sptext.innerHTML = nametxt.value.length;
});