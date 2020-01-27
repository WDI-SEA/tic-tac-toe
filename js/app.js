/* ------------------------------Game State / Global Variables -------------------------------------- */


let player1 = null;
let player2 = null;

let squaresWithX = [];
let squaresWithO = [];

let squares = document.querySelectorAll(".squares");

/*------------------------------Choose Player and Reset Variable ---------------------------------------*/

var xButton = document.getElementById("x-button");
var oButton = document.getElementById("o-button");
var rButton = document.getElementById("r-button");

/* ---------------------------- Variables for Messaging Players ---------------------------------------*/

var message = document.getElementById("message-text");
var initialMessage = message.innerText = '"Always Play To Win"';
var winMessageX = message.innerText = '"X" Wins!!!';
var winMessageO = message.innerText = '"O" Wins!!!';
var tieGameMessage = message.innerText = '"Cat\'s Game" You are tied!';


var allSquares = document.querySelectorAll(".squares");


console.log(allSquares);
console.log(message);

xButton.addEventListener('click', function(e) {
    xButton.style.backgroundColor = "#b33939";

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
         square.firstChild.innerText = 'X';
    })
  })

console.log(player1);

