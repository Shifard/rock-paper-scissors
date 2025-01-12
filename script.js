let humanScore = +0;
let computerScore = +0;
let description = ''

function getComputerChoice (computerChoice) {
     computerChoice = Math.random();
    if (computerChoice <= 0.33 && computerChoice >= 0) {
        return computerChoice = "rock";
    } else if (computerChoice <= 0.66 && computerChoice > 0.33) {
        return computerChoice = "paper";
    } else if (computerChoice <= 0.99 && computerChoice > 0.66){
        return computerChoice = "scissors";
    }
} 

let humanChoice = '';
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.id;
        document.getElementById("result").innerHTML = playRound(getComputerChoice(), humanChoice);
    })
})
    function playRound(computerChoice, humanChoice) {
        if (computerScore == 5 || humanScore == 5) {
            return description = 'ENDED'
        } else {
        if (computerChoice == 'rock' && humanChoice == 'rock' 
            || computerChoice == 'paper' && humanChoice == 'paper'
            || computerChoice == 'scissors' && humanChoice == 'scissors'
        ) {
            return description = `Tie! 
            Computer: ${computerScore} \t Human: ${humanScore}`
        } else if ((computerChoice == 'rock' && humanChoice == 'scissors'
            || computerChoice == 'paper' && humanChoice == 'rock'
            || computerChoice == 'scissors' && humanChoice == 'paper') && computerScore < 4
        ) {
            computerScore +=1;
            return description = `You lose! ${computerChoice} beats ${humanChoice}
            Computer: ${computerScore} \t Human: ${humanScore}`
        } else if ((computerChoice == 'rock' && humanChoice == 'scissors'
            || computerChoice == 'paper' && humanChoice == 'rock'
            || computerChoice == 'scissors' && humanChoice == 'paper') && computerScore == 4
        ) {
            computerScore +=1;
            return description = 'You lose!'
        } else if ((computerChoice == 'rock' && humanChoice == 'paper'
            || computerChoice == 'paper' && humanChoice == 'scissors'
            || computerChoice == 'scissors' && humanChoice == 'rock') && humanScore < 4
        ){
            humanScore +=1;
            return description = `You Win! ${humanChoice} beats ${computerChoice}
            Computer: ${computerScore} \t Human: ${humanScore}`
        }
        else if ((computerChoice == 'rock' && humanChoice == 'paper'
            || computerChoice == 'paper' && humanChoice == 'scissors'
            || computerChoice == 'scissors' && humanChoice == 'rock') && humanScore == 4
        ){
            humanScore +=1;
            return description = 'You Win!'
        }
    }

}








