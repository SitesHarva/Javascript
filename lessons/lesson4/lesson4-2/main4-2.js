function userFactory(id) {
    let user = {
        id: id,
        name: 'vasya',
        age: 45,
        status: true,
    }
    return user;
}

let u1 = userFactory(1);
let u2 = userFactory(2);
let u3 = userFactory(3);
let u4 = userFactory(4);
console.log(u1);
console.log(u2);
console.log(u3);
console.log(u4);