// global variable
let turn = 1;
let currentPlayer = "x";
let playerOneSelections = [];
let playerTwoSelections = [];
let gameOver = false;
let lastClicked = ''; //stores box clicked > switch to a number value


// gloabl selector of the boxes
var positions = document.querySelectorAll("#gameBoard div");
console.log(positions);
//winning combinations
var winArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]; //all the possible win combos


// removeListener();

// ====== a better way of getting and setting selectors ========//
function load() {
    boxListener();
    // this function is called at the bottom
}

// listens for boxes clicked
function boxListener() {
     // grab all the boxes to add listeners
     var positions = document.querySelectorAll(".box");
     // check for positions
     for (var i = 0; i < positions.length; i++) {
         positions[i].addEventListener('click', boxClicked);
     }
 }

// SET LISTENER FOR EACH BOX WHEN CLICKED 
function boxClicked(value) {
    if (currentPlayer === "X") {
        this.classList.add('imageX');
        console.log(`player 2 clicked `);
        currentPlayer = "O";
    } 
    else {
        this.classList.add('imageO');
        console.log(`player 1 clicked ` );
        currentPlayer = "X"
    }
    // Increment turn counter
    turn+= 1
    // this.removeListener('click', boxClicked);
}

// remove box listener after clicked
// function removeListener() {
//     var positions = document.querySelectorAll(".box");
//     for (var i = 0; i < positions.length; i++) {
//         positions[i].removeEventListener('click', boxClicked);
//     }
// }

// create a function checks for a win (think about using class.contains)
function gameWin() {

}

// create a function sets the game-over event
function isGameOver() {
	document.getElementById("message").textContent = "Play again?"
}

load();
