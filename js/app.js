// Global variables.
var player1;
var player2;
var playerTurn;
var xButton = document.getElementById("js_x");
var oButton = document.getElementById("js_o");
var resetBoardButton = document.getElementById("js_play_again");

// Adding event listeners to global variabls.
xButton.addEventListener("click", function() {
 	if (player1) {
 		return;
 	} else {
 		assignPlayer(event.currentTarget);
 		changeColor(event.currentTarget);
 		gameboard.hideOrShowGameBoard("show");
 	}
});

oButton.addEventListener("click", function() {
 	if (player2) {
 		return;
 	} else {
 		assignPlayer(event.currentTarget);
 		changeColor(event.currentTarget);
 		gameboard.hideOrShowGameBoard("show");
 	}
});

resetBoardButton.addEventListener("click", resetBoard);

// Unique functions
function resetBoard() {
 	player1 = "";
 	player2 = "";
 	playerTurn = "";
 	xButton.style.backgroundColor= "";
 	oButton.style.backgroundColor= "";
 	xButton.style.color = "black";
 	oButton.style.color = "black";
 	for(var rowName in gameboard.cells) {
		var row = gameboard.cells[rowName];
 		for(var columnName in row){
 			var cell = row[columnName];
 			cell.reset();
 		}
 	}
 	gameboard.hideOrShowGameBoard("hide");
}

function changeColor() {
 	if (playerTurn == "X") {
 		xButton.style.backgroundColor = "purple";
 		xButton.style.color = "white";
 		oButton.style.backgroundColor = "";
 		oButton.style.color = "black";
 	} else if (playerTurn === "O") {
 		oButton.style.backgroundColor = "purple";
 		oButton.style.color = "white";
 		xButton.style.backgroundColor = "";
 		xButton.style.color = "black";
 	}
 }

function assignPlayer(input) {
	if (input == xButton) {
		player1 = "X";
		player2 = "O";
	} else if (input == oButton) {
		player1 = "O";
		player2 = "X";
	} else {
		return;
	}
	playerTurn = player1;
}

// Constructors
function Gameboard() {
	this.cells = {
		top: {
			left: new Cell("js_1"),
			center: new Cell("js_2"),
			right: new Cell("js_3")
		},
		middle: {
			left: new Cell("js_4"),
			center: new Cell("js_5"),
			right: new Cell("js_6")
		},
		bottom: {
			left: new Cell("js_7"),
			center: new Cell("js_8"),
			right: new Cell("js_9")
		}
	};	

	this.el = document.getElementById("js_game_board");
};

Gameboard.prototype = {
	hideOrShowGameBoard: function(hideOrShow) {
	 	if (hideOrShow == "hide") {
	 		this.el.style.visibility= "hidden";
	 	} else if (hideOrShow == "show") {
	 		this.el.style.visibility= "visible";
	 	}
 	}
};

function Cell(elName) {
	this.el = document.getElementById(elName);
	this.setToXorO = this.setToXorO.bind(this);
	this.el.addEventListener("click", this.setToXorO);
}

Cell.prototype = {
	switchPlayer: function() {
		if (playerTurn == player1) {
			playerTurn = player2;
		} else if (playerTurn == player2){
			playerTurn = player1;
		}
		setTimeout(changeColor, 50);
	},
	setToXorO: function() {
		if (this.whoClicked){
			return;
		} else {
			this.el.textContent = playerTurn;
			this.whoClicked = playerTurn;
			if (this.isWinner("X")) {
				setTimeout(function() {
					window.alert("Player X is the winner!");
					resetBoard();
				}, 0);
				
			} else if(this.isWinner("O")) {
				setTimeout(function() {
					window.alert("Player O is the winner!");
					resetBoard();
				}, 0);
			} else {
				this.switchPlayer();
			}
		}
	},
	reset: function() {
		this.el.textContent = "";
		this.whoClicked = "";
	},
	isWinner: function(XorO) {
		var board = gameboard.cells;
		if(board.top.left.whoClicked == XorO && board.top.center.whoClicked == XorO && board.top.right.whoClicked == XorO) {
			return true;
		} else if(board.middle.left.whoClicked == XorO && board.middle.center.whoClicked == XorO && board.middle.right.whoClicked == XorO) {
			return true;
		} else if(board.bottom.left.whoClicked == XorO && board.bottom.center.whoClicked == XorO && board.bottom.right.whoClicked == XorO) {
			return true;
		} else if(board.top.left.whoClicked == XorO && board.middle.left.whoClicked == XorO && board.bottom.left.whoClicked == XorO) {
			return true;
		} else if(board.top.center.whoClicked == XorO && board.middle.center.whoClicked == XorO && board.bottom.center.whoClicked == XorO) {
			return true;
		} else if(board.top.right.whoClicked == XorO && board.middle.right.whoClicked == XorO && board.bottom.right.whoClicked == XorO) {
			return true;
		} else if(board.top.left.whoClicked == XorO && board.middle.center.whoClicked == XorO && board.bottom.right.whoClicked == XorO) {
			return true;
		} else if(board.top.right.whoClicked == XorO && board.middle.center.whoClicked == XorO && board.bottom.left.whoClicked == XorO) {
			return true;
		} else {
			return false;
		}
	}
};

// Calling Gameboard constructor.
var gameboard = new Gameboard();
gameboard.hideOrShowGameBoard("hide");





