// Array containing choices
const choices = ["Rock","Paper","Scissors"];

// Computer enters Y

function getComputerChoice(){
    let computerPlay = choices[Math.floor(Math.random() * choices.length)];
    return computerPlay
}

// Player enters X

function getPlayerChoice(){
    let playerChoice = prompt("Rock, Paper or Scissors?");
    return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase()
}

// Play Round

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "It's a draw!"
    } else if (playerSelection == "Rock" && computerSelection == "Paper"){
        return "You lost! Paper beats Rock"
    } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        return "You win! Rock beats Scissors"
    } else if (playerSelection == "Paper" && computerSelection == "Rock"){
        return "You win! Paper beats Rock"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return "You lost! Scissors beats Paper"
    } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        return "You lost! Rock beats Scissors"
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        return "You win! Scissors beat Paper"
    } else {
        return "Bad typography";
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log("Player chose:" + " " + playerSelection + " | " + "Computer chose:" + " " + computerSelection + " | " + playRound(playerSelection, computerSelection));

// Keep track of Score, if player reaches 5 wins present "You Win", if computer reaches 5 wins present "You Lose"
// Replay