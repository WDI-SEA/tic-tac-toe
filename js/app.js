console.log('Hello frontend');


//start game script which loops through and clears any previous inputs, updates message and randomizes starting player 
function startGame() {

	for (var i = 1; i <= 9; i = i + 1) {
		clearBox(i);
	}

	document.turn = "X";
	if (Math.random() < 0.5) {
		document.turn = "O"; 
	}
	document.winner = null; 

	setMessage(document.turn + " gets to start");
}

//Updates game alert message 
function setMessage(msg) {
	document.getElementById("message").innerText = msg;
}

//Checks to see if game can progress or if winner has been declared 
function nextMove(square) {
	if (document.winner != null) {
		setMessage(document.winner + " already won the game.")
	} else if (square.innerText == "") {
		square.innerText = document.turn;	
		switchTurn();
	} else {
		setMessage("That Square Is Taken!");
	}
}

//function to flip turn back to other player if win state is not recognized 
function switchTurn() {

	if (checkForWin(document.turn)) {
		setMessage("Congratulations, " + document.turn + "! You WIN!!!");
		document.winner = document.turn; 
	} else if (document.turn == "X") {
		document.turn = "O";
		setMessage("It's " + document.turn + "'s turn!");
	} else {
		document.turn = "X";
		setMessage("It's " + document.turn + "'s turn!");
	}
}


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
}

//determining truth if 3 cells match in a row 
function checkRow(a, b, c, move) {
	var result = false; 
	if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
		result = true; 
	}
	return result; 
}

//determine cell 
function getBox(number) {
	return document.getElementById("c" + number).innerText; 
}

//clears boxes after a game "reset" button 
function clearBox(number) {
	document.getElementById("c" + number).innerText = "";
}