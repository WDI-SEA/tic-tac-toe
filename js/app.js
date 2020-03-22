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

let startButton = document.getElementById('startButton')

//advances the turn count when called
const advanceTurn = () => {
	turnNumber +=1
	console.log(turnNumber)
}
//Sets eventListeners on each game square
const setGame = () => {
	for (let i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", advanceTurn)
	}	
}
	
//Set eventlistener of the start button
startButton.addEventListener('click', setGame)
