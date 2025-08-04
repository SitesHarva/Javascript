let theLowest = (numbers) => {
    let min = numbers[0];
    for (let number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}
const numbers = [1, 55, 155, 0, -55];
console.log(theLowest(numbers));