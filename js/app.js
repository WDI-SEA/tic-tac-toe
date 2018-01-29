
var topRowCountBlack = 0;
var middleRowCountBlack = 0; 
var bottomRowCountBlack = 0;

var leftColCountBlack = 0;
var middlleColCountBlack = 0;
var rightColCountBlack = 0;

var leftDownDiagCountBlack = 0;
var leftUpDiagCountBlack = 0;

var topRowCountRed = 0;
var middleRowCountRed = 0;
var bottomRowCountRed = 0;

var leftColCountRed = 0;
var middlleColCountRed = 0;
var rightColCountRed = 0;

var leftDownDiagCountRed = 0;
var leftUpDiagCountRed = 0;

var blackBox = {
	boxtopleft: false,
	boxtopmiddle: false,
	boxtopright: false,
	boxmiddleleft: false,
	boxmiddlemiddle: false,
	boxmiddleright: false,
	boxbottomleft: false,
	boxbottommiddle: false,
	boxbottomright: false
};

var redBox = {
	boxtopleft: false,
	boxtopmiddle: false,
	boxtopright: false,
	boxmiddleleft: false,
	boxmiddlemiddle: false,
	boxmiddleright: false,
	boxbottomleft: false,
	boxbottommiddle: false,
	boxbottomright: false
};

var player = 0;
var boxPosition;
var newPlayer;

var newColor = null;

var markBox = function(elementId, boxClickedRedOrBlack, color) {
	newColor = document.getElementById(elementId)
	newColor.classList.add(boxClickedRedOrBlack);
	newColor.classList.remove("box");
	newColor.style.background = color;
};

var playerChange = function() {
	player = player + 1;
};

var playerGo = function() {
	newPlayer = document.getElementsByTagName("p")[0];
	if (player % 2) {
		newPlayer.textContent = "first player go";
	} else {
		newPlayer.textContent = "second player go";
	}
};

var tallyForWin = function(elementId) {
	
	var boxClickedId = elementId;
	
	if (player % 2) {
		switch (boxClickedId) {
		case "boxtopleft":
			topRowCountRed = topRowCountRed + 1;
			leftColCountRed = leftColCountRed + 1;
			leftDownDiagCountRed = leftDownDiagCountRed + 1;
			break;
		case "boxtopmiddle":
			topRowCountRed = topRowCountRed + 1;
			middlleColCountRed = middlleColCountRed + 1;
			break;
		case "boxtopright":
			topRowCountRed = topRowCountRed + 1;
			rightColCountRed = rightColCountRed + 1;
			leftUpDiagCountRed = leftUpDiagCountRed + 1;
			break;

		case "boxmiddleleft":
			middleRowCountRed = middleRowCountRed + 1;
			leftColCountRed = leftColCountRed + 1;
			break;
		case "boxmiddlemiddle":
			middleRowCountRed = middleRowCountRed + 1;
			middlleColCountRed = middlleColCountRed + 1;
			leftDownDiagCountRed = leftDownDiagCountRed + 1;
			leftUpDiagCountRed = leftUpDiagCountRed + 1;
			break;
		case "boxmiddleright":
			middleRowCountRed = middleRowCountRed + 1;
			rightColCountRed = rightColCountRed + 1;
			break;

		case "boxbottomleft":
			bottomRowCountRed = bottomRowCountRed + 1;
			leftColCountRed = leftColCountRed + 1;
			leftUpDiagCountRed = leftUpDiagCountRed + 1;
			break;
		case "boxbottommiddle":
			bottomRowCountRed = bottomRowCountRed + 1;
			middlleColCountRed = middlleColCountRed + 1;
			break;
		case "boxbottomright":
			bottomRowCountRed = bottomRowCountRed + 1;
			rightColCountRed = rightColCountRed + 1;
			leftDownDiagCountRed = leftDownDiagCountRed + 1;
			break;	
		}
	} else {
		switch (boxClickedId) {
		case "boxtopleft":
			topRowCountBlack = topRowCountBlack + 1;
			leftColCountBlack = leftColCountBlack + 1;
			leftDownDiagCountBlack = leftDownDiagCountBlack + 1;
			break;
		case "boxtopmiddle":
			topRowCountBlack = topRowCountBlack + 1;
			middlleColCountBlack = middlleColCountBlack + 1;
			break;
		case "boxtopright":
			topRowCountBlack = topRowCountBlack + 1;
			rightColCountBlack = rightColCountBlack + 1;
			leftUpDiagCountBlack = leftUpDiagCountBlack + 1;
			break;

		case "boxmiddleleft":
			middleRowCountBlack = middleRowCountBlack + 1;
			leftColCountBlack = leftColCountBlack + 1;
			break;
		case "boxmiddlemiddle":
			middleRowCountBlack = middleRowCountBlack + 1;
			middlleColCountBlack = middlleColCountBlack + 1;
			leftDownDiagCountBlack = leftDownDiagCountBlack + 1;
			leftUpDiagCountBlack = leftUpDiagCountBlack + 1;
			break;
		case "boxmiddleright":
			middleRowCountBlack = middleRowCountBlack + 1;
			rightColCountBlack = rightColCountBlack + 1;
			break;

		case "boxbottomleft":
			bottomRowCountBlack = bottomRowCountBlack + 1;
			leftColCountBlack = leftColCountBlack + 1;
			leftUpDiagCountBlack = leftUpDiagCountBlack + 1;
			break;
		case "boxbottommiddle":
			bottomRowCountBlack = bottomRowCountBlack + 1;
			middlleColCountBlack = middlleColCountBlack + 1;
			break;
		case "boxbottomright":
			bottomRowCountBlack = bottomRowCountBlack + 1;
			rightColCountBlack = rightColCountBlack + 1;
			leftDownDiagCountBlack = leftDownDiagCountBlack + 1;
			break;	
		}
	}
};

var winClassB;
var winClassR;
var winClass;

var win = function() {
	winClassB = document.querySelectorAll(".boxClickedBlack");
	for (var i = 0; i < winClassB.length; i++) {
		winClassB[i].style.background = "green";
	}
	winClassR = document.querySelectorAll(".boxClickedRed");
	for (var i = 0; i < winClassR.length; i++) {
		winClassR[i].style.background = "green";
	}
	winClass = document.querySelectorAll(".box");
	for (var i = 0; i < winClass.length; i++) {
		winClass[i].style.background = "green";
	}
};

var checkForWin = function() {
	if (topRowCountBlack === 3 || middleRowCountBlack === 3 || bottomRowCountBlack === 3 || leftColCountBlack === 3 || middlleColCountBlack === 3 || rightColCountBlack === 3 || leftDownDiagCountBlack === 3 || leftUpDiagCountBlack === 3)  {
		newPlayer.textContent = "player 1 wins";
		win();
	} else if (topRowCountRed === 3 || middleRowCountRed === 3 || bottomRowCountRed === 3 || leftColCountRed === 3 || middlleColCountRed === 3 || rightColCountRed === 3 || leftDownDiagCountRed === 3 || leftUpDiagCountRed === 3) {
		newPlayer.textContent = "player 2 wins";
		win();
	}

};

var checkBox = function() {
	boxPosition = this.id;
	console.log(boxPosition);
	playerGo();

	if (!blackBox[boxPosition] && !redBox[boxPosition]) {
 		//
 		if (player % 2) {
 			markBox(boxPosition, "boxClickedRed", "red");
			blackBox[boxPosition] = true;
			tallyForWin(boxPosition);
			checkForWin();
			playerChange();
 		} else {
 			markBox(boxPosition, "boxClickedBlack", "black");
			redBox[boxPosition] = true;
			tallyForWin(boxPosition);
			checkForWin();
			playerChange();
 		}
		
	}

};


var reset = function() {

	for (var i = 0; i < winClassB.length; i++) {
		winClassB[i].classList.remove("boxClickedBlack");
		winClassB[i].classList.add("box");
		winClassB[i].style.background = "white"
	}

	for (var i = 0; i < winClassR.length; i++) {
		winClassR[i].classList.remove("boxClickedRed");
		winClassR[i].classList.add("box");
		winClassR[i].style.background = "white"
	}

	for (var i = 0; i < winClass.length; i++) {
		winClass[i].style.background = "white"
	}

	for (position in blackBox) {
		blackBox[position] = false;
	}


	for (position in redBox) {
		redBox[position] = false;
	}

	newPlayer.textContent = "first player go";

	player = 0;

	topRowCountBlack = 0;
	middleRowCountBlack = 0; 
	bottomRowCountBlack = 0;

	leftColCountBlack = 0;
	middlleColCountBlack = 0;
	rightColCountBlack = 0;

	leftDownDiagCountBlack = 0;
	leftUpDiagCountBlack = 0;

	topRowCountRed = 0;
	middleRowCountRed = 0;
	bottomRowCountRed = 0;

	leftColCountRed = 0;
	middlleColCountRed = 0;
	rightColCountRed = 0;

	leftDownDiagCountRed = 0;
	leftUpDiagCountRed = 0;
};



document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("boxtopleft").addEventListener('click', checkBox);
	document.getElementById("boxtopmiddle").addEventListener('click', checkBox);
	document.getElementById("boxtopright").addEventListener('click', checkBox);
	document.getElementById("boxmiddleleft").addEventListener('click', checkBox);
	document.getElementById("boxmiddlemiddle").addEventListener('click', checkBox);
	document.getElementById("boxmiddleright").addEventListener('click', checkBox);
	document.getElementById("boxbottomleft").addEventListener('click', checkBox);
	document.getElementById("boxbottommiddle").addEventListener('click', checkBox);
	document.getElementById("boxbottomright").addEventListener('click', checkBox);

	document.getElementsByTagName("button")[0].addEventListener('click', reset);


});




