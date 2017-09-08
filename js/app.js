console.log('Javascript running.');
//Start declaring variables
//var div = document.getElementsByClassName('tile').getAttribute('value');
var squares = document.getElementsByClassName('tile');

for (var i = 0; i < squares.length; i++) {
var divs = squares[i].getAttribute('value');
var div = divs + 1;
}
var backgroundImage = document.querySelectorAll('.tile')
var reset = document.querySelector('#reset');
var turnValue = true;
//var check = document.getElementsByClassName

//Declare functions
var addX = function (box) {
	console.log('addX run');
	box.style.backgroundImage = "url('img/x.png')";
	winCondition(true);
};

var addO = function (box) {
	console.log('addO run');
	box.style.backgroundImage = "url('img/o.jpg')";
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
	//if (var i = 0; i < square.length; i++) {
		//if ()
	//}
};

var winCondition = function(bool) {
	console.log('win condition is a work in progress');
	for (var i = 0; i < divs.length; i++){
		if (div.val(1).backgroundImage === div(2).backgroundImage && div(1).backgroundImage === div(3).backgroundImage && div(2).backgroundImage === div(3).backgroundImage) {
			declareWinner(bool);
		} else if (div.val(4).backgroundImage === div(5).backgroundImage && div(4).backgroundImage === div(6).backgroundImage && div(5).backgroundImage === div(6).backgroundImage) {
			declareWinner(bool);
		} else if (div(7).backgroundImage === div(8).backgroundImage && div(7).backgroundImage === div(9).backgroundImage && div(8).backgroundImage === div(9).backgroundImage) {
			declareWinner(bool);
		} else if (div(1).backgroundImage === div(4).backgroundImage && div(1).backgroundImage === div(7).backgroundImage && div(4).backgroundImage === div(7).backgroundImage) { 
			declareWinner(bool);
		} else if (div(2).backgroundImage === div(5).backgroundImage && div(2).backgroundImage === div(8).backgroundImage && div(5).backgroundImage === div(8).backgroundImage) {
			declareWinner(bool);	
		} else if (div(3).backgroundImage === div(6).backgroundImage && div(3).backgroundImage === div(9).backgroundImage && div(6).backgroundImage === div(9).backgroundImage) {
			declareWinner(bool);
		} else if (div(1).backgroundImage === div(5).backgroundImage && div(1).backgroundImage === div(9).backgroundImage && div(5).backgroundImage === div(9).backgroundImage) {
			declareWinner(bool);
		} else if (div(3).backgroundImage === div(5).backgroundImage && div(3).backgroundImage === div(7).backgroundImage && div(5).backgroundImage === div(7).backgroundImage) {
			declareWinner(bool);
		} else {
			checkDraw();
		}
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

