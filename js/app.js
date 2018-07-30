console.log('Ready to play');

function startGame() {
	document.turn = "X"; // starts the game with X as the first player
	document.winner = null; //labels the overall start of the game to be no one
	setMessage(document.turn + " gets to start"); // pulls from the document object to declare who is first
}

function setMessage(msg) { // sets the function of message to be used for all conditions
	document.getElementById("message").innerText = msg;
}

function nextMove(square) {
	//square.addEventListener = function("click", nextMove){ // ask about how to add a true event listener in class without using html
	square.onclick = function(nextMove){

	} 
	if(document.winner !== null) { // declares that if there is not a winner, keep going
		setMessage("Aye, " + document.turn + " won already!")
	} else if(square.innerText == "") {
	square.innerText = document.turn;
	nextTurn();
	} else {
		setMessage("Pick next square")
	}
}


function nextTurn() {
	if(checkForWinner(document.turn)){
		setMessage("WOOO! " + document.turn + " WON!")
		document.winner = document.turn;
	} else if(document.turn == "X") {
		document.turn = "O";
		setMessage("It's " + document.turn + "'s turn")
	} else {
		document.turn = "X";
		setMessage("It's " + document.turn + "'s turn")
	}
}

function checkForWinner(move) {
	var result = false;
    if((checkRow(1, 2, 3, move))|| (checkRow(4, 5, 6, move)) || (checkRow(7, 8, 9, move)) || (checkRow(1, 4, 7, move)) || (checkRow(2, 5, 8, move)) || (checkRow(3, 6, 9, move)) || (checkRow(1, 5, 9, move)) || (checkRow(3, 5, 7, move))) {
	  	result = true;
	  }
	  return result;
}


function checkRow(a, b, c, move) {
	var result = false;
	if(Box(a) == move && Box(b) == move && Box(c) == move) {
		result = true;
	}
	return result;
}

function Box(number){
	return document.getElementById("s" + number).innerText;

}


// 