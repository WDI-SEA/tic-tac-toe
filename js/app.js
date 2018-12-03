var allBoxes = document.querySelectorAll(".box");
var definePlayer = true
var winConditions = [["one","two","three"],["one","four","seven"],["one","five","nine"],
["two","five","eight"],["three","six","nine"],["four","five","six"],
["seven","eight","nine"],["three","five","seven"]]
var dougs = []
var dans = []
var dougsPoints = 0;
var dansPoints = 0;


document.addEventListener("DOMContentLoaded", function() {
console.log('Hello frontend');

document.getElementById("start").addEventListener("click", start)

function start() {
	resetGame();
	addBoxListeners();
}

// turns whatever was clicked either to X or O
function clicked() {
	// makes it X or O
	if (definePlayer === true) {
		//record the x click
		dougs.push(this.id);
		// add a class name so that the box will change the background image
		this.classList.add("dougie");
		// turn off the event listener so I can't click the same box again
		this.removeEventListener("click", clicked);
		definePlayer = false;
	} else {
		//record the o click
		dans.push(this.id);
		// add a class name so that the box will change the background image
		this.classList.add("dp");
		// turn off the event listener so I can't click the same box again
		this.removeEventListener("click", clicked);
		definePlayer = true;
	};
	keepScore();
	console.log(dougs);
}

//add event listeners to the boxes
function addBoxListeners() {
	for(var i = 0; i < allBoxes.length; i++) {
		allBoxes[i].addEventListener("click", clicked);
	}
}

function removeBoxListeners(){
	for(var i = 0; i < allBoxes.length; i++) {
		allBoxes[i].removeEventListener("click",clicked);
	}
}

function keepScore(){
	for(var i = 0; i < winConditions.length; i++) {
		let innerArr = winConditions[i];
		for(var j = 0; j < innerArr.length; j++) {
			if (dougs.includes(innerArr[j])) {
				dougsPoints++;
				checkWin();
				checkTie();
			} else if (dans.includes(innerArr[j])) {
				dansPoints++;
				checkWin();
				checkTie();
			}
		}
		dougsPoints = 0;
		dansPoints = 0;
	};
}

function resetGame(){
	// resets all the boxes back to blank's
	for(var i = 0; i < allBoxes.length; i++) {
		allBoxes[i].classList.remove("dougie");
		allBoxes[i].classList.remove("dp");
	}
	stopGame();
	document.getElementById("results").style.color = "white";
	document.getElementById("results").innerHTML = "Who will win?";
}

function checkWin() {
	if (dougsPoints === 3) {
		document.getElementById("results").innerHTML = "DOUG WINS!";
		document.getElementById("results").style.color = "green";
		// set this winning player to go first next
		definePlayer = true;
		stopGame();
	} else if (dansPoints === 3) {
		document.getElementById("results").innerHTML = "DAN WINS!";
		document.getElementById("results").style.color = "blue";
		// set this winnging player to go first next
		definePlayer = false;
		stopGame();
	}
}

function checkTie() {
	if (dougs.length === 5) {
		checkWin();
		definePlayer = true;
		stopGame();
		document.getElementById("results").innerHTML = "It's a TIE!";
		document.getElementById("results").style.color = "red";
		console.log(definePlayer);
	} else if (dans.length ===5) {
		checkWin();
		definePlayer = false;
		stopGame();
		document.getElementById("results").innerHTML = "It's a TIE!";
		document.getElementById("results").style.color = "red";
		console.log(definePlayer);
	}
}

// stop the game if there's been a winner
function stopGame() {
	//remove all box listeners when there's a winner
	removeBoxListeners();
	//set the arrays back to blank
	dougs = [];
	dans = [];
}

})

