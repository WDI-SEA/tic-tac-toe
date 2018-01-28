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
var classWinNames = ["row1", "row2", "row3",
					"col1", "col2", "col3",
					"diag1", "diag2"];

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
		occupiedRed.push(this);
		//this.parentElement.style.boxShadowColor="lightgreen";
		turnCount++;
	} else {
		this.className = "green";
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
var results = {
	scoreTrackGreen: 0,
	scoreTrackRed: 0
}

//HECK 
//these iterators collect whether or not the green/red blocks (parent) classes
//contain any of the winning class names. how to determine if 3 match??
occupiedGreen.forEach(function(item) {
	for (var i = 0; i < classWinNames.length; i++) {
		if (item.parentElement.classList.contains(classWinNames[i]) && item.classList.contains("green")===true) {
			results["scoreTrackGreen"]++;
			console.log('did it');
			break;
		}
	}
});

occupiedRed.forEach(function(item) {
	for (var i = 0; i < classWinNames.length; i++) {
		if (item.parentElement.classList.contains(classWinNames[i])===true) {
			results["scoreTrackRed"]++;
			console.log('did it');
			break;
		}
	}
});

//reset sets board back to stars, span of player name back to initial, 
//adds action listeners to pieces again, and resets the turn count
reset.onclick = function () {
	for (var i=0; i < imgs.length; i++) {
		imgs[i].className = "stars";
		imgs[i].addEventListener("click", swapImage);
		turnRecord.style.color="lightgreen";
		turnRecord.innerText ="Rebellion's";
	}
	turnCount=0;
}


