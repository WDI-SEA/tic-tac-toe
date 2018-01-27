

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

var count = 0;
// Counts is super important when functions have multiple loops
var checkForWin = function () {
	if (players.player1.positions.length >= 3 || players.player2.positions.length >= 3) {
		for(var i = 0; i < wins.length; i++) {
			// Stupid! have to set count back to zero so everytime that it
			// goes through an array in the 2d array(var wins) it resets and 
			// isn't counting past 3
			count = 0;
			for(var j = 0; j <wins[i].length; j++) {
				if (players.player1.positions.includes(wins[i][j])) {
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

//"this" is awesome! Function alerts user if they are picking a a square already chosen using
// using the players objects which holds the positions array
var choice = function() {
	if (players["player1"]["positions"].includes(this.id) || players["player2"]["positions"].includes(this.id)) {
		alert("choose another square!")
	} else {
		if (turn % 2 ===0) {
			//Statement switches turns because X is always first 
			this.textContent = players["player1"]["player"];
			players["player1"]["positions"].push(this.id);		
			turn++
			checkForWin();
		} else {
			this.textContent = players["player2"]["player"];
			players["player2"]["positions"].push(this.id);			
			turn++
			checkForWin();
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




});
