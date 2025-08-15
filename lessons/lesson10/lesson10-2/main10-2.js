// localStorage.setItem('asd', 'qwe');

// let item = localStorage.getItem('asd');
// console.log(item);

// localStorage.setItem('user', JSON.stringify({id:1, name: 'ananas'}));

let userJson = localStorage.getItem('user');
console.log(userJson);
let user = JSON.parse(userJson);
console.log(user);
user.age = 31;
console.log(user);
localStorage.setItem('user', JSON.stringify(user));