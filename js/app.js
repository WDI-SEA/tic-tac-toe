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
		addRow(i);
	}
}
console.log(gameBoardArr); //debug code

// adds row of squares to the board
function addRow(rowNumber) {
	var divRow = document.createElement('div');
	divRow.className = 'divRow';
	gameBoard.appendChild(divRow);

	// change this to add squares function
	for (var i = 0; i < gameBoardDimension; i++) {
		var aSquare = document.createElement('div');
		aSquare.className = 'square';
		aSquare.id = rowNumber + "," + i;
		//add event listener for player/click
		aSquare.addEventListener('click', clickSquare)
		divRow.appendChild(aSquare);
	}
}
// box is clicked 
function clickSquare() {

	//updates square clicked to gameBoardArr
	var squareId = this.id.split(',');
	var squareSelected = gameBoardArr[squareId[0]][squareId[1]];
	console.log('square ' + squareId + ' clicked'); // debug code
	console.log(squareSelected.filled = true); // debug code

	// update playable field
	this.removeEventListener('click', clickSquare);

	// add check here for player turn/who clicked
	if (playerTurn === 0) {
		this.style.backgroundColor = 'red';
		switchPlayerTurn();

	} else if (playerTurn === 1) {
		this.style.backgroundColor = 'blue';
		switchPlayerTurn();
	}
	console.log('player', playerTurn + 1, '\'s turn'); // debug code
}

function switchPlayerTurn(currentPlayer) {
	playerTurn = (playerTurn + 1) % 2;
}
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