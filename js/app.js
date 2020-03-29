const player1 = 'O';
const player2 = 'X';
let currentPlayer;
let player1Clicks = [];
let player2Clicks = [];

const winCombos = [
	['0', '1', '2'],
	['3', '4', '5'],
	['6', '7', '8'],
	['0', '3', '6'],
	['1', '4', '7'],
	['2', '5', '8'],
	['0', '4', '8'],
	['6', '4', '2']
];

let turn = 0;

const cells = document.querySelectorAll('.cell');
// The cells event listener starts the game, previously a start buttom was clicked
//document.getElementById('start').addEventListener('click', cells);
// Below is the working startGame function...comment out cells EventListener to endGame
document.getElementById('start').addEventListener('click', startGame);

function startGame() {
	document.getElementById('endgame').textContent=''
    for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = ''; 
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', play, false);
	}
}

function play(e) {
	turn++;
	if (turn % 2 == 0) {
		// play O, even turn
		currentPlayer = player1;
		e.target.innerText = player1;
		player1Clicks.push(e.target.id)
		//console.log('player 1 wins?' + player1Clicks)
		e.target.removeEventListener('click', play)
		checkWin(currentPlayer)
		if (turn === 9 && checkWin(currentPlayer)=== false) {
			tieGame()
		}
	} else if (turn % 2 != 0) {
		// play X, odd turn
		currentPlayer = player2;
		e.target.innerText = player2;
		player2Clicks.push(e.target.id)
		e.target.removeEventListener('click', play)
		//console.log('player 2 wins?' + player2Clicks)
		checkWin(currentPlayer)
		if (turn === 9 && checkWin(currentPlayer)=== false) {
			tieGame()
		}
	}
}

// Things we need to implement:

// Check win after each turn
function checkWin (currentPlayer) {
	for (var i = 0; i < winCombos.length; i++) {
		var wins = 0
		for (var j = 0; j < winCombos[i].length; j++) {
			if (currentPlayer === player1) {
				if (player1Clicks.includes(winCombos[i][j])) {
					wins++
				}
			}
			else {
				if (player2Clicks.includes(winCombos[i][j])) {
					wins++
				}
			}
			if (wins === 3) {
				endGame(currentPlayer)
			}
		}
	}
		return false
}

function endGame(currentPlayer) {
	document.getElementById('endgame').textContent=currentPlayer+' WINS!'
	//console.log('end game working')
	for (var i = 0; i < cells.length; i++) {
		
		cells[i].removeEventListener('click', play);
	}
	player1Clicks = []
	player2Clicks = []
	turn = 0
	currentPlayer = player1
	}
	
function tieGame() {
	document.getElementById('endgame').textContent='tie game!'
	console.log('end game working')
	player1Clicks = []
	player2Clicks = []
	turn = 0
	currentPlayer = player1
}

//checkWin()
	// Create arrays storing the boxes each player occupies
	// Check this against the winning combinations
// Create an endgame to end the game after a win
// Implement a tie condition


/// CELEBRATE!