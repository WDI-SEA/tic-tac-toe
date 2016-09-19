document.addEventListener('DOMContentLoaded', function() {

// Variables

var boardArray = ["","","","","","","","",""];

var count = 0;

var win = 0;

var spaces = document.querySelectorAll('div');

// Event Listeners

addListeners();

function addListeners() {

spaces[0].addEventListener('click', placeXO_0);

spaces[1].addEventListener('click', placeXO_1);

spaces[2].addEventListener('click', placeXO_2);

spaces[3].addEventListener('click', placeXO_3);

spaces[4].addEventListener('click', placeXO_4);

spaces[5].addEventListener('click', placeXO_5);

spaces[6].addEventListener('click', placeXO_6);

spaces[7].addEventListener('click', placeXO_7);

spaces[8].addEventListener('click', placeXO_8);

}

// X or O on Board

function placeXO_0() {
if (zero.style.visibility != "initial") {	
	zero.style.visibility = "initial";
	if (count%2==0) {
		zero.textContent = "X";
		count++;
		boardArray[0] = "X";
	} else {
		zero.textContent = "O";
		count++;
		boardArray[0] = "O";
	}
}
	isWin();
	displayTurn();
}

function placeXO_1() {
if (one.style.visibility != "initial") {	
	one.style.visibility = "initial";
	if (count%2==0) {
		one.textContent = "X";
		count++;
		boardArray[1] = "X";
	} else {
		one.textContent = "O";
		count++;
		boardArray[1] = "O";
	}
}
	isWin();
	displayTurn();
}

function placeXO_2() {
if (two.style.visibility != "initial") {	
	two.style.visibility = "initial";
	if (count%2==0) {
		two.textContent = "X";
		count++;
		boardArray[2] = "X";
	} else {
		two.textContent = "O";
		count++;
		boardArray[2] = "O";
	}
}
	isWin();
	displayTurn();
}

function placeXO_3() {
if (three.style.visibility != "initial") {	
	three.style.visibility = "initial";
	if (count%2==0) {
		three.textContent = "X";
		count++;
		boardArray[3] = "X";
	} else {
		three.textContent = "O";
		count++;
		boardArray[3] = "O";
	}
}
	isWin();
	displayTurn();
}

function placeXO_4() {
if (four.style.visibility != "initial") {	
	four.style.visibility = "initial";
	if (count%2==0) {
		four.textContent = "X";
		count++;
		boardArray[4] = "X";
	} else {
		four.textContent = "O";
		count++;
		boardArray[4] = "O";
	}
}
	isWin();
	displayTurn();
}

function placeXO_5() {
if (five.style.visibility != "initial") {	
	five.style.visibility = "initial";
	if (count%2==0) {
		five.textContent = "X";
		count++;
		boardArray[5] = "X";
	} else {
		five.textContent = "O";
		count++;
		boardArray[5] = "O";
	}
}
	isWin();
	displayTurn();
}

function placeXO_6() {
if (six.style.visibility != "initial") {	
	six.style.visibility = "initial";
	if (count%2==0) {
		six.textContent = "X";
		count++;
		boardArray[6] = "X";
	} else {
		six.textContent = "O";
		count++;
		boardArray[6] = "O";
	}
}
	isWin();
	displayTurn();
}

function placeXO_7() {
if (seven.style.visibility != "initial") {	
	seven.style.visibility = "initial";
	if (count%2==0) {
		seven.textContent = "X";
		count++;
		boardArray[7] = "X";
	} else {
		seven.textContent = "O";
		count++;
		boardArray[7] = "O";
	}
}
	isWin();
	displayTurn();
}

function placeXO_8() {
if (eight.style.visibility != "initial") {	
	eight.style.visibility = "initial";
	if (count%2==0) {
		eight.textContent = "X";
		count++;
		boardArray[8] = "X";
	} else {
		eight.textContent = "O";
		count++;
		boardArray[8] = "O";
	}
}
	isWin();
	displayTurn();
}

// Decides if there is a winner

function isWin() {
	if((boardArray[0] == "X" && boardArray[1] == "X" && boardArray[2] == "X")
		|| (boardArray[0] == "O" && boardArray[1] == "O" && boardArray[2] == "O")) {
		if(boardArray[0] == "X") {
			alert("X wins!"); }
			else {
				alert("O wins!");
			}
		win = 1;
	} else if ((boardArray[3] == "X" && boardArray[4] == "X" && boardArray[5] == "X")
		|| (boardArray[3] == "O" && boardArray[4] == "O" && boardArray[5] == "O")) {
		if(boardArray[3] == "X") {
			alert("X wins!"); }
			else {
				alert("O wins!");
			}
		win = 1;
	} else if ((boardArray[6] == "X" && boardArray[7] == "X" && boardArray[8] == "X")
		|| (boardArray[6] == "O" && boardArray[7] == "O" && boardArray[8] == "O")) {
		if(boardArray[6] == "X") {
			alert("X wins!"); }
			else {
				alert("O wins!");
			}
		win = 1;
	} else if ((boardArray[0] == "X" && boardArray[3] == "X" && boardArray[6] == "X")
		|| (boardArray[0] == "O" && boardArray[3] == "O" && boardArray[6] == "O")) {
		win = 1;
		if(boardArray[0] == "X") {
			alert("X wins!"); }
			else {
				alert("O wins!");
			}
	} else if ((boardArray[1] == "X" && boardArray[4] == "X" && boardArray[7] == "X")
		|| (boardArray[1] == "O" && boardArray[4] == "O" && boardArray[7] == "O")) {
		win = 1;
		if(boardArray[1] == "X") {
			alert("X wins!"); }
			else {
				alert("O wins!");
			}
	} else if ((boardArray[2] == "X" && boardArray[5] == "X" && boardArray[8] == "X")
		|| (boardArray[2] == "O" && boardArray[5] == "O" && boardArray[8] == "O")) {
		if(boardArray[2] == "X") {
			alert("X wins!"); }
			else {
				alert("O wins!");
			}
		win = 1;
	} else if ((boardArray[0] == "X" && boardArray[4] == "X" && boardArray[8] == "X")
		|| (boardArray[0] == "O" && boardArray[4] == "O" && boardArray[8] == "O")) {
		if(boardArray[0] == "X") {
			alert("X wins!"); }
			else {
				alert("O wins!");
			}
		win = 1;
	} else if ((boardArray[2] == "X" && boardArray[5] == "X" && boardArray[8] == "X")
		|| (boardArray[2] == "O" && boardArray[5] == "O" && boardArray[8] == "O")) {
		if(boardArray[2] == "X") {
			alert("X wins!"); }
			else {
				alert("O wins!");
			}
		win = 1;
	} else if ((boardArray[2] == "X" && boardArray[4] == "X" && boardArray[6] == "X")
		|| (boardArray[2] == "O" && boardArray[4] == "O" && boardArray[6] == "O")) {
		if(boardArray[2] == "X") {
			alert("X wins!"); }
			else {
				alert("O wins!");
			}
		win = 1;
	} else if (count == 9) {
		alert("No one wins!");
		win = 1;
	}

	if (win == 1) {
		spaces[0].removeEventListener('click', placeXO_0);
		spaces[1].removeEventListener('click', placeXO_1);
		spaces[2].removeEventListener('click', placeXO_2);
		spaces[3].removeEventListener('click', placeXO_3);
		spaces[4].removeEventListener('click', placeXO_4);
		spaces[5].removeEventListener('click', placeXO_5);
		spaces[6].removeEventListener('click', placeXO_6);
		spaces[7].removeEventListener('click', placeXO_7);
		spaces[8].removeEventListener('click', placeXO_8);
	}	
}

// Show Turn Count

var turnNumber = document.getElementById('turn');

function displayTurn() {
	turnNumber.textContent = "Turn Number: " + (count + 1);
}

// Resets the game board

document.getElementById('reset').addEventListener('click', function() {
	zero.style.visibility = "hidden";
	one.style.visibility = "hidden";
	two.style.visibility = "hidden";
	three.style.visibility = "hidden";
	four.style.visibility = "hidden";
	five.style.visibility = "hidden";
	six.style.visibility = "hidden";
	seven.style.visibility = "hidden";
	eight.style.visibility = "hidden";
	boardArray = ["","","","","","","","",""];
	count = 0;
	win = 0;
	addListeners();
	turnNumber.textContent = "Turn Number: 1";
})

});


