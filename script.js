var container = document.getElementById('container');
var squares = document.querySelectorAll('.square')
var player = document.querySelector("#player");
var turn = "X";



// var checkForWin = function(player, square) {

// };

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseover', function(e) {
    	e.target.style.backgroundColor = "#7D7E82";
    });
    squares[i].addEventListener('mouseout', function(e){
    	e.target.style.backgroundColor = "#C2BDB9";
    })
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(e) {
    	console.log(e.target.innerHTML);
    	if (e.target.innerHTML === "") {
    		e.target.innerHTML = turn;
    		e.target.classList.add('played');
    		if (turn === "X") {
    			turn = "O";
    			player.innerHTML = "O";
    		} else {
    			turn = "X"
    			player.innerHTML = "X";
    		};
    	} else {
    		e.target.classList.add('red');
    		setTimeout(function(){ e.target.classList.remove('red'); }, 500);
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