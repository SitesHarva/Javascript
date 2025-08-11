function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname= surname;
    this. email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'phone'}, {title: 'pc'}]),
    new Client(2, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'phone'}, {title: 'pc'}]),
    new Client(3, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'phone'}, {title: 'pc'}]),
    new Client(4, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'phone'}, {title: 'pc'}]),
    new Client(5, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'phone'}, {title: 'pc'}]),
    new Client(6, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'phone'}, {title: 'pc'}]),
    new Client(7, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'phone'}, {title: 'pc'}]),
    new Client(8, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'phone'}, {title: 'pc'}]),
    new Client(9, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'phone'}, {title: 'pc'}]),
    new Client(10, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [{title: 'tv'}, {title: 'phone'}, {title: 'pc'}]),
];
console.log(clients);







// with new product 

// function Client(id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname= surname;
//     this. email = email;
//     this.phone = phone;
//     this.order = order;
// }

// function Product(title) {
//     this.title = title
// }

// let clients = [
//     new Client(1, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [new Product('tv'), new Product('phone'), new Product('pc'),]),
//     new Client(1, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [new Product('tv'), new Product('phone'), new Product('pc'),]),
//     new Client(1, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [new Product('tv'), new Product('phone'), new Product('pc'),]),
//     new Client(1, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [new Product('tv'), new Product('phone'), new Product('pc'),]),
//     new Client(1, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [new Product('tv'), new Product('phone'), new Product('pc'),]),
//     new Client(1, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [new Product('tv'), new Product('phone'), new Product('pc'),]),
//     new Client(1, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [new Product('tv'), new Product('phone'), new Product('pc'),]),
//     new Client(1, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [new Product('tv'), new Product('phone'), new Product('pc'),]),
//     new Client(1, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [new Product('tv'), new Product('phone'), new Product('pc'),]),
//     new Client(1, 'vasya', 'kamaz', '234@gmail.com', '0678539399', [new Product('tv'), new Product('phone'), new Product('pc'),]),
    
// ];
// console.log(clients);