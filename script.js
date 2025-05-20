const heading = document.querySelector('h1');
heading.textContent = 'ROCK, PAPER, SCISSORS';
const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');

buttons.forEach(button =>{
  button.addEventListener('click', () => {
    let humanChoice = button.textContent;
    result.innerHTML = playRound(humanChoice, getComputerChoice());
  })
})

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


function playRound (humanChoice, computerChoice) {
  while (humanScore < 5 && computerScore < 5){
  if(humanChoice == 'Rock') {
    if (computerChoice == 'Rock') {
      return `It's a tie!
      Human - ${humanScore}     ${computerScore} - Computer`;
    } else if (computerChoice == 'Paper') {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}
      Human - ${humanScore}     ${computerScore} - Computer`;
    } else if (computerChoice == 'Scissors') {
      humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}
      Human - ${humanScore}     ${computerScore} - Computer`;
    }
  } 
  else if (humanChoice == 'Paper') {
    if (computerChoice == 'Rock') {
      humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}
      Human - ${humanScore}     ${computerScore} - Computer`;
    } else if (computerChoice == 'Paper') {
      return `It's a tie!
      Human - ${humanScore}     ${computerScore} - Computer`;
    } else if (computerChoice == 'Scissors') {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}
      Human - ${humanScore}     ${computerScore} - Computer`;
    }
  } 
  else if (humanChoice == 'Scissors') {
    if (computerChoice == 'Rock') {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}
      Human - ${humanScore}     ${computerScore} - Computer`;
    } else if (computerChoice == 'Paper') {
      humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}
      Human - ${humanScore}     ${computerScore} - Computer`;
    } else if (computerChoice == 'Scissors') {
      return `It's a tie!
      Human - ${humanScore}     ${computerScore} - Computer`;
    }
  }
}

  if (humanScore == 5) {
    alert(`You win!`);
    alert(`Human - ${humanScore} \t ${computerScore} - Computer`);
    return `You win! THE END`
  } else if (computerScore == 5) {
    alert(`You lose!`);
    alert(`Human - ${humanScore} \t ${computerScore} - Computer`);
    return `You lose! THE END`
  }
}



