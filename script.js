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
  let result;

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
  if (playerSelection === ROCK && computerSelection === PAPER) {
    console.log(showWinner(playerSelection, computerSelection, LOSS));
  } else if (playerSelection === PAPER && computerSelection === SCISSORS) {
    console.log(showWinner(playerSelection, computerSelection, LOSS));
  } else if (playerSelection === SCISSORS && computerSelection === ROCK) {
    console.log(showWinner(playerSelection, computerSelection, LOSS));
  } else if (
    (playerSelection === ROCK && computerSelection === ROCK) ||
    (playerSelection === PAPER && computerSelection === PAPER) ||
    (playerSelection === SCISSORS && computerSelection === SCISSORS)
  ) {
    console.log(showWinner(playerSelection, computerSelection, DRAW));
  } else {
    console.log(showWinner(playerSelection, computerSelection, WIN));
  }
}

function playRound(playerSelection, computerSelection) {
  checkWinner(playerSelection, computerSelection);
}

playRound(playerPlay(), computerPlay());
