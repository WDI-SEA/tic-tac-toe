var squareOne = 1;
var squareTwo = 2;
var squareThree = 3;
var squareFour = 4;
var squareFive =5;
var squareSix = 6;
var squareSeven = 7;
var squareEight = 8; 
var squareNine = 9;
var winner = document.querySelector('.winMessage');
var turn = 1;
addListeners();



document.addEventListener('DOMContentLoaded',function(){
//Make the gameboard clear with clickable squares
	clearBoard();
});

function reset(){
	squareOne = 1;
	squareTwo = 2;
	vsquareThree = 3;
	squareFour = 4;
	squareFive =5;
	squareSix = 6;
	squareSeven = 7;
	squareEight = 8; 
	squareNine = 9;
	turn = 0;
}

function addListeners(){
	document.querySelector('#square1').addEventListener('click', playSquare1);
	document.querySelector('#square2').addEventListener('click', playSquare2);
	document.querySelector('#square3').addEventListener('click', playSquare3);
	document.querySelector('#square4').addEventListener('click', playSquare4);
	document.querySelector('#square5').addEventListener('click', playSquare5);
	document.querySelector('#square6').addEventListener('click', playSquare6);
	document.querySelector('#square7').addEventListener('click', playSquare7);
	document.querySelector('#square8').addEventListener('click', playSquare8);
	document.querySelector('#square9').addEventListener('click', playSquare9);
}
function removeListeners(){
	document.querySelector('#square1').removeEventListener('click', playSquare1);
	document.querySelector('#square2').removeEventListener('click', playSquare2);
	document.querySelector('#square3').removeEventListener('click', playSquare3);
	document.querySelector('#square4').removeEventListener('click', playSquare4);
	document.querySelector('#square5').removeEventListener('click', playSquare5);
	document.querySelector('#square6').removeEventListener('click', playSquare6);
	document.querySelector('#square7').removeEventListener('click', playSquare7);
	document.querySelector('#square8').removeEventListener('click', playSquare8);
	document.querySelector('#square9').removeEventListener('click', playSquare9);
}

function playSquare1() {
	if(turn%2 == 0){
	//place an X gamepiece in the square
	document.querySelector('#square1').textContent = 'X';
	//Make the played square unclickable
	document.querySelector('#square1').removeEventListener('click',playSquare1);
	//store the gamepiece text as a variable
	squareOne = document.querySelector('#square1').textContent;
	turn += 1;
	//see if the player has won the game
	checkWin();
	} else {
		//place an X gamepiece in the square
		document.querySelector('#square1').textContent = 'O';
		//Make the played square unclickable
		document.querySelector('#square1').removeEventListener('click',playSquare1);
		//store the gamepiece text as a variable
		squareOne = document.querySelector('#square1').textContent;
		turn += 1;
		checkWin();
	}
}

function playSquare2() {
	if(turn%2 == 0){
	//place an X gamepiece in the square
	document.querySelector('#square2').textContent = 'X';
	//Make the played square unclickable
	document.querySelector('#square2').removeEventListener('click',playSquare2);
	//store the gamepiece text as a variable
	squareTwo = document.querySelector('#square2').textContent;
	turn += 1;
	checkWin();
	} else {
		//place an X gamepiece in the square
		document.querySelector('#square2').textContent = 'O';
		//Make the played square unclickable
		document.querySelector('#square2').removeEventListener('click',playSquare2);
		//store the gamepiece text as a variable
		squareTwo = document.querySelector('#square2').textContent;
		turn += 1;
		checkWin();
	}
}

function playSquare3() {
	if(turn%2 == 0){
	//place an X gamepiece in the square
	document.querySelector('#square3').textContent = 'X';
	//Make the played square unclickable
	document.querySelector('#square3').removeEventListener('click',playSquare3);
	//store the gamepiece text as a variable
	squareThree = document.querySelector('#square3').textContent;
	turn += 1;
	//see if the player has won the game
	checkWin();
	} else {
		//place an X gamepiece in the square
		document.querySelector('#square3').textContent = 'O';
		//Make the played square unclickable
		document.querySelector('#square3').removeEventListener('click',playSquare3);
		//store the gamepiece text as a variable
		squareThree = document.querySelector('#square3').textContent;
		turn += 1;
		checkWin();
	}
}


function playSquare4() {
	if(turn%2 == 0){
	//place an X gamepiece in the square
	document.querySelector('#square4').textContent = 'X';
	//Make the played square unclickable
	document.querySelector('#square4').removeEventListener('click',playSquare4);
	//store the gamepiece text as a variable
	squareFour = document.querySelector('#square4').textContent;
	turn += 1;
	//see if the player has won the game
	checkWin();
	} else {
		//place an X gamepiece in the square
		document.querySelector('#square4').textContent = 'O';
		//Make the played square unclickable
		document.querySelector('#square4').removeEventListener('click',playSquare4);
		//store the gamepiece text as a variable
		squareFour = document.querySelector('#square4').textContent;
		turn += 1;
		checkWin();
	}
}

function playSquare5() {
	if(turn%2 == 0){
	//place an X gamepiece in the square
	document.querySelector('#square5').textContent = 'X';
	//Make the played square unclickable
	document.querySelector('#square5').removeEventListener('click',playSquare5);
	//store the gamepiece text as a variable
	squareFive = document.querySelector('#square5').textContent;
	turn += 1;
	//see if the player has won the game
	checkWin();
	} else {
		//place an X gamepiece in the square
		document.querySelector('#square5').textContent = 'O';
		//Make the played square unclickable
		document.querySelector('#square5').removeEventListener('click',playSquare5);
		//store the gamepiece text as a variable
		squareFive = document.querySelector('#square5').textContent;
		turn += 1;
		checkWin();
	}
}

function playSquare6() {
	if(turn%2 == 0){
	//place an X gamepiece in the square
	document.querySelector('#square6').textContent = 'X';
	//Make the played square unclickable
	document.querySelector('#square6').removeEventListener('click',playSquare6);
	//store the gamepiece text as a variable
	squareSix = document.querySelector('#square6').textContent;
	turn += 1;
	//see if the player has won the game
	checkWin();
	} else {
		//place an X gamepiece in the square
		document.querySelector('#square6').textContent = 'O';
		//Make the played square unclickable
		document.querySelector('#square6').removeEventListener('click',playSquare6);
		//store the gamepiece text as a variable
		squareSix = document.querySelector('#square6').textContent;
		turn += 1;
		checkWin();
	}
}

function playSquare7() {
	if(turn%2 == 0){
	//place an X gamepiece in the square
	document.querySelector('#square7').textContent = 'X';
	//Make the played square unclickable
	document.querySelector('#square7').removeEventListener('click',playSquare7);
	//store the gamepiece text as a variable
	squareSeven = document.querySelector('#square7').textContent;
	turn += 1;
	//see if the player has won the game
	checkWin();
	} else {
		//place an X gamepiece in the square
		document.querySelector('#square7').textContent = 'O';
		//Make the played square unclickable
		document.querySelector('#square7').removeEventListener('click',playSquare7);
		//store the gamepiece text as a variable
		squareSeven = document.querySelector('#square7').textContent;
		turn += 1;
		checkWin();
	}
}

function playSquare8() {
	if(turn%2 == 0){
	//place an X gamepiece in the square
	document.querySelector('#square8').textContent = 'X';
	//Make the played square unclickable
	document.querySelector('#square8').removeEventListener('click',playSquare8);
	//store the gamepiece text as a variable
	squareEight = document.querySelector('#square8').textContent;
	turn += 1;
	//see if the player has won the game
	checkWin();
	} else {
		//place an X gamepiece in the square
		document.querySelector('#square8').textContent = 'O';
		//Make the played square unclickable
		document.querySelector('#square8').removeEventListener('click',playSquare8);
		//store the gamepiece text as a variable
		squareEight = document.querySelector('#square8').textContent;
		turn += 1;
		checkWin();
	}
}

function playSquare9() {
	if(turn%2 == 0){
	//place an X gamepiece in the square
	document.querySelector('#square9').textContent = 'X';
	//Make the played square unclickable
	document.querySelector('#square9').removeEventListener('click',playSquare9);
	//store the gamepiece text as a variable
	squareNine = document.querySelector('#square9').textContent;
	turn += 1;
	//see if the player has won the game
	checkWin();
	} else {
		//place an X gamepiece in the square
		document.querySelector('#square9').textContent = 'O';
		//Make the played square unclickable
		document.querySelector('#square9').removeEventListener('click',playSquare9);
		//store the gamepiece text as a variable
		squareNine = document.querySelector('#square9').textContent;
		turn += 1;
		checkWin();
	}
};

function checkWin(){
	if(
		//top row
		(squareOne == squareTwo && squareTwo == squareThree && squareOne == 'X') ||
		//middle row
		(squareFour == squareFive && squareFive == squareSix && squareSix == 'X') ||
		//bottom row
		(squareSeven == squareEight && squareEight == squareNine && squareNine == 'X') || 
		//left column
		(squareOne == squareFour && squareFour == squareSeven && squareSeven == 'X') ||
		//middle column
		(squareTwo == squareFive && squareFive == squareEight && squareEight == 'X') ||
		//right column
		(squareThree == squareSix && squareSix == squareNine && squareNine == 'X') ||
		//diagonal one
		(squareOne == squareFive && squareFive == squareNine && squareNine == 'X') ||
		//diagonal two
		(squareThree == squareFive && squareFive == squareSeven && squareSeven == 'X')){
		xWinsTheGame();
	} else if(
		//top row
		(squareOne == squareTwo && squareTwo == squareThree && squareOne == 'O') ||
		//middle row
		(squareFour == squareFive && squareFive == squareSix && squareSix == 'O') ||
		//bottom row
		(squareSeven == squareEight && squareEight == squareNine && squareNine == 'O') || 
		//left column
		(squareOne == squareFour && squareFour == squareSeven && squareSeven == 'O') ||
		//middle column
		(squareTwo == squareFive && squareFive == squareEight && squareEight == 'O') ||
		//right column
		(squareThree == squareSix && squareSix == squareNine && squareNine == 'O') ||
		//diagonal one
		(squareOne == squareFive && squareFive == squareNine && squareNine == 'O') ||
		//diagonal two
		(squareThree == squareFive && squareFive == squareSeven && squareSeven == 'O')){
		oWinsTheGame();
	} else if (turn == 9) {
		var showTie = document.querySelector('.winMessage');
		showTie.classList.add('showWinMessage');
		showTie.textContent = 'It is a tie! Click to restart.'
		removeListeners();
		document.querySelector('.winMessage').addEventListener('click',clearBoard);
	}
};


function xWinsTheGame(){
	winner.classList.add('showWinMessage');
	winner.textContent = 'Player X has won the game! Click to restart.';
	removeListeners();
	//Make the win message clickable to restart the game
	document.querySelector('.winMessage').addEventListener('click',clearBoard);
}

function oWinsTheGame(){
	winner.classList.add('showWinMessage');
	winner.textContent = 'Player O has won the game! Click to restart.';
	removeListeners();
	//Make the win message clickable to restart the game
	document.querySelector('.winMessage').addEventListener('click',clearBoard);
}

function clearBoard(){
	var allSquares = document.querySelectorAll('.square')
	for(var i = 0; i<allSquares.length; i++){
	allSquares[i].textContent = '';
	addListeners();
	}
	reset();
	winner.classList.remove('showWinMessage');
	winner.textContent = '';
	//Make the win message clickable to restart the game
	document.querySelector('.winMessage').removeEventListener('click',clearBoard);
}




