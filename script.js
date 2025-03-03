const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result')
buttons.forEach((button) => {
  button.addEventListener('click', ()=>{
    let humanChoice = button.id;
    result.textContent = playRound(humanChoice, computerChoice)
  })
})

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

let humanScore = 0, computerScore = 0;
let computerChoice = getComputerChoice()
  function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice()
    let result;
    if (humanScore!=5 && computerScore!=5) {
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
    } 
    if (result === 'win') {
      humanScore+=1
      return `You ${result}! ${humanChoice} beats ${computerChoice}\nScore: Human ${humanScore}  -  ${computerScore} Computer`
    } else if (result === 'lose') {
      computerScore+=1
      return `You ${result}! ${computerChoice} beats ${humanChoice}\nScore: Human ${humanScore}  -  ${computerScore} Computer`
    } else if (result === 'tie') {
      return `${result}!\nScore: Human ${humanScore}  -  ${computerScore} Computer`
    }
} else {
  if (humanScore > computerScore) {
    return `GAME ENDED!\nYou win\nScore: Human ${humanScore}  -  ${computerScore} Computer`;
    
  } else if (computerScore > humanScore) {
    return `GAME ENDED! You lose\nScore: Human ${humanScore}  -  ${computerScore} Computer`;
  }
}
}

