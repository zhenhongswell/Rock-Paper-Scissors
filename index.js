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
    let result = null;
    if (playerSelection === computerSelection){
        result = null;
    }
    else if (playerSelection === "Rock" && computerSelection ==="Paper"){
        result = false;
    }
    else if (playerSelection === "Rock" && computerSelection ==="Scissors"){
        result = true;
    }
    else if (playerSelection === "Paper" && computerSelection ==="Scissors"){
        result = false;
    }
    else if (playerSelection === "Paper" && computerSelection ==="Rock"){
        result = true;
    }
    else if (playerSelection === "Scissors" && computerSelection ==="Paper"){
        result = true;
    }
    else if (playerSelection === "Scissors" && computerSelection ==="Rock"){
        result = false;
    }
    else{
        result = "something is wrong!";
    }
    return result;
}

const rockButton = document.querySelector(".Rock");
const paperButton = document.querySelector(".Paper");
const scissorsButton = document.querySelector(".Scissors");
const resetButton = document.querySelector('.reset');
const displayPlayerPointDiv = document.querySelector('.player-point');
const displayNpcPointDiv = document.querySelector('.npc-point');
const displayWinnerDiv = document.querySelector('.winner');
const displayWinnerTextContent = displayWinnerDiv.textContent;
let playerPoint = 0;
const playerPointInit = playerPoint;
let npcPoint = 0;
const npcPointInit = npcPoint;

const endGameEvent = new Event("EndGame");

document.addEventListener("EndGame",()=>{
    const buttons= document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.className === "reset") {
            return;
        }
        button.disabled = true;
    });
})

resetButton.addEventListener("click",()=>{
    const buttons= document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = false;
    });
    playerPoint = playerPointInit;
    npcPoint = npcPointInit;
    displayPlayerPointDiv.textContent = playerPointInit;
    displayNpcPointDiv.textContent = npcPointInit;
    displayWinnerDiv.textContent = displayWinnerTextContent;
})

rockButton.addEventListener("click",()=>{
    let result = playRound(rockButton.value,getComputerChoice());
    if (result == null){
        return;
    }
    if (result){
        playerPoint+=1;
    }
    else{
        npcPoint+=1;
    }
    displayPlayerPointDiv.textContent = playerPoint;
    displayNpcPointDiv.textContent = npcPoint;

    if (playerPoint === 5){
        displayWinnerDiv.textContent = "player wins!";
        document.dispatchEvent(endGameEvent);
    }
    if (npcPoint === 5){
        displayWinnerDiv.textContent = "npc wins!";
        document.dispatchEvent(endGameEvent);
    }
})

paperButton.addEventListener("click",()=>{
    let result = playRound(paperButton.value,getComputerChoice());
    if (result == null){
        return;
    }
    if (result){
        playerPoint+=1;
    }
    else{
        npcPoint+=1;
    }
    displayPlayerPointDiv.textContent = playerPoint;
    displayNpcPointDiv.textContent = npcPoint;

    if (playerPoint === 5){
        displayWinnerDiv.textContent = "player wins!";
        document.dispatchEvent(endGameEvent);
    }
    if (npcPoint === 5){
        displayWinnerDiv.textContent = "npc wins!";
        document.dispatchEvent(endGameEvent);
    }
})

scissorsButton.addEventListener("click",()=>{
    let result = playRound(scissorsButton.value,getComputerChoice());
    if (result == null){
        return;
    }
    if (result){
        playerPoint+=1;
    }
    else{
        npcPoint+=1;
    }
    displayPlayerPointDiv.textContent = playerPoint;
    displayNpcPointDiv.textContent = npcPoint;

    if (playerPoint === 5){
        displayWinnerDiv.textContent = "player wins!";
        document.dispatchEvent(endGameEvent);
    }
    if (npcPoint === 5){
        displayWinnerDiv.textContent = "npc wins!";
        document.dispatchEvent(endGameEvent);
    }
})

// function game(rounds){
//     // rounds must be int
//     for (let index = 0; index < rounds; index++) {
//         let playerSelection = prompt("Please input Rock Paper Scissors");
//         computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//     }
// }


