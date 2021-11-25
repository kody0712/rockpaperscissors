/** Helper Functions */
function random(number) {
  return Math.floor(Math.random() * number + 1);
}
function capitalize(string) {
  return (
    string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
  );
}

/**
 * Computer Selection */

function getComputerSelection() {
  let computerNumber = random(3);
  let computerGuess = "";

  switch (computerNumber) {
    case 1:
      computerGuess = "Rock";
      break;
    case 2:
      computerGuess = "Paper";
      break;
    case 3:
      computerGuess = "Scissors";
      break;
  }
  return computerGuess;
}

/** Player Choice */

function getPlayerSelection() {
  let playerSelection = prompt("Rock, Paper, or Scissors?");
  playerSelection = capitalize(playerSelection);

  return playerSelection;
}

/* Game */

function playRound(playerSelection, computerSelection) {
  let log = "";

    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' 
    && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Rock')){
        log = 'You Win!';
    }else if ((playerSelection === computerSelection)) {
        log = 'Tie!'
    }else{
        log = 'You lose.'
    }
  return log;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let tie = 0;

  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerSelection();
    let playerSelection = getPlayerSelection();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(`Player: ${playerSelection} VS Computer: ${computerSelection}`);
    console.log(roundResult);

    if (roundResult == 'You Win!') {
        playerScore++;
    }else if (roundResult == 'You lose.'){
        computerScore++;
    }else {
        tie++;
    }

console.log('Player Score: ' + playerScore + ' Computer Score: ' + computerScore + ' Tie Games: ' + tie);
  }

  /** Final Results */
  console.log("<><>Final Results<><>");
  console.log(
    `Player Score: ${playerScore} -- Computer Score: ${computerScore}`
  );
  if (playerScore > computerScore) {
    console.log("You Won The Game!");
  } else if (playerScore < computerScore) {
    console.log("Computer Wins!");
  } else {
    console.log("Tie Game");
  }
}
game();
