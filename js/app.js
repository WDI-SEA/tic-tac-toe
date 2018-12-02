document.addEventListener("DOMContentLoaded", function(){
	// document.getElementById("reset").addEventListener("click", playGame);
});
var initialBoard;
const player1 = 'O';
const player2 = 'X';
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
playGame();

function playGame(){
	document.querySelector(".endGame").style.display = "none";
	initialBoard = Array.from(Array(9).keys());
	for(i = 0; i < cells.length; i++){
	cells[i].innerText = '';
	cells[i].style.removeProperty("background-color");
	cells[i].addEventListener("click", turnClick)
	}	
}

function turnClick(){	
	document.getElementById(target.id).innerText = "O"; //target.id refers cells[i]
}

// function turn(boxId, player){
// 	initialBoard[boxId] = player;
// 	document.getElementById("boxId").innerText = player;
// }

function stopGame(messageContent){
	//different message pops ("win"/"lost")
	document.getElementById("message").textContent = messageContent;
}

function winAnswers(){
	// if()

}
function winTheGame(){
	stopGame('You won!');
}

function loseTheGame(){
	stopGame('Boo, You lost!');
}