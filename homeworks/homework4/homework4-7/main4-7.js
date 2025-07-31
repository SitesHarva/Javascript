function builder(array) {
    document.write(`<ul>`);
        for (let item of array) {
            document.write(`<li>${item}</li>`);
        }
    document.write(`</ul>`);
}
builder([233, 'bbbb', true]);