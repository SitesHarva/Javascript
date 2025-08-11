// function User(name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     console.log(this);
// }
// let user1 = new User('vasya', 25, true);



function User(name, age, status, wife) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = wife;
    console.log(this);
}
let user1 = new User('vasya', 25, true, {name: 'vasya', age: 45});