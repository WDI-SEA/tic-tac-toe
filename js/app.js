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

		//add event listener for player/click
		aSquare.addEventListener('click', function() {
			console.log('square clicked');
			// add check here for player clicked
			// tie the square to the gameboardArr
			this.style.backgroundColor = 'red';
		})
		divRow.appendChild(aSquare);
	}
}
// box is clicked

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
	// function checkVerticalSquares() {
	// 	for (var i = 0; i < gameBoardArr; i++) {
	// 		for (var j = 0; j < gameBoardArr; j++) {
	// 			if (gameBoardArr[i][i].filled) {

	// 			}
	// 			else{
	// 				return false
	// 			}
	// 			return true;
	// 		}
	// 	}
	// }
// horizontal win condition

// diagonal win condition

//game win conditions



// 



});