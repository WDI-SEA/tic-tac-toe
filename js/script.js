// variables and functions

var allBoxes = document.getElementsByClassName('play-square');
var isPlayerOne = true;  // this will determine which player is playing
var singlePlayerMode = false  // this determines if o's are placed by computer
var gameOver = false // this will stop the computer from taking any more turns when the game ends.

var getRandomNumber = function(){         // the first two functions are for AI in single-player
	return Math.floor(Math.random() * 9);
}

var computerMove = function() {
	checkForWinner();
	if (singlePlayerMode && !gameOver){
		do {
			x = getRandomNumber();
		} while (allBoxes[x].className.indexOf("cell") !== -1)
		allBoxes[x].className += " o-cell";
		isPlayerOne = true;
	}
}

var checkForWinner = function(){   // the following functions check to see if anyone has won
	if (isWinner('x')){
		document.getElementById('winner-name').innerHTML = "The Winner is X!"
		gameOver = true;
	}
	if (isWinner('o')){
		document.getElementById('winner-name').innerHTML = "The Winner is O!"
		gameOver = true;
	}
}

var isWinner = function(player){
	return winsRow(player) || winsCol(player) || winsDia(player);
}

var winsRow = function(player){
	return connectThree(player, allBoxes[0], allBoxes[1], allBoxes[2]) ||
		   connectThree(player, allBoxes[3], allBoxes[4], allBoxes[5]) ||
		   connectThree(player, allBoxes[6], allBoxes[7], allBoxes[8]);
}

var winsCol = function(player){
	return connectThree(player, allBoxes[0], allBoxes[3], allBoxes[6]) ||
		   connectThree(player, allBoxes[1], allBoxes[4], allBoxes[7]) ||
		   connectThree(player, allBoxes[2], allBoxes[5], allBoxes[8]);
}

var winsDia = function(player){
	return connectThree(player, allBoxes[0], allBoxes[4], allBoxes[8]) ||
		   connectThree(player, allBoxes[2], allBoxes[4], allBoxes[6]);
}

var connectThree = function(player, cell1, cell2, cell3){
	if(cell1.className.indexOf(player) >= 0 && 
	   cell2.className.indexOf(player) >= 0 &&
	   cell3.className.indexOf(player) >= 0) {
		return player;
	}
}


var turnCheck = function(){   // this function changes the position of the turn indicator 
	if(isPlayerOne){
		document.getElementById("x-span").className = 'active-turn';
		document.getElementById("o-span").className = '';
	} else {
		document.getElementById("x-span").className = '';
		document.getElementById("o-span").className = 'active-turn'
	}
}

var changeBox = function(cell) {     // this assigns a square to x or o
	if (cell.className.indexOf("cell") === -1) {  // this line prevents overwriting played squares
		if (isPlayerOne){
			cell.className += " x-cell";  //gives the square P1 color
			//cell.innerHTML = "<p>X<p>";   //gives the square an X
			isPlayerOne = false;          //makes it P2's turn
			computerMove();				//prompts computer to take its turn (sigle-player only!)
		} else {
			cell.className += " o-cell";
			//cell.innerHTML = "<p>O<p>";
			isPlayerOne = true;	
		}
	}
	checkForWinner();
	turnCheck();
}


var clearBoard = function(){  //function for the clear button
	for(var i in allBoxes){
		allBoxes[i].className = 'play-square'; //clears all x && o-cell classes from boxes
		allBoxes[i].innerHTML = ''; //clears all text from boxes
		isPlayerOne = true;         //makes it player one's turn
		turnCheck();
		gameOver = false;
		document.getElementById('winner-name').innerHTML = "Who will survive?";
	}
}

var modeTogle = function(){
	if(!singlePlayerMode){
		document.getElementById('single-player').innerHTML = "2p Mode";
		singlePlayerMode = true;
	} else if (singlePlayerMode){
		document.getElementById('single-player').innerHTML = "Vs. Comp";
		singlePlayerMode = false;
	}
}



// call functions

turnCheck();

// event listeners

document.getElementById('clear-button').addEventListener('click', function(){
	clearBoard();
})

document.getElementById('single-player').addEventListener('click', function(){
	modeTogle();
})

document.getElementById('cell-1').addEventListener('click', function(){
	changeBox(this);
})

document.getElementById('cell-2').addEventListener('click', function(){
	changeBox(this);
})

document.getElementById('cell-3').addEventListener('click', function(){
	changeBox(this);
})

document.getElementById('cell-4').addEventListener('click', function(){
	changeBox(this);
})

document.getElementById('cell-5').addEventListener('click', function(){
	changeBox(this);
})

document.getElementById('cell-6').addEventListener('click', function(){
	changeBox(this);
})

document.getElementById('cell-7').addEventListener('click', function(){
	changeBox(this);
})

document.getElementById('cell-8').addEventListener('click', function(){
	changeBox(this);
})

document.getElementById('cell-9').addEventListener('click', function(){
	changeBox(this);
})