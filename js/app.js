 var player1;
 var player2;
 var playerTurn;

 var xButton = document.getElementById("js_x");
 var oButton = document.getElementById("js_o");
 var resetBoardButton = document.getElementById("js_play_again");
 var currentGameBoard;

 resetBoardButton.addEventListener("click", resetBoard);

 function resetBoard() {
 	player1 = "";
 	player2 = "";
 	playerTurn = "";
 	xButton.style.backgroundColor= "";
 	oButton.style.backgroundColor= "";
 	currentGameBoard = new Gameboard;
 };

 xButton.addEventListener("click", function(event, once) {
 	if (player1) {
 		return
 	} else {
 		assignPlayer(event.currentTarget);
 		changeColor(event.currentTarget);
 		currentGameBoard = new Gameboard();
 	}
 });

 oButton.addEventListener("click", function(event, once) {
 	if (player2) {
 		return
 	} else {
 		assignPlayer(event.currentTarget);
 		changeColor(event.currentTarget);
 		currentGameBoard = new Gameboard();
 	}
 });

 function changeColor(){
 	if (playerTurn == "X") {
 		xButton.style.backgroundColor = "purple";
 		oButton.style.backgroundColor = "";
 	} else if (playerTurn === "O") {
 		oButton.style.backgroundColor = "purple";
 		xButton.style.backgroundColor = "";
 	}
 };

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


function Gameboard() {
	this.row1 = {
		leftCell: new Cell("js_1"),
		centerCell: new Cell("js_2"),
		rightCell: new Cell("js_3")
	},
	this.row2 = {
		leftCell: new Cell("js_4"),
		centerCell: new Cell("js_5"),
		rightCell: new Cell("js_6")
	},
	this.row3 = {
		leftCell: new Cell("js_7"),
		centerCell: new Cell("js_8"),
		rightCell: new Cell("js_9")
	}
};

Gameboard.prototype = {

};

function Cell(elName) {
	this.el = document.getElementById(elName);
	this.el.textContent = "";
	this.el.addEventListener("click", this.setToXorO.bind(this));
}; 

Cell.prototype = {
	switchPlayer: function() {
		if (playerTurn == player1) {
		playerTurn = player2;
		} else if (playerTurn == player2){
			playerTurn = player1;
		}
		setTimeout(changeColor, 500);
	},
	setToXorO: function() {
		if (this.clicked){
			return;
		} else {
			this.el.textContent = playerTurn;
			this.clicked = playerTurn;
			this.switchPlayer;
			setTimeout(this.switchPlayer, 10);
		}
	},
};








