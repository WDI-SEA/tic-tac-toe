var container = document.getElementById('container');
var squares = document.querySelectorAll('.square')
var player = document.querySelector("#player");
var turn = "X";
var reset = document.querySelector('#reset');

var setTurn = function(x) {
	turn = x;
    player.innerHTML = x;
};

// var checkForWin = function(player, square) {

// };

reset.addEventListener('click', function(e) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].innerHTML = "";
		setTurn("X");
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
    	if (e.target.innerHTML === "") {
    		e.target.innerHTML = turn;
    		e.target.classList.add('played');
    		if (turn === "X") {
    			setTurn("O");
    		} else {
    			setTurn("X");
    		};
    	} else {
    		e.target.classList.add('red');
    		setTimeout(function(){ e.target.classList.remove('red'); }, 250);
    	}
    	console.log(e.innerHTML);
    	//console.log(document.getElementsByClassName('played'));
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