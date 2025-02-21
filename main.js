function getComputerChoice(){
    const radnomNumber = Math.floor( Math.random() * 3 );
    let computerChoice
    if ( radnomNumber === 0 ){
        computerChoice = "rock";
    } else if( radnomNumber === 1){
        computerChoice = "paper";
    } else{
        computerChoice = "scissor";
    }
    return computerChoice
}


function getHumanChoice(){
    let humanChoice = prompt( "Rock, Paper or Scissor" ).toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanImput, computerImput){
    if ( humanImput === "rock" && computerImput === "paper"){
        return console.log("You lose! Paper beats rock!");
    } else if ( humanImput === "rock" && computerImput === "scissor" ) {
        return console.log("You win! Rock beats scissors!");
    } else if ( humanImput === "paper" && computerImput === "rock" ) {
        return console.log("You win! Paper beats rock!");
      } else if ( humanImput === "paper" && computerImput === "scissor"){
        return console.log("You lose! Scissor beats paper!")
      }else if ( humanImput === "scissor" && computerImput === "rock"){
        return console.log("You lose! Rock beats scissor!")
      } else if ( humanImput === "scissor" && computerImput === "paper"){
        return console.log("You win! Scissor beats paper!")
      }else{
        return console.log("It's a draw!")
      }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);