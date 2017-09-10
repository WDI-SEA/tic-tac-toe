console.log('Javascript running.');
//Start declaring variables
var squares = document.getElementsByClassName('tile');
var value = []
for (let i = 0; i < squares.length; i++) {
var values = squares[i].getAttribute('data-value');
console.log(values);
value.push(values[i]);
}

var backgroundImage = document.querySelectorAll('.tile')
var reset = document.querySelector('#reset');
var turnValue = true;

//Declare functions
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
	//console.log('win condition is a work in progress');
	//let div = squares;
		   if (value[0] === value[1] && value[0] === value[2] && value[1] === value[2]) {
		   	declareWinner(bool);
		   } else if (value[3] === value[4] && value[3] === value[5] && value[4] === value[5]) {
		   	declareWinner(bool);
		   } else if (value[6] === value[7] && value[6] === value[8] && value[7] === value[8]) {
		   	declareWinner(bool);
		   } else if (value[0] === value[3] && value[0] === value[6] && value[3] === value[6]) { 
		   	declareWinner(bool);
		   } else if (value[1] === value[4] && value[1] === value[7] && value[4] === value[7]) {
		   	declareWinner(bool);	
		   } else if (value[2] === value[5] && value[2] === value[8] && value[5] === value[8]) {
		   	declareWinner(bool);
		   } else if (value[0] === value[4] && value[0] === value[8] && value[4] === value[8]) {
		   	declareWinner(bool);
		   } else if (value[2] === value[4] && value[2] === value[6] && value[4] === value[6]) {
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
			addO(box);		}
	}
};
//Add Event Listeners
for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', function() {
		playGame(this);
	});
}
