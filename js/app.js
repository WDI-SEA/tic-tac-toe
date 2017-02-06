console.log('Hello frontend');

var x = "X";
var o = "O";
var currentPlayer = x;
var moves = 0;

var resetBoard = function (){

}

 var switchUser = function () {
	if (currentPlayer === x) currentPlayer = o;
	else currentPlayer = x;
} 

var divClick = function () {
	if(this.innerHTML === "") {
		moves++;
		this.innerHTML=currentPlayer;
	}
	else return;
	if (checkForWinner()) {
		announceWinner();
		gameOver();
	}

	// check for moves = 9, if true 
	switchUser();
} 

var cells = document.getElementsByClassName("cell");

for(var i = 0; i < cells.length; i++){
	console.log(i);
	cells[i].addEventListener("click", divClick);
	
}

var checkForWinner = function() {
	var cases = ["row0" , "row1", "row2", "col0", "col1", "col2", "diag1", "diag2"];
	for(var c = 0; c < cases.length; c++){
		var set = document.getElementsByClassName(cases[c]);
		var count = 0;
		
		for(var i = 0; i < 3; i++){
			console.log(set[i].innerHTML);
			if (set[i].innerHTML == currentPlayer)
			count++;
		}
		if (count == 3) return true;
	}

	return false;
}

var announceWinner = function() {
	alert(currentPlayer + " has WON!!!");
}

// reset moves to 0, set innerHTML to empty, current player to X
