// function filter(arr, predicate) {
//     let arr2 = [];
//     if (predicate === 'непарні') {
//         for (let item of arr) {
//             if (item % 2 !== 0) {
//                 arr2[arr2.length] = item;
//             }
//         }
//     }
//     return arr2;
// } 
// console.log(filter([11,22,33,44,55], 'парні'));
// console.log(filter([11,22,33,44,55], 'непарні'));



function filter (arr, callback) {
    let mas = [];
    for (let item of arr) {
        if (callback(item)) {
            mas[mas.length] = item
        };
    }
    return mas;
}
let fitler = filter([11,22,33,44,55], function (arg) {
    return arg % 2 === 0;
});
console.log(fitler);