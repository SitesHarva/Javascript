let set = new Set();
set.add('asd');
set.add('xxx');
set.add('qwe');
console.log(set);
console.log(set.has('xxx'));

set.forEach((value) => console.log(value));

let array = Array.from(set);
console.log(array);