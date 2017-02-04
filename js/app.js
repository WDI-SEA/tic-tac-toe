document.addEventListener("DOMContentLoaded", function() {
	console.log('DOM Loaded');

// user select gameboard dimension // possible feature
// initialize board
var gameBoardDimension = 3;
var gameBoardArr = []; // keep track of playable squares
var gameBoard = document.getElementById('gameBoard');
var playerTurn = 0;

generateBoard();

// generate the board
function generateBoard() {
	for (var i = 0; i < gameBoardDimension; i++) {
		gameBoardArr.push([]);
		for (var j = 0; j < gameBoardDimension; j++) {
			gameBoardArr[i].push({value: null, filled: false});
			//add square to game board
		}
		addRow();
	}
}
console.log(gameBoardArr);

// adds row of squares to the board
function addRow() {
	var divRow = document.createElement('div');
	divRow.className = 'divRow';
	gameBoard.appendChild(divRow);

	for (var i = 0; i < gameBoardDimension; i++) {
		var aSquare = document.createElement('div');
		aSquare.className = 'square';
		divRow.appendChild(aSquare);
	}
}

// check player turn

// check win condition

// update allowed moves

// handle allowance for multiple clicks
	// in gameBoardArr
// vertical win condition
	// function VerticalWin(player, row) {
	// 	// if all of column i is of currentPlayer, then game wins 
	// 	if (/*helper function*/) {
	// 		//player wins
	// 	}
	// 	else {
	// 		return
	// 	}
	// }
	function checkVerticalSquares() {
		for (var i = 0; i < gameBoardDimensions; i++) {
				// if filled = true for the entire row, return true, else return false
		}
	}
// horizontal win condition

// diagonal win condition

//game win conditions



// 



});