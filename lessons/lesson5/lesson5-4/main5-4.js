// function asd() {
//     let x = 10;
//     function inner() {
//         return ++x;
//     }
//     return inner;
// }
// console.log(asd()());


// let user = {name: 'vasya', age: 35};
// user.age = -100500;

function userBuilder(name, age) {
    let user = {name, age};
    return {
        getName() {
            return user.name;
        },
        getAge() {
            return user.age;
        },
        setAge(age) {
            if (age > 0) {
                user.age = age;
            }
        }
    }
}
let builder = userBuilder('vasya', 31);
console.log(builder.getName());
console.log(builder.getAge());
builder.setAge(-100);
console.log(builder.getAge());