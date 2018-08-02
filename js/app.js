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