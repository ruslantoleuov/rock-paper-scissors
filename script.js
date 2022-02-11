const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const WIN = "Win";
const LOSS = "Loss";
const DRAW = "Draw";
const buttons = document.querySelectorAll("button");
const div = document.createElement("div");
const finalResult = document.createElement("div");
document.body.appendChild(div);
const paraPlayerScore = document.querySelector(".player-score span");
const paraComputerScore = document.querySelector(".computer-score span");
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 100);

  if (randomNumber <= 33) {
    return ROCK;
  } else if (randomNumber <= 66) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

function showWinner(playerSelection, computerSelection, outcome) {
  let result = "";

  switch (outcome) {
    case WIN:
      result = `You Win! ${playerSelection} beats ${computerSelection}`;
      break;
    case LOSS:
      result = `You Lose! ${computerSelection} beats ${playerSelection}`;
      break;
    default:
      result = "It's a tie.";
  }

  return result;
}

function checkWinner(playerSelection, computerSelection) {
  let result = "";

  if (playerSelection === ROCK && computerSelection === PAPER) {
    result = showWinner(playerSelection, computerSelection, LOSS);
  } else if (playerSelection === PAPER && computerSelection === SCISSORS) {
    result = showWinner(playerSelection, computerSelection, LOSS);
  } else if (playerSelection === SCISSORS && computerSelection === ROCK) {
    result = showWinner(playerSelection, computerSelection, LOSS);
  } else if (
    (playerSelection === ROCK && computerSelection === ROCK) ||
    (playerSelection === PAPER && computerSelection === PAPER) ||
    (playerSelection === SCISSORS && computerSelection === SCISSORS)
  ) {
    result = showWinner(playerSelection, computerSelection, DRAW);
  } else {
    result = showWinner(playerSelection, computerSelection, WIN);
  }

  return result;
}

function playRound(playerSelection, computerSelection) {
  return checkWinner(playerSelection, computerSelection);
}

function playerPlay(e) {
  let overallResult = "";
  let currentResult = "";

  currentResult = playRound(e.target.textContent, computerPlay());
  div.textContent = `${currentResult}`;

  if (currentResult.includes("Win")) {
    ++playerScore;
  } else if (currentResult.includes("Lose")) {
    ++computerScore;
  }

  paraPlayerScore.textContent = playerScore;
  paraComputerScore.textContent = computerScore;

  if (playerScore === 5) {
    overallResult = "Final: You Win!";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    overallResult = "Final: Computer Wins!";
    playerScore = 0;
    computerScore = 0;
  }

  finalResult.textContent = overallResult;
  document.body.appendChild(finalResult);
}

buttons.forEach(function (button) {
  button.addEventListener("click", playerPlay);
});
