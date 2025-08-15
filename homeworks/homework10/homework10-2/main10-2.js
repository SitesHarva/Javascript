let personAge = document.getElementById('age');
let checkButton = document.getElementById('checkBtn');

checkButton.onclick = function () {
    if (personAge.value < 18) {
        alert('ваш вік менше за 18');
    } else {
        alert('вак вік більше за 18');
    } 
};