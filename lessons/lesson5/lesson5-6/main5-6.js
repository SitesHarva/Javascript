// function *foo() {
//     yield 100;
//     yield 200;
//     yield 300;
// }
// let fooGenerator = foo();
// console.log(fooGenerator);
// console.log(fooGenerator.next());

function* cardsHolder() {
    const cards = [
        {value: 6, suite: 'diamond'},
        {value: 7, suite: 'spade'},
        {value: 8, suite: 'diamond'},
        {value: 9, suite: 'spade'},
    ];
    for (let card of cards) {
        yield card;
    }
}
let holder = cardsHolder();
let card1 = (holder.next());
let card2 = (holder.next());
console.log(card2.value);