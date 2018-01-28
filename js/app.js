var turn = 0;
var players = {
	player1: {
		player: "X",
		positions:[]
	},
	player2: {
		player: "O",
		positions: []
	}
}
var wins = [
	["topRight", "topMid", "topLeft"], 
	["right","mid","left"], 
	["bottomRight","bottomMid","bottomLeft"],
	["topRight","right","bottomRight"],
	["topMid","mid","bottomMid"],
	["topLeft","left","bottomLeft"],
	["topRight","mid","bottomLeft"],
	["topLeft","mid","bottomRight"]
];
//Not that it matters here but good practice to keep the count global so that 
//you are not using var to make it a variable everytime you call the function
var count = 0;
// Counts is super important when functions have multiple loops
var checkForWin = function (playerPositions, winArrays) {
	if (playerPositions.length >= 3) {
		for(var i = 0; i < winArrays.length; i++) {
			// Stupid! have to set count back to zero so everytime that it
			// goes through an array in the 2d array(var wins) it resets and 
			// isn't counting past 3
			count = 0;
			for(var j = 0; j <winArrays[i].length; j++) {
				if (playerPositions.includes(winArrays[i][j])) {
					count = count + 1;
				}
				//Brant you can't compare things with = (Same mistake over again means your coocooo!)
				if (count === 3) {
					console.log("true");
					return true;
				}
			}

		}
	}
}

var displayO = function() {
	var displayO = document.getElementsByClassName("owins");
	for (var i =0; i < displayO.length; i++){
		displayO[i].classList.remove("none");
	}
}
var displayX = function() {
	var displayX = document.getElementsByClassName("xwins");
	var displayO = document.getElementsByClassName("owins");
	for (var i =0; i < displayX.length; i++){
		displayX[i].classList.remove("none");
	}
}

var reset = function() {
	//Empties players positions arrays
	players.player1.positions.splice(0,players.player1.positions.length);
	players.player2.positions.splice(0,players.player2.positions.length);

	location.reload();
	// var board = document.getElementsByClassName("board")[0].children;
	// console.log(board);
	// for(var i = 0; i < board.length; i++) {
	// 	board[i].textContent= '';
	// }
}
//"this" is awesome! Function alerts user if they are picking a a square already chosen using
// using the players objects which holds the positions array
var choice = function() {
	if (checkForWin(players.player1.positions, wins) || checkForWin(players.player2.positions, wins)) {
		alert("Hit Reset Button To Play Again!");
	} else if (players["player1"]["positions"].includes(this.id) || players["player2"]["positions"].includes(this.id)) {
		alert("choose another square!")
	} else {
		if (turn % 2 ===0) {
 			//Statement switches turns because X is always first 
			this.textContent = players["player1"]["player"];
			players["player1"]["positions"].push(this.id);		
			turn++
			var xWins = checkForWin(players.player1.positions, wins);
			if (xWins){
 				displayX();
 			}
 		} else {
 			this.textContent = players["player2"]["player"];
			players["player2"]["positions"].push(this.id);			
 			turn++
 			var oWins = checkForWin(players.player2.positions, wins);
 			if (oWins){
 				displayO();
 			}
 			
 			//Brant you should love counters (t-shirt idea)! After this else statement 
 			//the variable turn will be at 2 causing the if part to run.
		}
	}
}
document.addEventListener("DOMContentLoaded", function() {
	document.querySelector("#topRight").addEventListener("click", choice);
	document.querySelector("#topMid").addEventListener("click", choice);
	document.querySelector("#topLeft").addEventListener("click", choice);
	document.querySelector("#right").addEventListener("click", choice);
	document.querySelector("#mid").addEventListener("click", choice);
	document.querySelector("#left").addEventListener("click", choice);
	document.querySelector("#bottomRight").addEventListener("click", choice);
	document.querySelector("#bottomMid").addEventListener("click", choice);
	document.querySelector("#bottomLeft").addEventListener("click", choice);

	document.querySelector(".reset").addEventListener("click", reset);
});
