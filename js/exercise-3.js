function urlEncode(url) {
    return encodeURIComponent(url);
}

function urlDecode(url) {
    return decodeURIComponent(url);
}

let encodebtn = document.querySelector('#encode');
encodebtn.addEventListener('click',function(event){
    let inputtext = document.querySelector('#inputbox');
    let encodetext = urlEncode(inputtext.value);
    let outputtext = document.querySelector('#outputbox');
    outputtext.value = encodetext;
});
let decodebtn = document.querySelector('#decode');
decodebtn.addEventListener('click',function(event){
    let inputtext = document.querySelector('#inputbox');
    let decodetext = urlDecode(inputtext.value);
    let outputtext = document.querySelector('#outputbox');
    outputtext.value = decodetext;
});