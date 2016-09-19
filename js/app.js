
// INTRODUCTION

var gameIntro = document.getElementsByTagName('h1');

setTimeout(function() { gameIntro[0].innerText = "tic/tac/toe" }, 2000);

// GLOBAL VARIABLES

cell1 = document.getElementById('cell1');
cell2 = document.getElementById('cell2');
cell3 = document.getElementById('cell3');
cell4 = document.getElementById('cell4');
cell5 = document.getElementById('cell5');
cell6 = document.getElementById('cell6');
cell7 = document.getElementById('cell7');
cell8 = document.getElementById('cell8');
cell9 = document.getElementById('cell9');

var gameBoard = [
    [cell1, cell2, cell3],
	[cell4, cell5, cell6],
	[cell7, cell8, cell9]
];
var turn = "X";
var player1 = "X";
var player2 = "O";
var arrayX = [];
var arrayO = [];


// EVENT LISTENERS

	var playerMove = document.getElementsByClassName('cell');
	
	Array.from(playerMove)
		.forEach(function (click) { 
  			click.addEventListener('click', function(e) {
     		click.textContent = turn;
     		switchTurn();
     		winner();
     		e.target.removeEventListener(e.type, arguments.callee);
     		});
  		})
  	
  
// FUNCTIONS

function switchTurn() {
 if (turn == "X") {
   turn = "O";
 } 
 else {
   turn = "X";
   }
}

function winner () {
	if(cell1.textContent === player1 && cell2.textContent === player1 && cell3.textContent === player1){
		alert("X is the winner!");
	}
	else if(cell4.textContent === player1 && cell5.textContent === player1 && cell6.textContent === player1){
		alert("X is the winner!");
	}
	else if(cell7.textContent === player1 && cell8.textContent === player1 && cell9.textContent === player1){
		alert("X is the winner!");
	}
	else if(cell1.textContent === player1 && cell4.textContent === player1 && cell7.textContent === player1){
		alert("X is the winner!");
	}
	else if(cell2.textContent === player1 && cell5.textContent === player1 && cell8.textContent === player1){
		alert("X is the winner!");
	}
	else if(cell3.textContent === player1 && cell6.textContent === player1 && cell9.textContent === player1){
		alert("X is the winner!");
	}
	else if(cell1.textContent === player1 && cell5.textContent === player1 && cell9.textContent === player1){
		alert("X is the winner!");
	}
	else if(cell7.textContent === player1 && cell5.textContent === player1 && cell3.textContent === player1){
		alert("X is the winner!");
	}

	
	if(cell1.textContent === player2 && cell2.textContent === player2 && cell3.textContent === player2){
		alert("O is the winner!");
	}
	else if(cell4.textContent === player2 && cell5.textContent === player2 && cell6.textContent === player2){
		alert("O is the winner!");
	}
	else if(cell7.textContent === player2 && cell8.textContent === player2 && cell9.textContent === player2){
		alert("O is the winner!");
	}
	else if(cell2.textContent === player2 && cell4.textContent === player2 && cell7.textContent === player2){
		alert("O is the winner!");
	}
	else if(cell2.textContent === player2 && cell5.textContent === player2 && cell8.textContent === player2){
		alert("O is the winner!");
	}
	else if(cell3.textContent === player2 && cell6.textContent === player2 && cell9.textContent === player2){
		alert("O is the winner!");
	}
	else if(cell2.textContent === player2 && cell5.textContent === player2 && cell8.textContent === player2){
		alert("O is the winner!");
	}
	else if(cell7.textContent === player2 && cell5.textContent === player2 && cell3.textContent === player2){
		alert("O is the winner!");
	}
	else if(cell1.textContent === player2 && cell5.textContent === player2 && cell9.textContent === player2){
		alert("O is the winner!");
	}

	
}

//  RESET BUTTON

var reset = document.getElementById('reset');

reset.addEventListener('click', function(event) {
        reset.textContent = location.reload();
});


  

