document.addEventListener("DOMContentLoaded", function(){

	var board = document.getElementById("board");
	var turn = 0;

	//Empty Arrays used to store player move history to check against for win logic
	var xMoves = []; 
	var oMoves = []; 

	//Win Combanations
	var winCombos = [
		["a1", "a2", "a3"],
		["b1", "b2", "b3"],
		["c1", "c2", "c3"],
		["a1", "b1", "c1"],
		["a2", "b2", "c2"],
		["a3", "b3", "c3"],
		["a1", "b2", "c3"],
		["a3", "b2", "c1"],

	];

	oTurn = document.getElementById("oTurn");
	xTurn = document.getElementById("xTurn");

	//Adding click event to the tiles
	function clickTiles(){
		for (var i = 0; i < board.children.length; i++) {
			board.children[i].addEventListener("click", isClicked);
		}

	//Game Start Sound
	gameStartSound = document.getElementById("gameStart");
	gameStartSound.play()
	}
	clickTiles();

	//Function to swap turns, and set marker for the tile
	function isClicked(){
		if (turn % 2 === 0){
			this.style.background = "url('./img/dmx-x.png') no-repeat center";
			document.querySelector("img").src = "./img/dmx-o.png";
			//On click add to corresponding players history array
			xMoves.push(this.id);
			xTurn.play()
		} else {
			this.style.background = "url('./img/dmx-o.png') no-repeat center";
			document.querySelector("img").src = "./img/dmx-x.png";
			//On click add to corresponding players history array
			oMoves.push(this.id);
			oTurn.play()
		}

		turn++
		//Remove click listener once the tile is clicked
		this.removeEventListener("click", isClicked);

	} 

	//Add click event to reset button
	document.getElementById("reset").addEventListener("click", resetGame);

	//Reset turn to 0, set the background color to white, and the moves array
	function resetGame(){
		turn = 0;
		xMoves = [];
		oMoves = [];
		var clearTile = document.querySelectorAll("#board div");
		for (var i = 0; i < clearTile.length; i++) {
			clearTile[i].style.backgroundImage = "";
		}
		clickTiles();
		//Reset the player turn message
		document.querySelector("img").src = "./img/dmx-x.png";
	}

});
