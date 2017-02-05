document.addEventListener("DOMContentLoaded", function() {
	console.log('DOM Loaded');

// user select gameboard dimension // possible feature
// initialize board
var gameBoardArr = []; // keep track of playable squares
var gameBoard = document.getElementById('gameBoard');
var playerTurn = 0;
var gameBoardDimension
getBoardSize();

// function to read boardsize and call initialize
	// requires player count
function getBoardSize() {
	//initialize playerSettings
	var boardThree = document.getElementById('3').addEventListener('click', submitSetting);
	var boardFour  = document.getElementById('4').addEventListener('click', submitSetting);
	var boardFive  = document.getElementById('5').addEventListener('click', submitSetting);
	//click event listen for button submission
		//disable click event after one is selected

	
}
function submitSetting() {
	gameBoardDimension = parseInt(this.id);
	console.log(gameBoardDimension)
	initialize();

}

// functions
function initialize() {
	gameBoardArr = [];
	for (var i = 0; i < gameBoardDimension; i++) {
		gameBoardArr.push([]);
		for (var j = 0; j < gameBoardDimension; j++) {
			gameBoardArr[i].push({player: null});
			//add square to game board
		}
		addRow(i);
	}
	var HTMLResetBtn = document.getElementById('resetBtn').addEventListener('click', resetBtn);
}
//console.log(gameBoardArr); //debug code

// adds row of squares to the board
function addRow(rowNumber) {
	var divRow = document.createElement('div');
	divRow.className = 'divRow';
	gameBoard.appendChild(divRow);
	
	addSquare(rowNumber, divRow);
}
	// change this to add squares function
function addSquare(rowNumber, divRow) {
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
	
	checkIfWon();
	// update playable field
	this.removeEventListener('click', clickSquare);


	// add check here for player turn/who clicked
	if (playerTurn === 0) {
		this.className += ' x-block blocks';
		switchPlayerTurn();
	} else if (playerTurn === 1) {
		this.className += ' o-block blocks';
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
	if (checkVerticalSquares() || checkHorizontalSquares() || 
		checkUpSlopeSquares()  || checkDownSlopeSquares()) {
		gameOver();
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
	console.log('gameOver') //debug code

	// activate game over square

}

// reset function
function resetBtn() {
	removeOldBoard();
	initialize();
	//event listener if game is still in play and player hovers over button
}
function removeOldBoard() {
	var rowsToRemove = document.getElementsByClassName('divRow');
	while (rowsToRemove.length > 0){
		rowsToRemove[0].parentNode.removeChild(rowsToRemove[0]);
	}
}












});


