// //variable declaration
// var topLeft = document.getElementById("topL");
// var topMid = document.getElementById("topM");
// var topRi = document.getElementById("topR");
// var midLeft = document.getElementById("midL");
// var midMid = document.getElementById("midM");
// var midRi = document.getElementById("midR");
// var botLeft = document.getElementById("botL");
// var botMid = document.getElementById("botM");
// var botRi = document.getElementById("botR");

// keeps track of which player is up
var turnRecord = document.getElementById("player");

//reset button
var resBut = document.getElementById("reset");

//variable initialization for counters and arrays
var turnCount = 0;
var occupiedGreen = [];
var occupiedRed = [];

//for all the images/squares
var imgs = document.querySelectorAll(".image");

//this function is the move functionality, it swaps
//the image of the game board and alters the turnRecord
//span to show the player up. also adds to the turn count
//which ultimately determines who's up w the main if/else
var swapImage = function() {
	if (turnCount%2 === 1) {
		this.setAttribute('src', './img/tiefighter.png');
		this.parentElement.style.backgroundColor="red";
		this.removeEventListener('click', swapImage);
		turnRecord.style.color="lightgreen";
		turnRecord.innerText ="Rebellion's";
		occupiedRed.push(this);
		//this.parentElement.style.boxShadowColor="lightgreen";
		turnCount++;
	} else {
		this.setAttribute('src', './img/xwing.png');
		this.parentElement.style.backgroundColor="lightgreen";
		this.removeEventListener('click', swapImage);
		turnRecord.style.color="red";
		turnRecord.innerText ="Sith's";
		occupiedGreen.push(this);
		turnCount++;
	}
};

//adds an eventListener to each image
for (var i = 0; i < imgs.length; i++) {
	imgs[i].addEventListener("click", swapImage);
}

//use this function as a parameter to a switch
//statement going thru various classNames
var scoreTrackGreen = 0;
var scoreTrackRed = 0;
var checkIfWin = function(className) {
	for (var i=0; i < occupiedGreen.length; i++) {
		if (occupiedGreen[i].className === className) {
			scoreTrackGreen++;
		}
	} 
	for (var i=0; i < occupiedRed.length; i++) {
		if (occupiedRed[i].className === className) {
			scoreTrackRed++;
			console.log("sith wins");
		}
	}
	if (scoreTrackGreen >= 3) {
		console.log("rebels win");
	} else if (scoreTrackRed >= 3) {
		console.log("sith wins");
	}
}


//switch statement for all the winning cases when 
//turnCount is over 5 
if (turnCount >= 5) {
	checkIfWin(row1);
	checkIfWin(row2);
} 


//reset sets board back to stars, span of player name back to initial, 
//adds action listeners to pieces again, and resets the turn count
reset.onclick = function () {
	for (var i=0; i < imgs.length; i++) {
		imgs[i].setAttribute('src', './img/stars.png');
		document.getElementsByClassName('unit')[i].style.backgroundColor = "transparent";
		imgs[i].addEventListener("click", swapImage);
		turnRecord.style.color="lightgreen";
		turnRecord.innerText ="Rebellion's";
	}
	turnCount=0;
}


