let user = {
    id: 1,
    name: 'vasya'
}
user.age = 3;
user['status'] = false;
delete user.id;
console.log(user);