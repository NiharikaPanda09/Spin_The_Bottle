// let c = document.getElementById("players-text");
// c.style.backgroundColor = "pink";

let btn = document.getElementById("spin");
let stats = document.getElementById("status");
let player = document.getElementById("players")
let addPlayerBtn = document.getElementById("add-player");
let inputPlayer = document.getElementById("player-name");


stats.textContent = "Add players to spin the bottle.";

function clicked(){


    let players = document.querySelectorAll("#players li");
    if(players.length === 0){
        stats.textContent = "No players to spin the bottle!";
        return;
    }
    stats.textContent = "Spinning...";

    setTimeout(()=>{
        let con = Math.floor(Math.random()*players.length);
        let selected = players[con].textContent;
        stats.textContent = "Selected player : " + selected;
    },2000)
}

addPlayerBtn.addEventListener("click",() =>{
  event.preventDefault();
    let newPlayername = inputPlayer.value.trim();
    if(!newPlayername){
        stats.textContent = "Player name should not remain empty";
        return;
    }

    let existedPlayer = Array.from(document.querySelectorAll("#players li")).map(li =>li.textContent);
    if(existedPlayer.includes(newPlayername)){
        stats.textContent = "Player already exists!";
        return;
    }

        let newPlayer = document.createElement("li");
        newPlayer.textContent = newPlayername;
        player.appendChild(newPlayer);
        inputPlayer.value = "";
    stats.textContent = "Spin the bottle!";

})