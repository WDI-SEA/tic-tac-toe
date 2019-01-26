console.log("Hello frontend");

// selectors
var cells = document.querySelectorAll(".cell");
// rows, cols, dias
// var row1 = document.getElementsByClassName("row1");
// var row2 = document.getElementsByClassName("row2");
// var row3 = document.getElementsByClassName("row3");
// var col1 = document.getElementsByClassName("col1");
// var col2 = document.getElementsByClassName("col2");
// var col3 = document.getElementsByClassName("col3");
// var dia1 = document.getElementsByClassName("dia1");
// var dia2 = document.getElementsByClassName("dia2");

// win combos
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// variables
var isPlayerOne = true;
var movesCount = 0;
var markX = [];
var markO = [];
var gameOver = false;

// FUNCTIONS

// endGame
var endGame = function() {
  // remove all click listnener
  //display winner, draw
  // bonus: add score
};

// declareWin
var declareWin = function() {
  if (movesCount > 8) {
    console.log("Tie");
  } else if (isPlayerOne) {
    console.log("Player One Won");
  } else if (!isPlayerOne) {
    console.log("Player Two Won");
  }
};

// checkWin
// * @param: markX or markO
var checkWin = function(arr) {
  if (arr.length >= 3) {
    //check if marker array === one of the win combo[array]
    winCombos.forEach(function(combo) {
      if (
        arr.includes(combo[0]) &&
        arr.includes(combo[1]) &&
        arr.includes(combo[2])
      ) {
        // console.log("found", arr, combo);
        declareWin();
      }
    });
  }
};

// clickCell, event callback
var clickCell = function() {
  console.log(this.id + " is clicked");
  if (isPlayerOne) {
    this.textContent = "X";
    markX.push(parseInt(this.id)); // keep track of marked x
    checkWin(markX); // check for match
    isPlayerOne = false; // change turn
  } else {
    this.textContent = "O";
    markO.push(parseInt(this.id));
    checkWin(markO);
    isPlayerOne = true;
  }
  this.removeEventListener("click", clickCell);
  movesCount++;
  if (movesCount > 8) declareWin(); // if last move
};

cells.forEach(function(cell) {
  cell.addEventListener("click", clickCell);
});

// initGame
var initGame = function() {
  // reset variables
  // reset cell content
  // add click™ listeners to cells
};
