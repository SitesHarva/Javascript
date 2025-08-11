function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User(111, 'vasya', 'kamaz', '@gmail.com', '0681928438'),
    new User(2, 'petya', 'kamaz', '@gmail.com', '0681928438'),
    new User(34, 'nastya', 'kamaz', '@gmail.com', '0681928438'),
    new User(4, 'agaya', 'kamaz', '@gmail.com', '0681928438'),
    new User(53, 'taya', 'kamaz', '@gmail.com', '0681928438'),
    new User(5, 'masya', 'kamaz', '@gmail.com', '0681928438'),
    new User(7, 'nata', 'kamaz', '@gmail.com', '0681928438'),
    new User(83, 'kya', 'kamaz', '@gmail.com', '0681928438'),
    new User(9, 'nya', 'kamaz', '@gmail.com', '0681928438'),
    new User(10, 'mya', 'kamaz', '@gmail.com', '0681928438'),
];

function sortUsers(user1, user2) {
    return user1.id - user2.id;
}
console.log(users.sort(sortUsers));