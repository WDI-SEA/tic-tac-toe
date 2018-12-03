var allBoxes = document.querySelectorAll(".box");
var definePlayer = true
var winConditions = [["one","two","three"],["one","four","seven"],["one","five","nine"],
["two","five","eight"],["three","six","nine"],["four","five","six"],
["seven","eight","nine"],["three","five","seven"]]
var dougs = []
var dans = []


document.addEventListener("DOMContentLoaded", function() {
console.log('Hello frontend');

document.getElementById("start").addEventListener("click", start)


function start() {
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
		// turn off the even listener so I can't click the same box again
		this.removeEventListener("click", clicked);
		definePlayer = false;
	} else {
		//record the o click
		dans.push(this.id);
		// add a class name so that the box will change the background image
		this.classList.add("dp");
		// turn off the even listener so I can't click the same box again
		this.removeEventListener("click", clicked);
		definePlayer = true;
	} keepScore();
	console.log(dougs);
	console.log(dans);
}

//add event listeners to the boxes
function addBoxListeners() {
	for(var i = 0; i < allBoxes.length; i++) {
		allBoxes[i].addEventListener("click", clicked);
	}
}

function keepScore(){
	for(var i = 0; i <winConditions.length; i++) {
		let innerArr = winConditions[i];
		let dougsPoints = 0;
		let dansPoints = 0;
		for(var j = 0; j < innerArr.length; j++)
			if (dougs.includes(innerArr[j])) {
				dougsPoints + 1;
			} if (dans.includes(innerArr[j])) {
				dansPoints + 1;
			};
	};
	checkWin();
}

function checkWin() {
	if (dougsPoints === 3) {
		console.log("DOUG WINS!!!");
	} else if (dansPoints === 3) {
		console.log("DAN WINS!!!!");
	}
}

})


