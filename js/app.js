var startBoard;
const human = 'O';
const computer = 'X';
const winCombos = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7]
]

const cells = document.querySelectorAll('.box');
startGame();

function startGame(){
	document.querySelector(".endgame").style.display = "none";
	startBoard = Array.from(Array(9).keys());
	console.log(startBoard);
}