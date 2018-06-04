//initialize click counter
var clickCount = 0;
var totalClicks = 0;
var clickState = [];

//get all of the squares into an index array
var selectSquare = document.querySelectorAll(".main div");

//on page load make the clickState array, should only one once
document.addEventListener('DOMContentLoaded', giveIds(), false);

//make an array to store the click state of all the divs, they start out all as false
function giveIds() {
	for (i=0; i<selectSquare.length; i++) {
	clickState.push("false");
	selectSquare[i].addEventListener("click", newClick);
	selectSquare[i].setAttribute("id", i);
	}
}

function resetAll () {
	for (i=0; i<selectSquare.length; i++) {
		selectSquare[i].style.backgroundColor = "";
		clickState.push("false");
	}
	clickCount = 0;
	totalClicks = 0;
	clickState = [];
}

//function that checks for win conditions
//I really don't like how this is implemented but I know no other way :(
function checkWin(bonk) {
	if (totalClicks >= 9) {
		if (selectSquare[0].style.backgroundColor === selectSquare[1].style.backgroundColor && selectSquare[1].style.backgroundColor === selectSquare[2].style.backgroundColor) {
			alert(selectSquare[0].style.backgroundColor + " won");
		} else if (selectSquare[3].style.backgroundColor === selectSquare[4].style.backgroundColor && selectSquare[4].style.backgroundColor === selectSquare[5].style.backgroundColor) {
			alert(selectSquare[3].style.backgroundColor + " won");
		} else if (selectSquare[6].style.backgroundColor === selectSquare[7].style.backgroundColor && selectSquare[7].style.backgroundColor === selectSquare[8].style.backgroundColor) {
			alert(selectSquare[6].style.backgroundColor + " won")
		} else if (selectSquare[0].style.backgroundColor === selectSquare[3].style.backgroundColor && selectSquare[3].style.backgroundColor === selectSquare[6].style.backgroundColor) {
			alert(selectSquare[0].style.backgroundColor + " won");
		} else if (selectSquare[1].style.backgroundColor === selectSquare[4].style.backgroundColor && selectSquare[4].style.backgroundColor === selectSquare[7].style.backgroundColor) {
			alert(selectSquare[1].style.backgroundColor + " won");
		} else if (selectSquare[2].style.backgroundColor === selectSquare[5].style.backgroundColor && selectSquare[5].style.backgroundColor === selectSquare[8].style.backgroundColor) {
			alert(selectSquare[2].style.backgroundColor + " won");
		} else if (selectSquare[0].style.backgroundColor === selectSquare[4].style.backgroundColor && selectSquare[4].style.backgroundColor === selectSquare[8].style.backgroundColor) {
			alert(selectSquare[0].style.backgroundColor + " won");
		} else if (selectSquare[2].style.backgroundColor === selectSquare[4].style.backgroundColor && selectSquare[4].style.backgroundColor === selectSquare[6].style.backgroundColor) {
			alert(selectSquare[2].style.backgroundColor + " won");
		} else {
			console.log("nada");
		}	
	} else {
		console.log("not enough clicks yet to check win conditions");
	}
}

//function to deal with new click events
//if it's been clicked before, nothing happens
//if it hasn't been clicked before, add to the counter, change that state to TRUE
function newClick() {
	//whichSquare will keep track of which square was clicked
	var whichSquare = this.id;
	checkState(whichSquare);
	clickMath(whichSquare);
	changeSquare(whichSquare);
	checkWin(whichSquare);
}

//change the background to correspond to the clicks
function changeSquare(bar) {
	if (clickCount%2 === 0) {
		//selectSquare[bar].className = "purple";
		selectSquare[bar].style.backgroundColor = "purple";
	} else {
		//selectSquare[bar].className = "yellow";
		selectSquare[bar].style.backgroundColor = "yellow";
	}
}

//if checkState evaluates to true, then you know the square has already been clicked and nothing will happen
//else, you can start adding to the click counter
function clickMath(foo) {
	if (!checkState(foo)) { 
		addClick();
	} else if (checkState(foo) && clickCount >= 0) { //clicking on the same square
		addClick(); //add a click because we're on the same square
	} else {
		console.log("idk");
	}
}

//function to check if the current square has a "true" clickState
function checkState(positionParam) {
	if (clickState[positionParam] === "false") {
		resetClick(); //reset the counter if it's the first time you've clicked on the square
		clickState[positionParam] = "true"; 
		return false;
	} else if (clickState[positionParam] === "true") {
		//console.log("already been clicked");
		return true;
	}
}

//on click add to clickCount, and turn the clickstate to true
function addClick() {
	clickCount++;
	totalClicks++;
	console.log("added a click", clickState, clickCount);
}

function resetClick() {
	clickCount = 0;
	console.log("reset the click counter");
}




