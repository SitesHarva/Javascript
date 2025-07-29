let firstNumber = prompt('введіть перше число');
let secondNumber = prompt('введіть друге число');


if (firstNumber > secondNumber) {
    console.log(`${firstNumber} більше за ${secondNumber}`);
} else if (firstNumber < secondNumber) {
    console.log(`${secondNumber} більше за ${firstNumber}`);
} else if (firstNumber == secondNumber) {
    console.log('ци числа рівні');
}