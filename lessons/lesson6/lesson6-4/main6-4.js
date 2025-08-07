// function foo(bar) {
//     console.log(bar);
// }
// foo(100);

// function foo(bar) {
//     console.log(bar);
// }

// function() {
//     return 100;
// }
// foo(100);


function calc(a, b, callback) {
   return callback(a, b);
}

let res = calc(10, 20, (a, b) => {return a+b});
console.log(res);