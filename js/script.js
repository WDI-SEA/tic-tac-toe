
//creates an array of 9 elements based on the amount of divs on the page
var boardSpace = document.getElementsByClassName("boardSpace");

//starts off with playing X starting the game
var whichPlayer = 'x';
var isWinner = false;

//listens for click on X div to close alert windows
document.getElementById('exit').addEventListener("click", function(){
	document.getElementById('alert').style.display = 'none';
})

//creates arrays for which spaces have been selected for X and O
var selectedArrayX = [];
var selectedArrayO = [];

//populates the selected array to empty values so they can be assigned
for(var i = 0; i < boardSpace.length; i++){
	selectedArrayX[i] = "";
	selectedArrayO[i] = "";
}

//reset function used in new game button to reset game
var reset = function(){
	for(var i = 0; i < boardSpace.length; i++){
			selectedArrayX[i] = "";
			selectedArrayO[i] = "";
	}
	document.getElementById('winner').innerHTML= "<div id ='exit' class='x'></div>";
	whichPlayer = 'x';
}

//array of winning arrays
var winningArrays = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]];

//matches winning arrays with selected arrays to decide if anyone won the game
var getWinner = function(boardArray){
	for(var i = 0; i < winningArrays.length; i++){
			var winningA = winningArrays[i][0];
			var winningB = winningArrays[i][1];
			var winningC = winningArrays[i][2];

			if(selectedArrayX[winningA] === 1 && selectedArrayX[winningB] === 1 & selectedArrayX[winningC] === 1){
				document.getElementById('winner').innerHTML += "<h1>X wins!";
				document.getElementById('winner').style.display = 'inline';
				isWinner = true;
				console.log("X wins");
			}else if(selectedArrayO[winningA] === 1 && selectedArrayO[winningB] === 1 & selectedArrayO[winningC] === 1){
				document.getElementById('winner').innerHTML += "<h1>O wins!";
				document.getElementById('winner').style.display = 'inline';
				console.log("O wins");
				isWinner = true;
				}
			}
		}
	
//listens for a click to reset all temporary attributes and div alerts
document.getElementById('button').addEventListener("click", function(){
	for(var i = 0; i < boardSpace.length; i++){
		boardSpace[i].className = 'boardSpace';
		document.getElementById('alert').style.display = 'none';
		document.getElementById('winner').style.display = 'none';
		reset();
		document.getElementById('turnX').style.backgroundImage = "url('./images/X.png')";
		document.getElementById('turnO').style.backgroundImage = "none";
	}	
});

//adds event listeners on all of the divs to make the listen for action
for(var i = 0; i < boardSpace.length; i++){
	boardSpace[i].addEventListener("click", function(){
	 if(isWinner){
	 		
	 }else{
	 	if(whichPlayer === 'x'){
		  if(this.getAttribute("class").indexOf("true") === -1){
		  	this.className += (" x true");
		  	selectedArrayX[this.getAttribute("id")] = 1;
		  	whichPlayer = 'o';
		  	getWinner(selectedArrayX);
		  	document.getElementById('turnO').style.backgroundImage = "url('./images/O.png')";
		  	document.getElementById('turnX').style.backgroundImage = "none";
		  }else{
		  	document.getElementById('alert').style.display = 'inline';
		  	document.getElementById('exit').style.display = 'inline';
		  }
		}else{
			if(this.getAttribute("class").indexOf("true") === -1){
		  	this.className += (" o true");
		  	selectedArrayO[this.getAttribute("id")] = 1;
		  	whichPlayer = 'x';
		  	getWinner(selectedArrayO);
		  	document.getElementById('turnX').style.backgroundImage = "url('./images/X.png')";
		  	document.getElementById('turnO').style.backgroundImage = "none";
		  }else{
		  	document.getElementById('alert').style.display = 'inline';
		  	document.getElementById('exit').style.display = 'inline';
		  }
		}
	 }
	})
}

//makes sure the board is clear at the beginning
reset();