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




