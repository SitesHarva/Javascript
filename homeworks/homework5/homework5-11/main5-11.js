let swap = (array, item1, item2) => {
    let temp = array[item1];
    array[item1] = array[item2];
    array[item2] = temp;

    return array;
}
console.log(swap([11, 22, 33, 44],0,1));