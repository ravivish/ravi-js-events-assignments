function urlEncode(url) {
    return encodeURIComponent(url);
}
function urlDecode(url) {
    return decodeURIComponent(url);
}
const encodebtn = document.querySelector('#encode');
encodebtn.addEventListener('click', () => {
    const inputtext = document.querySelector('#inputbox');
    const encodetext = urlEncode(inputtext.value);
    const outputtext = document.querySelector('#outputbox');
    outputtext.value = encodetext;
});
const decodebtn = document.querySelector('#decode');
decodebtn.addEventListener('click', () => {
    const inputtext = document.querySelector('#inputbox');
    const decodetext = urlDecode(inputtext.value);
    const outputtext = document.querySelector('#outputbox');
    outputtext.value = decodetext;
});
