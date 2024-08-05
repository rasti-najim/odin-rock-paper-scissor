let humanScore = 0;
let computerScore = 0;
let count = 0;

const choices = ["rock", "paper", "scissors"];
const div = document.querySelector("div");

choices.forEach((choice) => {
  const button = document.createElement("button");
  button.textContent = choice.charAt(0).toUpperCase() + choice.slice(1);
  button.addEventListener("click", () => {
    playRound(choice, getComputerChoice());
    count++;

    const score = document.createElement("div");
    score.textContent = `Scores: Human - ${humanScore}, Computer - ${computerScore}`;
    document.body.appendChild(score);

    if (count === 5) {
      count = 0;
      const result = document.createElement("div");
      if (humanScore > computerScore) {
        result.textContent = "Human wins!";
        result.style.backgroundColor = "green";
      } else if (humanScore < computerScore) {
        result.textContent = "Computer wins!";
        result.style.backgroundColor = "red";
      } else {
        result.textContent = "It's a tie!";
        result.style.backgroundColor = "yellow";
      }
      document.body.appendChild(result);
    }
  });
  div.appendChild(button);
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  const winningCombinations = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  if (winningCombinations[humanChoice] === computerChoice) {
    console.log(
      `You win! ${
        humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
      } beats ${computerChoice}`
    );
    humanScore++;
  } else {
    console.log(
      `You lose! ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats ${humanChoice}`
    );
    computerScore++;
  }

  console.log(`Scores: Human - ${humanScore}, Computer - ${computerScore}`);
}

function playGame() {
  let humanChoice = prompt("Enter your choice (Rock, Paper, or Scissors):");
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}
