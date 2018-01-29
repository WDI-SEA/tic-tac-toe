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

var playerX = players["player1"]["player"];
var playerO = players["player2"]["player"];
var xPositions = players.player1.positions;
var oPositions = players.player2.positions;
var xturn = document.getElementById("xturn");
var oturn = document.getElementById("oturn");

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
var playerTurn = function(player) {
	if (player === "O") {
		xturn.classList.remove("none");
		oturn.classList.add("none");
	} else if (player === "X") {
		oturn.classList.remove("none");
		xturn.classList.add("none");
	}
}
//display functions grab hardcoded elements and remove the class of none 
//so that they are visible on the board. Could be done smoother
//but your doing this at 2 am
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
	xPositions.splice(0,xPositions.length);
	oPositions.splice(0,oPositions.length);

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

	if (checkForWin(xPositions, wins) || checkForWin(oPositions, wins)) {
		alert("Hit Reset Button To Play Again!");
	} else if (xPositions.includes(this.id) || oPositions.includes(this.id)) {
		alert("choose another square!")
	} else {
		if (turn % 2 ===0) {
 			//Statement switches turns because X is always first 
			var xs = document.createElement('p');
			xs.textContent = playerX
			this.appendChild(xs);
			this.classList.add("boxblue");
			xPositions.push(this.id);		
			turn++
			var xWins = checkForWin(xPositions, wins);
			if (xWins){
 				displayX();
 				xturn.classList.add("none");
 			} else {
 				playerTurn(playerX);
 			}
 		} else {
 			var os = document.createElement('p');
			os.textContent = playerO;
			this.appendChild(os);
 			this.classList.add("boxgreen");
			oPositions.push(this.id);			
 			turn++
 			var oWins = checkForWin(oPositions, wins);
 			if (oWins){
 				displayO();
 				oturn.classList.add("none");
 			} else {
 				playerTurn(playerO);
 			}
 			
 			//Brant you should love counters (t-shirt idea)! After this else statement 
 			//the variable turn will be at 2 causing the if part to run.
		}
	}
}

// var computer = function() {
// 	var boxes = document.getElementsByClassName('box');
// 	console.log(boxes);
// 	var num = (Math.random());
// 	console.log(num);
//	count = 0
// 	for(var i = 0;i<boxes.length;i++){
// 		if (boxes[i].includes(classList('chosen'))){
//			return;
//		} else if (count === 1){
//			return;
//		} else {
//			append "O";
//			count++;
//}
// 	}
// }
//	computer();
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
