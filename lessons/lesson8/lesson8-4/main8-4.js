let user = {
    name: 'vasya',
    skils: ['html', 'js'],
}
let userCopy = {...user};

let s = JSON.stringify(user);
console.log(s);
let parse = JSON.parse(s);
console.log(parse);