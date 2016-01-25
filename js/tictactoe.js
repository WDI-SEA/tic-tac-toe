var playerOneMove = "X";
var playerTwoMove = "O";
var playerOneTurn = "Player 1, please make your move."
var playerTwoTurn = "Player 2, please make your move."
var playerOneWinMsg = "Congratulations Player 1! You won the game!"
var playerTwoWinMsg = "Congratulations Player 2! You won the game!"
var defaultCellColor = "green";
var xCellColor = "blue";
var oCellColor = "red";
var playerTurn = 1; //Counter to determine which character to place
var allBoxes = document.getElementsByTagName("span");
var gameStatus = document.getElementById("gameStatus");
var checkCol1 = document.getElementsByClassName("col1");
var checkCol2 = document.getElementsByClassName("col2");
var checkCol3 = document.getElementsByClassName("col3");
var checkRow1 = document.getElementsByClassName("winrow1");
var checkRow2 = document.getElementsByClassName("winrow2");
var checkRow3 = document.getElementsByClassName("winrow3");
var checkDiag1 = document.getElementsByClassName("diag1");
var checkDiag2 = document.getElementsByClassName("diag2");

//Function to clear the board
document.getElementById("clear").addEventListener("click", function() {
	for (var i = 0; i < allBoxes.length; i++) {
			allBoxes[i].innerHTML = "";
			allBoxes[i].style.backgroundColor = defaultCellColor;
	}
	playerTurn = 1;
	gameStatus.innerHTML = playerOneTurn;

});

//Function to check for winner. To run after each move.
var checkForWinner = function() {
	if (checkCol1[0].innerHTML == playerOneMove && checkCol1[1].innerHTML == playerOneMove && checkCol1[2].innerHTML == playerOneMove) {
		gameStatus.innerHTML = playerOneWinMsg;
	}
	else if (checkCol1[0].innerHTML == playerTwoMove && checkCol1[1].innerHTML == playerTwoMove && checkCol1[2].innerHTML == playerTwoMove) {
		gameStatus.innerHTML = playerTwoWinMsg;
	}
	else if (checkCol2[0].innerHTML == playerOneMove && checkCol2[1].innerHTML == playerOneMove && checkCol2[2].innerHTML == playerOneMove) {
		gameStatus.innerHTML = playerOneWinMsg;
	}
	else if (checkCol2[0].innerHTML == playerTwoMove && checkCol2[1].innerHTML == playerTwoMove && checkCol2[2].innerHTML == playerTwoMove) {
		gameStatus.innerHTML = playerTwoWinMsg;
	}
	else if (checkCol3[0].innerHTML == playerOneMove && checkCol3[1].innerHTML == playerOneMove && checkCol3[2].innerHTML == playerOneMove) {
		gameStatus.innerHTML = playerOneWinMsg;
	}
	else if (checkCol3[0].innerHTML == playerTwoMove && checkCol3[1].innerHTML == playerTwoMove && checkCol3[2].innerHTML == playerTwoMove) {
		gameStatus.innerHTML = playerTwoWinMsg;
	}
	else if (checkRow1[0].innerHTML == playerOneMove && checkRow1[1].innerHTML == playerOneMove && checkRow1[2].innerHTML == playerOneMove) {
		gameStatus.innerHTML = playerOneWinMsg;
	}
	else if (checkRow1[0].innerHTML == playerTwoMove && checkRow1[1].innerHTML == playerTwoMove && checkRow1[2].innerHTML == playerTwoMove) {
		gameStatus.innerHTML = playerTwoWinMsg;
	}
	else if (checkRow2[0].innerHTML == playerOneMove && checkRow2[1].innerHTML == playerOneMove && checkRow2[2].innerHTML == playerOneMove) {
		gameStatus.innerHTML = playerOneWinMsg;
	}
	else if (checkRow2[0].innerHTML == playerTwoMove && checkRow2[1].innerHTML == playerTwoMove && checkRow2[2].innerHTML == playerTwoMove) {
		gameStatus.innerHTML = playerTwoWinMsg;
	}
	else if (checkRow3[0].innerHTML == playerOneMove && checkRow3[1].innerHTML == playerOneMove && checkRow3[2].innerHTML == playerOneMove) {
		gameStatus.innerHTML = playerOneWinMsg;
	}
	else if (checkRow3[0].innerHTML == playerTwoMove && checkRow3[1].innerHTML == playerTwoMove && checkRow3[2].innerHTML == playerTwoMove) {
		gameStatus.innerHTML = playerTwoWinMsg;
	}
	else if (checkDiag1[0].innerHTML == playerOneMove && checkDiag1[1].innerHTML == playerOneMove && checkDiag1[2].innerHTML == playerOneMove) {
		gameStatus.innerHTML = playerOneWinMsg;
	}
	else if (checkDiag1[0].innerHTML == playerTwoMove && checkDiag1[1].innerHTML == playerTwoMove && checkDiag1[2].innerHTML == playerTwoMove) {
		gameStatus.innerHTML = playerTwoWinMsg;
	}
	else if (checkDiag2[0].innerHTML == playerOneMove && checkDiag2[1].innerHTML == playerOneMove && checkDiag2[2].innerHTML == playerOneMove) {
		gameStatus.innerHTML = playerOneWinMsg;
	}
	else if (checkDiag2[0].innerHTML == playerTwoMove && checkDiag2[1].innerHTML == playerTwoMove && checkDiag2[2].innerHTML == playerTwoMove) {
		gameStatus.innerHTML = playerTwoWinMsg;
	}
}

//Functions to play moves in individual squares

document.getElementById("square1").addEventListener("click", function() {
	if (playerTurn % 2 != 0 && document.getElementById("square1").innerHTML === "") {
		document.getElementById("square1").innerHTML = playerOneMove;
		gameStatus.innerHTML = playerTwoTurn;
		playerTurn++;
		document.getElementById("square1").style.backgroundColor = xCellColor;
	}
	else if (playerTurn % 2 === 0 && document.getElementById("square1").innerHTML === ""){
		document.getElementById("square1").innerHTML = playerTwoMove;
		gameStatus.innerHTML = playerOneTurn;
		playerTurn++;
		document.getElementById("square1").style.backgroundColor = oCellColor;
	}
	checkForWinner();
});

document.getElementById("square2").addEventListener("click", function() {
	if (playerTurn % 2 != 0 && document.getElementById("square2").innerHTML === "") {
		document.getElementById("square2").innerHTML = playerOneMove;
		gameStatus.innerHTML = playerTwoTurn;
		playerTurn++;
		document.getElementById("square2").style.backgroundColor = xCellColor;
	}
	else if (playerTurn % 2 === 0 && document.getElementById("square2").innerHTML === ""){
		document.getElementById("square2").innerHTML = playerTwoMove;
		gameStatus.innerHTML = playerOneTurn;
		playerTurn++;
		document.getElementById("square2").style.backgroundColor = oCellColor;
	}
	checkForWinner();	
});

document.getElementById("square3").addEventListener("click", function() {
	if (playerTurn % 2 != 0 && document.getElementById("square3").innerHTML === "") {
		document.getElementById("square3").innerHTML = playerOneMove;
		gameStatus.innerHTML = playerTwoTurn;
		playerTurn++;
		document.getElementById("square3").style.backgroundColor = xCellColor;
	}
	else if (playerTurn % 2 === 0 && document.getElementById("square3").innerHTML === ""){
		document.getElementById("square3").innerHTML = playerTwoMove;
		gameStatus.innerHTML = playerOneTurn;
		playerTurn++;
		document.getElementById("square3").style.backgroundColor = oCellColor;
	}
	checkForWinner();	
});

document.getElementById("square4").addEventListener("click", function() {
	if (playerTurn % 2 != 0 && document.getElementById("square4").innerHTML === "") {
		document.getElementById("square4").innerHTML = playerOneMove;
		gameStatus.innerHTML = playerTwoTurn;
		playerTurn++;
		document.getElementById("square4").style.backgroundColor = xCellColor;
	}
	else if (playerTurn % 2 === 0 && document.getElementById("square4").innerHTML === ""){
		document.getElementById("square4").innerHTML = playerTwoMove;
		gameStatus.innerHTML = playerOneTurn;
		playerTurn++;
		document.getElementById("square4").style.backgroundColor = oCellColor;
	}
	checkForWinner();	
});

document.getElementById("square5").addEventListener("click", function() {
	if (playerTurn % 2 != 0 && document.getElementById("square5").innerHTML === "") {
		document.getElementById("square5").innerHTML = playerOneMove;
		gameStatus.innerHTML = playerTwoTurn;
		playerTurn++;
		document.getElementById("square5").style.backgroundColor = xCellColor;
	}
	else if (playerTurn % 2 === 0 && document.getElementById("square5").innerHTML === ""){
		document.getElementById("square5").innerHTML = playerTwoMove;
		gameStatus.innerHTML = playerOneTurn;
		playerTurn++;
		document.getElementById("square5").style.backgroundColor = oCellColor;
	}
	checkForWinner();	
});

document.getElementById("square6").addEventListener("click", function() {
	if (playerTurn % 2 != 0 && document.getElementById("square6").innerHTML === "") {
		document.getElementById("square6").innerHTML = playerOneMove;
		gameStatus.innerHTML = playerTwoTurn;
		playerTurn++;
		document.getElementById("square6").style.backgroundColor = xCellColor;
	}
	else if (playerTurn % 2 === 0 && document.getElementById("square6").innerHTML === ""){
		document.getElementById("square6").innerHTML = playerTwoMove;
		gameStatus.innerHTML = playerOneTurn;
		playerTurn++;
		document.getElementById("square6").style.backgroundColor = oCellColor;
	}
	checkForWinner();	
});

document.getElementById("square7").addEventListener("click", function() {
	if (playerTurn % 2 != 0 && document.getElementById("square7").innerHTML === "") {
		document.getElementById("square7").innerHTML = playerOneMove;
		gameStatus.innerHTML = playerTwoTurn;
		playerTurn++;
		document.getElementById("square7").style.backgroundColor = xCellColor;
	}
	else if (playerTurn % 2 === 0 && document.getElementById("square7").innerHTML === ""){
		document.getElementById("square7").innerHTML = playerTwoMove;
		gameStatus.innerHTML = playerOneTurn;
		playerTurn++;
		document.getElementById("square7").style.backgroundColor = oCellColor;
	}
	checkForWinner();	
});

document.getElementById("square8").addEventListener("click", function() {
	if (playerTurn % 2 != 0 && document.getElementById("square8").innerHTML === "") {
		document.getElementById("square8").innerHTML = playerOneMove;
		gameStatus.innerHTML = playerTwoTurn;
		playerTurn++;
		document.getElementById("square8").style.backgroundColor = xCellColor;
	}
	else if (playerTurn % 2 === 0 && document.getElementById("square8").innerHTML === ""){
		document.getElementById("square8").innerHTML = playerTwoMove;
		gameStatus.innerHTML = playerOneTurn;
		playerTurn++;
		document.getElementById("square8").style.backgroundColor = oCellColor;
		}
		checkForWinner();	
});

document.getElementById("square9").addEventListener("click", function() {
	if (playerTurn % 2 != 0 && document.getElementById("square9").innerHTML === "") {
		document.getElementById("square9").innerHTML = playerOneMove;
		gameStatus.innerHTML = playerTwoTurn;
		playerTurn++;
		document.getElementById("square9").style.backgroundColor = xCellColor;
	}
	else if (playerTurn % 2 === 0 && document.getElementById("square9").innerHTML === ""){
		document.getElementById("square9").innerHTML = playerTwoMove;
		gameStatus.innerHTML = playerOneTurn;
		playerTurn++;
		document.getElementById("square9").style.backgroundColor = oCellColor;
	}
	checkForWinner();
});