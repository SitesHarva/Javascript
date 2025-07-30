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
    if (user.status) {
        console.log(user);
    }
}