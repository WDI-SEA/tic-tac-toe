var allBoxes = document.getElementsByClassName('play-square');
var isPlayerOne = true;  //this will determine which player is playing

var changeBox = function(cell) {
	if (cell.className.indexOf("cell") === -1) {  // this line prevents overwriting played squares
		if (isPlayerOne === true){
			cell.className += " x-cell";  //gives the square P1 color
			cell.innerHTML = "<p>X<p>";   //gives the square an X
			isPlayerOne = false;          //makes it P2's turn
		} else {
			cell.className += " o-cell";
			cell.innerHTML = "<p>O<p>";
			isPlayerOne = true;
		}
	}
}

var clearBoard = function(){  //function for the clear button
	for(var i in allBoxes){
		allBoxes[i].className = 'play-square'; //clears all x && o-cell classes from boxes
		allBoxes[i].innerHTML = ''; //clears all text from boxes
		isPlayerOne = true;         //makes it player one's turn
	}
}

document.getElementById('clearButton').addEventListener('click', function(){
	clearBoard();
})

document.getElementById('cell-1').addEventListener('click', function(){
	changeBox(this);
})

document.getElementById('cell-2').addEventListener('click', function(){
	changeBox(this);
})

document.getElementById('cell-3').addEventListener('click', function(){
	changeBox(this);
})

document.getElementById('cell-4').addEventListener('click', function(){
	changeBox(this);
})

document.getElementById('cell-5').addEventListener('click', function(){
	changeBox(this);
})

document.getElementById('cell-6').addEventListener('click', function(){
	changeBox(this);
})

document.getElementById('cell-7').addEventListener('click', function(){
	changeBox(this);
})

document.getElementById('cell-8').addEventListener('click', function(){
	changeBox(this);
})

document.getElementById('cell-9').addEventListener('click', function(){
	changeBox(this);
})