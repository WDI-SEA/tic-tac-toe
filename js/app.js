document.addEventListener("DOMContentLoaded", function(){

	var board = document.getElementById("board");
	var turn = 0;

	//Empty Arrays used to store player move history to check against for win logic
	var xMoves = []; 
	var oMoves = []; 
	var xMovesStr = xMoves.toString();

	//Win Combanations
	var winMoves = ["a,b,c",
	"d,e,f",
	"g,h,i",
	"a,d,g",
	"b,e,h",
	"c,f,i",
	"a,e,i",
	"c,e,g",];

	oTurn = document.getElementById("oTurn");
	oWin = document.getElementById("oWin");
	xTurn = document.getElementById("xTurn");
	xWin = document.getElementById("xWin");

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

		gameWinX();
		gameWinO();
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

		//Clear the Win Message and Reset Player Turn Icon
		document.getElementById("message").innerHTML = "Turn = <br><img src=\'./img/dmx-x.png\' class='scaled'>"
		xWin.pause();
		oWin.pause();
	}

	//Game Win functions - For loop that sorts the moves array 
	//converts sorted array to string, and then compares to winning string combos 
	function gameWinX(){
		for (var i = 0; i<winMoves.length; i++){
			xMoves.sort();
			if(xMoves.toString() == winMoves[i]){
				document.getElementById("message").innerHTML = "<img src=\'./img/dmx-x.png\' class='scaled'> Wins!"
				xTurn.pause();
				xWin.play();
			}
		}
	}

	function gameWinO(){
		for (var i = 0; i<winMoves.length; i++){
			oMoves.sort();
			if(oMoves.toString() == winMoves[i]){
				document.getElementById("message").innerHTML = "<img src=\'./img/dmx-o.png\' class='scaled'> Wins!"
				oTurn.pause();
				oWin.play();
			}
		}
	}

});



















