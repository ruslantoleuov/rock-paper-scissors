const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const WIN = "Win";
const LOSS = "Loss";
const DRAW = "Draw";

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

function playerPlay() {
  let playerChoise = prompt(`Please type ${ROCK}, ${PAPER} or ${SCISSORS}`);
  if (playerChoise === null || playerChoise.length === 0) {
    return playerPlay();
  }

  playerChoise = playerChoise.toLowerCase();
  playerChoise = playerChoise.replace(
    playerChoise[0],
    playerChoise[0].toUpperCase()
  );

  if (
    playerChoise !== ROCK &&
    playerChoise !== PAPER &&
    playerChoise !== SCISSORS
  ) {
    return playerPlay();
  }
  return playerChoise;
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

/*
  Create game function
  create for loops which loops over 5 times
  use regular expression to check the winner
  store the score of each winner
  after 5 round console.log(winner)
*/

function game() {
  let overallResult = "";
  let currentResult = "";
  let playerScore = 0;
  let computerScore = 0;

  for (i = 0; i < 5; i++) {
    currentResult = playRound(playerPlay(), computerPlay());
    console.log(currentResult);

    if (currentResult.includes("Win")) {
      ++playerScore;
      console.log(`Player Score: ${playerScore}`);
    } else if (currentResult.includes("Lose")) {
      ++computerScore;
      console.log(`Computer Score: ${computerScore}`);
    }
  }

  if (playerScore > computerScore) {
    overallResult = "Player Wins!";
  } else if (computerScore > playerScore) {
    overallResult = "Computer Wins!";
  } else {
    overallResult = "It's a tie!";
  }

  return overallResult;
}

console.log(game());
