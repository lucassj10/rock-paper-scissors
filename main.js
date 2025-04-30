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
    console.log(computerChoice)
    return computerChoice;
}


const option = document.querySelector("#options");

option.addEventListener("click", (e)=> {
  let target = e.target;
  let playerSelection

  switch (target.id){
    case "rock":
      playerSelection = "Rock";
    break;
    case "paper":
      playerSelection = "paper";
    break;
    case "scissor":
      playerSelection = "scissor";
    break;
  }
  
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection)

})

function playRound(humanImput, computerImput){
    if ( humanImput === "rock" && computerImput === "paper"){
        computerScore = ++computerScore;
        return console.log("You lose! Paper beats rock!");
    } else if ( humanImput === "rock" && computerImput === "scissor" ) {
        humanScore = ++humanScore;
        return console.log("You win! Rock beats scissors!");
    } else if ( humanImput === "paper" && computerImput === "rock" ) {
        humanScore = ++humanScore;
        return console.log("You win! Paper beats rock!");
      } else if ( humanImput === "paper" && computerImput === "scissor"){
        computerScore = ++computerScore;
        return console.log("You lose! Scissor beats paper!")
      }else if ( humanImput === "scissor" && computerImput === "rock"){
        computerScore = ++computerScore;
        return console.log("You lose! Rock beats scissor!")
      } else if ( humanImput === "scissor" && computerImput === "paper"){
        humanScore = ++humanScore;
        return console.log("You win! Scissor beats paper!")
      }else{
        return console.log("It's a draw!")
      }
}

let humanScore = 0;
let computerScore = 0;


//function playGame (){
//let humanSelection = getHumanChoice();
//let computerSelection = getComputerChoice();
//playRound(humanSelection, computerSelection);
//}

//for ( let i = 1; i < 6; i++ ){
//playGame();
//}

if ( computerScore > humanScore){
    console.log("You lost the game!");
 } else if ( computerScore > humanScore ) {
    console.log("You Won the Game!");
 } else{
    console.log("It's a draw!")
 }