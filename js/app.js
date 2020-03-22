console.log('JS functioning');
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
		document.getElementById('messageWindow').textContent = "It's Player 2's turn"
	}
	else {
		document.getElementById('messageWindow').textContent = "It's Player 1's turn"
	}
	console.log('messageToPlayers')
}

const changeSquare = () => {	

	//set color attribute and background color
	if (turnNumber % 2 === 0) {
		document.getElementById(id).setAttribute('backgroundColor', '#b32d00')
		//e.target.style.background-color = red
	}
	else {
		document.getElementById(id).setAttribute('backgroundColor', '#0052cc')
		//e.target.style.background-color = blue
	}
	//remove event listener
	document.getElementById(id).removeEventListener('click', changeSquare)
	
}

//advances the turn count when called
const advanceTurn = () => {
	turnNumber +=1
	console.log(turnNumber)
	messageToPlayers()
}
//Sets eventlisteners
const setEventListeners = () => {
	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", (e) => {
		squares[i].setAttribute('clicked', true)
		//advanceTurn()
		//changeSquare()
		console.log(squares[i])
		})
	}
}
//Sets the starting condition on each game square
const setGame = (e) => {
	for (let j = 0; j < squares.length; j++) {
	squares[j].setAttribute('clicked', false)
	squares[j].setAttribute('claimed', false)
	//console.log(squares[j])
	setEventListeners()	
	}	
}

//Set eventlistener of the start button
startButton.addEventListener('click', setGame)