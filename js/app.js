//console.log('Javascript running.');
//Start declaring variables
var squares = document.getElementsByClassName('tile');
var values = [];
for (var i = 0; i < squares.length; i++) {
	var value = squares[i].getAttribute('data-value')
	values.push(value);
}
//console.log(values);
var backgroundImage = document.querySelectorAll('.tile')
var reset = document.querySelector('#reset');
var turnValue = true;

//Declare functions
var changeArrayValue = function () {
	values = []
	for (var i = 0; i < squares.length; i++) {
		var value = squares[i].getAttribute('data-value');
		values.push(value);
	}
}

var addX = function (box) {
	box.style.backgroundImage = "url('img/x.png')";
	//console.log('addX run');
	box.setAttribute('data-value', 'x');
	changeArrayValue();
	//console.log(box);
	winCondition(true);
};

var addO = function (box) {
	box.style.backgroundImage = "url('img/o.jpg')";
	//console.log('addO run');
	box.setAttribute('data-value', 'o');
	changeArrayValue();
	//console.log(box);
	winCondition(false);
};

var declareWinner = function(bool) {
	if (bool === true) {
		document.getElementById("displayWinner").innerHTML = "X Wins!";
	} else {
		document.getElementById("displayWinner").innerHTML = "O Wins!";
	}
};
var checkDraw = function() {
	//console.log("This means that winCondition works");
	for (let i = 8; i < squares.length; i++) {
		var boardCheck = squares[i].getAttribute('data-clicked');
		if (boardCheck === "true") {
			document.getElementById("displayWinner").innerHTML = "It's a draw";
		} else {
			//console.log("Waiting next move");
		}
	}
};
var winCondition = function(bool) {
	//console.log('win condition is a work in progress');
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
var scoreboard = function (point) {
	var scoreX = 0 + point;
	var scoreO = 0 + point;
	//console.log("X Score: " + scoreX + " | " + "O Score: " + scoreO)
}; 
var playGame = function (box) {
	//console.log('playGame run');
	var isClicked = box.getAttribute("data-clicked");
	if (isClicked === "true") {
		//console.log("this square is occupado");
	} else {
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
//Add Event Listeners
for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', function() {
		playGame(this);
	});
}
reset.addEventListener('click', function() {
	for (let i = 0; i < backgroundImage.length; i++) {
		var clear = backgroundImage[i];
		clear.style.backgroundImage = "url('img/transparent.png')";
	}
	for (let i = 0; i < squares.length; i++) {
		var isClicked = squares[i];
		isClicked.setAttribute('data-clicked', 'false');
	}
	document.getElementById("displayWinner").innerHTML = " ";
});

