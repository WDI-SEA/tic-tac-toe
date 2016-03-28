//*** Variables ***
var container = document.getElementById('container');
var squares = document.querySelectorAll('.square')
var curPlayer = document.querySelector('#player');
var turnText = document.querySelector('#turnText');
var playedSquares;
var turn = 'X';
var gameOver = 0;
var reset = document.querySelector('#reset');
var win = [	['sq1', 'sq2', 'sq3'],
			['sq1', 'sq5', 'sq9'],
			['sq1', 'sq4', 'sq7'],
			['sq4', 'sq5', 'sq6'],
			['sq7', 'sq5', 'sq3'],
			['sq7', 'sq8', 'sq9'],
			['sq2', 'sq5', 'sq8'],
			['sq3', 'sq6', 'sq9'] ]

//*** Functions ***
var setTurn = function() {
	if (gameOver === 0) {
		if (turn === 'X') {
			turn = 'O';
	    	curPlayer.innerHTML = 'O';
		} else {
			turn = 'X';
	    	curPlayer.innerHTML = 'X';
		};
		
	};
};

var resetPlayedObject = function() {
	playedObject = {'sq1': "", 'sq2': "", 'sq3': "",
					'sq4': "", 'sq5': "", 'sq6': "",
					'sq7': "", 'sq8': "", 'sq9': ""};
}

var checkForWin = function(player) {
	playedSquares = document.getElementsByClassName('played');
	resetPlayedObject();
	for (var i = 0; i < playedSquares.length; i++) {
		sq = playedSquares[i];
		playedObject[sq.id] = sq.innerHTML;
	};
	for (var i = 0; i < win.length; i++) {	
		if (playedObject[win[i][0]] === player 
			&& playedObject[win[i][1]] === player 
			&& playedObject[win[i][2]] === player) {
				gameOver = 1;
			for (var j = 0; j <= 2; j++) {
				document.getElementById(win[i][j]).classList.add('blue');
			};
			turnText.innerHTML = player;
			curPlayer.innerHTML = "&#160; is the winner!!";
		} else if (playedSquares.length === 9) {
			console.log(playedSquares);
			for (var i = 0; i < squares.length; i++) {
				squares[i].classList.add('red');
			};
			turnText.innerHTML = "It's a draw!";
			curPlayer.innerHTML = "";
			gameOver = 1;
		};
	};
};

var resetGame = function() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].innerHTML = '';
	};
	gameOver = 0;
	setTurn();
	turnText.innerHTML = "It's your turn,&#160;";
	curPlayer.innerHTML = turn;
	var blue = document.querySelectorAll('.blue');
	for (var i = 0; i < squares.length; i++) {
		squares[i].classList.remove('blue', 'red', 'played');
	};
};

//*** Event Listeners ***
reset.addEventListener('click', resetGame);

for (var i = 0; i < squares.length; i++) {
	 squares[i].addEventListener('mouseover', function(e) {
    	e.target.classList.add('hover-gray');
    });
    squares[i].addEventListener('mouseout', function(e){
    	e.target.classList.remove('hover-gray');
    })
    squares[i].addEventListener('click', function(e) {
    	if (gameOver === 0) {
	    	if (e.target.innerHTML === '') {
	    		e.target.innerHTML = turn;
	    		e.target.classList.add('played');
	    	} else {
	    		e.target.classList.add('red');
	    		setTimeout(function(){ e.target.classList.remove('red'); }, 250);
	    	};
	    checkForWin(turn);
	    	if (turn === 'X') {
    			setTurn('O');
    		} else {
    			setTurn('X');
    		};
	    };
	});
};
