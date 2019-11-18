
console.log('Hello User');

/*
DECLARE VARIABLES FOR GAME ELEMENTS
*/
var isUserX
var trackTurns = []
var trackBoxes = ["box0", "box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8"]
var winX = "X,X,X"
var winO = "O,O,O"
var row1 = ''
var row2 = ''
var row3 = ''
var col1 = ''
var col2 = ''
var col3 = ''
var diag1 = ''
var diag2 = ''

/*
UPDATE GAME WIN TRACKING STRINGS
*/
const updateWinCompare = () => {
	row1 = [trackBoxes[0],trackBoxes[1],trackBoxes[2]]
	row2 = [trackBoxes[3],trackBoxes[4],trackBoxes[5]]
	row3 = [trackBoxes[6],trackBoxes[7],trackBoxes[8]]
	col1 = [trackBoxes[0],trackBoxes[3],trackBoxes[6]]
	col2 = [trackBoxes[1],trackBoxes[4],trackBoxes[7]]
	col3 = [trackBoxes[2],trackBoxes[5],trackBoxes[8]]
	diag1 = [trackBoxes[0],trackBoxes[4],trackBoxes[8]]
	diag2 = [trackBoxes[2],trackBoxes[4],trackBoxes[6]]
}

/*
CHECK FOR WIN
*/

const checkForWin = () => { 
	switch (winX) {
		case row1.toString() :
		case row2.toString() :
		case row3.toString() :
		case col1.toString() :
		case col2.toString() :
		case col3.toString() :
		case diag1.toString():
		case diag2.toString():
			document.getElementById("topmenu").innerHTML = '<h2>PLAYER X WINS!</h2><div class=\"ticker-wrap\"><div class=\"ticker-move\"><div class=\"ticker-item\">PLAYER X WINS! GOOD JOB!</div><div class=\"ticker-item\">YOU\'RE AMAZING!</div><div class=\"ticker-item\">WOHOO! PLAYER X ROCKS!</div><div class=\"ticker-item\">YIPEE! PLAYER X WINS!.</div></div></div>'
			document.getElementById('win').play()
			break;
	}
	switch (winO) {
		case row1.toString() :
		case row2.toString() :
		case row3.toString() :
		case col1.toString() :
		case col2.toString() :
		case col3.toString() :
		case diag1.toString():
		case diag2.toString():
			document.getElementById("topmenu").innerHTML = '<h2>PLAYER O WINS!</h2><div class=\"ticker-wrap\"><div class=\"ticker-move\"><div class=\"ticker-item\">PLAYER O WINS! GOOD JOB!</div><div class=\"ticker-item\">YOU\'RE AMAZING!</div><div class=\"ticker-item\">WOHOO! PLAYER O ROCKS!</div><div class=\"ticker-item\">YIPEE! PLAYER O WINS!.</div></div></div>'
			document.getElementById('win').play()
			break;
		default:
			if (trackTurns.length===9) {
				document.getElementById("topmenu").innerHTML = '<h2>NO ONE WINS.</h2><h2>PRESS CLEAR TO TRY AGAIN.</>'
				document.getElementById('sadTrombone').play()
			}

	}
}

/*
CLEAR/RESET GAME
*/
const clearGame = () => {
	trackTurns = []
	trackBoxes = ["box0", "box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8"]
	row1 = ''
	row2 = ''
	row3 = ''
	col1 = ''
	col2 = ''
	col3 = ''
	diag1 = ''
	diag2 = ''
	document.getElementById("topmenu").innerHTML = '<h2>Choose One To Start:</h2><button id="playX" class="button">X</button><button id="playO" class="button">O</button>'
	
	let allBoxes = document.getElementsByClassName('allboxes')
	for (i=0; i<allBoxes.length; i++) {
		allBoxes[i].textContent = '\u00A0'
		allBoxes[i].removeEventListener("click", clearGame)
	}
}

/*
PLAY GAME - TRACK PLAYER TURN AND MOVES
*/
const playGame = () => {
	let allBoxes = document.getElementsByClassName('allboxes')

	for (let i = 0; i < allBoxes.length; i++) {

		allBoxes[i].addEventListener("click", () => {
			let targetIndex = event.target.id

			if (event.target.textContent === "X" || event.target.textContent === "O") {
				console.log('try a different space')
			}
			else if (isUserX) {
				document.getElementById('click').play()
				event.target.textContent = "X"
				trackTurns.push("X")
				trackBoxes[trackBoxes.indexOf(event.target.id)] = "X"
				updateWinCompare()
				checkForWin()
				isUserX = false
			}
			else if (!isUserX) {
				document.getElementById('click').play()
				event.target.textContent = "O"
				trackTurns.push("O")
				trackBoxes[trackBoxes.indexOf(event.target.id)] = "O"
				updateWinCompare()
				checkForWin()
				isUserX = true
			}
		  })
	}
}

/*
EVENT LISTENERS
*/
document.getElementById('playX').addEventListener("click", () => {	
	document.getElementById("topmenu").innerHTML = '<h2>TRY TO GET THREE IN A ROW!</h2>'
	console.log('game started')
	isUserX = true
	playGame()
})

document.getElementById('playO').addEventListener("click", () => {
	document.getElementById("topmenu").innerHTML = '<h2>TRY TO GET THREE IN A ROW!</h2>'
	console.log('game started')
	isUserX = false
	playGame()
})

document.getElementById('clear').addEventListener('click', () => {
	clearGame()
})

