						//Variables
let board = document.querySelectorAll('.col-4')
let currentPlayer;
let player1 = true
let player2 = false
let turn = 0
let winner = false

						//Start the Game
const startGame = () => {
	document.getElementById('prompt').textContent = 'Go Player 1'
	player1 = true
  	player2 = false
		for (let i = 0; i < board.length; i++) {
			board[i].addEventListener('click', move)
		}
	document.getElementById('startButton').addEventListener('click', reset)
}


//Player moves
const move = (e) => {
	if (player1 == true) {
		player1 = false
		player2 = true
		p1Move(e)
		document.getElementById('prompt').textContent = 'Player 2 turn'
	} else {
		player1 = true
		player2 = false
		p2Move(e)
		document.getElementById('prompt').textContent = 'Player 1 turn'
	}
	turn = turn + 1
	winCon(board, condition)
		if (winner) {
			for (let i = 0; i < board.length; i++) {
				board[i].removeEventListener('click', move)
			}
		}
	draw()
}

 //Draw Condition
 console.log("draw")
 const draw = () => {
	if (turn == 9 && winner == false ) {
	document.getElementById('prompt').textContent = 'Tie Game'
	}
}

const p1Move = (e) => {
	e.target.value = "x"
	e.target.textContent = 'X'
	e.target.style.textContent = 'center'
	e.target.removeEventListener('click', move)
}

const p2Move = (e) => {
	e.target.value = "o"
	e.target.textContent = 'O'
	e.target.style.textContent = 'center'
	e.target.removeEventListener('click', move)
}

						//Win conditions
const condition = [
	[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const winCon = (board, condition) => {
	console.log(winner)
	 if (turn >= 3) {
		for (let i = 0; i < condition.length; i++) {
			const [x, y, z] = condition[i]
			if (board[x].value && board[x].value === board[y].value && board[x].value === board[z].value) {
				document.getElementById('prompt').textContent = `${board[x].value} is the winner!`
				winner = true
			}
		}
	}
 }

						//Reset the board
const reset = () => {
	for (let i = 0; i < board.length; i++) {
		board[i].textContent = ''
		board[i].value = i
		document.getElementById('prompt').textContent = ''
	}
	winner = false
	turn = 0
	startGame()
}

document.getElementById('restartButton').addEventListener('click', reset)
document.getElementById('startButton').addEventListener('click', startGame)