import Deck from "./deck.js";
import Players from "./players.js";

const deck = new Deck()
const players = new Players()

deck.shuffle()

document.getElementById("deck").addEventListener('click', () => {
    let topCard = deck.cards[0]
    
    console.log(topCard)
    console.dir(players.playerList)
    console.log("it is turn: " + players.turn)
    console.log("take a card: " + players.currentPlayer.name)
    
    //testing--------------------------
    players.currentPlayer.drinks(topCard.getRule())
    //---------------------------------
    
    topCard.getHTML()
    players.getHTML()
    deck.pop()
    players.nextTurn()

})

nameInput.addEventListener('keydown', function (event) {
    let nameInput = document.getElementById("nameInput")
    if (event.code === 'Enter' && !event.repeat) {
        players.addPlayer(nameInput.value)
        nameInput.value = ''
    }
})