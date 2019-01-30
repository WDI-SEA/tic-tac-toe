// A user should be able to click on different squares to make a move.
// Every click will alternate between marking an X and O
// Upon marking of an individual cell, use JavaScript to add a class to each cell to display the separate players.
// A cell should not be able to be replayed once marked.
// You should not be able to click remaining empty cells after the game is over.
// Add a reset button that will clear the contents of the board.
// Display a message to indicate which turn is about to be played.
// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.
// Have Fun - The best way to learn is by playing with code. Let creativity guide you and try some experiments with JS and CSS and see what you can do.

// State Variables
var playerOne = "X"
var playerTwo = "0"
var firstMove
var gameBoard
var checkWin
var gameWon
var startGame
var declareWinner
var turnCount = 1;
var winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

var circle = document.querySelectorAll('.circle');
startGame();

function startGame() {
    document.querySelector(".endgame").style.visibility = "hidden";
gameBoard = Array.from(Array(9).keys());
for (var i = 0; i < circle.length; i++) {
    circle[i].innerText = '';
    circle[i].style.removeProperty('background-color');
    circle[i].addEventListener('click', turnClick, false);
  }
}
// Switch Players

function turnClick(square) {
    var player; 
    if (turnCount % 2 === 1) {
        player = playerOne //odd
    } else {
        player = playerTwo //even
    }        
    turnCount++
    turn(square.target.id, player) 
}

function turn(squareId, player) {
    gameBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
	let gameWon = checkWin(gameBoard, player)
	if (gameWon) gameOver(gameWon)
}

function checkWin(board, player) {
	let plays = board.reduce((a, e, i) => // a is the accumulator, e is the element, i is the index
		(e === player) && a.concat(i) || a, []); // if the elemnt equals the player, add accumulator to the index array
    let gameWon = null;
	for (let [index, win] of winCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) { //go through every element in the win
			gameWon = {index: index, player: player};
			break;
		}
      }  
    return (gameWon);
  }

  function gameOver (gameWon) {
      for ( let index of winCombos[gameWon.index]) {
          document.getElementById(index).style.backgroundColor =
          gameWon.player == playerOne && "white" || "teal";
      }
      for (var i = 0; i < circle.length; i++ ) {
          circle[i].removeEventListener('click', turnClick, false)
      } 
  declareWinner(gameWon.player == playerOne && "X wins!" || "O wins!");
}

function declareWinner(who) {
	document.querySelector(".endgame").style.visibility = "visible";
	document.querySelector(".endgame .text").innerText = who;
}

function emptySquares() {
	return gameBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
	return emptySquares()[0];
}

function checkTie() {
	if (emptySquares().length == 0) {
		for (var i = 0; i < circles.length; i++) {
			circle[i].style.backgroundColor = "white";
			circle[i].removeEventListener('click', turnClick, false);
		}
		declareWinner("Tie Game!")
		return true;
	}
    return false
}
