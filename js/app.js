console.log("Hello frontend");

// selectors
var cells = document.querySelectorAll(".cell");
var resetBtn = document.querySelector(".reset");
var turnIndicator = document.querySelector(".turn");
var spanX = document.querySelector(".score-x");
var spanO = document.querySelector(".score-o");

// win combos
var winCombos = [
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
// var gameOver = false;
var xScore = 0;
var oScore = 0;

// FUNCTIONS

// endGame
var endGame = function() {
  // remove all click listener
  // display winner, draw
  // bonus: add score
  cells.forEach(function(cell) {
    cell.removeEventListener("click", clickCell);
  });
  updateScore();
  isPlayerOne = !isPlayerOne; // swap players game
};

// declareWin
var declareWin = function() {
  if (movesCount > 8) {
    console.log("Tie");
    isPlayerOne = !isPlayerOne; // swap players game
    endGame();
  } else if (isPlayerOne) {
    console.log("Player One Won");
    xScore++;
    endGame();
  } else if (!isPlayerOne) {
    console.log("Player Two Won");
    oScore++;
    endGame();
  }
};

// checkWin
// * @param: markX or markO
var checkWin = function(arr) {
  if (arr.length >= 3) {
    // check if marker array === one of the win combo[array]
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

// updateTurn
var updateTurn = function() {
  if (isPlayerOne) {
    turnIndicator.textContent = "X turn";
  } else {
    turnIndicator.textContent = "O turn";
  }
};

// updateScore
var updateScore = function() {
  spanX.textContent = `${xScore}`;
  spanO.textContent = `${oScore}`;
};

// clickCell, event callback
var clickCell = function() {
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
  updateTurn();
  movesCount++;
  if (movesCount > 8) declareWin(); // if last move
};

// initGame
var initGame = function() {
  // reset variables
  movesCount = 0;
  markX.length = 0;
  markO.length = 0;
  // gameOver = false;

  // reset cell content
  // add click listeners to cells
  cells.forEach(function(cell) {
    cell.textContent = "";
    cell.addEventListener("click", clickCell);
  });

  updateTurn();
  resetBtn.addEventListener("click", initGame);
};

initGame();
