
// var defaultCellArray = [00,01,02,10,11,12,20,21,22];
var count = 0;
var defaultCells = document.querySelectorAll(".cell");

var cellClicked = function (){
	count ++;
	if(count % 2 === 1) {
	this.className = "cellX";
	document.getElementById("turnText").textContent = "It is O's Turn!";
	this.removeEventListener('click', cellClicked);
	

} else {
	// if(count % 2 === 0){
	this.className = "cellO";
	document.getElementById("turnText").textContent = "It is X's Turn!";}
	this.removeEventListener('click', cellClicked);
	
}

var addCellListeners = function (){
	for (var i =0; i < defaultCells.length; i++){
		defaultCells[i].addEventListener('click', cellClicked) 
	};
	return defaultCells;
};

function boxLog(){
	count= 0;
	document.getElementById("turnText").textContent = "New game! X's Turn!"
	var returnCells = document.querySelectorAll(".cell, .cellO, .cellX");
	for (var i = 0; i < returnCells.length; i++){
		returnCells[i].addEventListener("click", cellClicked);
		returnCells[i].className = "cell";
	}
}

var resetButton = document.getElementById("resetButton");
	resetButton.onclick = boxLog;
	
	


addCellListeners();


