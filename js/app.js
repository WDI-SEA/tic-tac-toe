document.addEventListener("DOMContentLoaded", function(){
	// document.getElementById("reset").addEventListener("click", playGame);
playGame();
});
var initialBoard;
var currentPlayer;
var player1 = 1;
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];
const cells = document.querySelectorAll('.cell');

function playGame(){
	document.querySelector(".endGame").style.display = "none";
	initialBoard = Array.from(Array(9).keys());
	for(i = 0; i < cells.length; i++){
	cells[i].innerText = '';
	cells[i].style.removeProperty("background-color");
	cells[i].addEventListener("click", turnClick)
	}	
}

function turnClick(event){	
	if (player1 == true){
	document.getElementById(event.target.id).innerText = "O"; //target.id refers cells[i]
// console.log("this is what the event's grabbing", event.target); //for checking
	player1 = 0; 
	} else {
		document.getElementById(event.target.id).innerText = "X";
		player1 = 1;
	}
}

function stopGame(messageContent){
	//different message pops ("win"/"lost")
	document.getElementById("message").textContent = messageContent;
}

function winAnswers(marksArray){
	marksArray = [];
	while (initialBoard != ''){
	for(var i = 0; i < winCombos.length; i++){
			var val = winCombos[i];
			var valWins = 0;
				 for(var j = 0; j < winCombos[i].length; j++){
		 		var innerVal = winCombos[i[j]];
		 			if(marksArray.indexOf(winCombos[i[j]])!=-1){
		 				valWins++;
		 			}
		 			if(valWins === 3){
		 				stopGame("you won");
		 				console.log("win");
		 			}
				}
		// if(val[0] === val[1] === val[2] === true){
		// 	console.log("win");
		// }
		// else{
		// 	console.log("lose");
		// }
	}
	}
}

	
// }
function winTheGame(){
	stopGame("You won!");
}

function tieTheGame(){
	stopGame("You both suck!")
}

function loseTheGame(){
	stopGame("Boo, You lost!");
}