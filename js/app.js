console.log('Hello frontend');

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


var markBox = function(elementId, boxClickedRedOrBlack) {
	var newColor = document.getElementById(elementId)
	//newColor.style.background = color;
	newColor.classList.add(boxClickedRedOrBlack);
	newColor.classList.remove("box");
};

var playerChange = function() {
	player = player + 1;
};

var playerGo = function() {
	var newPlayer = document.getElementsByTagName("p")[0];
	if (player % 2) {
		newPlayer.textContent = "first player go";
	} else {
		newPlayer.textContent = "second player go";
	}
};

var topRowCount = 0;
var middleRowCount = 0;
var bottomRowCount = 0;

var leftColCount = 0;
var middlleColCount = 0;
var rightColCount = 0;

var leftDownDiagCount = 0;
var leftUpDiagCount = 0;

var checkForWin = function(elementId) {
	var boxClickedId = elementId;

	switch (boxClickedId) {
		case "boxtopleft":
			topRowCount = topRowCount + 1;
			leftColCount = leftColCount + 1;
			leftDownDiagCount = leftDownDiagCount + 1;
			break;
		case "boxtopmiddle":
			topRowCount = topRowCount + 1;
			middlleColCount = middlleColCount + 1;
			break;
		case "boxtopright":
			topRowCount = topRowCount + 1;
			rightColCount = rightColCount + 1;
			leftUpDiagCount = leftUpDiagCount + 1;
			break;

		case "boxmiddleleft":
			middleRowCount = middleRowCount + 1;
			leftColCount = leftColCount + 1;
			break;
		case "boxmiddlemiddle":
			middleRowCount = middleRowCount + 1;
			middlleColCount = middlleColCount + 1;
			leftDownDiagCount = leftDownDiagCount + 1;
			leftUpDiagCount = leftUpDiagCount + 1;
			break;
		case "boxmiddleright":
			middleRowCount = middleRowCount + 1;
			rightColCount = rightColCount + 1;
			break;

		case "boxbottomleft":
			bottomRowCount = bottomRowCount + 1;
			leftColCount = leftColCount + 1;
			leftUpDiagCount = leftUpDiagCount + 1;
			break;
		case "boxbottommiddle":
			bottomRowCount = bottomRowCount + 1;
			break;
		case "boxbottomright":
			bottomRowCount = bottomRowCount + 1;
			rightColCount = rightColCount + 1;
			leftDownDiagCount = leftDownDiagCount + 1;
			break;	
	}
}

var checkBox = function() {
	boxPosition = this.id;
	console.log(boxPosition);


	if (!blackBox[boxPosition] && !redBox[boxPosition]) {
 		playerGo();
 		if (player % 2) {
 			markBox(boxPosition, "boxClickedRed");
			blackBox[boxPosition] = true;
			checkForWin(boxPosition);
			console.log(topRowCount);
			playerChange();
 		} else {
 			markBox(boxPosition, "boxClickedBlack");
			redBox[boxPosition] = true;
			checkForWin(boxPosition);
			console.log(topRowCount);
			playerChange();
 		}
		
	}

};

var reset = function() {
	

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




