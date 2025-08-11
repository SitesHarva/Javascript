function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User(1, 'vasya', 'kamaz', '@gmail.com', '0681928438'),
    new User(2, 'petya', 'kamaz', '@gmail.com', '0681928438'),
    new User(3, 'nastya', 'kamaz', '@gmail.com', '0681928438'),
    new User(4, 'agaya', 'kamaz', '@gmail.com', '0681928438'),
    new User(5, 'taya', 'kamaz', '@gmail.com', '0681928438'),
    new User(6, 'masya', 'kamaz', '@gmail.com', '0681928438'),
    new User(7, 'nata', 'kamaz', '@gmail.com', '0681928438'),
    new User(8, 'kya', 'kamaz', '@gmail.com', '0681928438'),
    new User(9, 'nya', 'kamaz', '@gmail.com', '0681928438'),
    new User(10, 'mya', 'kamaz', '@gmail.com', '0681928438'),
];

function filterUser(user) { 
    if(user.id % 2 === 0) {
        console.log(user);
    } else {
        return false;
    }
}
users.filter(filterUser);