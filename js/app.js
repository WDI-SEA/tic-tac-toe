//Get Square Elements, Reset Button from DOM, put in var
var squares = document.querySelectorAll(".squares");
var playerName = document.getElementById("player");
var resetButton = document.getElementById("reset");

// var name1 = prompt("What is player 1's name?");
// var name2 = prompt("What is player 2's name?");

// Keep track of what squares have what letter. X array, O array.
// To be used for game winning?
// var squaresWithO = [];
// var squaresWithX = [];

//Keep track of # of turns
var turns = 0;


//Adds listener for tiles for the placepiece function to control the game. 
var pieceListeners = function() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", placePiece);
  };
}

// Start New Game, sets turns to 0, shows who is up next
// grabs squares.length and passes it into clearBox that many times to clear board.
// readies game listener thru pieceListeners()
// readies reset listener thru resetGame()
var startNewGame = function() {
	turns = 0;
	playerName.textContent = "Player 1's Turn";
	for (var i = 0; i < squares.length; i++) {
		clearBox(i);
    };
    pieceListeners();
    resetGame();
  };

// turns++ when called on square click then
// if p1 turn, on click insert "O", push to O array,
// if p2, onclick insert "x", push to X array
var placePiece = function() {
  turns++;
  if (turns % 2 === 1) {
    this.textContent = "O";
    this.style.color = "black";
    // squaresWithO.push(this);
    this.removeEventListener("click", placePiece);
    playerName.textContent = "Player 2's Turn";
  } else {
    this.textContent = "X";
    this.style.color = "red";
    // squaresWithX.push(this);
    this.removeEventListener("click", placePiece);
    playerName.textContent = "Player 1's Turn";
  }
};

// Takes in square.length as param, iterates textContent 9 times 
// applied to id in squares div
var clearBox = function(number) {
    return document.getElementById("sq" + number).textContent = "";
};

// Adds event listener on reset button, on click starts new game
var resetGame = function() {
  resetButton.addEventListener("click", startNewGame);
};


//StartNewGame on load initializes the game.
startNewGame();

