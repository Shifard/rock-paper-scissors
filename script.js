function getComputerChoice() {
  let choice = Math.random()
  let computerChoice;
  if (choice >= 0 && choice < 0.33) {
    computerChoice = 'rock'
  } else if (choice >= 0.33 && choice < 0.66) {
    computerChoice = 'paper'
  } else if (choice >= 0.66 && choice < 1) {
    computerChoice = 'scissors'
  }
  return computerChoice;
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, or Scissors?", '');
  choice = choice.toLowerCase()
  let humanChoice = ''
  if (choice === 'rock') {
    humanChoice = 'rock';
  } else if (choice === 'paper') {
    humanChoice = 'paper';
  } else if (choice === 'scissors') {
    humanChoice = 'scissors';
  } else {
    return `Invalid input: ${choice}`
  }
  return humanChoice;
}


let humanScore = 0, computerScore = 0;

function playGame() {
  function playRound(humanChoice, computerChoice) {
    let result;
    if (humanChoice === 'rock') {
      if (computerChoice === 'rock') {
        result = 'tie'
      } else if (computerChoice === 'paper') {
        result = 'lose'
      } else if (computerChoice === 'scissors') {
        result = 'win'
      }
    } else if (humanChoice === 'paper') {
      if (computerChoice === 'rock') {
        result = 'win'
      } else if (computerChoice === 'paper') {
        result = 'tie'
      } else if (computerChoice === 'scissors') {
        result = 'lose'
      }
    } else if (humanChoice === 'scissors') {
      if (computerChoice === 'rock') {
        result = 'lose'
      } else if (computerChoice === 'paper') {
        result = 'win'
      } else if (computerChoice === 'scissors') {
        result = 'tie'
      }
    } else {
      return humanChoice;
    }
    if (result === 'win') {
      humanScore+=1
      return `You ${result}! ${humanChoice} beats ${computerChoice}`
    } else if (result === 'lose') {
      computerScore+=1
      return `You ${result}! ${computerChoice} beats ${humanChoice}`
    } else if (result === 'tie') {
      return `${result}!`
    }
  }
  for (let i = 0; i < 5; i++) {
  let computerSelection = getComputerChoice();
  let humanSelection = getHumanChoice();
  console.log(playRound(humanSelection, computerSelection));
  }
  if (humanScore > computerScore) {
    console.log(`You win\nScore: Human ${humanScore}  -  ${computerScore} Computer`);
  } else if (computerScore > humanScore) {
    console.log(`You lose\nScore: Human ${humanScore}  -  ${computerScore} Computer`);
  } else {
    console.log(`Tie\nScore: Human ${humanScore}  -  ${computerScore} Computer`);
  }
}
playGame()

