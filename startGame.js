function clearPlayers() {
    if (window.confirm("Delete all players?")) {
        window.localStorage.clear();
        window.localStorage.setItem("players", 0);
        document.getElementById("playerList").innerHTML = "";
    }
}

function updatePlayerList() {
    let list = document.getElementById("playerList");
    let playerCount = window.localStorage.getItem("players");

    list.innerHTML = "";

    for (let i = 1; i <= playerCount; i++) {
        let listEntry = document.createElement("li");
        listEntry.innerHTML = window.localStorage.getItem("player" + i);
        list.appendChild(listEntry);
    }
}

function addPlayers() {
    let inputElem = document.getElementById("name");

    inputElem.addEventListener('keydown', function (event) {
        if (event.code === 'Enter' && !event.repeat && validateName(inputElem.value)) {
            let playerCount = window.localStorage.getItem("players");
            let newPlayerCount = Number(playerCount) + 1;
            let newPlayer = "player" + String(newPlayerCount);

            window.localStorage.setItem("players", newPlayerCount);
            window.localStorage.setItem(newPlayer, inputElem.value);
            inputElem.value = "";
            updatePlayerList();
        }
    });
}

function validateName(name) {
    let playerCount = window.localStorage.getItem("players");

    if (name.length < 1) {
        window.alert("Player name must not be blank")
        return false
    }

    for (let i = 1; i <= playerCount; i++) {
        let existingName = window.localStorage.getItem("player" + i);
        if (name == existingName) {
            window.alert("Name already used by Player" + i);
            return false;
        }
    }
    return true;
}

updatePlayerList();
addPlayers();