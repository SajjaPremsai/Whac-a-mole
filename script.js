let currentPipe;
let currentPlant;
let score = 0;
let gameover = false;

window.onload = function(){
    setGame();
}

function setGame(){
    for(let i = 0 ; i < 9 ; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile)
        tile.addEventListener("click",select)
    }
    setInterval(Insertmole, 1000);
    setInterval(InsertPlant, 2000);
}


function getRandomPipe(){
    let num =  Math.floor(Math.random() * 9);
    return num.toString();
}


function Insertmole(){
    if(gameover)
    return;

    if(currentPipe){
        currentPipe.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png"
    let pipe = getRandomPipe()
    if(currentPlant && currentPlant.id == pipe)
    return;
    currentPipe = document.getElementById(pipe);
    currentPipe.appendChild(mole);
}


function InsertPlant(){
    if(gameover)
    return;

    if(currentPlant){
        currentPlant.innerHTML = "";
    }

    let plant = document.createElement("img")
    plant.src = "./piranha-plant.png"
    let plant_place = getRandomPipe();
    if(currentPipe && currentPipe.id == plant_place)
    return;
    currentPlant = document.getElementById(plant_place);
    currentPlant.appendChild(plant);
}

function select(){
    if(gameover)
    return;

    if(this == currentPipe){
        score += 10;
        document.getElementById('score').innerHTML = score.toString();
    }

    else if(this == currentPlant){
        document.getElementById('score').innerHTML = `GAME OVER: ${score.toString()}`;
        gameover = true;
    }
}