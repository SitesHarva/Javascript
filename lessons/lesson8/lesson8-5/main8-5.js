let base = {
    id: 1,
    name: 'kokos'
}

let copy = Object.create(base);
console.log(copy.name);