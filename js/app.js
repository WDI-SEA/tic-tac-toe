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
			document.getElementById('prompt').textContent = "Player 1 turn"
		} else {
			player1 = true
			player2 = false
			p2Move(e)
			document.getElementById('prompt').textContent= "Player 2 turn"
		}
		// checkWin()
		// turn = turn + 1
		// draw()
	}

const p1Move = (e) => {
	e.target.textContent = "X"
	e.target.removeEventListener('click', move)
	console.log('p1move')
}

const p2Move = (e) => {
	e.target.textContent = "O"
	e.target.removeEventListener('click', move)
console.log('p2move')

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

	startGame()
		}
	
						//Remove marks
const checkTiles = () => {
	for (i = 0; i < board.length; i++) {
		let space =  board[i];
	}		
}	

document.getElementById('startButton').addEventListener('click', startGame)