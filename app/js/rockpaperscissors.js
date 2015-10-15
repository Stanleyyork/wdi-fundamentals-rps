////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var PlayerMove;
    var move;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return PlayerMove = move || getInput();
}

function getComputerMove(move) {
    var ComputerMove;
    var move;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return ComputerMove = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (PlayerMove === "rock" && ComputerMove === "scissors") 
        winner = "player";
    } else if (PlayerMove === "rock" && ComputerMove === "rock") {
        winner = "tie";
    } else if (PlayerMove === "rock" && ComputerMove === "paper") {
        winner = "computer";
    } else if (PlayerMove === "paper" && ComputerMove === "scissors") {
        winner = "computer";
    } else if (PlayerMove === "paper" && ComputerMove === "rock") {
        winner = "player";
    } else if (PlayerMove === "paper" && ComputerMove === "paper") {
        winner = "tie";
    } else if (PlayerMove === "scissors" && ComputerMove === "scissors") {
        winner = "tie";
    } else if (PlayerMove === "scissors" && ComputerMove === "rock") {
        winner = "computer";
    } else if (PlayerMove === "scissors" && ComputerMove === "paper") {
        winner = "player";
    } else {
        winner = "bad input, needs to be R, P or S.";
    }
    return winner;
}

function playToFive() {
    var playerWins = 0;
    var computerWins = 0;
    var ties = 0;
    while (playerWins < 5 && computerWins < 5) {
        console.log("Let's play Rock, Paper, Scissors");
        // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
        result = getWinner(getPlayerMove(),getComputerMove())
        if (result === "player"){
            playerWins += 1;
        } else if (result === "computer") {
            computerWins += 1;
        } else {
            ties += 1;
        }
        return [playerWins, computerWins];
    }
}

