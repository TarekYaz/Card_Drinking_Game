export default class Players {
    constructor() {
        this.playerList = []
        this.currentTurn = 0
    }

    get numberOfPlayers() {
        return this.playerList.length
    }

    get currentPlayer() {
        return this.playerList[this.currentTurn]
    }

    addPlayer(nameInput) {
        this.playerList.push(new Player(nameInput))
        this.getHTML()
    }
    
    getHTML() {
        document.getElementById("players").innerHTML = ''
        document.getElementById("buttons").innerHTML = ''

        this.playerList.forEach((player, index) => {
            let newRow = document.createElement('tr')
            let newButton = document.createElement('input')

            newRow.setAttribute("id", "player" + index)
            newRow.innerHTML = `<td>${player.name}</td><td>${player.sips}</td>`
            document.getElementById("players").appendChild(newRow)
            
            newButton.setAttribute("type", "button")
            newButton.setAttribute("value", player.name)
            newButton.setAttribute("class", "overlayBtns")
            document.getElementById("buttons").appendChild(newButton)
        })

        this.highlightPlayer(this.currentTurn)
    }

    getPlayer(index) {
        return this.playerList[index]
    }

    highlightPlayer(number) {
        if (this.currentPlayer != null) {
            document.getElementById("player" + number).setAttribute("class", "yourTurn")
        }
    }

    nextTurn() {
        this.currentTurn += Number(1)
        if (this.currentTurn == this.numberOfPlayers) {
            this.currentTurn = 0
        }
    }
}

class Player {
    constructor(name) {
        this.name = name
        this.sips = 0
    }
    
    drinks(sips) {
        this.sips += sips
    }
}