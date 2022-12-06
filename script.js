// Variables
const choices = ["Rock","Paper","Scissors"]
let playerSelection
let computerSelection
let playerScore = 0;
let computerScore = 0;

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
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
// Draw
    if (playerSelection === computerSelection){
        console.log("It's a draw" + '\n' + "Player played: " + playerSelection + " | " + "Computer played: " + computerSelection)

// Computer win
    } else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
            (playerSelection == "Paper" && computerSelection == "Scissors") ||
            (playerSelection == "Scissors" && computerSelection == "Rock")) {
        console.log("Computer gets a point!" + '\n' + "Player played: " + playerSelection + " | " + "Computer played: " + computerSelection + '\n' + computerSelection + " beats " + playerSelection)
        return ++computerScore

    // Player win
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
            (playerSelection == "Paper" && computerSelection == "Rock") || 
            (playerSelection == "Scissors" && computerSelection == "Paper")) {
        console.log("Player gets a point!" + '\n' + "Player played: " + playerSelection + " | " + "Computer played: " + computerSelection + '\n' + playerSelection + " beats " + computerSelection)
        return ++playerScore

    // Bad Typo
    } else {
        console.log("Bad typography, please type Rock, Paper or Scissors")
    }
}
// Game function

function game(){
    for (let i = 5; playerScore <= i;) {

        if (i === playerScore) {
            console.log("You Win!");
            playAgain();
            break;

        } else if (i === computerScore){
            console.log("You Lose!");
            playAgain();
            break;
        } else {
            console.log("Player:" + " " + playerScore + " " + "Computer:" + " " + computerScore);
            playRound(playerSelection, computerSelection);
    
        }
     }
}

// Play again function 

function playAgain(){
    const response = confirm("Play again?");
    if (response){
        playerScore = 0;
        computerScore = 0;
        game();
    } else {
        console.log("Good game.")
    }
    
}

game();