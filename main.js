function getComputerChoice(){
    let radnomNumber = Math.floor( Math.random() * 4 );
    let computerChoice
    if ( radnomNumber === 1 ){
        computerChoice = "rock";
    } else if( radnomNumber === 2){
        computerChoice = "paper";
    } else{
        computerChoice = "scissor";
    }
    return computerChoice
}
console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt( "Rock, Paper or Scissors" ).toLowerCase();
    return humanChoice;
}
console.log(getHumanChoice());

let humanScore = 0
let computerScore = 0