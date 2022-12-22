let load = document.getElementById('load');
let countDot = 20;

for(let i = 0; i < countDot; i++){
    let newElement = document.createElement('div');
    newElement.classList.add('item');
    newElement.style.setProperty('--i', (0.2 * i) + 's');
    load.appendChild(newElement);
}
window.onload = function(){
    load.style.display = 'none';
}