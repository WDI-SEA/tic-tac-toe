 var winCombos = [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [2, 4, 6],
 [0, 4, 8],
 ]


var cells = document.querySelectorAll('.cell');
var playerStart = document.getElementById('playerStart');
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');

var turn = 0;






// var startGame = function() {
   
//    for(var i = 0; i < cells.length; i++) {
//    	cells[i].innerHTML = '';

// 	console.log('start game');

// }



var cellsClicked = function(){
	turn++;
	if (turn%2 === 0 ){
	this.textContent= 'X';
	this.style.color = 'red';
	this.removeEventListener('click',cellsClicked)
	var player1Notice = function(){
		player1.style.display = 'inline-block';
		player1.style.color = 'blue';
		player2.style.display = 'none';
		playerStart.style.display = 'none';
	}
	player1Notice();
} else {
		this.textContent = 'O';
		this.style.color = 'blue';
		this.removeEventListener('click',cellsClicked)
		var player2Notice = function(){
		player2.style.display = 'inline-block';
		player2.style.color = 'red';
		player1.style.display = 'none';
		playerStart.style.display = 'none';
	}
	player2Notice();
};
}

var addCellEventListener = function(){
	for(var i = 0; i < cells.length; i++){
		cells[i].addEventListener('click', cellsClicked);
	}

}

var addResetEventListener = function(){
	var reset = document.getElementById('reset');
	reset.addEventListener('click', function() {
      console.log('click button');
  });
	addResetEventListener();
}




// add start game function with for loop
// function clear box

document.addEventListener("DOMContentLoaded", function() {

// startGame();
addCellEventListener();

});

