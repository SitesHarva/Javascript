// function writer(productTitle, price, desc) {
//     document.write(
//     `
//     <div>
//         <h2>${productTitle} ${price}</h2>
//         <p>${desc}</p>
//     </div>
//     `
// );
// };
// writer('milk', 32, 'some milk');

function printer(array) {
    for (let item of array) {
        console.log(item);
    }
}

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
printer(users);