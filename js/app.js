// game-tic-tac-toe.js
// www.github.com/Ari_M

//Start declaring variables
var squares = document.getElementsByClassName('tile');
var values = [];
var backgroundImage = document.querySelectorAll('.tile')
var reset = document.querySelector('#reset');
var turnValue = true;
arrayCheck = [];

//Declare functions
function changeArrayValue () {
	values = [];
	for (var i = 0; i < squares.length; i++) {
		var value = squares[i].getAttribute('data-value');
		values.push(value);
	}
}
function addX (box) {
	box.style.backgroundImage = "url('img/x.png')";
	box.setAttribute('data-value', 'x');
	changeArrayValue();
	winCondition(true);
};
function addO (box) {
	box.style.backgroundImage = "url('img/o.jpg')";
	box.setAttribute('data-value', 'o');
	changeArrayValue();
	winCondition(false);
};
function declareWinner(bool) {
	if (bool === true) {
		document.getElementById("displayWinner").innerHTML = "X Wins!";
	} else {
		document.getElementById("displayWinner").innerHTML = "O Wins!";
	}; 
	for (let i = 0; i < squares.length; i++) {
		var isClicked = squares[i];
		isClicked.setAttribute("data-clicked", "true");
	}
};
function checkDraw() {
	for (var i = 0; i < squares.length; i++) {
		var boardCheck = squares[i].getAttribute('data-clicked');
	}
	arrayCheck.push(boardCheck);
	if (arrayCheck.length === squares.length) {
		document.getElementById("displayWinner").innerHTML = "It's a draw";
	}
};
function winCondition(bool) {
		   if (values[0] === values[1] && values[0] === values[2] && values[1] === values[2]) {
		   	declareWinner(bool);
		   } else if (values[3] === values[4] && values[3] === values[5] && values[4] === values[5]) {
		   	declareWinner(bool);
		   } else if (values[6] === values[7] && values[6] === values[8] && values[7] === values[8]) {
		   	declareWinner(bool);
		   } else if (values[0] === values[3] && values[0] === values[6] && values[3] === values[6]) { 
		   	declareWinner(bool);
		   } else if (values[1] === values[4] && values[1] === values[7] && values[4] === values[7]) {
		   	declareWinner(bool);	
		   } else if (values[2] === values[5] && values[2] === values[8] && values[5] === values[8]) {
		   	declareWinner(bool);
		   } else if (values[0] === values[4] && values[0] === values[8] && values[4] === values[8]) {
		   	declareWinner(bool);
		   } else if (values[2] === values[4] && values[2] === values[6] && values[4] === values[6]) {
		   	declareWinner(bool);
		   } else {
		   	checkDraw();
		}
}; 
function playGame(box) {
	var isClicked = box.getAttribute("data-clicked");
	if (isClicked === "false") {
		box.setAttribute('data-clicked', 'true');
		if(turnValue) {
			turnValue = false;
			addX(box);
		} else {
			turnValue = true;
			addO(box);	
		}
	}
};

// Add Event Listeners
for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', function() {
		playGame(this);
	});
}

// Reset Button
reset.addEventListener('click', function() {
	arrayCheck = [];
	for (let i = 0; i < backgroundImage.length; i++) {
		var clear = backgroundImage[i];
		clear.style.backgroundImage = "url('img/transparent.png')";
	}
	for (let i = 0; i < squares.length; i++) {
		var isClicked = squares[i];
		isClicked.setAttribute('data-clicked', 'false');
	}
	document.getElementById("displayWinner").innerHTML = " ";
	for (var i = 0; i < squares.length; i++) {
		var newIndex = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
		squares[i].setAttribute("data-value", newIndex[i])
		changeArrayValue();
	}
});