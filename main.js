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

let humanScore = 0;
let computerScore = 0;


const playerScore = document.querySelector("#player-score");
const cpuScore = document.querySelector("#cpu-score")
const option = document.querySelector("#options");

playerScore.textContent = `${humanScore}`;
cpuScore.textContent = `${computerScore}`;


option.addEventListener("click", (e)=> {
  let target = e.target;
  let playerSelection
  if (humanScore < 5 && computerScore < 5){
  switch (target.id){
    case "rock":
      playerSelection = "rock";
    break;
    case "paper":
      playerSelection = "paper";
    break;
    case "scissor":
      playerSelection = "scissor";
    break;
  }
  

if (target.id == "rock" || target.id == "paper" || target.id == "scissor"){
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  showScore(humanScore, computerScore);
  ShowWinner();
}
  } else {
    alert("The game ended. Please, reset the game.")
  }
  
})

const result = document.querySelector('#result');

function playRound(humanImput, computerImput){
    if ( humanImput === "rock" && computerImput === "paper"){
        computerScore = ++computerScore;
        result.textContent = "The CPU choose paper. You lost the round!";
    } else if ( humanImput === "rock" && computerImput === "scissor" ) {
        humanScore = ++humanScore;
        result.textContent = "The CPU choose scissor. You won the round!";
    } else if ( humanImput === "paper" && computerImput === "rock" ) {
        humanScore = ++humanScore;
        result.textContent = "The CPU choose rock. You won the round!";
      } else if ( humanImput === "paper" && computerImput === "scissor"){
        computerScore = ++computerScore;
        result.textContent = "The CPU choose scissor. You lost the round!";
      }else if ( humanImput === "scissor" && computerImput === "rock"){
        computerScore = ++computerScore;
        result.textContent = "The CPU choose rock. You lost the round!";
      } else if ( humanImput === "scissor" && computerImput === "paper"){
        humanScore = ++humanScore;
        result.textContent = "The CPU choose paper. You won the Round!";
      }else{
        result.textContent = `The CPU also choose ${humanImput}. It's a draw!`;
      }
}

function showScore(score1, score2){
  playerScore.textContent = `${score1}`;
  cpuScore.textContent = `${score2}`;  
}


const winnerText = document.querySelector(".game-announcement");

function ShowWinner(){
if ( humanScore == 5 ){
  winnerText.textContent = "You Won the game!";
} else if ( computerScore == 5 ){
  winnerText.textContent = "The CPU Won the game";
}
}

//const showPlayerChoice = document.querySelector("#human-choice");
//const showCpuChoice = document.querySelector("#cpu-choice");

//function showChoices (choice1, choice2){
//showPlayerChoice.textContent = choice1;
//showCpuChoice.textContent = choice2;
//}


const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", ()=> {
  humanScore = 0;
  computerScore = 0;
  showScore(humanScore, computerScore);
  //showPlayerChoice.textContent = " ";
  //showCpuChoice.textContent = " ";
  winnerText.textContent = " ";
  result.textContent = " ";
})

//function playGame (){
//let humanSelection = getHumanChoice();
//let computerSelection = getComputerChoice();
//playRound(humanSelection, computerSelection);
//}

//for ( let i = 1; i < 6; i++ ){
//playGame();
//}

//if ( computerScore > humanScore){
//    console.log("You lost the game!");
// } else if ( computerScore > humanScore ) {
//    console.log("You Won the Game!");
// } else{
//    console.log("It's a draw!")
// }