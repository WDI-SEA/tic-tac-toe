function startGame() {
	document.turn = "X";
	setMessage(document.turn + "'s turn to start.")
}

function setMessage(msg){
	document.getElementById("message").innerText = msg;	
}

function nextTurn(column) {
	if(column.innerText == '') {
	   column.innerText = document.turn;
	   switchTurn();
	}else {
		setMessage("Choose another square! ");
	}
}

function switchTurn(){
	if(document.turn == "X") {
		document.turn = "O";
	} else {
		document.turn = "X";

	}
	setMessage("It's " + document.turn + "'s turn.")
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
	if (getBox(a) === move && getBox(b)=== move && getBox(c) === move) {
		results = true;
	}
	return result;
}

function getBox(number) {
	return document.getElementById("c" + number).innerText;
	console.log("pulled list");
}


///add a class instead of replacing class
// element.className += " xPlayed";
///You need to write a check winner function
//you're going to call checkWinner() at the end of every turn;
// function checkWin(boxes);
// if ()