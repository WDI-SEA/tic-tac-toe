var container = document.getElementById('container');
var squares = document.querySelectorAll('.square')
var player = document.querySelector('#player');
var playedSquares;
var turn = 'X';
var gameOver = 0;
var reset = document.querySelector('#reset');
var win = [['sq1', 'sq2', 'sq3'],
			['sq1', 'sq5', 'sq9'],
			['sq1', 'sq4', 'sq7'],
			['sq4', 'sq5', 'sq6'],
			['sq7', 'sq5', 'sq3'],
			['sq7', 'sq8', 'sq9'],
			['sq2', 'sq5', 'sq8'],
			['sq3', 'sq6', 'sq9']]

var setTurn = function(x) {
	turn = x;
    player.innerHTML = x;
};

var resetPlayedObject = function() {
	playedObject = {'sq1': "", 'sq2': "", 'sq3': "", 'sq4': "", 'sq5': "", 'sq6': "", 'sq7': "", 'sq8': "", 'sq9': ""};
}

var checkForWin = function(player, square) {
	
	playedSquares = document.getElementsByClassName('played');
	resetPlayedObject();
	for (var i = 0; i < playedSquares.length; i++) {
		sq = playedSquares[i];
		playedObject[sq.id] = sq.innerHTML;
		console.log(playedObject[sq.id].innerHTML);
		console.log(playedObject);
	};
	playedObject.forEach(function(win) {
		for (var i = 0; i < win.length; i++) {
			if (playedObject[win[0]] === turn && playedObject[win[1]] === turn && playedObject[win[2]] === turn) {

			}
		}
	});
};

reset.addEventListener('click', function(e) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].innerHTML = '';
		setTurn('X');
	};
});

for (var i = 0; i < squares.length; i++) {
	 squares[i].addEventListener('mouseover', function(e) {
    	e.target.classList.add('hover-gray');
    });
    squares[i].addEventListener('mouseout', function(e){
    	e.target.classList.remove('hover-gray');
    })
    squares[i].addEventListener('click', function(e) {
    	console.log(e.target.innerHTML);
    	if (e.target.innerHTML === '') {
    		e.target.innerHTML = turn;
    		e.target.classList.add('played');
    		if (turn === 'X') {
    			setTurn('O');
    		} else {
    			setTurn('X');
    		};
    	} else {
    		e.target.classList.add('red');
    		setTimeout(function(){ e.target.classList.remove('red'); }, 250);
    	}

    	checkForWin("X", e['#id']);
	})
};



// var playedSquares;
// var playedObject = [];
// var sq;

// var checkForWin = function(player, square) {
// 	playedSquares = document.getElementsByClassName('played');
// 	for (var i = 0; i < playedSquares.length; i++) {
// 		sq = playedSquares[i];
// 		playedObject[sq.id] = sq.innerHTML;
// 	}

// 	console.log(playedObject)

// }

// checkForWin();