let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    const winningCombinations = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    if (winningCombinations[humanChoice] === computerChoice) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
        computerScore++;
    }

    console.log(`Scores: Human - ${humanScore}, Computer - ${computerScore}`);
}

function playGame() {
    let humanChoice = prompt("Enter your choice (Rock, Paper, or Scissors):");
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

playGame()
