let sum = (arr) => {
    let result = 0;
    for (let item of arr) {
        result = result + item;
    }
    return result;
}
const array = [10, 10, 10];
console.log(sum(array));