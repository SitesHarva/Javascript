class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // greeting() {
    //     return `hello my name is ${this.name}`
    // }
    work() {
        return `work in progress`;
    }
}
let user = new User('vasya', 45);
console.log(user);
console.log(user.greeting());

class Customer extends User {
    password
    
}