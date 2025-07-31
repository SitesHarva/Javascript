console.log(arrayMinValue([11, -122, 33, 0, -99]));

function arrayMinValue(numbers) {
    let min = 0;
    for (let number of numbers) {
        if (number < min) {
            min = number
        }
    }
    return min;
}