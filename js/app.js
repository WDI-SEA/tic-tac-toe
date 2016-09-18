 var player1;
 var player2;
 var playerTurn;

 var xButton = document.getElementById("js_x");
 var oButton = document.getElementById("js_o");

 xButton.addEventListener("click", function(event, once) {
 	if (player1) {
 		return
 	} else {
 		changeColor(event.currentTarget);
 		assignPlayer(event.currentTarget);
 		playGame();
 	}
 });
 oButton.addEventListener("click", function(event, once) {
 	if (player2) {
 		return
 	} else {
 		changeColor(event.currentTarget);
 		assignPlayer(event.currentTarget);
 		playGame();
 	}
 });

 function changeColor(button){
 	if (button == xButton) {
 		xButton.style.backgroundColor = "purple";
 		oButton.style.backgroundColor = "";
 	} else if (button === oButton) {
 		oButton.style.backgroundColor = "purple";
 		xButton.style.backgroundColor = "";
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

function Cell(elName) {
	this.el = document.getElementById(elName);
	this.el.addEventListener("click", this.setToXorO.bind(this));
}; 

Cell.prototype = {
	setToXorO: function(){
		this.el.textContent = playerTurn;
		this.clicked = true;
	}
};

var gameboard = {
	row1: {
		leftCell: new Cell("js_1"),
		centerCell: new Cell("js_2"),
		rightCell: new Cell("js_3")
	},
	row2: {
		leftCell: new Cell("js_4"),
		centerCell: new Cell("js_5"),
		rightCell: new Cell("js_6")
	},
	row3: {
		leftCell: new Cell("js_7"),
		centerCell: new Cell("js_8"),
		rightCell: new Cell("js_9")
	}
};

function playGame(){
	// initializeGame(playerTurn);

}

// function initializeGame(player) {
// 	for(var rowName in gameboard) {
// 		var row = gameboard[rowName];
// 		for(var cellName in row) {
// 			var cell = row[cellName];
// 			var cellEl = cell.el;
// 			cellEl.addEventListener("click", function(){
// 				this.el.textContent = player;
// 				this.clicked = true;
// 			}.bind(cell));
// 		};
// 	};

// }





