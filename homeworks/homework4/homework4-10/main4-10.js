function sum(arr) {
    let array = 0;
    for (let item of arr) {
        array = array + item;
    }
    return array;
}
console.log(sum([1, 2, 10]));