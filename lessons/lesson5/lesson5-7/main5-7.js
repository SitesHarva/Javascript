// console.log('start');

// try {
//     console.log('tryblock');
// } catch(e) {
//     console.log(e);
// } finally {
//     console.log('finally block');
// }

// console.log('end');


function calc (a,b) {
    if (b === 0) {
        throw new Error('b is 0');
    }
    return a / b;
}
calc(10, 0);