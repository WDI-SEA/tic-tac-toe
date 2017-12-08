
// var defaultCellArray = [00,01,02,10,11,12,20,21,22];
var defaultCells = document.querySelectorAll(".cell");
var playerXArray = [];
var playerOArray = [];
var currentTurn = "playerX";

var checkWinner = function (){
	//x horizontal win conditions
	if (
		playerXArray.indexOf('00') != -1 
		&& playerXArray.indexOf('01') != -1 
		&& playerXArray.indexOf('02') != -1){
			document.getElementById("turnText").textContent = "X Wins! Start New Game!";
			return true;
	}
	if (
		playerXArray.indexOf('10') != -1 
		&& playerXArray.indexOf('11') != -1 
		&& playerXArray.indexOf('12') != -1){
			document.getElementById("turnText").textContent = "X Wins! Start New Game!";
		return true;
	}
	if (
		playerXArray.indexOf('20') != -1 
		&& playerXArray.indexOf('21') != -1 
		&& playerXArray.indexOf('22') != -1){
			document.getElementById("turnText").textContent = "X Wins! Start New Game!";
		return true;
	}
	//x diagonal win conditions
	if (
		playerXArray.indexOf('00') != -1 
		&& playerXArray.indexOf('11') != -1 
		&& playerXArray.indexOf('22') != -1){
			document.getElementById("turnText").textContent = "X Wins! Start New Game!";
		return true;
	}
	if (
		playerXArray.indexOf('02') != -1 
		&& playerXArray.indexOf('11') != -1 
		&& playerXArray.indexOf('20') != -1){
			document.getElementById("turnText").textContent = "X Wins! Start New Game!";
		return true;
	}
	//x vertical win conditions
	if (
		playerXArray.indexOf('00') != -1 
		&& playerXArray.indexOf('10') != -1 
		&& playerXArray.indexOf('20') != -1){
			document.getElementById("turnText").textContent = "X Wins! Start New Game!";
		return true;
	}
	if (
		playerXArray.indexOf('01') != -1 
		&& playerXArray.indexOf('11') != -1 
		&& playerXArray.indexOf('21') != -1){
			document.getElementById("turnText").textContent = "X Wins! Start New Game!";
		return true;
	}
	if (
		playerXArray.indexOf('02') != -1 
		&& playerXArray.indexOf('12') != -1 
		&& playerXArray.indexOf('22') != -1){
			document.getElementById("turnText").textContent = "X Wins! Start New Game!";
		return true;
	}
		//O win conditions
		//O horizontal win conditions
	if (
		playerOArray.indexOf('00') != -1 
		&& playerOArray.indexOf('01') != -1 
		&& playerOArray.indexOf('02') != -1){
			document.getElementById("turnText").textContent = "O Wins! Start New Game!";
		return true;
	}
	if (
		playerOArray.indexOf('10') != -1 
		&& playerOArray.indexOf('11') != -1 
		&& playerOArray.indexOf('12') != -1){
			document.getElementById("turnText").textContent = "O Wins! Start New Game!";
		return true;
	}
	if (
		playerOArray.indexOf('20') != -1 
		&& playerOArray.indexOf('21') != -1 
		&& playerOArray.indexOf('22') != -1){
			document.getElementById("turnText").textContent = "O Wins! Start New Game!";
		return true;
	}
	//o diagonal win conditions
	if (
		playerOArray.indexOf('00') != -1 
		&& playerOArray.indexOf('11') != -1 
		&& playerOArray.indexOf('22') != -1){
			document.getElementById("turnText").textContent = "O Wins! Start New Game!";
		return true;
	}
	if (
		playerOArray.indexOf('02') != -1 
		&& playerOArray.indexOf('11') != -1 
		&& playerOArray.indexOf('20') != -1){
			document.getElementById("turnText").textContent = "O Wins! Start New Game!";
		return true;
	}
	//O vertical win conditions
	if (
		playerOArray.indexOf('00') != -1 
		&& playerOArray.indexOf('10') != -1 
		&& playerOArray.indexOf('20') != -1){
			document.getElementById("turnText").textContent = "O Wins! Start New Game!";
		return true;
	}
	if (
		playerOArray.indexOf('01') != -1 
		&& playerOArray.indexOf('11') != -1 
		&& playerOArray.indexOf('21') != -1){
			document.getElementById("turnText").textContent = "O Wins! Start New Game!";
		return true;
	}
	if (
		playerOArray.indexOf('02') != -1 
		&& playerXArray.indexOf('12') != -1 
		&& playerXArray.indexOf('22') != -1){
			document.getElementById("turnText").textContent = "O Wins! Start New Game!";
		return true;

	}
}	

// function to claim cell for X or O based on turn. removes event listener from clicked cells, readys for draw condition
var cellClicked = function (){

	if(currentTurn === "playerX") {
		this.classList.add('cellX', 'clicked');
		document.getElementById("turnText").textContent = "It is O's Turn!";
		this.removeEventListener('click', cellClicked);	
		playerXArray.push(this.id);
		currentTurn = "playerO";
	} else if (currentTurn === "playerO") {
		this.classList.add("cellO", "clicked");
		document.getElementById("turnText").textContent = "It is X's Turn!";
		this.removeEventListener('click', cellClicked);
		playerOArray.push(this.id);
		currentTurn = "playerX";
	}
	if (checkWinner(true)) {
		console.log("true winner");
		for(var cell of defaultCells) {
			cell.removeEventListener('click', cellClicked); 
		}
	}
// draw check. on click, cell gets added class of either x or o, as well as clicked. once all clicked, draw declared
	else {
		for (var cell of defaultCells){

			if(cell.classList.contains('clicked') !== true){
				return;
			}
		} 
		document.getElementById("turnText").textContent = "It's a draw! Start New Game!"
		return;
	}
	
}

// called on page load. adds click listener to all blank cells
var addCellListeners = function (){
	for (var cell of defaultCells) {
		cell.addEventListener('click', cellClicked);

	};
	return defaultCells;
};
 
// reset function. changes display text, reverts all cells to blank cell class, emptys click arrays
function resetClick(){
		document.getElementById("turnText").textContent = "New game! X's Turn!"
	var returnCells = document.querySelectorAll(".cell, .cellO, .cellX");
	for (var i = 0; i < returnCells.length; i++){
		returnCells[i].addEventListener("click", cellClicked);
		returnCells[i].className = "cell";
		playerOArray = [];
		playerXArray = [];
	}
}


var resetButton = document.getElementById("resetButton");
	resetButton.onclick = resetClick;
	
	


addCellListeners();


