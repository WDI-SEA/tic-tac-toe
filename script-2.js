var count = 0;

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');
var box9 = document.getElementById('box9');

box1.addEventListener('click', function(e){
	runTurn(e);
});
box2.addEventListener('click', function(e){
	runTurn(e);
});
box3.addEventListener('click', function(e){
	runTurn(e);
});
box4.addEventListener('click', function(e){
	runTurn(e);
});
box5.addEventListener('click', function(e){
	runTurn(e);
});
box6.addEventListener('click', function(e){
	runTurn(e);
});
box7.addEventListener('click', function(e){
	runTurn(e);
});
box8.addEventListener('click', function(e){
	runTurn(e);
});
box9.addEventListener('click', function(e){
	runTurn(e);
});

function runTurn(e){
	if(e.target.innerHTML === 'X' || e.target.innerHTML === 'O'){

		return;
	}
	if (count % 2 === 0){
		e.target.className += " X";
		e.target.innerHTML = 'X';
		count++;
		findWinner();
	} else {
		e.target.className += " O";
		e.target.innerHTML = 'O';
		count++;
		findWinner();
	}
} 



// var gameBoard = [
// 	box1, box2, box3,
// 	box4, box5, box6,
// 	box7, box8, box9
// ]
var winner;



function findWinner(e) {
		if(box1.innerHTML === 'X' && box2.innerHTML=== 'X' && box3.innerHTML === 'X' ||
		box4.innerHTML === 'X' && box5.innerHTML=== 'X' && box6.innerHTML === 'X' ||
		box7.innerHTML === 'X' && box8.innerHTML=== 'X' && box9.innerHTML === 'X' ||
		box1.innerHTML === 'X' && box5.innerHTML=== 'X' && box9.innerHTML === 'X' ||
		box3.innerHTML === 'X' && box5.innerHTML=== 'X' && box7.innerHTML === 'X' ||
		box1.innerHTML === 'X' && box4.innerHTML=== 'X' && box7.innerHTML === 'X' ||
		box2.innerHTML === 'X' && box5.innerHTML=== 'X' && box8.innerHTML === 'X' ||
		box3.innerHTML === 'X' && box6.innerHTML=== 'X' && box9.innerHTML === 'X') {

		winner = 'X';
		console.log('Player 1 wins');
		winnerScoreX++;
		//console.log(winner);
		alert('Player 1 wins')
		resetValues();
	} else if(box1.innerHTML === 'O' && box2.innerHTML=== 'O' && box3.innerHTML === 'O' ||
		box4.innerHTML === 'O' && box5.innerHTML=== 'O' && box6.innerHTML === 'O' ||
		box7.innerHTML === 'O' && box8.innerHTML=== 'O' && box9.innerHTML === 'O' ||
		box1.innerHTML === 'O' && box5.innerHTML=== 'O' && box9.innerHTML === 'O' ||
		box3.innerHTML === 'O' && box5.innerHTML=== 'O' && box7.innerHTML === 'O' ||
		box1.innerHTML === 'O' && box4.innerHTML=== 'O' && box7.innerHTML === 'O' ||
		box2.innerHTML === 'O' && box5.innerHTML=== 'O' && box8.innerHTML === 'O' ||
		box3.innerHTML === 'O' && box6.innerHTML=== 'O' && box9.innerHTML === 'O') {

		winner = 'O';
		console.log('Player 2 wins');
		winnerScoreO++;
		//console.log(winner);
		alert('Player 2 wins');
		resetValues();
	} else {
		//console.log(box1, box2, box3, box4, box5, box6, box7, box8, box9);
	}
}

var winnerScoreX = 0;
var winnerScoreO = 0;

function resetValues () {
		box1.innerHTML = '';
		box2.innerHTML = '';
		box3.innerHTML = '';
		box4.innerHTML = '';
		box5.innerHTML = '';
		box6.innerHTML = '';
		box7.innerHTML = '';
		box8.innerHTML = '';
		box9.innerHTML = '';
		Array.prototype.slice.call(document.getElementsByClassName('X')).forEach(function(el) {
			el.className = 'toe';
		});
		Array.prototype.slice.call(document.getElementsByClassName('O')).forEach(function(el) {
			el.className = 'toe';
		});

	if(winner === 'X') {
		count = 0;
		
		console.log('Player 1 has won : ' + winnerScoreX);
		console.log('Player 2 has won : ' + winnerScoreO);
		document.getElementById('score').innerHTML = 'Player 1:  ' + winnerScoreX  + ' Player 2:  ' + winnerScoreO;
		} else if(winner === 'O') {
		count = 0;
		
		console.log('Player 2 has won : ' + winnerScoreO);
		console.log('Player 1 has won : ' + winnerScoreX);
		document.getElementById('score').innerHTML = 'Player 1:  ' + winnerScoreX + ' Player 2:  ' + winnerScoreO;	
	} 
}

// function screenScore (winnerScoreX, winnerScoreO) {
// 	document.getElementById('score').innerHTML = 'SCORE | Player X: ' + winnerScoreX + ' Player O: ' + winnerScoreO;
// }


document.getElementById('reset').addEventListener('click', resetValues);


// var 'X' = function() {

// }

//var 'O' =;

// var whosturn = if(count % 2 === 0){
// 	'X'();
// } else {
// 	'O'();
// }












