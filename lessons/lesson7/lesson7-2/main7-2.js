function User(name, age) {
    this.name = name;
    this.age = age;
}

// let user = new User('vasya', 31);
// console.log(user);


// console.log(User);

// User.prototype.greeting = function() {
//     return `hello my name is ${this.name}`;
// };

// let user = new User('vaysa', 51);
// console.log(user.greeting());


let user = new User('vasya', 31);
user.greeting = function(msg) {
    return `${msg} my name is ${this.name}`;
};
console.log(user.greeting('hello'));
let user2 = new User('petye', 52);
console.log(user.greeting.call(user2, 'hi'));