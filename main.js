function getComputerChoice(){
    const radnomNumber = Math.floor( Math.random() * 3 );
    let computerChoice
    if ( radnomNumber === 0 ){
        computerChoice = "rock";
    } else if( radnomNumber === 1){
        computerChoice = "paper";
    } else{
        computerChoice = "scissors";
    }
    return computerChoice
}


function getHumanChoice(){
    let humanChoice = prompt( "Rock, Paper or Scissors" ).toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanImput, computerImput){
    if ( humanImput === "rock" && computerImput === "paper"){
        return console.log("You lose! Paper beats rock!");
    } else if ( humanImput === "rock" && computerImput === "scissors" ) {
        return console.log("You win! Rock beats Scissors!");
    } else if ( humanImput === "paper" && computerImput === "rock" ) {
        return console.log("You win! Paper beats rock!");
      }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);