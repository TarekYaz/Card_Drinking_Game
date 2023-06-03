export default class Players {
    constructor(playerList = []) {
        this.playerList = playerList
    }

    addPlayer(nameInput) {
        this.playerList.push(new Player(nameInput, 0))
    }

    update() {
        document.getElementById("players").innerHTML = ''
        this.playerList.forEach(player => {
            let newRow = document.createElement('tr')
            newRow.innerHTML = `<td>${player.name}</td><td>${player.points}</td>`
            document.getElementById("players").appendChild(newRow)
        })
    }
}

class Player {
    constructor(name, points) {
        this.name = name
        this.points = points
    }
}