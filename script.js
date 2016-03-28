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

var setTurn = function(x) {
	if (gameOver === 0) {
		turn = x;
	    curPlayer.innerHTML = x;
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
		// console.log(playedObject[sq.id].innerHTML);
		// console.log(playedObject);
	};
	for (var i = 0; i < win.length; i++) {
		// console.log(playedObject[win[i][0]] + "," + turn);
		console.log(playedObject[win[i][0]]);	
		if (playedObject[win[i][0]] === player 
			&& playedObject[win[i][1]] === player 
			&& playedObject[win[i][2]] === player) {
				gameOver = 1;
				document.getElementById(win[i][0]).classList.add('blue');
				document.getElementById(win[i][1]).classList.add('blue');
				document.getElementById(win[i][2]).classList.add('blue');
				turnText.innerHTML = player;
				curPlayer.innerHTML = "&#160; is the winner!!";
			};
	};
};

reset.addEventListener('click', function(e) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].innerHTML = '';
	};
	setTurn('X');
	turnText.innerHTML = "It's your turn,&#160;";
	curPlayer.innerHTML = turn;
	var blue = document.querySelectorAll('.blue');
	for (var j = 0; j < blue.length; j++) {
		blue[j].classList.remove('blue');
	};
	gameOver = 0;
});

for (var i = 0; i < squares.length; i++) {
	 squares[i].addEventListener('mouseover', function(e) {
    	e.target.classList.add('hover-gray');
    });
    squares[i].addEventListener('mouseout', function(e){
    	e.target.classList.remove('hover-gray');
    })
    squares[i].addEventListener('click', function(e) {
    	if (gameOver === 0) {
	    	// console.log(e.target.innerHTML);
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