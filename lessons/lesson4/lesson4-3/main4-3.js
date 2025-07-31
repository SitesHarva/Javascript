// function calc(a, b) {
//     let result = a + b;
//     return result;
// }

// let r1 = calc(10, 20);
// let r2 = calc(20, 22);
// console.log(r1, r2);


// function percentage(cash, percent) {
//     return cash/100*percent;
// }
 
// function tax(sum) {
//     let pdv = percentage(sum, 20);
//     let warTax = percentage(sum, 1.5);
//     let result = sum - pdv - warTax;
//     return result;
// }

// let number = tax(10000);
// console.log(number);



function usersFilter(users) {
    let filteredUsers = [];
    for (let user of users) {
        if (user.age > 30) {
            console.log(user);
            filteredUsers.push(user);
        }
    }
    return filteredUsers;
}
let users = [
    {name: 'vasya', age: 30, status: false},
    {name: 'vasya', age: 33, status: false},
    {name: 'vasya', age: 30, status: true},
    {name: 'vasya', age: 35, status: false},
    {name: 'vasya', age: 30, status: false},
    {name: 'vasya', age: 30, status: false},
    {name: 'vasya', age: 30, status: false},
    {name: 'vasya', age: 30, status: false},
    {name: 'vasya', age: 30, status: false},
    {name: 'vasya', age: 37, status: false}
];
let filter = usersFilter(users);
console.log(filter);
