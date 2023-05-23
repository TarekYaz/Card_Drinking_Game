import Deck from "./deck.js";

const deck = new Deck()
deck.shuffle()

// console.log(deck.numberOfCards)
// console.log(deck.cards[0].name, deck.cards[0].image)

document.getElementById("deck").addEventListener('click', () => {
    let topCard = deck.cards[0];
    topCard.getHTML()
    deck.discard()
    // console.log(deck.numberOfCards)
    // console.log(deck.cards[0].name, deck.cards[0].image)
})