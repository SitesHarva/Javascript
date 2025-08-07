const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
const colors = {
    spade: 'black',
    clubs: 'black',
    diamond: 'red',
    heart: 'red'
};

let deck = [];

for (let suit of suits) {
    for (let value of values) {
        deck.push({
            cardSuit: suit,
            value: value,
            color: colors[suit]
        });
    }
}

let deckPacked = deck.reduce((suit, card) => {
    suit[card.cardSuit].push(card);
    return suit;
}, {

    spade: [],
    clubs: [],
    diamond: [],
    heart: []
});

console.log(deckPacked);