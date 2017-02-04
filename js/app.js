document.addEventListener("DOMContentLoaded", function() {
	console.log('DOM Loaded');

// user select gameboard dimension // possible feature
// initialize board
var gameBoardDimension = 3;
var gameBoardArr = [];
var HTMLGameBoard = document.getElementById('gameBoard');

for (var i = 0; i < gameBoardDimension; i++) {
	for (var j = 0; j < gameBoardDimension; j++) {
		gameBoardArr.push({value: null, filled: false});
		//add square to game board
	}
}

function addSquare() {
	var aSquare = document.createElement('div');
	aSquare.className = 'square';
	HTMLGameBoard.appendChild(aSquare);
}
// check player turn

// check win condition

// update allowed moves

// handle allowance for multiple clicks

// vertical win condition

// horizontal win condition

// diagonal win condition





// 



});