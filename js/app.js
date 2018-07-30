var startBoard;
var player1 = 1; 
const cells = document.querySelectorAll('.box');
const human = new Image('');
const computer = new Image('.img/venom_face.jpg');
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

human.onClick = function (){
	image.src= '.img/spiderman_face.jpg';
	td.innerHTML += '<img src="' + image.src + '" />';
}



startGame();

function startGame(){
	document.querySelector(".endgame").style.display = "none";
	startBoard = Array.from(Array(9).keys());
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = '';
		cells[i].addEventListener('click', userClick, false);
		cells[i].style.backgroundColor = "white";
		
	}
}

function turn(squareId, player){
	startBoard[squareId] = player;
	document.getElementById(squareId).innerText = player;
	let gameWon = checkWin(startBoard, player)
	if (gameWon){
		gameOver(gameWon);
	}
}

function userClick(square){
	turn(square.target.id, human);
}

function checkWin(board, player){
	let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of winCombos.entries()){
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function gameOver(gameWon){
	for (let index of winCombos[gameWon.index]){
		document.getElementById(index).style.backgroundColor = 
		gameWon.player == human ? "red" : "blue";
	}

	for (var i = 0; i < cells.length; i++){
		cells[i].removeEventListener('click', userClick, false)
	}
}