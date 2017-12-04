var turn = 0;

//Array of game box elements
var blankBoxes = document.getElementsByClassName('box');

//Scoreboard elements
var scoreBoard_h1 = document.getElementById('display');
var currentTurn_span = document.getElementById('currentTurn');
var currentPlayer_span = document.getElementById('currentPlayer');

var resetButton = document.getElementById('reset');

//Manages scoreboard
var scoreBoardCalc = function(){
	if(turn >= 9){
		scoreBoard_h1.textContent = 'Game Over';
		scoreBoard_h1.style.border = '8px solid #000';
	}else{
		currentTurn_span.textContent = (turn + 1);
		if(turn % 2 === 0){
			currentPlayer_span.textContent = 'X';
		}else{
			currentPlayer_span.textContent = 'O';
		}if(turn % 2 === 0){
			scoreBoard_h1.style.border = '8px solid #D23955';
		}else{
			scoreBoard_h1.style.border = '8px solid #3C9BD3';
		}
	}
}

//Manages gameboard
var activeBox = function(){
	for(var i = 0; i < blankBoxes.length; i++){
		blankBoxes[i].addEventListener('click', play);
	}
}

var play = function(){
	turn++
	if(turn % 2 === 1){
		this.className = 'xBox';
	}else{
		this.className = 'oBox';
	}scoreBoardCalc();
	this.removeEventListener('click', play);
}

//Reset button
var reset = function(){
	resetButton.addEventListener('click',function(){
		location.reload();
	})
}

//Add event listeners
document.addEventListener('DOMContentLoaded', function() {
});

activeBox();
reset();