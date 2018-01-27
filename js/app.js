

var count = 0;
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
console.log(players["player1"]["player"]);

var choice = function() {
		
		if (players["player1"]["positions"].includes(this.id) || players["player2"]["positions"].includes(this.id)) {
			alert("choose another square!")
		} else {
			if (count % 2 ===0) {
				this.textContent = players["player1"]["player"];
				players["player1"]["positions"].push(this.id);
				console.log(players["player1"]["positions"]);
				count++
			} else {
				this.textContent = players["player2"]["player"];
				players["player2"]["positions"].push(this.id);
				console.log(players["player2"]["positions"]);
				count++
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
