var startBoard;
const cells = document.querySelectorAll('.box');
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


startGame();

function startGame(){
	document.querySelector(".endgame").style.display = "none";
	startBoard = Array.from(Array(9).keys());
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = '';
		cells[i].addEventListener('click', userClick, false);
		cells[i].addEventListener('click', doubleClick, true);
		
	}
}

function turn(squareId, player){
	startBoard[squareId] = player;
	document.getElementById(squareId).innerText = player;
	for (var i = 0; i < cells.length; i++){
		cells[i].addEventListener('click');
	}
}

function userClick(square){
	turn(square.target.id, human)
	if (turn % 2 === 0){
		return false
	}
	else {
		return true
	}
}

function doubleClick(square){
	turn(square.target.id, computer)
}

// function playerTurn(){
// 	if (clickNumber === 1){
// 		userClick;
// 		console.log('you clicked')
// 	}
// 	else {
// 		doubleClick;
// 		console.log('you clicked twice')
// 	};
// };