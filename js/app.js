
var scorePlayer1 = 1;
var scorePlayer2 = 1;
var gameOver = false;
var currentPlayer = X;
var x ="X";
var o ="O";
var turns = "";
var currentBoard = new Object();
currentBoard["a11"] = '';
currentBoard["a12"] = '';
currentBoard["a13"] = '';
currentBoard["a21"] = '';
currentBoard["a22"] = '';
currentBoard["a23"] = '';
currentBoard["a31"] = '';
currentBoard["a32"] = '';
currentBoard["a33"] = '';
var winningConditions = [
  ["a11", "a12","a13"],
  ["a21", "a22","a23"],
  ["a31", "a32","a33"],
  ["a11", "a21","a31"],
  ["a12", "a22","a32"],
  ["a13", "a23","a33"],
  ["a11", "a22","a33"],
  ["a13", "a22","a31"]
];
var boxClicked = {
  a11: false,
  a12: false,
  a13: false,
  a21: false,
  a22: false,
  a23: false,
  a31: false,
  a32: false,
  a33: false
}
var resetGameButton;
var gridBox;
var gameMessage = document.getElementById("gamemessage");
var scorePl1 = document.getElementById("scoreplayer1");
var scorePl2 = document.getElementById("scoreplayer2");
document.addEventListener("DOMContentLoaded", function(e) {
  resetGameButton = document.getElementById("reset");
  gridBox = document.getElementById("gridbox");

//Event Listeners=========================================================
  resetGameButton.addEventListener("click", function(e) {
    reset();
  });
  gridBox.addEventListener('click', function(e){
	

    }
 


function startNewGame() {
		//reset event listeners
		// reset click events
		// sets score back to zero


}
function checkForWin(){
	//find match for both players
	//determine if they matched 3 correctly 
	//if match add score for player
	//if not a match continue
	//if no match start new game
}


function 











