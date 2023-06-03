import Deck from "./deck.js";
import Players from "./players.js";

const deck = new Deck()
deck.shuffle()

document.getElementById("deck").addEventListener('click', () => {
    let topCard = deck.cards[0]
    topCard.getHTML()
    deck.pop()
})

const players = new Players()
const nameInput = document.getElementById("nameInput")

nameInput.addEventListener('keydown', function (event) {
    if (event.code === 'Enter' && !event.repeat) {
        players.addPlayer(nameInput.value)
        players.update()
        nameInput.value = ''
    }
})