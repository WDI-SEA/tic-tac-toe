var gameBoxes = document.querySelectorAll("#wrapper div");
var numberOfPlayers = 2;
var currentPlayer = 1;


// Determine which of the nine boxes was clicked

var boxClicked = function(){
	// Update content of box clicked with X or O depending on player
	if(currentPlayer === 1){
	this.textContent = "X";
	currentPlayer = currentPlayer + 1;
	}else {
	this.textContent = "O";
	currentPlayer = currentPlayer - 1;
	}

	this.removeEventListener("click", boxClicked);
}

boxClicked();


// Add event listener to show a box was clicked
var addBoxEventListeners = function(){
	for(var i = 0; i < gameBoxes.length; i++){
		gameBoxes[i].addEventListener("click", boxClicked);
  }
}

addBoxEventListeners();

var resetBoard = function () {
    location.reload();
}
document.getElementById("reset").addEventListener('click', resetBoard);


// document.addEventListener("DOMContentLoaded", function() {
// //Add event listeners
// 	document.getElementById("reset").addEventListener("click", reset);



