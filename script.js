

const usName = document.querySelector("#user-name");

window.onload = function() {
  openPrompt();
};

function submitPrompt() {
  var userInput = document.getElementById('custom-input').value;
  document.getElementById('overlay').style.display = 'none';
  usName.innerHTML = userInput ;
}
function openPrompt() {
  document.getElementById('overlay').style.display = 'flex';
}
let userScore = 0;
let compScore = 0;
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");
const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");

choices.forEach((ch)  => {
    ch.addEventListener("click" , () => {
        const userChoice = ch.getAttribute("id");
       playGame(userChoice);
       playSound(userChoice);
    });
  
});

function playSound(name) {
  var audio = new Audio( name + ".mp3");
  audio.play();
}
function drawGame() {
    msg.innerHTML = "Game Draw , Play Again !";
}
const gameObj = ["rock" , "paper" , "scissor"];

function genarateCompChoice() {
    const compChoice = Math.floor(Math.random() *3);

    console.log(gameObj[compChoice]);
    return gameObj[compChoice];
}

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genarateCompChoice();

  if (userChoice === compChoice) {
 
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      if (compChoice === "paper") {
        userWin = false;
      }
      else{
        userWin = true;
      }
    } else if (userChoice === "paper") {
      if (compChoice === "scissor") {
        userWin = false;
      } else {
        userWin = true;
      }
     } else
     {
      if (compChoice === "rock") {
        userWin = false;
      } else {
        userWin = true;
      }
    }
    showWinner(userWin, userChoice, compChoice);
  }
}
const showWinner = (userWin, userChoice, compChoices) => {

  if (userWin) {
       userScore++;
       userScorePara.innerText = userScore;
       msg.innerText = `You win! Your's : ${userChoice} | Beats | Computer's : ${compChoices}`;
       msg.style.backgroundColor = "green";
       let w = "win";
       playSound(w);
     } else {
      let l = "lose";
       compScore++;
       compScorePara.innerText = compScore;
       msg.innerText = `You lost. Computer's : ${compChoices} | Beats  | Your's : ${userChoice}`;
       msg.style.backgroundColor = "red";
       playSound(l);
     }
   };
