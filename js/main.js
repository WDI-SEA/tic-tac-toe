var playerTurn = 1;
var buttons = document.getElementsByTagName("button");
var setWinner = document.getElementById("winner"); // Gets h2 w/ id: winner; Game winner will be set here.

/*
* When a square/button is clicked X or O is placed in the innerHTML
* The class name is also changed to playerX or playerO depending on turn
*/
function pickSpace (button) {
	if (button.innerHTML === "X" || button.innerHTML === "O") {
		alert("This space is taken, choose another.");
	} else if (playerTurn == 1) {
		button.innerHTML = "X";
		button.className += " playerX";
		playerTurn = 2;
	} else if (playerTurn == 2) {
		button.innerHTML = "O";
		button.className += " playerO";
		playerTurn = 1;
	}
	document.getElementById("whosTurn").innerHTML = "Turn: Player " + playerTurn;

	// If/Else statement determines winner (Player 1 or Player 2) based on getWinner return and disables further moves
	var winner = getWinner();
	if (winner == "X") {
		setWinner.innerHTML = "Player 1 wins!";
		for(i=0; i<buttons.length; i++) {
			buttons[i].disabled = true;
		}
	} else if (winner == "O") {
		setWinner.innerHTML = "Player 2 wins!";
		for(i=0; i<buttons.length; i++) {
			buttons[i].disabled = true;
		}
	}
}


// This function clears/resets the innerHTML and class of each button
function clearBoard() {
	for(i = 0; i <buttons.length; i++) {
		buttons[i].innerHTML = '';
		buttons[i].className = '';
		buttons[i].disabled = false;
	}
	winner.innerHTML = '';
}

/*
* This function determines winner (X or O) based on matching 3 buttons in vertically/horizontally/obliquely
*/
function getWinner () {
	if (buttons[0].innerHTML !== '' && buttons[0].innerHTML === buttons[1].innerHTML && buttons[1].innerHTML === buttons[2].innerHTML) {
		return buttons[0].innerHTML;

	} else if (buttons[3].innerHTML !== '' && buttons[3].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML=== buttons[5].innerHTML){
		return buttons[3].innerHTML;

	} else if (buttons[6].innerHTML !== '' && buttons[6].innerHTML === buttons[7].innerHTML && buttons[7].innerHTML === buttons[8].innerHTML) {
		return buttons[6].innerHTML;

	} else if (buttons[0].innerHTML !== '' && buttons[0].innerHTML === buttons[3].innerHTML && buttons[3].innerHTML === buttons[6].innerHTML){
		return buttons[0].innerHTML;

	} else if (buttons[1].innerHTML !== '' && buttons[1].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML === buttons[7].innerHTML) {
		return buttons[1].innerHTML;

	} else if (buttons[2].innerHTML !== '' && buttons[2].innerHTML === buttons[5].innerHTML && buttons[5].innerHTML === buttons[8].innerHTML) {
		return buttons[2].innerHTML;

	} else if (buttons[0].innerHTML !== '' && buttons[0].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML === buttons[8].innerHTML){
		return buttons[0].innerHTML;

	} else if (buttons[2].innerHTML !== '' && buttons[2].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML === buttons[6].innerHTML) {
		return buttons[2].innerHTML;
	} else {
		return "No winner";
	}
}

/*
// One player game against computer does not work.
// This is my code with errors included.

// HTML checkboxes for one or two player game.
<div>
	<input type="checkbox" id="onePlayer" onclick="onePlayer" checked>One Player</input>
	<input type="checkbox" id="twoPlayer" onclick="twoPlayer">Two Player</input>
</div>

// JS checkboxes code for one and two player game.
function onePlayer() {
	document.getElementById("onePlayer").checked = true;
	document.getElementById("twoPlayer").checked = false;
	clearBoard();
}

function twoPlayer() {
	document.getElementById("twoPlayer").checked = true;
	document.getElementById("onePlayer").checked = false;
	clearBoard();
}


// One player game; Gets computer's choice.
function getComputerChoice () {
	var computerChoice = Math.random();
	var buttonSelected;
	if (computerChoice < .11) {
		buttons[0].innerHTML = "O";
		buttonSelected = buttons[0];
	} else if (computerChoice < 0.22) {
		buttons[1].innerHTML = "O";
		buttonSelected = buttons[1];
	} else if (computerChoice < 0.33) {
		buttons[2].innerHTML = "O";
		buttonSelected = buttons[2];
	} else if (computerChoice < 0.44) {
		buttons[3].innerHTML = "O";
		buttonSelected = buttons[3];
	} else if (computerChoice < 0.56) {
		buttons[4].innerHTML = "O";
		buttonSelected = buttons[4];
	} else if (computerChoice < 0.67) {
		buttons[5].innerHTML = "O";
		buttonSelected = buttons[5];
	} else if (computerChoice < 0.78) {
		buttons[6].innerHTML = "O";
		buttonSelected = buttons[6];
	} else if (computerChoice < 0.89) {
		buttons[7].innerHTML = "O";
		buttonSelected = buttons[7];
	} else {
		buttons[8].innerHTML = "O";	
		buttonSelected = buttons[8];
	}

	if (buttonSelected.innerHTML !== "X") {
		return buttonSelected;
	} else {
		computerChoice;
	}

	return computerChoice;
}


// One player game against computer
function onePlayerGame (button) {
	if (button.innerHTML === "X" || button.innerHTML === "O") {
		alert("This space is taken, choose another.")
	} else {
		button.innerHTML = "X";
		button.className += " playerX";
	}

	getComputerChoice();
	button.className += " playerO";

	// If/Else statement determines winner (Player or Computer) based on getWinner return and disables further moves
	var winner = getWinner();
	if (winner == "X") {
		setWinner.innerHTML = "Player wins!";
		for(i=0; i<buttons.length; i++) {
			buttons[i].disabled = true;
		}
	} else if (winner == "O") {
		setWinner.innerHTML = "Computer wins!";
		for(i=0; i<buttons.length; i++) {
			buttons[i].disabled = true;
		}
	}
}


// Reset board for new game
function clearBoard() {
	for(i = 0; i <buttons.length; i++) {
		buttons[i].innerHTML = '';
		buttons[i].className = '';
		buttons[i].disabled = false;
	}
	winner.innerHTML = '';
	pickSpace.disabled = false;
	onePlayerGame.disabled = false;
}
*/








