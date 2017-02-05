document.addEventListener("DOMContentLoaded", function() {
	console.log('DOM Loaded');

// user select gameboard dimension // possible feature
// initialize board
var gameBoardDimension = 3;
var gameBoardArr = []; // keep track of playable squares
var gameBoard = document.getElementById('gameBoard');
var playerTurn = 0;

generateBoard();

// generate the board in a 2d Array2 -done
function generateBoard() {
	for (var i = 0; i < gameBoardDimension; i++) {
		gameBoardArr.push([]);
		for (var j = 0; j < gameBoardDimension; j++) {
			gameBoardArr[i].push({player: null, filled: false});
			//add square to game board
		}
		addRow(i);
	}
}
//console.log(gameBoardArr); //debug code

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
	squareSelected.player = playerTurn;
	//console.log('selected square: ' + this.id + ' belongs to ' + squareSelected.player); //debug code
	//console.log('square ' + squareId + ' clicked'); // debug code
	//console.log(squareSelected.filled = true); // debug code

	checkIfWon();
	// update playable field
	this.removeEventListener('click', clickSquare);


	// add check here for player turn/who clicked
		//need to change background color to a document.add x or o class
	if (playerTurn === 0) {
		this.style.backgroundColor = 'red';
		switchPlayerTurn();
	} else if (playerTurn === 1) {
		this.style.backgroundColor = 'blue';
		switchPlayerTurn();
	}
	//console.log(gameBoardArr); // debug code
}

function switchPlayerTurn() {
	playerTurn = (playerTurn + 1) % 2;
	console.log('player', playerTurn + 1, '\'s turn'); // debug code
}

// check win condition

	function checkIfWon() {
		// if all of column i is of currentPlayer, then game wins 
		
		if (checkVerticalSquares()) {
			console.log("vertical Win for Player" + (playerTurn + 1));//debug code
			gameOver();
		} else if (checkHorizontalSquares()) {
			console.log("Horizontal Win for Player" + (playerTurn + 1));//debug code
		} else if (checkUpSlopeSquares()) {
			console.log("Diagonal Win for Player" + (playerTurn + 1));//debug code
		} else if (checkDownSlopeSquares()) {
			console.log("Diagonal Win for Player" + (playerTurn + 1));//debug code
		}
	}
// vertical win condition
function checkVerticalSquares() {
	var winCtr = 0;
	for (var i = 0; i < gameBoardArr.length; i++) {
		for (var j = 0; j < gameBoardArr.length; j++) {
			if (gameBoardArr[j][i].player === playerTurn) {
				winCtr++;
			}
		}
		if (winCtr === gameBoardDimension) {
			return true;
		}
		else {
			winCtr = 0;
		}
	}
}
// horizontal win condition
function checkHorizontalSquares() {
	var winCtr = 0;
	for (var i = 0; i < gameBoardArr.length; i++) {
		for (var j = 0; j < gameBoardArr.length; j++) {
			if (gameBoardArr[i][j].player === playerTurn) {
				winCtr++;
			}
		}
		if (winCtr === gameBoardDimension) {
			return true;
		} else {
			winCtr = 0;
		}
	}
}
// diagonal win condition
function checkUpSlopeSquares() {
	//slope down check
	var winCtr = 0;
	for (var i = 0; i < gameBoardDimension; i++) {
		if (gameBoardArr[i][i].player === playerTurn) {
			winCtr++;
		} else {
			winCtr = 0;
		}
	}
	if(winCtr === gameBoardDimension){
		return true;
	}
}

function checkDownSlopeSquares() {
	//slope up check
	var winCtr = 0;
	var offsetCtr = gameBoardDimension - 1;
	for (var i = 0; i < gameBoardDimension; i++) {
		if (gameBoardArr[i][offsetCtr].player === playerTurn) {
			winCtr++;
			offsetCtr--;
		} else {
			winCtr = 0;
		}
	}
	if(winCtr === gameBoardDimension){
		return true;
	}
}
// game win conditions
function gameOver() {
	//disable further clicking
	var allSquares = document.getElementsByClassName('square');
	for (var i = 0; i < allSquares.length; i++){
		allSquares[i].removeEventListener('click', clickSquare);
	}
}




// reset function

});