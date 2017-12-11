
///add a class instead of replacing class
// element.className += " xPlayed";
function startGame() {
	document.currentPlayer = "X";
	setMessage(document.currentPlayer + "'s turn to start.")
}
///You need to write a check winner function
//you're going to call checkWinner() at the end of every turn;
// function checkWin(boxes);
// if ()

function nextTurn(col) {
	if(col.innerText == '') {
	   col.innerText = document.currentPlayer;
	   switchPlayer();
	}else {
		setMessage("Choose another square! ");
	}
}

function setMessage(msg){
	document.getElementById("message").innerText = msg;	
}

function switchPlayer(){

	if(document.currentPlayer == "X") {
		document.currentPlayer = "O";
	} else {
		document.currentPlayer = "X";
	}
	setMessage("It's " + document.currentPlayer + "'s turn.")
}
function checkWin(move) {
// 	var results = false;
// 	if (checkBox(1, 2, 3, move) ||
// 		checkBox(4, 5, 6, move) ||
// 		checkBox(1, 2, 3, move) ||
// 		checkBox(1, 2, 3, move) ||
// 		checkBox(1, 2, 3, move) ||
// 		checkBox(1, 2, 3, move) ||
// 		checkBox(1, 2, 3, move) ||
// 		checkBox(1, 2, 3, move) ||
// 		checkBox(1, 2, 3, move))
// }

function checkBox(a, b, c, move) {
	var results = false;
	if (getBox(a) === move && getBox(b)=== move && getBox(c) === move) {
		results = true;
	}
	return result;
}

function getBox(number) {
	return document.getElementById("c" + number).innerText;
}