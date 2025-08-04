let user = {
    name: 'vasya',
    age: 32,
    greeting: function (msg) {
        return `${msg} my name is ${this.name}`
    },
    vitannya: (msg) => `${msg} my age is ${user.age}`

}
console.log(user.greeting('hi'));
console.log(user.vitannya('hello'));