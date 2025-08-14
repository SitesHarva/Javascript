let block = document.createElement('div');
block.classList.add('wrap');
block.classList.add('collaplse');
block.classList.add('alpha');
block.classList.add('beta');

block.style.background = 'silver';
block.innerText = 'test'
block.style.color = 'yellow';

document.body.appendChild(block);
 
let blockClone = block.cloneNode(true);
document.body.appendChild(blockClone);