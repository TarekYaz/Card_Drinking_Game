export default class Players {
    constructor() {
        this.playerList = []
        this.turn = 0
    }

    get numberOfPlayers() {
        return this.playerList.length
    }

    get currentPlayer() {
        return this.playerList[this.turn]
    }

    addPlayer(nameInput) {
        this.playerList.push(new Player(nameInput))
        this.getHTML()
    }
    
    getHTML() {
        document.getElementById("players").innerHTML = ''

        this.playerList.forEach((player, index) => {
            let newRow = document.createElement('tr')
            newRow.setAttribute("id", "player" + index)
            newRow.innerHTML = `<td>${player.name}</td><td>${player.sips}</td>`
            document.getElementById("players").appendChild(newRow)
        })

        this.highlightPlayer(this.turn)
    }

    highlightPlayer(turn) {
        if (this.currentPlayer != null) {
            document.getElementById("player" + turn).setAttribute("class", "yourTurn")
        }
    }

    nextTurn() {
        this.turn += Number(1)
        if (this.turn == this.numberOfPlayers) {
            this.turn = 0
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