//Establish the number of squares on the board.
var playerBoard = document.getElementsByClassName("boardSpace");

//Empty arrays to dump the clicked square values in
var playerX = [];
var playerO = [];

//Dictates number of spaces in array for player selected places 
for (i = 0 ; i < playerBoard.length ; i++) {
	playerX[i] = "";
	playerO[i] = "";
}

//Initiates first player turn
var whoseTurn = "x";


//Adding click events to run game logic
for (i = 0; i < playerBoard.length ; i++) {
	document.getElementById(i).addEventListener("click", function() {
    	if (whoseTurn == "x") {
    		if (this.getAttribute("class").indexOf("true") === -1) {
    			 this.className += " x true";
    	 		 whoseTurn = "o";
		    	 playerX[this.getAttribute("id")] = 1;
		    	 console.log(playerX); 
		    	 isWinner();
    		}
    		else {
    			alert("already played");
    		}
    	}
    	else {
    		if (this.getAttribute("class").indexOf("true") === -1) {
    			 this.className += " o true";
    	 		 whoseTurn = "x";
		    	 playerO[this.getAttribute("id")] = 1;
		    	 console.log(playerO); 
		    	 isWinner();
    		}
    		else {
    			alert("Already Played");
    		}
    	}
	});	
}


//identify winning combos
var winningNumbers = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]];


//identify winner
var isWinner = function() {
	for (i = 0; i < winningNumbers.length; i++) {
		var winningNumberA = winningNumbers[i][0];
		var winningNumberB = winningNumbers[i][1];
		var winningNumberC = winningNumbers[i][2];
		if (playerX[winningNumberA] === 1 && playerX[winningNumberB] === 1 && playerX[winningNumberC] === 1) {
			document.getElementById('board').innerHTML = "<h2>x gave it to ya</h2>";
		}
		else if (playerO[winningNumberA] === 1 && playerO[winningNumberB] === 1 && playerO[winningNumberC] === 1) {
			document.getElementById('board').innerHTML = "<h2>ohhh wins</h2>";
		}
	}
}

//reset button
var newGame = document.getElementById('button');

newGame.addEventListener('click', function(event) {
    newGame.textContent = location.reload();
})

