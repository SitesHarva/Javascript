let nums = [11,21,3];

function sortNums(array, direction) {
        if (direction === 'ascending') {
            array.sort((a, b) => a - b);
        } else if (direction === 'descending') {
            array.sort((a, b) => b - a);
        } else {
            return array;
        }
    return array;
}
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));
