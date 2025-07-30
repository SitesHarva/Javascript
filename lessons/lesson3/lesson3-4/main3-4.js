// let user = {
//     id: 1,
//     name: 'vasya',
//     status: true
// }
// for (let field in user) {
//     console.log(user['id']);
// }

let users = [
    {name: 'vasya', age: 30, status: false},
    {name: 'vasya', age: 30, status: false},
    {name: 'vasya', age: 30, status: true},
    {name: 'vasya', age: 30, status: false},
    {name: 'vasya', age: 30, status: false},
    {name: 'vasya', age: 30, status: false},
    {name: 'vasya', age: 30, status: false},
    {name: 'vasya', age: 30, status: false},
    {name: 'vasya', age: 30, status: false},
    {name: 'vasya', age: 30, status: false}
];

for (let user of users) {
    console.log(user);
    for (let fieldName in user) {
        console.log(fieldName, user[fieldName]);
    }
}