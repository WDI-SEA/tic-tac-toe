var playerUp = "Player1";
var cells = document.getElementsByClassName("cell");
var selectedCell;
var player1sign = document.getElementById("player1sign");
var player2sign = document.getElementById("player2sign");
var numTurns = 0;
var xCells = [];
var oCells = [];
var heading = document.getElementsByTagName("h1")[0];
var reset = document.getElementsByTagName("button")[0];

//change CSS when a player wins
var displayWin = function(player) {
	heading.textContent = player + " won!";
	heading.style.background = "chartreuse";
	heading.style.color = "black";
	heading.style.border = "dotted white 10px";
	reset.style.border = "10px dotted chartreuse";
	reset.style.height = "80px";
	reset.style.width = "210px";
}
//change CSS when there is a draw
var displayDraw = function() {
	heading.textContent = "DRAW";
	heading.style.color = "red";
	heading.style.border = "solid red 10px";
	reset.style.border = "10px dotted red";
	reset.style.height = "80px";
	reset.style.width = "220px";
	if(playerUp === "Player1") {
		player1sign.style.background = "black";
	}
	else {
		player2sign.style.background = "black";
	}
}
//called within marUpCell() to handle wins and draws
var checkForWin = function (arr) {
	numTurns++;
	if (numTurns>=5) {
		switch (true) {
			case (arr.indexOf("UL")>=0 &&  arr.indexOf("UM")>=0 && arr.indexOf("UR")>=0):
			case (arr.indexOf("UL")>=0 && arr.indexOf("ML")>=0 && arr.indexOf("LL")>=0):
			case (arr.indexOf("UL")>=0 && arr.indexOf("MM")>=0 && arr.indexOf("LR")>=0):
			case (arr.indexOf("UM")>=0 && arr.indexOf("MM")>=0 && arr.indexOf("LM")>=0):
			case (arr.indexOf("UR")>=0 && arr.indexOf("MM")>=0 && arr.indexOf("LL")>=0):
			case (arr.indexOf("UR")>=0 && arr.indexOf("MR")>=0 && arr.indexOf("LR")>=0):
			case (arr.indexOf("ML")>=0 && arr.indexOf("MM")>=0 && arr.indexOf("MR")>=0):
			case (arr.indexOf("LL")>=0 && arr.indexOf("LM")>=0 && arr.indexOf("LR")>=0):
				console.log(playerUp + " won!");
				displayWin(playerUp);
				return true;
			default:
				console.log("defaulting");
				if(numTurns<9) {
					return false;
				}
				else {
					displayDraw();
					return true;
				}
		}
	}
}
//executes each time a player clicks on a cell
var markUpCell = function() {
	selectedCell.removeEventListener("click", function() {
		selectedCell = this;
		markUpCell();
	});
	if(playerUp==="Player1") {
		selectedCell.className += " clickedByP1";
		xCells.push(selectedCell.id);
		if (!checkForWin(xCells)) {
			player2sign.style.background = "chartreuse";
			player1sign.style.background = "black";
			playerUp = "Player2";
		}
	}
	else {
		selectedCell.className += " clickedByP2";
		oCells.push(selectedCell.id);
		if (!checkForWin(oCells)) {
			player1sign.style.background = "chartreuse";
			player2sign.style.background = "black";
			playerUp = "Player1";
		}
	}
}


var resetEventListeners = function () {
	for (var i = 0; i<cells.length; i++) {
		selectedCell = cells[i];
		selectedCell.addEventListener("click", function() {
			selectedCell = this;
			markUpCell();
		});
	}
}

var resetGame = function() {
	window.location.reload();
}

document.addEventListener("DOMContentLoaded", function(event) {
	player1sign.style.background = "chartreuse";
   resetEventListeners();
   reset.addEventListener("click", resetGame);
});




