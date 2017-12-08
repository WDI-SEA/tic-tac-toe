
// var defaultCellArray = [00,01,02,10,11,12,20,21,22];
var count = 0;
var defaultCells = document.querySelectorAll(".cell");
var playerXArray = [];
var playerOArray = [];

var cellClicked = function () {
	count ++;
	if(count % 2 === 1) {
	this.className = "cellX";
	document.getElementById("turnText").textContent = "It is O's Turn!";
	this.removeEventListener('click', cellClicked);	
	playerXArray.push(this.id);
	console.log(playerXArray);
} else {
	this.className = "cellO";
	document.getElementById("turnText").textContent = "It is X's Turn!";}
	this.removeEventListener('click', cellClicked);
	playerOArray.push(this.id);
	console.log(playerOArray);


}

var addCellListeners = function (){
	for (var i =0; i < defaultCells.length; i++){
		defaultCells[i].addEventListener('click', cellClicked) 
	};
	return defaultCells;
};

function resetAction(){
	count= 0;
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
	resetButton.onclick = resetAction;
	
	


addCellListeners();


