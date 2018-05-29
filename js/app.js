// Global Variables
var turn = 1; 
var computer = false;
var gameOver = false;
var playSquares = {
	box0: false,
	box1: false,
	box2: false,
	box3: false,
	box4: false,
	box5: false,
	box6: false,
	box7: false,
	box8: false
};
var comboArray = [
	[0,1,2], //Row 1
	[3,4,5], //Row 2
	[6,7,8], //Row 3
	[0,3,6], //Column1
	[1,4,7], //Column2
	[2,5,8], //Column3
	[0,4,8], //Diagonal1
	[2,4,6]  //Diagonal2
];

// DOM References
var turnCount = document.getElementById("turncount");
var squareRef = document.getElementsByClassName("square");

// Check Win Conditions (Tests an array of outcomes against the current boardstate)
var comboCheck = function ([square1,square2,square3]) {
	if (squareRef[square1].classList.contains("blue") && 
		squareRef[square2].classList.contains("blue") && 
		squareRef[square3].classList.contains("blue")) {
			return true;
	} else if (squareRef[square1].classList.contains("gold") && 
		squareRef[square2].classList.contains("gold") && 
		squareRef[square3].classList.contains("gold")) {
			return true;
		} else {
			return false;
		}
};

// Check for Win (Checks for a winning combination in relationn to the most recent move)
var checkWin = function (clicked) {
	switch (true) {
		case clicked === "box0": 
			if (comboCheck(comboArray[0]) || 
				comboCheck(comboArray[3]) || 
				comboCheck(comboArray[6])) {
				endGame();
			}
			break;
		case clicked === "box1": 
			if (comboCheck(comboArray[0]) || 
				comboCheck(comboArray[4])) {
				endGame();
			}
			break;
		case clicked === "box2": 
			if (comboCheck(comboArray[0]) || 
				comboCheck(comboArray[5]) || 
				comboCheck(comboArray[7])) {
				endGame();
			}
			break;
		case clicked === "box3": 
			if (comboCheck(comboArray[1]) || 
				comboCheck(comboArray[3])) {
				endGame();
			}
			break;
		case clicked === "box4": 
			if (comboCheck(comboArray[1]) || 
				comboCheck(comboArray[4]) || 
				comboCheck(comboArray[6]) ||
				comboCheck(comboArray[7])) {
				endGame();
			}
			break;
		case clicked === "box5": 
			if (comboCheck(comboArray[1]) || 
				comboCheck(comboArray[5])) {
				endGame();
			}
			break;
		case clicked === "box6": 
			if (comboCheck(comboArray[2]) || 
				comboCheck(comboArray[3]) || 
				comboCheck(comboArray[7])) {
				endGame();
			}
			break;
		case clicked === "box7": 
			if (comboCheck(comboArray[2]) || 
				comboCheck(comboArray[4])) {
				endGame();
			}
			break;
		case clicked === "box8": 
			if (comboCheck(comboArray[2]) || 
				comboCheck(comboArray[5]) || 
				comboCheck(comboArray[6])) {
				endGame();
			}
			break;
		default: 
			console.log("Something is wrong");
			break;
		}
};

// Click function (Moves the game forward and changes the UI)
var takeTurn = function () {
	if (turn%2 > 0) {
		if (playSquares[this.id] === false) {
			this.classList.add("blue");
			this.classList.remove("hover");
			playSquares[this.id] = true;
			turn += 1;
			turnCount.textContent = "Turn: " + turn;
			document.getElementById("playerturn").textContent = "Player 2";
			if (computer === true && gameOver !== true) {
				setTimeout(function () {
					computerTurn();
				}, 1000);
			}
			if (turn > 5) {
				checkWin(this.id);
			}
		}
	} else {
		if (playSquares[this.id] === false) {
			this.classList.add("gold");
			this.classList.remove("hover");
			playSquares[this.id] = true;
			turn += 1;
			turncount.textContent = "Turn: " + turn;
			document.getElementById("playerturn").textContent = "Player 1";
			if (computer === true && gameOver !== true) {
				setTimeout(function () {
					computerTurn();
				}, 1000);
			}
			if (turn > 5) {
				checkWin(this.id);
			}
		}
	}
};

// Ends Game (Disables further turns)
var endGame = function () {
	console.log("Win!")
	gameOver = true;
	document.getElementById("resetbutton").textContent = "Play Again";
	if (turn%2 === 0) {
		document.getElementById("playerturn").textContent = "Player 1 Wins!";
		document.getElementById("playerturn").classList.add("blueWin");
	} else {
		document.getElementById("playerturn").textContent = "Player 2 Wins!";
		document.getElementById("playerturn").classList.add("goldWin");
	}
	for (let square in playSquares) {
		playSquares[square] = true;
		document.getElementsByClassName("square")[square].classList.remove("hover");
	}
};

// Resets Game (Squares, Players, Turns, Gamestate)
var reset = function () {
	gameOver = false;
	turn = 1;
	turncount.textContent = "Turn: " + turn;
	document.getElementById("playerturn").textContent = "Player 1";
	document.getElementById("playerturn").classList.remove("blueWin");
	document.getElementById("playerturn").classList.remove("goldWin");
	document.getElementById("resetbutton").textContent = "Reset";
	for (let square in playSquares) {
		playSquares[square] = false;
		squareRef[square].classList.add("hover");
		squareRef[square].classList.remove("blue");
		squareRef[square].classList.remove("gold");
	}
}

// Turns ON or OFF AI opponent
var toggleComputer = function () {
	if (computer === false) {
		computer = true;
		document.getElementById("computertoggle").textContent = "Play Computer: On";
		document.getElementById("computertoggle").classList.add("computerOn");
	} else {
		computer = false;
		document.getElementById("computertoggle").textContent = "Play Computer: Off";
		document.getElementById("computertoggle").classList.remove("computerOn");
	}
};

// Randomly selected AI play based on a generated array of available moves
var computerTurn = function () {
	let possibleMoves = [];
	for (key in playSquares) {
		if (playSquares[key] === false) {
			possibleMoves.push(key);
		}
	}
	let move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
	document.getElementById(move).classList.add("gold");
	document.getElementById(move).classList.remove("hover");
	playSquares[move] = true;
	if (gameOver !== true) {
		turn += 1;
		turncount.textContent = "Turn: " + turn;
		document.getElementById("playerturn").textContent = "Player 1";
	}
	if (turn > 5) {
		checkWin(move);
	}
};

// Setup Function
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");

  for (let square in playSquares) {
  	document.getElementById(square).addEventListener("click", takeTurn);
  	document.getElementById("resetbutton").addEventListener("click", reset);
  	document.getElementById("computertoggle").addEventListener("click", toggleComputer);
  }
});