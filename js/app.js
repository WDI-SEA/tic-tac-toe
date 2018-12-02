var squareOne = 1;
var squareTwo = 2;
var squareThree = 3;
var squareFour = 4;
var squareFive =5;
var squareSix = 6;
var squareSeven = 7;
var squareEight = 8; 
var squareNine = 9;
var winner = document.querySelector('.winMessage');

document.addEventListener('DOMContentLoaded',function(){
//Make the gameboard clear with clickable squares
clearBoard();

function oOrX(play){
	for(var i=1; i<10; i++){
		if(i%2 != 0){
			play = 'X'
		} else {
			play = 'O';
		}
	}
};


//Start a new game function 
function playSquare1() {
	oOrX(play);
	//place an X gamepiece in the square
	document.querySelector('#square1').textContent = play;
	//Make the played square unclickable
	document.querySelector('#square1').removeEventListener('click',playSquare1);
	//store the gamepiece text as a variable
	squareOne = document.querySelector('#square1').textContent;
	//see if the player has won the game
	checkWin();
}
function playSquare2(play){
	oOrX();
	document.querySelector('#square2').textContent = play;
	document.querySelector('#square2').removeEventListener('click',playSquare2);
	squareTwo = document.querySelector('#square2').textContent;
	checkWin();
}
function playSquare3(play){
	oOrX();
	document.querySelector('#square3').textContent = play;
	document.querySelector('#square3').removeEventListener('click',playSquare3);
	squareThree = document.querySelector('#square3').textContent;
	checkWin();
}
function playSquare4(play){
	oOrX();
	document.querySelector('#square4').textContent = play;
	document.querySelector('#square4').removeEventListener('click',playSquare4);
	squareFour = document.querySelector('#square4').textContent;
	checkWin();
}
function playSquare5(play){
	oOrX();
	document.querySelector('#square5').textContent = play;
	document.querySelector('#square5').removeEventListener('click',playSquare5);
	squareFive = document.querySelector('#square5').textContent;
	checkWin();
}
function playSquare6(play){
	oOrX();
	document.querySelector('#square6').textContent = play;
	document.querySelector('#square6').removeEventListener('click',playSquare6);
	squareSix = document.querySelector('#square6').textContent;
	checkWin();
}
function playSquare7(play){
	oOrX();
	document.querySelector('#square7').textContent = play;
	document.querySelector('#square7').removeEventListener('click',playSquare7);
	squareSeven = document.querySelector('#square7').textContent;
	checkWin();
}
function playSquare8(play){
	oOrX();
	document.querySelector('#square8').textContent = play;
	document.querySelector('#square8').removeEventListener('click',playSquare8);
	squareEight = document.querySelector('#square8').textContent
	checkWin();
}
function playSquare9(play){
	oOrX();
	document.querySelector('#square9').textContent = play;
	document.querySelector('#square9').removeEventListener('click',playSquare9);
	squareNine = document.querySelector('#square9').textContent;
	checkWin();
};

// function playO(){
// //Start a new game function 
// function playOSquare1(input) {
// 	//place an X gamepiece in the square
// 	document.querySelector('#square1').textContent = 'O';
// 	//Make the played square unclickable
// 	document.querySelector('#square1').removeEventListener('click',playSquare1);
// 	//store the gamepiece text as a variable
// 	squareOne = document.querySelector('#square1').textContent;
// 	//see if the player has won the game
// 	checkWin();
// }
// function playOSquare2(input){
// 	document.querySelector('#square2').textContent = 'O';
// 	document.querySelector('#square2').removeEventListener('click',playSquare2);
// 	squareTwo = document.querySelector('#square2').textContent;
// 	checkWin();
// }
// function playOSquare3(input){
// 	document.querySelector('#square3').textContent = ')';
// 	document.querySelector('#square3').removeEventListener('click',playSquare3);
// 	squareThree = document.querySelector('#square3').textContent;
// 	checkWin();
// }
// function playOSquare4(input){
// 	document.querySelector('#square4').textContent = 'O';
// 	document.querySelector('#square4').removeEventListener('click',playSquare4);
// 	squareFour = document.querySelector('#square4').textContent;
// 	checkWin();
// }
// function playOSquare5(input){
// 	document.querySelector('#square5').textContent = 'O';
// 	document.querySelector('#square5').removeEventListener('click',playSquare5);
// 	squareFive = document.querySelector('#square5').textContent;
// 	checkWin();
// }
// function playOSquare6(input){
// 	document.querySelector('#square6').textContent = 'O';
// 	document.querySelector('#square6').removeEventListener('click',playSquare6);
// 	squareSix = document.querySelector('#square6').textContent;
// 	checkWin();
// }
// function playOSquare7(input){
// 	document.querySelector('#square7').textContent = 'O';
// 	document.querySelector('#square7').removeEventListener('click',playSquare7);
// 	squareSeven = document.querySelector('#square7').textContent;
// 	checkWin();
// }
// function playOSquare8(input){
// 	document.querySelector('#square8').textContent = 'O';
// 	document.querySelector('#square8').removeEventListener('click',playSquare8);
// 	squareEight = document.querySelector('#square8').textContent
// 	checkWin();
// }
// function playOSquare9(input){
// 	document.querySelector('#square9').textContent = 'O';
// 	document.querySelector('#square9').removeEventListener('click',playSquare9);
// 	squareNine = document.querySelector('#square9').textContent;
// 	checkWin();
// }
// };


function checkWin(){
	if(
		//top row
		(squareOne == squareTwo && squareTwo == squareThree) ||
		//middle row
		(squareFour == squareFive && squareFive == squareSix) ||
		//bottom row
		(squareSeven == squareEight && squareEight == squareNine) || 
		//left column
		(squareOne == squareFour && squareFour == squareSeven) ||
		//middle column
		(squareTwo == squareFive && squareFive == squareEight) ||
		//right column
		(squareThree == squareSix && squareSix == squareNine) ||
		//diagonal one
		(squareOne == squareFive && squareFive == squareNine) ||
		//diagonal two
		(squareThree == squareFive && squareFive == squareSeven)){
		winTheGame()}
};


function winTheGame(play){
	console.log("Player",play,"has won the game!");
	winner.classList.add('showWinMessage');
	winner.textContent = 'Player X has won the game! Click to restart.';
	//Make the win message clickable to restart the game
	document.querySelector('.winMessage').addEventListener('click',clearBoard);
}

function clearBoard(){
	document.querySelector('#square1').textContent = '';
	document.querySelector('#square2').textContent = '';
	document.querySelector('#square3').textContent = '';
	document.querySelector('#square4').textContent = '';
	document.querySelector('#square5').textContent = '';
	document.querySelector('#square6').textContent = '';
	document.querySelector('#square7').textContent = '';
	document.querySelector('#square8').textContent = '';
	document.querySelector('#square9').textContent = '';
	squareOne = 1;
	squareTwo = 2;
	squareThree = 3;
	squareFour = 4;
	squareFive =5;
	squareSix = 6;
	squareSeven = 7;
	squareEight = 8; 
	squareNine = 9;
	document.querySelector('#square1').addEventListener('click', playSquare1);
	document.querySelector('#square2').addEventListener('click', playSquare2);
	document.querySelector('#square3').addEventListener('click', playSquare3);
	document.querySelector('#square4').addEventListener('click', playSquare4);
	document.querySelector('#square5').addEventListener('click', playSquare5);
	document.querySelector('#square6').addEventListener('click', playSquare6);
	document.querySelector('#square7').addEventListener('click', playSquare7);
	document.querySelector('#square8').addEventListener('click', playSquare8);
	document.querySelector('#square9').addEventListener('click', playSquare9);
	winner.classList.remove('showWinMessage');
	winner.textContent = '';
	//Make the win message clickable to restart the game
	document.querySelector('.winMessage').removeEventListener('click',clearBoard);
}
});

