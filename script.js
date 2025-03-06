import Deck from "./deck.js";
import Players from "./players.js";

const deck = new Deck()
const players = new Players()

deck.shuffle()
let topCard = deck.cards[0]

document.getElementById("deck").addEventListener('click', () => {
    
    /*debug--------------------------
    // console.log(topCard)
    // console.dir(deck.numberOfCards)
    // console.log("it is turn: " + players.currentTurn)
    // console.log("take a card: " + players.currentPlayer.name)
    // console.log(Number(topCard.description.match(/\d+/))) // extracts countdown for chug oclock from its description
    // console.log(document.getElementById("cardDesc").innerText)
    // players.currentPlayer.drinks(topCard.getRule())
    // topCard.getRule()
    // console.log(topCard.name)
    //---------------------------------*/
    
    topCard.getHTML()
    players.getHTML()

    if (players.numberOfPlayers >= 1) {
        playCard()
    }

    deck.pop()
    topCard = deck.cards[0]
    players.nextTurn()
})

//adds event listener to username field. Not sure why the nameInput variable works before it's even declared.
nameInput.addEventListener('keydown', function (event) {
    let nameInput = document.getElementById("nameInput")
    if (event.code === 'Enter' && !event.repeat) {
        players.addPlayer(nameInput.value)
        nameInput.value = ''
    }
})

function playCard() {
    setOverlay()
    
    let overlayBtns = document.querySelectorAll("div[id=buttons] > input")
    let cardRule = topCard.rule

    console.log(cardRule)

    if(cardRule.oneDrinks) {
        console.log("one drinks")
        overlayBtns.forEach((button, index) => {
            button.addEventListener("click", () => {
                players.getPlayer(index).drinks(1)
                players.getHTML()
                removeOverlay()
            })
        })
    }
    if(cardRule.spreadDrinks) {
        console.log("spread drinks")
        removeOverlay()
    }

    if(cardRule.giveDrinks) {
        console.log("give drinks")
        removeOverlay()
    }

    if(cardRule.playerDrinks) {
        console.log("player drinks")
        players.currentPlayer.drinks(1)
        removeOverlay()
    }

    if(!cardRule.oneDrinks && !cardRule.spreadDrinks && !cardRule.giveDrinks && !cardRule.playerDrinks) {
        console.log("special card")
        removeOverlay()
    }

    /*
    let countdown = Math.floor(Math.random() * 8) + 3
    let countdownInterval = setInterval(function () {
        // Display the current countdown value
        console.log(countdown)
        document.getElementById("countdown").innerText = countdown

        // Decrease the countdown value
        countdown--;

        // Check if the countdown has reached zero
        if (countdown === 0) {
            console.log("Countdown finished")
            clearInterval(countdownInterval)
            removeOverlay()
        }
    }, 1000);
    */
    /*
    switch (card.name) {
        case "Airplane Mode":
            break;
        case "Attention Seeker":
            break;
        case "Baby Got Back":
            break;
        case "Birthday Suit":
            break;
        case "Boat Race":
            break;
        case "Bust a Rhyme":
            break;
        case "Categories":
            break;
        case "Censored Content":
            break;
        case "Chicken Choker":
            break;
        case "Choose A Victim":
            break;
        case "Chug O'clock":
            let countdown = Math.floor(Math.random() * 8) + 3
            document.getElementById("cardDesc").innerHTML = card.description.replace("{countdown}", countdown)
            document.getElementById("overlay").style.display = "block"
            var countdownInterval = setInterval(function () {
                // Display the current countdown value
                console.log(countdown)
                document.getElementById("overlay").innerHTML = countdown
    
                // Decrease the countdown value
                countdown--;
    
                // Check if the countdown has reached zero
                if (countdown === 0) {
                    console.log("Countdown finished")
                    clearInterval(countdownInterval)
                    document.getElementById("overlay").style.display = "none"
                }
            }, 1000);
            break;
        case "Dead Battery":
            break;
        case "Dirty Bomb":
            break;
        case "Drip King":
            break;
        case "Drunkest Player":
            break;
        case "Dumbo":
            break;
        case "Everyone Drink":
            break;
        case "Friends":
            break;
        case "Guess the Animal":
            break;
        case "Happy Birthday":
            break;
        case "Hot Seat":
            break;
        case "Kama Sutra":
            break;
        case "Last Hook Up":
            break;
        case "Most Likely To":
            break;
        case "Most Whipped":
            break;
        case "Mystery Shot":
            break;
        case "Neighbours Drink":
            break;
        case "Oldest Drinks":
            break;
        case "Patchy Beard":
            break;
        case "Protection":
            break;
        case "Radio Check":
            break;
        case "Rock, Paper, Scissors":
            break;
        case "Shag Marry Kill":
            break;
        case "Shortest Player":
            break;
        case "Shotgun":
            break;
        case "Single Pringle":
            break;
        case "Sink The Ship":
            break;
        case "Slowest Drinker":
            break;
        case "Sobriety Test":
            break;
        case "Soul Mates":
            break;
        case "Spelling Bee":
            break;
        case "Tactical Chunder":
            break;
        case "Tallest Player":
            break;
        case "Text Alert":
            break;
        case "This is not a funeral":
            break;
        case "Top Shagger":
            break;
        case "Tramp Stamp":
            break;
        case "Waterfall":
            break;
        case "Worst Driver":
            break;
        case "You're Fired":
            break;
        case "Youngest Drinks":
            break;
    }
    */
}

function setOverlay() {
    document.getElementById("overlay").style.display = "block"
}

function removeOverlay() {
    document.getElementById("overlay").style.display = "none"
}