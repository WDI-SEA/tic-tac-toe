//To start the game, clear the boxes of their values and set player = x
function startGame() {  
	for (var i = 1; i <= 9; i++){
		reset(i);
	}
	document.turn = "X";
	document.winner= null;
	setMessage(document.turn + "'s turn to start.")
}
function setMessage(msg){
	document.getElementById("message").innerText = msg;	
}
//Set message to winning condition if any has won if not the game continues
function nextTurn(column) { 
	if(document.winner != null){
		setMessage(document.turn + " has won the game already!")
	}else if(column.innerText == '') {
	   column.innerText = document.turn;
	   switchTurn();
	}else {
		setMessage("Choose another square! ");
	}
}
//
function switchTurn(){
	if(checkWin(document.turn)) {
		setMessage("Congrats " + document.turn + ", you won!")
		document.winner = document.turn;
	}else if(document.turn == "X") {
		document.turn = "O";
		setMessage("It's " + document.turn + "'s turn.")
	} else {
		document.turn = "X";
		setMessage("It's " + document.turn + "'s turn.")
	}
	
}
function checkWin(move) {
	var result = false;
	if (checkBox(1, 2, 3, move) ||
		checkBox(4, 5, 6, move) ||
		checkBox(7, 8, 9, move) ||
		checkBox(1, 4, 7, move) ||
		checkBox(2, 5, 8, move) ||
		checkBox(3, 6, 9, move) ||
		checkBox(1, 5, 9, move) ||
		checkBox(3, 5, 7, move)) {
		result = true;
	}
	return result;
}
function checkBox(a, b, c, move) {
	var result = false;
	if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
		result = true;
	}
	return result;
}
function getBox(number) {
	return document.getElementById("s" + number).innerText;	
}
function reset(number) {
	document.getElementById("s" + number).innerText = "";
}

// To dos for next version:
// - Add simple AI
// - Add another player class
// - Add Tie condition
