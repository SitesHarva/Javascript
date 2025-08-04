let builder = (array) => {
    for (let item of array) {
        document.write(`<ul>`)
            document.write(`<li> id - ${item.id}</li>`)
            document.write(`<li> name -${item.name}</li>`)
            document.write(`<li> age - ${item.age}</li>`)
        document.write(`</ul>`)
    }
}

const array = [
    {id: 1, name: 'vasya', age: 55},
    {id: 2, name: 'petya', age: 65},
    {id: 3, name: 'maya', age: 75},
    {id: 4, name: 'tanya', age: 85},
    {id: 5, name: 'lesya', age: 95},
];
builder(array);