
let turnNumber = 0
let gameSquare1 = document.getElementById("gameSquare1")
let gameSquare2 = document.getElementById("gameSquare2")
let gameSquare3 = document.getElementById("gameSquare3")
let gameSquare4 = document.getElementById("gameSquare4")
let gameSquare5 = document.getElementById("gameSquare5")
let gameSquare6 = document.getElementById("gameSquare6")
let gameSquare7 = document.getElementById("gameSquare7")
let gameSquare8 = document.getElementById("gameSquare8")
let gameSquare9 = document.getElementById("gameSquare9")

let squares = [gameSquare1, gameSquare2, gameSquare3, 
	gameSquare4, gameSquare5, gameSquare6, gameSquare7, gameSquare8, gameSquare9]

let redSquares = []
let blueSquares = []

const winningCondition = [
	{'div#gameSquare1.col', 'div#gameSquare2.col' 'div#gameSquare3.col'}, {'div#gameSquare4.col', 'div#gameSquare5.col', 'div#gameSquare6.col'},

	{'div#gameSquare7.col', 'div#gameSquare8.col', 'div#gameSquare9.col'}, {'div#gameSquare1.col', 'div#gameSquare4.col', 'div#gameSquare7.col'},

	{'div#gameSquare2.col', 'div#gameSquare5.col', 'div#gameSquare8.col'}, {'div#gameSquare3.col', 'div#gameSquare6.col', 'div#gameSquare9.col'},

	{'div#gameSquare1.col', 'div#gameSquare5.col', 'div#gameSquare9.col'}, {'div#gameSquare3.col', 'div#gameSquare5.col', 'div#gameSquare7.col'}
]

let messageWindow = document.getElementById('messageWindow')

let startButton = document.getElementById('startButton')


const messageToPlayers = () => {
	if (turnNumber % 2 === 0) {
		document.getElementById('messageWindow').textContent = "It's Player 1's turn"
	}
	else {
		document.getElementById('messageWindow').textContent = "It's Player 2's turn"
	}
}

const changeSquare = (e) => {
	e.target.removeEventListener('click', changeSquare)
	
	if (turnNumber % 2 === 0) {
		e.target.style.backgroundImage = "url('https://img.icons8.com/ios-filled/50/000000/o.png')"
		e.target.style.backgroundColor = 'blue'
		let blue = e.target
		blueSquares.push(blue)
		console.log(blueSquares)
	}
	else {
		e.target.style.backgroundImage = "url('https://img.icons8.com/ios-filled/50/000000/x.png')"
		e.target.style.backgroundColor = 'firebrick'
		let red = e.target
		redSquares.push(red)
		console.log(redSquares)
		
	}
advanceTurn()
checkForWin()
}

const checkForWin = () => {
	for (let i = 0; i < blueSquares.length; i++) {
		if (blueSquares == winningCondition[i]){
			console.log('Blue WINS!!')
		}
		else {
			console.log('Blue Doesnt Win')
		}
	}
	if (let j = 0; j < redSquares.length; j++){
		if (redSquares == winningCondition[j]){
			console.log('Red WINS!!')
		} else {
			console.log('Red Doesnt Win')
		}
	}
}

const advanceTurn = () => {
	turnNumber +=1
	messageToPlayers()
}

const setEventListeners = (e) => {
	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener('click', changeSquare)
	}
}
	
startButton.addEventListener('click', setEventListeners)