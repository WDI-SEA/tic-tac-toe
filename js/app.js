function gameStart() {
	
	for (var i = 1;i <= 9; i++) {
		clear(i);
	}
	document.turn = "X";
	document.winner = null;

	setMessage(document.turn + " goes first!");
}

function setMessage(msg) {
	document.getElementById("message").innerText = msg;
}

function nextMove(box) {
	if (document.winner != null) {
		setMessage(document.winner + " already won the game.");
	} else if (box.innerText == "") {
		box.innerText = document.turn;
		switchTurn();
	} else {
		setMessage("You can't play there!");

	}
}

function switchTurn() {

var X = "X"
var O = "O"

	if (winCheck(document.turn)) {
		setMessage("Nice job! " + document.turn + " Wins!");
		document.winner = document.turn;
	} else if (document.turn == X) {
		document.turn = O;
		setMessage("It's " + document.turn + "'s turn!");

	} else {
		document.turn = X;
		setMessage("It's " + document.turn + "'s turn!");
	}
}

function winCheck(move) {
	var result = false;
	if (threeInARow(1, 2, 3, move) || 
		threeInARow(4, 5, 6, move) || 
		threeInARow(7, 8, 9, move) || 
		threeInARow(1, 4, 7, move) || 
		threeInARow(2, 5, 8, move) || 
		threeInARow(3, 6, 9, move) || 
		threeInARow(1, 5, 9, move) || 
		threeInARow(3, 5, 7, move)) {
		
		result = true;
	}
	return result;
}

function threeInARow(a, b, c, move) {
	var result = false;
		if (boxCheck(a) == move && boxCheck(b) == move && boxCheck(c) == move) {
		result = true;
	}
	return result;
}

function boxCheck(number) {
	return document.getElementById("b" + number).innerText;
}

function clear(number) {
	document.getElementById("b" + number).innerText = "";
}




