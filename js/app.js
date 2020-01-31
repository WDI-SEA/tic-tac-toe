/* ------------------------------Game State / Global Variables -------------------------------------- */

let player = "X";

let gameOn = true;

let arrOfMarks = document.querySelectorAll(".letter");

/*------------------------------ Reset Variable and Function ---------------------------------------*/

var rButton = document.getElementById("r-button");
rButton.addEventListener("click", function(e) {
  message.innerText = initialMessage;
});

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

window.onload = function() {
  message.innerText = 'Always Play To Win \n"X" Goes First';
};

function checkingSquares(one, two, three) {
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

document.querySelectorAll(".squares").forEach(square => {
  square.addEventListener("click", function(e) {
    square.style.backgroundColor = "yellow";
    if (message.innerText === initialMessage || message.innerText === xTurn) {
      player = "O";
      square.firstChild.innerText = "X";
      message.innerText = oTurn;
    } else {
      player = "X";
      square.firstChild.innerText = "O";
      message.innerText = xTurn;
    }
  });
});

var experiment = document.getElementById("square-1").firstChild.innerText;

function resetMarks() {
  for (item in arrOfMarks) {
    item.innerText = "";
  }
}

function resetColor() {
  for (square in allSquares) {
    square.backgroundColor = "#ff5252";
  }
}
