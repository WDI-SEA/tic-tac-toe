console.log('Hello world');

function startGame() {
	document.turn = "X";
	setMessage(document.turn + " gets to start.");
}

function setMessage(msg) {
	document.getElementById("message").innerText = msg;
}

function nextMove(cell) {
	if (cell.innerText == ""){
		cell.innerText = document.turn;
		switchTurn();
	} else {
		setMessage("That square is full.")
	}
}

function switchTurn() {
	if (document.turn == "X") {
		document.turn = "O";
	} else {
		document.turn = "X";
	}

	setMessage("It's " + document.turn + "'s turn!");
}

function checkForWin(move) {
	var result = false;
	if (checkWin(1, 2, 3, move) || 
		checkWin(4, 5, 6, move) || 
		checkWin(7, 8, 9, move) ||
		checkWin(1, 4, 7, move) ||
		checkWin(2, 5, 8, move) ||
		checkWin(3, 6, 9, move) ||
		checkWin(1, 5, 9, move) ||
		checkWin(3, 5, 7, move)) {

		result = true;
	}
	return result;
}

function checkWin(a, b, c, move) {
	var result = false;
	if (getCell(a) == move && getCell(b) == move && getCell(c) == move) {
		result = true;
	}
	return result;
}

function getCell(number) {
	document.getElementById("c" + number).innerText;
}