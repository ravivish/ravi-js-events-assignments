const nametxt = document.querySelector('#name');
nametxt.addEventListener('input', () => {
    const sptext = document.querySelector('#len');
    sptext.innerHTML = nametxt.value.length;
});
