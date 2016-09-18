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

var gameboard = {
	row1: {
		leftCell: document.getElementById("js_1"),
		centerCell: document.getElementById("js_2"),
		rightCell: document.getElementById("js_3")
	},
	row2: {
		leftCell: document.getElementById("js_4"),
		centerCell: document.getElementById("js_5"),
		rightCell: document.getElementById("js_6")
	},
	row3: {
		leftCell: document.getElementById("js_7"),
		centerCell: document.getElementById("js_8"),
		rightCell: document.getElementById("js_9")
	}
}


function playGame(){
	initializeGame(playerTurn);


}

function initializeGame(player) {
	for(var rowName in gameboard) {
		var row = gameboard[rowName];
		for(var cellName in row) {
			var cell = row[cellName];
			// console.log(row + ", " + cell);
			cell.addEventListener("click", function(event, once){
				this.textContent = player;
			}.bind(cell));
		};
	};

}





