var gameBoxes = document.querySelectorAll("#wrapper div");
var numberOfPlayers = 2;
var currentPlayer = 1;
var turns = -1;
var boxesX = [];
var boxesO = [];

// Determine which of the nine boxes was clicked
var boxClicked = function(){
	// Update content of box clicked with X or O depending on player
	if(currentPlayer === 1){
		this.textContent = "x";
		this.className += " X"
		currentPlayer = currentPlayer + 1;
		turns = turns + 1;
	}else { 
		this.textContent = "o";
		this.className += " O"
		currentPlayer = currentPlayer - 1;
		turns = turns + 1;
	}
	// Detect a winner or a draw based on number of turns played
		if(turns>=4 && turns<8){
		checkWinner();

		}else if(turns === 8){
		console.log("it's a draw");	
	
		}

	this.removeEventListener("click", boxClicked);
}

var checkWinner = function(){
	// Grab all divs
	var cells = document.querySelectorAll('.boxes');
	/// Conditionals for every win posibility checking if classes are the same
	if((cells[0].classList.contains("X") && cells[1].classList.contains("X") && cells[2].classList.contains("X"))||
	  (cells[3].classList.contains("X") && cells[4].classList.contains("X") && cells[5].classList.contains("X"))||
	  (cells[6].classList.contains("X") && cells[7].classList.contains("X") && cells[8].classList.contains("X"))||
	  (cells[0].classList.contains("X") && cells[3].classList.contains("X") && cells[6].classList.contains("X"))||
	  (cells[1].classList.contains("X") && cells[4].classList.contains("X") && cells[7].classList.contains("X"))||
	  (cells[2].classList.contains("X") && cells[5].classList.contains("X") && cells[8].classList.contains("X"))||
	  (cells[0].classList.contains("X") && cells[4].classList.contains("X") && cells[8].classList.contains("X"))||
	  (cells[2].classList.contains("X") && cells[4].classList.contains("X") && cells[6].classList.contains("X"))){
		console.log("X wins!");
	}else if 
		  ((cells[0].classList.contains("O") && cells[1].classList.contains("O") && cells[2].classList.contains("O"))||
		  (cells[3].classList.contains("O") && cells[4].classList.contains("O") && cells[5].classList.contains("O"))||
		  (cells[6].classList.contains("O") && cells[7].classList.contains("O") && cells[8].classList.contains("O"))||
		  (cells[0].classList.contains("O") && cells[3].classList.contains("O") && cells[6].classList.contains("O"))||
		  (cells[1].classList.contains("O") && cells[4].classList.contains("O") && cells[7].classList.contains("O"))||
		  (cells[2].classList.contains("O") && cells[5].classList.contains("O") && cells[8].classList.contains("O"))||
		  (cells[0].classList.contains("O") && cells[4].classList.contains("O") && cells[8].classList.contains("O"))||
		  (cells[2].classList.contains("O") && cells[4].classList.contains("O") && cells[6].classList.contains("O"))){
		  	console.log("O wins!");
	}else {
		  	console.log("...will it be a draw?");
	}

}
// Add event listener to show a box was clicked
var addBoxEventListeners = function(){
	for(var i = 0; i < gameBoxes.length; i++){
		gameBoxes[i].addEventListener("click", boxClicked);
  	}
}
addBoxEventListeners();


// Clear contents of board to pay again
var resetBoard = function(){
    location.reload();
}
document.getElementById("reset").addEventListener("click", resetBoard);



