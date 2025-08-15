let block = document.getElementById('block');

let currentNumber = +localStorage.getItem('number') || 0;
currentNumber +=1;
localStorage.setItem('number', currentNumber);

block.innerText = currentNumber;