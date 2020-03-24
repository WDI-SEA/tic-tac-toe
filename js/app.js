
let turnNumber = 0
//The 9 game squares by Id, numbered in order from top left to bottom right
let gameSquare1 = document.getElementById("gameSquare1")
let gameSquare2 = document.getElementById("gameSquare2")
let gameSquare3 = document.getElementById("gameSquare3")
let gameSquare4 = document.getElementById("gameSquare4")
let gameSquare5 = document.getElementById("gameSquare5")
let gameSquare6 = document.getElementById("gameSquare6")
let gameSquare7 = document.getElementById("gameSquare7")
let gameSquare8 = document.getElementById("gameSquare8")
let gameSquare9 = document.getElementById("gameSquare9")
// An array of all game squares
let squares = [gameSquare1, gameSquare2, gameSquare3, 
	gameSquare4, gameSquare5, gameSquare6, gameSquare7, gameSquare8, gameSquare9]

// Message window shows whos turn it is
let messageWindow = document.getElementById('messageWindow')

let startButton = document.getElementById('startButton')
//changes the clicked square


const messageToPlayers = () => {
	if (turnNumber % 2 === 0) {
		document.getElementById('messageWindow').textContent = "It's Player 1's turn"
	}
	else {
		document.getElementById('messageWindow').textContent = "It's Player 2's turn"
	}
}

const changeSquare = (e) => {
	e.target.setAttribute('clicked', 'true')
	e.target.removeEventListener('click', changeSquare)
	
	if (turnNumber % 2 === 0) {
		e.target.style.backgroundImage = "url('https://img.icons8.com/ios-filled/50/000000/o.png')"
		e.target.style.backgroundColor = 'blue'
		e.target.setAttribute('claimed', 'blue')
		//<img src="https://img.icons8.com/ios-filled/50/000000/o.png"/>
		
	}
	else {
		e.target.style.backgroundImage = "url('https://img.icons8.com/ios-filled/50/000000/x.png')"
		e.target.style.backgroundColor = 'firebrick'
		e.target.setAttribute('claimed', 'red')
		//<img src="https://img.icons8.com/ios-filled/50/000000/x.png"/>
		
	}
advanceTurn()
checkForWin()
}

const checkForWin = () => {
	console.log('checkForWin called')
	console.log()
}

//advances the turn count when called
const advanceTurn = () => {
	turnNumber +=1
	messageToPlayers()
}
//Sets eventlisteners
const setEventListeners = (e) => {
	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener('click', changeSquare)
	}
}
//Sets the starting condition on each game square
const setGame = (e) => {
	for (let j = 0; j < squares.length; j++) {
	squares[j].setAttribute('clicked', 'false')
	squares[j].setAttribute('claimed', 'false')
	}
	setEventListeners()
}	

//Set eventlistener of the start butto
startButton.addEventListener('click', setGame)