// global variables------------------------------------------

var startButtonText = 'start game!'
var currentPlayer = '';
var ticTacState = 'neutral';
var toeState = 'neutral';

//function to randomly assign initial player-----------------

var getPlayer = function() {
	if (Math.random() > .5) {
		currentPlayer = 'ticTac';
	} else {
		currentPlayer = 'toe';
	};
}
getPlayer();
console.log('the starting player is ', currentPlayer);

//starting values for all of the cells----------------------

var allTheCellsArray = [
	['A1n', '', 'A', '1', 'n', '' ],
	['A2', '', 'A', '2', '', ''],
	['A3p', '', 'A', '3', '', 'p'],
	['B1', '', 'B', '1', '', ''],
	['B2pn', '', 'B', '2', 'n', 'p'],
	['B3', '', 'B', '3', '', ''],
	['C1p', '', 'C', '1', '', 'p'],
	['C2', '', 'C', '2', '', ''],
	['C3n', '', 'C', '3', 'n', '']
];

//event listeners!-------------------------------------------

document.getElementById("A1n").addEventListener('click', clickedCell);
document.getElementById("A2").addEventListener('click', clickedCell);
document.getElementById("A3p").addEventListener('click', clickedCell);
document.getElementById("B1").addEventListener('click', clickedCell);
document.getElementById("B2pn").addEventListener('click', clickedCell);
document.getElementById("B3").addEventListener('click', clickedCell);
document.getElementById("C1p").addEventListener('click', clickedCell);
document.getElementById("C2").addEventListener('click', clickedCell);
document.getElementById("C3n").addEventListener('click', clickedCell);
document.getElementById("toeAvatar").addEventListener('click', clickedAvatar);
document.getElementById("ticTacAvatar").addEventListener('click', clickedAvatar);


function updatePlayerScore(cell) {
	console.log('passed', cell, 'to updatePlayerScore function');
}

function clickedCell(event) {
	//check whether cell is already occupied;
	// if(this.id.occupier != '') {
	var cellObject = this.id.toString();
	findTheCell(cellObject);

	//updatePlayerScore(this.id);
	// }
}


function findTheCell(cellName) {
	for (i = 0; i < allTheCellsArray.length; i++) {
		if (allTheCellsArray[i][0] === cellName) {
			console.log(cellName + ' cell is at index ' + i);
			return i;
		}
	}
}

function clickedAvatar(event) {
	console.log("you clicked on " + this.id);
}



