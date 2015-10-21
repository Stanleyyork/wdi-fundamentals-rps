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
    console.log("inside getPlayerMove");
    return PlayerMove = move || getInput();
}

function getComputerMove(move) {
    var ComputerMove;
    var move;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    console.log("inside getComputerMove");
    return ComputerMove = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    console.log("inside winner pre conditions");
    if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    } else if (playerMove === "rock" && computerMove === "rock") {
        winner = "tie";
    } else if (playerMove === "rock" && computerMove === "paper") {
        winner = "computer";
    } else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "computer";
    } else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "paper") {
        winner = "tie";
    } else if (playerMove === "scissors" && computerMove === "scissors") {
        winner = "tie";
    } else if (playerMove === "scissors" && computerMove === "rock") {
        winner = "computer";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    } else {
        winner = "bad input, needs to be R, P or S.";
    }
    console.log("inside winner pre winner");
    return winner;
}

function playToFive() {
    var result;
    var playerWins = 0;
    var computerWins = 0;
    var ties = 0;
    while ((playerWins < 5) && (computerWins < 5)) {
        console.log("Let's play Rock, Paper, Scissors");
        // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
        console.log("inside playToFive pre result");
        result = getWinner(getPlayerMove(),getComputerMove());
        console.log(result);
        if (result === "player"){
            playerWins += 1;
        } else if (result === "computer") {
            computerWins += 1;
        } else {
            ties += 1;
        }
        console.log("pre array");
        console.log("Player: " + playerWins);
        console.log("Computer: " + computerWins);
    }
    return [playerWins, computerWins];
}

playToFive();