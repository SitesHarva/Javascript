const priceBlock = document.getElementById('block');

let lastReload = localStorage.getItem('lastReload');
let currentTime = Date.now();
let currentPrice = parseInt(localStorage.getItem('currentPrice')) || 100;

if (lastReload) {
    let timeLimit = (currentTime - lastReload) / 1000;
    if (timeLimit > 10) {
        currentPrice += 10;
    }
}

localStorage.setItem('currentPrice', currentPrice);
localStorage.setItem('lastReload' , currentTime);

priceBlock.innerText = currentPrice + 'грн';