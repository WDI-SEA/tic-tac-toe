
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
	['div#gameSquare1.col', 'div#gameSquare2.col', 'div#gameSquare3.col'], 
	['div#gameSquare4.col', 'div#gameSquare5.col', 'div#gameSquare6.col'],
	['div#gameSquare7.col', 'div#gameSquare8.col', 'div#gameSquare9.col'], 
	['div#gameSquare1.col', 'div#gameSquare4.col', 'div#gameSquare7.col'],
	['div#gameSquare2.col', 'div#gameSquare5.col', 'div#gameSquare8.col'], 
	['div#gameSquare3.col', 'div#gameSquare6.col', 'div#gameSquare9.col'],
	['div#gameSquare1.col', 'div#gameSquare5.col', 'div#gameSquare9.col'], 
	['div#gameSquare3.col', 'div#gameSquare5.col', 'div#gameSquare7.col']
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
	if (blueSquares.length > 2){
		console.log('Blue longer than 2')
	for(let j = 0; j < blueSquares.length; j++){
		for (let i = 0; i < winningCondition.length; i++){
			console.log('Blue Fires')
			

		}

	}
}
	if (redSquares.length > 2){
		console.log('Red longer than 2')
	for (let k = 0; k < redSquares.length; k++){
		for (let i = 0; i < winningCondition.length; i++){
			console.log('Red Fires')


		}
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