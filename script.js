let round = 5;
let computerChoice = ''
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
// console.log(getComputerChoice(computerChoice).toLowerCase());

let humanChoice = prompt("Enter either rock, paper, or scissors (in any casing): ");
function getHumanChoice (humanChoice) {
    if (round < 5) {
        humanChoice = prompt("Enter either rock, paper, or scissors (in any casing): ");
    }
    choice = humanChoice.toLowerCase();
    if (choice == 'rock' || choice == 'paper' || choice == 'scissors'){
        return humanChoice
    } else {
        return humanChoice = "Invalid choice"
    }
}


let humanScore = +0;
let computerScore = +0;
let description = ''

    function playRound(computerChoice, humanChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (computerChoice == 'rock' && humanChoice == 'rock' 
            || computerChoice == 'paper' && humanChoice == 'paper'
            || computerChoice == 'scissors' && humanChoice == 'scissors'
        ) {
            return description = `Tie! 
            Computer: ${computerScore} \t Human: ${humanScore}`
        } else if (computerChoice == 'rock' && humanChoice == 'scissors'
            || computerChoice == 'paper' && humanChoice == 'rock'
            || computerChoice == 'scissors' && humanChoice == 'paper'
        ) {
            computerScore +=1;
            return description = `You lose! ${computerChoice} beats ${humanChoice}
            Computer: ${computerScore} \t Human: ${humanScore}`
        } else if (computerChoice == 'rock' && humanChoice == 'paper'
            || computerChoice == 'paper' && humanChoice == 'scissors'
            || computerChoice == 'scissors' && humanChoice == 'rock'
        ){
            humanScore +=1;
            return description = `You Win! ${humanChoice} beats ${computerChoice}
            Computer: ${computerScore} \t Human: ${humanScore}`
        } else {
            return humanChoice;
        }
    }

let humanSelection = getHumanChoice(humanChoice);
let computerSelection = getComputerChoice(computerChoice);
    while(round!=0){
        console.log(playRound(getComputerChoice(computerChoice), getHumanChoice(humanChoice)));
        round --;
}









