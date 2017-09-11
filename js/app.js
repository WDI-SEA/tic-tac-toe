console.log('Javascript running.');
//Start declaring variables
var squares = document.getElementsByClassName('tile');
var values = [];
var backgroundImage = document.querySelectorAll('.tile')
var reset = document.querySelector('#reset');
var turnValue = true;

//Declare functions
var grabValues = function () {
	for (let i = 0; i < squares.length; i++) {
		var value = squares[i].getAttribute('data-value');
		console.log(value);
		values.push(value);
	}
	return values;
}

var addX = function (box) {
	console.log('addX run');
	box.style.backgroundImage = "url('img/x.png')";
	box.setAttribute('data-value', 'x');
	console.log(box);
	winCondition(true);
};

var addO = function (box) {
	console.log('addO run');
	box.style.backgroundImage = "url('img/o.jpg')";
	box.setAttribute('data-value', 'o');
	console.log(box);
	winCondition(false);
};

var declareWinner = function(bool) {
	if (bool === true) {
		alert("X Wins");
		scoreboard(1);
	} else {
		alert("O Wins")
		scoreboard(1);
	}
};
var checkDraw = function() {
	console.log("This means that winCondition works");
	for (let i = 0; i < squares[i].length; i++) {
		if (squares[i].isClicked === true) {
			alert("It's a draw!");
		} else {
			console.log("Waiting next move");
		}
	}
};
var winCondition = function(bool) {
	console.log('win condition is a work in progress');
	grabValues();
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
var scoreboard = function (add) {
	var scoreX = 0 + add;
	var scoreO = 0 + add;
}; 
var playGame = function (box) {
	console.log('playGame run');
	var isClicked = box.getAttribute("data-clicked");
	if (isClicked === "true") {
		console.log("this square is occupado");
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
