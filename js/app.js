console.log('Hello frontend');

// SELECTORS
var gameBoard = document.getElementById('game-board');

var topLeft = document.getElementById('top-left');
var topMiddle = document.getElementById('top-middle');
var topRight = document.getElementById('top-right');

var middleLeft = document.getElementById('mid-left');
var middleMiddle = document.getElementById('mid-middle');
var middleRight = document.getElementById('mid-right');

var bottomLeft = document.getElementById('bot-left');
var bottomMiddle = document.getElementById('bot-middle');
var bottomRight = document.getElementById('bot-right');

// Add function that checks selected box
topLeft.addEventListener('click', checkedBox);
topMiddle.addEventListener('click', checkedBox);
topRight.addEventListener('click', checkedBox);

middleLeft.addEventListener('click', checkedBox);
middleMiddle.addEventListener('click', checkedBox);
middleRight.addEventListener('click', checkedBox);

bottomLeft.addEventListener('click', checkedBox);
bottomMiddle.addEventListener('click', checkedBox);
bottomRight.addEventListener('click', checkedBox);

// Variables
let playerOne = 0;
let playerTwo = 0;
let currentPlayer = "x";
let gameOver = false;



function checkedBox() {
    // this.classList.add('imageX');
    if (currentPlayer === "X") {
        this.classList.add('imageX');
        playerOne+= 1;
        currentPlayer = "O";
    } else {
        this.classList.add('imageO');
        playerTwo+= 1;
        currentPlayer = "X"
    }
    
    this.removeEventListener('click', checkedBox);
    console.log("P1 turns",playerOne);
    console.log("P2 turns",playerTwo);
    }
    function removeBox() { 
}

function isGameOver() {

}

// (.includes) for array method to loop through a for Loop 