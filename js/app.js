document.addEventListener("DOMContentLoaded", function() {

var gameBoard = document.getElementById('gameBoard');
var boardThree = document.getElementById('3');
var boardFour  = document.getElementById('4');
var boardFive  = document.getElementById('5');
var announceGameover = document.getElementById('gameover-text');
var announceTurn = document.getElementById('gameSettings').getElementsByTagName('h2');
var themeSelectBox = document.getElementById('theme-select');
var bodyBackground = document.getElementsByTagName('body')[0];
var gameSettingBox = document.getElementById('gameSettings');
var gameBoardArr = []; // keep track of playable squares
var gameBoardDimension = 0;
var playerTurn = 0;
var playerOneTheme = '';
var playerTwoTheme = '';


selectTheme();


function selectTheme() {
	document.getElementById('theme-select').style.visibility = 'visible';
	document.getElementById('submitTheme').addEventListener('click', setTheme);
}
function setTheme() {
	var themeSelection = document.getElementsByName('theme');
	for (var i = 0; i < themeSelection.length; i++) {
		if (themeSelection[i].checked) {
			if (themeSelection[i].value === 'starWars') {
				document.getElementById('r2').play();
				setTimeout(setStarwarsTheme, 1000);
			} else if (selection[i].value === 'pokemon') {
				setTimeout(setPokemonTheme, 1000);
				document.getElementById('pikaSound').play();
			}
		} 
	}
	//  change visibility of text boxs
	var HTMLResetBtn = document.getElementById('resetBtn').addEventListener('click', resetBtn);
	getBoardSize();
}
function hideThemeSelect() {
	themeSelectBox.style.visibility = 'hidden';
	gameSettingBox.style.visibility = 'visible';	
}
function setStarwarsTheme() {
	playerOneTheme = 'rebel-theme';
	playerTwoTheme = 'empire-theme';
	bodyBackground.style.backgroundImage = "url('./img/starWars.jpg')";
	hideThemeSelect();
}
function setPokemonTheme() {
	playerOneTheme = 'pikachu-theme';
	playerTwoTheme = 'meowth-theme';
	bodyBackground.style.backgroundImage = "url('./img/stadium.jpg')";
	hideThemeSelect();
}
function getBoardSize() {
	boardThree.addEventListener('click', initializeBoard);
	boardFour.addEventListener('click', initializeBoard);
	boardFive.addEventListener('click', initializeBoard);
}
function initializeBoard() {
	gameBoardDimension = parseInt(this.id);
	gameBoardArr = [];
	//draws game board into 2dArray
	for (var i = 0; i < gameBoardDimension; i++) {
		gameBoardArr.push([]);
		for (var j = 0; j < gameBoardDimension; j++) {
			gameBoardArr[i].push({player: null});
		}
		addRow(i);
	}

	announceTurn[1].innerText = 'Player ' + (playerTurn + 1) +'\'s Turn';
	disableBoardSelect();
}
function disableBoardSelect() {
	boardThree.removeEventListener('click', initializeBoard);
	boardFour.removeEventListener('click', initializeBoard);
	boardFive.removeEventListener('click', initializeBoard);
}
function addRow(rowNumber) {
	var divRow = document.createElement('div');
	divRow.className = 'divRow';
	gameBoard.appendChild(divRow);
	
	addSquare(rowNumber, divRow);
}
function addSquare(rowNumber, divRow) {
	for (var i = 0; i < gameBoardDimension; i++) {
		var aSquare = document.createElement('div');
		aSquare.className = 'square';
		aSquare.id = rowNumber + "," + i;

		aSquare.addEventListener('click', clickSquare)
		divRow.appendChild(aSquare);
	}
}
function clickSquare() {
	//updates square clicked to gameBoardArr
	var squareId = this.id.split(',');
	var squareSelected = gameBoardArr[squareId[0]][squareId[1]];
	squareSelected.player = playerTurn;
	this.removeEventListener('click', clickSquare);

	assignSquare(this);
	checkIfWon();
	switchPlayerTurn();
}
function assignSquare(square) {
	if (playerTurn === 0) {
		square.className += ' ' + playerOneTheme + ' blocks';
	} else if (playerTurn === 1) {
		square.className += ' ' + playerTwoTheme + ' blocks';
	}
}
function switchPlayerTurn() {
	playerTurn = (playerTurn + 1) % 2;
	announceTurn[1].innerText = 'Player ' + (playerTurn + 1) +'\'s Turn';
}
function checkIfWon() {	
	if (checkDirectionSquares('vertical') || checkDirectionSquares('horizontal') || 
		checkSlopeSquares('up')  || checkSlopeSquares('down')) {
		gameOver();
	}
}
function checkDirectionSquares(direction) {
	var winCtr = 0;
	for (var i = 0; i < gameBoardArr.length; i++) {
		for (var j = 0; j < gameBoardArr.length; j++) {
			if (direction === 'vertical') {
				if (gameBoardArr[j][i].player === playerTurn) {
					winCtr++;
				}
			} else if (direction === 'horizontal') {
				if (gameBoardArr[i][j].player === playerTurn) {
				winCtr++;
				}
			}
		}
		if (winCtr === gameBoardDimension) {
			return true;
		} else {
			winCtr = 0;
		}
	}
}
function checkSlopeSquares(slopeDirection) {
	var winCtr = 0;
	var offsetCtr = gameBoardDimension - 1;
	for (var i = 0; i < gameBoardDimension; i++) {
		if (slopeDirection === 'up'){
			if (gameBoardArr[i][i].player === playerTurn) {
				winCtr++;
			}
		}else if (slopeDirection === 'down') {
			if (gameBoardArr[i][offsetCtr].player === playerTurn) {
				winCtr++;
				offsetCtr--;
			}
		} else {
			winCtr = 0;
		}
	}
	if(winCtr === gameBoardDimension){
		return true;
	}
}
function gameOver() {
	disableClickSquares()
	setTimeout((announceGameOver),500);
}
function disableClickSquares() {
	var allSquares = document.getElementsByClassName('square');
	for (var i = 0; i < allSquares.length; i++){
		allSquares[i].removeEventListener('click', clickSquare);
	}
}
function announceGameOver() {
	announceGameover.style.visibility = 'visible';
	var playerWon = announceGameover.getElementsByTagName('p');
	playerWon[0].innerText = "Player " + (playerTurn + 1) + " has won!";
}
function resetBtn() {
	resetSettings()
	removeOldBoard();
	selectTheme();
}
function resetSettings() {
	playerTurn = 0;
	announceTurn[1].innerText = 'Player Turn';
	announceGameover.style.visibility = 'hidden';
	gameSettingBox.style.visibility = 'hidden';
	bodyBackground.style.backgroundImage = '';
}
function removeOldBoard() {
	var rowsToRemove = document.getElementsByClassName('divRow');
	while (rowsToRemove.length > 0){
		rowsToRemove[0].parentNode.removeChild(rowsToRemove[0]);
	}
}

});


