/* ------------------------------Game State / Global Variables -------------------------------------- */


let player1 = null;
let player2 = null;

let gameOn = true;

let squaresWithX = [];
let squaresWithO = [];

// let squares = document.querySelectorAll(".squares");

/*------------------------------Choose Player and Reset Variable ---------------------------------------*/

// var xButton = document.getElementById("x-button");
// var oButton = document.getElementById("o-button");
var rButton = document.getElementById("r-button");

/* ---------------------------- Variables for Messaging Players ---------------------------------------*/

var message = document.getElementById("message-text");
var initialMessage = message.innerText = '"Always Play To Win"\n"X" Goes First';
var winMessageX = message.innerText = '"X" Wins!!!';
var winMessageO = message.innerText = '"O" Wins!!!';
var tieGameMessage = message.innerText = '"Cat\'s Game" You are tied!';
var xTurn = message.innerText = 'Make Another Move "X"'; 
var oTurn = message.innerText = 'Make A Move "O"';


var allSquares = document.querySelectorAll(".squares");


console.log(allSquares);
console.log(message);

// xButton.addEventListener('click', function(e) {
//     xButton.style.backgroundColor = "#b33939";

// });

rButton.addEventListener('click', function(e) {
  // rButton.style.backgroundColor = "#b33939";
  message.innerText = initialMessage;

});

// for (let square in squares) {
//     square.addEventListener("click", function (e) {
//         square.style.backgroundColor = "yellow";
//         square.firstChild.innerText = 'X';
//     })
// };


document.querySelectorAll('.squares').forEach( square => {
    square.addEventListener('click', function (e) {
        square.style.backgroundColor = "yellow";
        if (message.innerText === initialMessage || message.innerText === xTurn) {
         square.firstChild.innerText = 'X';
         message.innerText = oTurn;
        } else {
          square.firstChild.innerText = 'O';
          message.innerText = xTurn;
        }
        
    })
  })

console.log(player1);
console.log(initialMessage)
console.log(xTurn);

