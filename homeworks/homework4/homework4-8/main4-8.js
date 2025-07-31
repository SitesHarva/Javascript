function builder(array) {
    for (let item of array) {
        document.write(`<div>
            <p>id - ${item.id}</p>
            <p>name - ${item.name}</p>
            <p>age - ${item.age}</p>
        </div>`);
    }
}
builder([
    {
        id: 1,
        name: 'vasya',
        age: 53,
    },
    {
        id: 2,
        name: 'petya',
        age: 23,
    },
    {
        id: 3,
        name: 'agaya',
        age: 43,
    }
]);

// варіант в рядок

// function builder(array) {
//     for (let item of array) {
//         document.write(`<div><p>${item.id} ${item.name} ${item.age}</p></div>`);
//     }
// }