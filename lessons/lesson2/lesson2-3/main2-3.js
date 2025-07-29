let user1 = {
    id: 1,
    name: 'vasya',
    age: 11,
    skills: ['html', 'js', 'java'],
    wife: {
        name: 'olya',
        age: 25
    }
}
console.log(user1);
console.log(user1.age);
console.log(user1['age']);
console.log(user1.skills[2]);
console.log(user1.wife.name);