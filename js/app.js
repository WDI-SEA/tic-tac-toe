// keeps track of which player is up
var turnRecord = document.getElementById("player");

//reset button
var resBut = document.getElementById("reset");

var gameBoard = document.querySelectorAll("#gameboard > .unit");

//variable initialization for counters
var turnCount = 0;

//for all the images/squares
var imgs = document.querySelectorAll(".image");

//this function is the move functionality, it swaps
//the image n background of the game board and alters the
//span to show the player up. also adds to the turn count
//which ultimately determines who's up w the main if/else
var swapImage = function() {
	if (turnCount%2 === 1) {
		this.className = "red";
		this.removeEventListener('click', swapImage);
		turnRecord.style.color="lightgreen";
		turnRecord.innerText ="Rebellion's";
		checkIfWin();
		//this.parentElement.style.boxShadowColor="lightgreen";
		turnCount++;
	} else {
		this.className = "green";
		this.removeEventListener('click', swapImage);
		turnRecord.style.color="red";
		turnRecord.innerText ="Sith's";
		checkIfWin();
		turnCount++;
	}
};

//adds an eventListener to each image
for (var i = 0; i < imgs.length; i++) {
	imgs[i].addEventListener("click", swapImage);
}

//HECK 
//these iterators collect whether or not the green/red blocks (parent) classes
//contain any of the winning class names. how to determine if 3 match??
var checkIfWin = function() {
	
	while (turnCount >= 4) {
		if (
	      gameBoard[0].firstElementChild.className == gameBoard[1].firstElementChild.className && gameBoard[1].firstElementChild.className == gameBoard[2].firstElementChild.className  ||
	      gameBoard[3].firstElementChild.className == gameBoard[4].firstElementChild.className && gameBoard[4].firstElementChild.className == gameBoard[5].firstElementChild.className  ||
	      gameBoard[6].firstElementChild.className == gameBoard[7].firstElementChild.className && gameBoard[7].firstElementChild.className == gameBoard[8]  ||
	      gameBoard[0].firstElementChild.className == gameBoard[3].firstElementChild.className && gameBoard[3].firstElementChild.className == gameBoard[6].firstElementChild.className  ||
	      gameBoard[1].firstElementChild.className == gameBoard[4].firstElementChild.className && gameBoard[4].firstElementChild.className == gameBoard[7].firstElementChild.className  ||
	      gameBoard[2].firstElementChild.className == gameBoard[5].firstElementChild.className && gameBoard[5].firstElementChild.className == gameBoard[8] ||
	      gameBoard[0].firstElementChild.className == gameBoard[4].firstElementChild.className && gameBoard[4].firstElementChild.className == gameBoard[8]  ||
	      gameBoard[2].firstElementChild.className == gameBoard[4].firstElementChild.className && gameBoard[4].firstElementChild.className == gameBoard[6].firstElementChild.className 
	    ) {
	      console.log("we have a winner!");
	      document.querySelector('p').innerText = "We have a winner!!!";

	      for (var i = 0; i < 9; i++) {
	      	imgs[i].removeEventListener('click', swapImage);
	      }

	      return true;

	    } else {

	      return false;
	    }
	}
}

//reset sets board back to stars, span of player name back to initial, 
//adds action listeners to pieces again, fixes the paragraph and span
//and resets the turn count
reset.onclick = function () {
	for (var i=0; i < imgs.length; i++) {
		imgs[i].className = "stars";
		imgs[i].addEventListener("click", swapImage);
		turnRecord.style.color="lightgreen";
		turnRecord.innerText ="Rebellion's";
	}
	document.querySelector('p').innerHTML = "It's the " + "<span id='player'>Rebellion's</span>" + " turn!";
	turnCount=0;
	results['scoreTrackGreen'] = 0;
	results['scoreTrackRed'] = 0;
}


