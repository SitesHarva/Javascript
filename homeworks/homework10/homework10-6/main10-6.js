let convertor = document.getElementById('calc');

convertor.oninput = function () {
    let kg = +this.value;
    let result = kg * 2.2;
    block.innerText = result;
};

const block = document.createElement('div');
document.body.appendChild(block);
