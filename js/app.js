//mini-max algorithm for hard mode computer

var xTurn = true;
var nextTurn = document.getElementById("nextTurn");
var squares = document.getElementsByClassName("square");
var winner = document.getElementById("winner");
var aiEasy = document.querySelector("input[value='easy']").checked;
var aiHard = document.querySelector("input[value='hard']").checked;
var squaresLeft = 9;
var gameOver = false;
var board = {
	1: [1, 2, 3],
	2: [1, 2, 3],
	3: [1, 2, 3]
}; 

function claimSquare() {
	if (this.getAttribute("data-value") !== "") {
		//do nothing
	} else {
		var row = this.getAttribute("data-row");
		var col = parseInt(this.getAttribute("data-col"));
		board[row].splice(board[row].indexOf(col),1);
		if (xTurn) {
			this.innerText = "X";
			this.setAttribute("data-value", "X");
			nextTurn.innerText = "Next turn: O";
			xTurn = false;
		} else {
			this.innerText = "O";
			this.setAttribute("data-value", "O");
			nextTurn.innerText = "Next turn: X";
			xTurn = true;
		}
		squaresLeft--;
		checkWinner();
		console.log(squaresLeft);
		console.log(aiEasy);
		if (squaresLeft > 0 && aiEasy && !gameOver) { 
			aiEasyMove(); 
		} //else if (squaresLeft > 0 && aiHard) {
		// 	aiHardMove();
		// }
	}
}

function checkWinner() { //ONLY CHECK THE NEEDED VECTORS. DON'T BRUTE FORCE.
	var row1 = document.querySelectorAll(".square[data-row='1']");
	var row2 = document.querySelectorAll(".square[data-row='2']");
	var row3 = document.querySelectorAll(".square[data-row='3']");
	var col1 = document.querySelectorAll(".square[data-col='1']");
	var col2 = document.querySelectorAll(".square[data-col='2']");
	var col3 = document.querySelectorAll(".square[data-col='3']");
	var dia1 = document.querySelectorAll(".square[data-dia1]");
	var dia2 = document.querySelectorAll(".square[data-dia2]");

	if (row1[0].getAttribute("data-value") !== "" &&
		row1[0].getAttribute("data-value") === row1[1].getAttribute("data-value") &&
		row1[0].getAttribute("data-value") === row1[2].getAttribute("data-value")) {	
			winner.innerText = row1[0].getAttribute("data-value") + " wins!";
			winner.style.display = "block";
			nextTurn.innerText = "Click 'reset' to play again."
			gameOver = true;
	} else if (row2[0].getAttribute("data-value") !== "" &&
		row2[0].getAttribute("data-value") === row2[1].getAttribute("data-value") &&
		row2[0].getAttribute("data-value") === row2[2].getAttribute("data-value")) {
			winner.innerText = row2[0].getAttribute("data-value") + " wins!";
			winner.style.display = "block";
			nextTurn.innerText = "Click 'reset' to play again."
			gameOver = true;
	} else if (row3[0].getAttribute("data-value") !== "" &&
		row3[0].getAttribute("data-value") === row3[1].getAttribute("data-value") &&
		row3[0].getAttribute("data-value") === row3[2].getAttribute("data-value")) {
			winner.innerText = row3[0].getAttribute("data-value") + " wins!";
			winner.style.display = "block";
			nextTurn.innerText = "Click 'reset' to play again."
			gameOver = true;
	} else if (col1[0].getAttribute("data-value") !== "" &&
		col1[0].getAttribute("data-value") === col1[1].getAttribute("data-value") &&
		col1[0].getAttribute("data-value") === col1[2].getAttribute("data-value")) {
			winner.innerText = col1[0].getAttribute("data-value") + " wins!";
			winner.style.display = "block";
			nextTurn.innerText = "Click 'reset' to play again."
			gameOver = true;
	} else if (col2[0].getAttribute("data-value") !== "" &&
		col2[0].getAttribute("data-value") === col2[1].getAttribute("data-value") &&
		col2[0].getAttribute("data-value") === col2[2].getAttribute("data-value")) {
			winner.innerText = col2[0].getAttribute("data-value") + " wins!";
			winner.style.display = "block";
			nextTurn.innerText = "Click 'reset' to play again."
			gameOver = true;
	} else if (col3[0].getAttribute("data-value") !== "" &&
		col3[0].getAttribute("data-value") === col3[1].getAttribute("data-value") &&
		col3[0].getAttribute("data-value") === col3[2].getAttribute("data-value")) {
			winner.innerText = col3[0].getAttribute("data-value") + " wins!";
			winner.style.display = "block";
			nextTurn.innerText = "Click 'reset' to play again."
			gameOver = true;
	} else if (dia1[0].getAttribute("data-value") !== "" && 
		dia1[0].getAttribute("data-value") === dia1[1].getAttribute("data-value") &&
		dia1[0].getAttribute("data-value") === dia1[2].getAttribute("data-value")) {
			winner.innerText = dia1[0].getAttribute("data-value") + " wins!";
			winner.style.display = "block";
			nextTurn.innerText = "Click 'reset' to play again."
			gameOver = true;
	} else if (dia2[0].getAttribute("data-value") !== "" &&
		dia2[0].getAttribute("data-value") === dia2[1].getAttribute("data-value") &&
		dia2[0].getAttribute("data-value") === dia2[2].getAttribute("data-value")) {
			winner.innerText = dia2[0].getAttribute("data-value") + " wins!";
			winner.style.display = "block";
			nextTurn.innerText = "Click 'reset' to play again."
			gameOver = true;
	} else if (squaresLeft === 0) {
		gameOver = true;
		winner.innerText = "It's a tie!"
		winner.style.display = "block";
		nextTurn.innerText = "Click 'reset' to play again."
	}
}

function reset() {
	Array.prototype.forEach.call(squares, function(item){
		item.innerText = "";
		item.setAttribute("data-value","");
	})
	xTurn = true
	winner.innerText = ""; //Needed?
	winner.style.display = "none";
	nextTurn.innerText = "X plays first."
	board = {
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3]
	};
	squaresLeft = 9;
	gameOver = false;
}

function aiEasyMove() {
	var row = null; //Is this the best practice for declaring an empty number variable? 
	var col = null; //i.e. the equivalent of var myStr = "";
	var lookingForSquare = true;
	while(lookingForSquare) {
		row = (Math.round(Math.random() * 2) + 1).toString();
		col = Math.round(Math.random() * 2) + 1;
		// console.log(row, col, board);
		if (board[row].indexOf(col) !== -1) {
			lookingForSquare = false;
			var square = document.querySelector("div[data-row='" + row + "'][data-col='" + col + "']");
			square.setAttribute("data-value", "O");
			square.innerText = "O";
			xTurn = true;
			board[row].splice(board[row].indexOf(col),1);
			squaresLeft--;
		} else {
			continue;
		}
	}
	checkWinner();
}

function assessMoves() {
  //figure out the available moves
  var moveScores = []
  var i = 0;
  for (row in board) {
  	for(var j = 0; j < board[row].length; j++) {
  		moveScores[i] = {
	  		moveRow : row,
	  		moveCol : col
	  	}
  	}
  	i++
  }
}

Array.prototype.forEach.call(squares, function(item){
	item.addEventListener("click", claimSquare);
})

var aiSelect = document.getElementsByClassName("ai");

Array.prototype.forEach.call(aiSelect, function(item){
	item.addEventListener("click", function(){
		reset();
		aiEasy = document.querySelector("input[value='easy']").checked;
		aiHard = document.querySelector("input[value='hard']").checked;
	});
})

document.getElementById("reset").addEventListener("click", reset);
