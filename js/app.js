console.log('Hello frontend');

document.addEventListener('DOMContentLoaded', function() {
	startGame();
	document.getElementById("restartButton").addEventListener("click", startGame);
});

// GLOBAL VARIABLES
var turn; 
var winner;


function startGame() {
	for (var i = 1; i <= 9; i++) {
		clearBox(i);
	}

	turn = "X";
	if (Math.random() < 0.5) {
		turn = "O"; 
	}
	winner = null; 

	setMessage(turn + " gets to start");

	var squares = document.getElementsByClassName("game-box"); 

	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", nextMove);
	}
	console.log(squares);
};


//Updates game alert message 
function setMessage(msg) {
	document.getElementById("message").innerText = msg;
};

//Checks to see if game can progress or if winner has been declared 
function nextMove() {
	let square = this;
	console.log(square);
	console.log(this);
	if (winner != null) {
		setMessage(winner + " already won the game.")
	} else if (square.innerText == "") {
		square.innerText = turn;	
		switchTurn();
	} else {
		setMessage("That Square Is Taken!");
	}
};

//function to flip turn back to other player if win state is not recognized 
function switchTurn() {
	if (checkForWin(turn)) {
		setMessage("Congratulations, " + turn + "! You WIN!!!");
		winner = turn; 
	} else if (turn == "X") {
		turn = "O";
		setMessage("It's " + turn + "'s turn!");
	} else {
		turn = "X";
		setMessage("It's " + turn + "'s turn!");
	}
};


// check all cell combinations to determine if there's a win, return true if win
function checkForWin(move) {
	var result = false;
	if (checkRow(1, 2, 3, move) ||
		checkRow(4, 5, 6, move) ||
		checkRow(7, 8 ,9, move) ||
		checkRow(1, 4, 7, move) ||
		checkRow(2, 5, 8, move) ||
		checkRow(3, 6, 9, move) ||
		checkRow(1, 5, 9, move) ||
		checkRow(3, 5, 7, move)) {

		result = true; 
	}
	return result; 
};

//determining truth if 3 cells match in a row 
function checkRow(a, b, c, move) {
	var result = false; 
	if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
		result = true; 
	}
	return result; 
};

//determine cell 
function getBox(number) {
	return document.getElementById("c" + number).innerText; 
};

//clears boxes after a game "reset" button 
function clearBox(number) {
	document.getElementById("c" + number).innerText = "";
};

