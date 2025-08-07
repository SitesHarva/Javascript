let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'vasya', age: 31, status: false},
    {name: 'vasya', age: 31, status: false},
    {name: 'vasya', age: 21, status: false},
    {name: 'vasya', age: 11, status: false},
    {name: 'vasya', age: 31, status: false},
    {name: 'vasya', age: 31, status: false},
    {name: 'vasya', age: 29, status: false},
    {name: 'vasya', age: 30, status: false},
    {name: 'vasya', age: 31, status: true},
];

// users.forEach(function (value) {
//     console.log(value);
// });

// users.forEach(value => {console.log(value)});

// let filtered = users.filter(value => value.age > 30);
// console.log(filtered);

// let mapedUsers = users.map(function(value, index) {
//     return {   
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1
//     }
// });
// console.log(mapedUsers);

// let find = users.find(value => value.name === 'vasya');
// console.log(find);


// console.log(users.every(value => value.status));
// console.log(users.some(value => value.status));

// let sort = users.sort((user1, user2) => {
//     return user1.age - user2.age;
// });
// console.log(sort);

// let sort = users.sort((a, b) => {
//     if(a.name > b.name) {
//         return 1;
//     }
//     if(a.name < b.name) {
//         return -1;
//     }
//     if(a.name === b.name) {
//         return 0;
//     }
// })
// console.log(sort);

users.reduce()