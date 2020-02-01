/* ------------------------------Game State / Global Variables -------------------------------------- */
// Now I am on my new branch - finished product. This is where I will complete the entire game.
let player = "X";

let gameOn = true;

let arrOfMarks = document.querySelectorAll(".letter");

/*------------------------------ Reset Variable  ---------------------------------------*/

var rButton = document.getElementById("r-button");


/* ---------------------------- Variables for Messaging Players ---------------------------------------*/

var allSquares = document.querySelectorAll(".squares");
var message = document.getElementById("message-text");
var initialMessage = (message.innerText =
  '"Always Play To Win"\n"X" Goes First');
var winMessageX = (message.innerText = '"X" Wins!!!');
var winMessageO = (message.innerText = '"O" Wins!!!');
var tieGameMessage = (message.innerText = '"Cat\'s Game" You are tied!');
var xTurn = (message.innerText = 'Make A Move "X"');
var oTurn = (message.innerText = 'Make A Move "O"');


// use following for checkWin func

function checkSquares(one, two, three) {
  if (
    one.innerText === "X" &&
    two.innerText == "X" &&
    three.innerText === "X"
  ) {
    message.innerText = `"${player}" Wins!!!`;
    gameOn = false;
  } else if (
    one.innerText === "O" &&
    two.innerText == "O" &&
    three.innerText === "O"
  ) {
    message.innerText = '"O" Wins!!!';
    gameOn = false;
  }
}

// run this after every click

function checkWin() {
  checkSquares(document.getElementById('s1'), document.getElementById('s2'), document.getElementById('s3'));
  checkSquares(document.getElementById('s4'), document.getElementById('s5'), document.getElementById('s6'));
  checkSquares(document.getElementById('s7'), document.getElementById('s8'), document.getElementById('s9'));  
  checkSquares(document.getElementById('s1'), document.getElementById('s4'), document.getElementById('s7'));
  checkSquares(document.getElementById('s2'), document.getElementById('s5'), document.getElementById('s8'));
  checkSquares(document.getElementById('s3'), document.getElementById('s6'), document.getElementById('s9'));  
  checkSquares(document.getElementById('s1'), document.getElementById('s5'), document.getElementById('s9'));
  checkSquares(document.getElementById('s3'), document.getElementById('s5'), document.getElementById('s7'));
};




document.querySelectorAll(".squares").forEach(square => {
  square.addEventListener("click", function(e) {
    square.style.backgroundColor = "yellow";
    if (message.innerText === initialMessage || message.innerText === xTurn) {
      square.firstChild.innerText = "X";
      player = "O";
      message.innerText = oTurn;
    } else {
      player = "X";
      square.firstChild.innerText = "O";
      message.innerText = xTurn;
    }
  });
});

// for resetting the Xs and Os

function resetMarks() {
  for (let i = 0; i < arrOfMarks.length; i++) {
    arrOfMarks[i].innerText = "";
  }
}

//reset the color of the squares

function resetColor() {
  for (let i = 0; i < allSquares.length; i++) {
    allSquares[i].style.backgroundColor = "#ff5252";
  }
}




// main game functions still being worked on 

function gameOnNow() {
  window.onload = message.innerText = initialMessage;


  rButton.addEventListener("click", function(e) {
      resetColor();
      resetMarks();
      message.innerText = initialMessage;

  })

 
  
  }

  



gameOnNow();

console.log(allSquares);

