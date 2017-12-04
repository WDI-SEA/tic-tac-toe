var boxes = document.getElementsByClassName('box');
var winners = new Array();
var currentPlayer = 0;
var player1Selections = new Array();
var player2Selections = new Array();
// var turnText = document.querySelector(."playerTurn");
// var counter = 1;
// var winCounter = 0;
// var OMoves = [];
// var XMoves = [];


// when page loads, get boxes; then onclick place onto them; 
// when page loads do reset; an onclick function
var move

function reset(){
	move = 0;
	for(var i = 0; i < box:)
		// set each box to innerHTML to empty '' to clear
}

var boxClicked = function place(){
this.src = 'img/theLetterX.png';

this.removeEventListener('click', boxClicked);

if(player1Selections(this.id))
	placeLetter(){
	}else player2Selections()
	placeLetter()
}
// this.innerHTML = % 0===0
// var xo = move % 1
// if (xo == 1)
// 	this.innerHTML = "X";
// }else{
// 	this.innerHTML = "O";
// }
// this.onlick = null;
// }

placeLetter()
//function that activates either image x or image o to appear in div box after click

var generateBoxes = function(){
  console.log('generating boxes');
  for(var i = 0; i < boxes.length; i++){
}


// branching order list; line 4 will finish before moving to line 5; large commmands at top; 'tree traversal'

var addBoxesEventListeners = function(){
  var boxSquares = document.querySelectorAll('#box');

  for(var i = 0; i < boxSquares.length; i++){
    boxSquares[i].addEventListener('click', boxClicked);
  }
}

function winOptions()
{
    winners.push([1, 2, 3]);
    winners.push([4, 5, 6]);
    winners.push([7, 8, 9]);
    winners.push([1, 4, 7]);
    winners.push([2, 5, 8]);
    winners.push([3, 6, 9]);
    winners.push([1, 5, 9]);
    winners.push([3, 5, 7]);
}

document.addEventListener('DOMContentLoaded', function() {
  //Add Event Listeners
  document.getElementById('reset').addEventListener('click', reset);
  addBoxesEventListeners();

});




// win conditions
// x wins function
// o wins function
// clear board function
// onclick insert x or o image
// 