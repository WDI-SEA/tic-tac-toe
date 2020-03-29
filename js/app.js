						//Variables
let player1 = true
let player2 = false

let board = document.querySelectorAll('.col-4')
let turn = 0
let winner = false

console.log('Started')

						//Start the Game
const startGame = () => {
	document.getElementById('prompt').textContent = 'Go Player 1'
	player1 = true
  	player2 = false
		for (let i = 0; i < board.length; i++) {
			board[i].addEventListener('click', move)
		}
		console.log(board.length)
	document.getElementById('startButton').addEventListener('click', reset)
console.log('Now Im here')
}

						//Draw Condition
const draw = () => {
	if (turn == 9 && winner == false ) {
		document.getElementById('prompt').textContent = 'Tie Game'
	}
}

						//Player moves
const move = (e) => {
	console.log('clicked', e.target.id)
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
		winCon(board. condition)
		draw()
	}

const p1Move = (e) => {
	e.target.textContent = 'X'
	e.target.style.textContent = 'center'
	e.target.removeEventListener('click', move)
}

const p2Move = (e) => {
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


const winCon = (board, condtion) => {
	if (turn >= 3) {
		for (let i = 0; i < condition.length; i++) {
			const [a, b, c] = condtion[i];
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				console.log('winner', move)
				document.getElementById('prompt').textContent = 'Congratulations, You win!'
				document.removeEventListener('click', board)
	} else {	
		draw()
	}
		}
	}
}


						//Reset the board
const reset = () => {
	startGame()
	board.textContent = ''
		}

document.getElementById('startButton').addEventListener('click', startGame)