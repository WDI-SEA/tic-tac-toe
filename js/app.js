
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

const winningCondition = [
	['1', '2', '3'], 
	['4', '5', '6'],
	['7', '8', '9'], 
	['1', '4', '7'],
	['2', '5', '8'], 
	['3', '6', '9'],
	['1', '5', '9'], 
	['3', '5', '7']
]

let messageWindow = document.getElementById('messageWindow')

let startButton = document.getElementById('startButton')

let declareWinner = document.getElementById('declareWinner')

let blueSquares = []
let redSquares = []

const announceWinner = (winner) =>{
	console.log(winner + 'won')
	declareWinner.textContent = winner + 'Won!'
	stopEventListeners()
}



const messageToPlayers = () => {
	if (turnNumber % 2 === 0) {
		messageToPlayers.textContent = "It's Player 1's turn"
	}
	else {
		messageWindow.textContent = "It's Player 2's turn"
	}
}

const changeSquare = (e) => {
	e.target.removeEventListener('click', changeSquare)
	
	if (turnNumber % 2 === 0) {
		//e.target.style.backgroundImage = "url('https://img.icons8.com/ios-filled/50/000000/o.png')"
		e.target.style.backgroundColor = 'blue'
		e.target.textContent = 'O'
		let blue = e.target.id
		let bluePosId = blue.substr(10)
		blueSquares.push(bluePosId)
	}	
	else {
		//e.target.style.backgroundImage = "url('https://img.icons8.com/ios-filled/50/000000/x.png')"
		e.target.style.backgroundColor = 'firebrick'
		e.target.textContent = 'X'
		let red = e.target.id
		let redPosId = red.substr(10)
		redSquares.push(redPosId)
	}
	console.log(blueSquares)
	console.log(redSquares)

	let result = checkForWin()
	if (result) {
			announceWinner(result)
		}
		else{
			advanceTurn()
		}


}

const checkForWin = () => {
	if (turnNumber % 2 === 0) {
		for (let i = 0; i < winningCondition.length; i++) {
			console.log(winningCondition[i])
			if(blueSquares.includes(winningCondition[i][0]) &&
				blueSquares.includes(winningCondition[i][1]) &&
				blueSquares.includes(winningCondition[i][2])){
				console.log('Blue had winning cond')
				return 'blue'
			}
		}
	}else {
		for (let i = 0; i < winningCondition.length; i++) {
			console.log(winningCondition[i])
			if(redSquares.includes(winningCondition[i][0]) &&
				redSquares.includes(winningCondition[i][1]) &&
				redSquares.includes(winningCondition[i][2])){
				console.log('Red had winning cond')
				return 'red'
			}
		}
	}
	return false
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

const stopEventListeners = (e) => {
	for (let i = 0; i < squares.length; i++) {
		squares[i].removeEventListener('click', changeSquare)
	}
}
	
startButton.addEventListener('click', setEventListeners)