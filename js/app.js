						//Variables
let player1 = 'X'
let player2 = 'O'

let board = document.getElementById('gameBoard')
let turn = 0
let winner = false

console.log('Started')
						//Start the Game
const startGame = () => {
	document.getElementById('prompt').textContent = 'Go Player 1'
	player1 = true
  	player2 = false
		for (let i = 0; i < board.length; i++) {
			document.getElementById('box[i]').addEventListener('click', (e) => {
			move(i)
			})
		}
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
const move = (cell) => {
	if (board[cell].classList.contains('marked') = false) {
		if (player1 == true) {
      player1 = false
      player2 = true
			p1Move(cell)
			document.getElementById('prompt').textContent = "Player 1 turn"
		} else {
			player1 = true
			player2 = false
			p2Move(cell)
			document.getElementById('prompt').textContent= "Player 2 turn"
		}
		checkWin()
		turn = turn + 1
		draw()
		let marked = board[cell]
		marked.classList.add('marked')
	}
}

const p1Move = (cell) => {
	let open = document.getElementById('grid')[cell]
	open.classList.add("p1mark")
}
const p2Move = (cell) => {
	let open = document.getElementById('grid')[cell]
	open.classList.add("p2Mark")
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


//.....
//.....




						//Reset the board
const reset = () => {
	for (i = 0; i < board.length; i++) {
		let space =  board[i];
		if (space.classList.contains('p1mark')) {
			space.classList.remove('p1mark')
			}
		else if (space.classList.contains('p2mark')) {
			space.classList.remove('p2mark')
	startGame()
		}
	}
}

						//Remove marks
const checkTiles = () => {
	for (i = 0; i < board.length; i++) {
		let space =  board[i];
		if (space.classList.contains('marked') = false) {
			space.classList.add('marked')
		}
	}		
}	

document.getElementById('startButton').addEventListener('click', startGame)