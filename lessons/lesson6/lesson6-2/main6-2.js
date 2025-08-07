let arr = [];
console.log(Array.isArray(arr));
arr.push('new element');
arr.push('new element');
arr.push('new element');
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift('aaaa');
console.log(arr);

let join = arr.join(' ');
console.log(join);

let nums = [1, 2, 3];

let concat = arr.concat(nums);
console.log(concat);

let slice = concat.slice(0,2);
console.log(slice);

console.log(concat);
let splice = concat.splice(0,4)
console.log(arr);

concat.push(1);

console.log(concat.includes(1));
