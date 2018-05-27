// Global Variables
var gameOver = false;
var moveCount = 1;
var gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var currentPlayer = 'X';

var resetGame = function() {
	gameOver = false;
	moveCount = 1;

  var gameSquares = document.getElementById('game-board').children;
  
  // clear all the squares, data-id's, and winning background color
  for(let i = 0; i < gameSquares.length; i++) {
  	gameSquares[i].textContent = '';
  	gameSquares[i].setAttribute('data-id','');
  	gameSquares[i].style.backgroundColor = 'transparent';
  }
  initGame();
};

var checkForWin = function(squareInPlay) {
	// get classes associated with square that was clicked
	var classesInPlay = squareInPlay.classList;

  for (let i = 0; i < classesInPlay.length; i++) {
    var winVar = 0;
    // get all board elements that have the i'th class of the clicked square
    var classesOnBoard = document.getElementsByClassName(classesInPlay[i]);

    // iterate over board elements to see if they have the matching letter in them
    for(let i = 0; i < classesOnBoard.length; i++) {
    	if(classesOnBoard[i].textContent === currentPlayer) {
        winVar++;
    	}
    }

    // if all three boxes of a given class have same letter in them, it's a win!
    if(winVar === 3) {
    	gameOver = true;
    	// highlight the squares that won the game
    	for(let i = 0; i < classesOnBoard.length; i++) {
        classesOnBoard[i].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
      }
    }

    if(gameOver) {
      // make all squares 'played' so that users cannot continue to click after a win
      var allSquares = document.getElementById('game-board').children;

      for(let i = 0; i < allSquares.length; i++) {
        allSquares[i].setAttribute('data-id', 'played');
      }

      // Display which player is the winner
      document.getElementById('tag-line').textContent = "GAME OVER. Player " + currentPlayer + " wins!";
    }
  }
};

var clickSquare = function() {
	// execute if the square hasn't been played yet
	if(this.getAttribute('data-id') !== 'played') {
		// mark the clicked square as played
    this.setAttribute('data-id','played');
    this.textContent = currentPlayer;

    if(moveCount >= 5) {
    	checkForWin(this);
    }

    moveCount++;

    if (moveCount === 10 && gameOver === false) {
    	gameOver = true;
    	document.getElementById('tag-line').textContent = "GAME OVER. Nobody won...";
    } 
    
    if(!gameOver) {
      // change to other player
      if(currentPlayer === 'X') {
      	currentPlayer = 'O';
      	document.getElementById('player-status').textContent = "Player O's turn"
      } else {
      	currentPlayer = 'X';
      	document.getElementById('player-status').textContent = "Player X's turn"
      }
      document.getElementById('move-count').textContent = "Move: " + moveCount;
    }
  }
};

var initGame = function() {
  document.getElementById('tag-line').textContent = "PLAY FOR WORLD DOMINATION";
  document.getElementById('move-count').textContent = "Move: " + moveCount;
  currentPlayer = 'X';
  document.getElementById('player-status').textContent = "Ready Player X..."
};

document.addEventListener("DOMContentLoaded", function() {
  // add Event Listeners and initialize the game
  for(let square in gameBoard) {
    document.getElementById(gameBoard[square]).addEventListener('click', clickSquare);
  }

  document.getElementById('reset').addEventListener('click', resetGame);
  initGame();
});

