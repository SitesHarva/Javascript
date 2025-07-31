function builder(text, amount) {
    for (let i = 0; i < amount; i++) {
        document.write(`<ul><li>${text}</li></ul>`);
    }
}
builder('text', 10);