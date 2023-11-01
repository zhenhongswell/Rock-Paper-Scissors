/*
INPUT Player need to input a figure
INPUT Computer need to generate a random figure
CALL Function playRound(PlayerFigure,ComputerFigure) to decide who is winning
CALL Function game(round) to play multiple rounds at once execute;
*/
let array = ["Rock","Paper","Scissors"]

function getComputerChoice(){
    //returns a random int from 0 to 3
    let random_int= Math.floor(Math.random() * 3);
    return array[random_int];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log(`playerSelection:${playerSelection} computerSelection ${computerSelection} tie`);
    }
    else if (playerSelection === "Rock" && computerSelection ==="Paper"){
        console.log(`playerSelection:${playerSelection} computerSelection ${computerSelection} you lose`);
    }
    else if (playerSelection === "Rock" && computerSelection ==="Scissors"){
        console.log(`playerSelection:${playerSelection} computerSelection ${computerSelection} you win`);
    }
    else if (playerSelection === "Paper" && computerSelection ==="Scissors"){
        console.log(`playerSelection:${playerSelection} computerSelection ${computerSelection} you lose`);
    }
    else if (playerSelection === "Paper" && computerSelection ==="Rock"){
        console.log(`playerSelection:${playerSelection} computerSelection ${computerSelection} you win`);
    }
    else if (playerSelection === "Scissors" && computerSelection ==="Paper"){
        console.log(`playerSelection:${playerSelection} computerSelection ${computerSelection} you win`);
    }
    else if (playerSelection === "Scissors" && computerSelection ==="Rock"){
        console.log(`playerSelection:${playerSelection} computerSelection ${computerSelection} you lose`);
    }
    else{
        console.log("something is wrong!");
    }
}
function game(rounds){
    // rounds must be int
    for (let index = 0; index < rounds; index++) {
        let playerSelection = prompt("Please input Rock Paper Scissors");
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}


