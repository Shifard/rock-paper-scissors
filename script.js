let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
  let computerChoice = Math.random();
  if (computerChoice > 0 && computerChoice <= 0.33) {
    return "Rock";
  } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
    return "Paper";
  } else if (computerChoice > 0.67 && computerChoice <= 0.99){
    return "Scissors";
  }
}

function getHumanChoice () {
  let humanChoice = prompt("Rock, Paper, Scissors?", '');
  return humanChoice;
}

function playRound (humanChoice, computerChoice) {
  humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();

  if(humanChoice == 'Rock') {
    if (computerChoice == 'Rock') {
      return `It's a tie!\nHuman - ${humanScore} \t ${computerScore} - Computer`;
    } else if (computerChoice == 'Paper') {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}\nHuman - ${humanScore} \t ${computerScore} - Computer`;
    } else if (computerChoice == 'Scissors') {
      humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}\nHuman - ${humanScore} \t ${computerScore} - Computer`;
    }
  } 
  else if (humanChoice == 'Paper') {
    if (computerChoice == 'Rock') {
      humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}\nHuman - ${humanScore} \t ${computerScore} - Computer`;
    } else if (computerChoice == 'Paper') {
      return `It's a tie!\nHuman - ${humanScore} \t ${computerScore} - Computer`;
    } else if (computerChoice == 'Scissors') {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}\nHuman - ${humanScore} \t ${computerScore} - Computer`;
    }
  } 
  else if (humanChoice == 'Scissors') {
    if (computerChoice == 'Rock') {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}\nHuman - ${humanScore} \t ${computerScore} - Computer`;
    } else if (computerChoice == 'Paper') {
      humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}\nHuman - ${humanScore} \t ${computerScore} - Computer`;
    } else if (computerChoice == 'Scissors') {
      return `It's a tie!\nHuman - ${humanScore} \t ${computerScore} - Computer`;
    }
  }
}

function playGame () {
  let rounds = 5;

  while (rounds != 0) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    rounds--;
  }

  if (humanScore > computerScore) {
    console.log(`Winner: Human`);
  } else if (humanScore < computerScore) {
    console.log(`Winner: Computer`);
  } else {
    console.log(`Tie`);
  }
}

playGame();