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
	['B2np', '', 'B', '2', 'n', 'p'],
	['B3', '', 'B', '3', '', ''],
	['C1p', '', 'C', '1', '', 'p'],
	['C2', '', 'C', '2', '', ''],
	['C3n', '', 'C', '3', 'n', '']
];

//scoreCard array . . . ticTac=index 0, toe=index 1 ---------

var scoreCard = [[
0, //index 0 = ticTac's A row score
0, //index 1 = ticTac's B row score
0, //index 2 = ticTac's C row score
0, //index 3 = ticTac's 1 column score
0, //index 4 = ticTac's 2 column score
0, //index 5 = ticTac's 3 column score
0, //index 6 = ticTac's n-slope score
0, //index 7 = ticTac's p-slope score
], [
0, //index 0 = toe's A row score
0, //index 1 = toe's B row score
0, //index 2 = toe's C row score
0, //index 3 = toe's 1 column score
0, //index 4 = toe's 2 column score
0, //index 5 = toe's 3 column score
0, //index 6 = toe's n-slope score
0, //index 7 = toe's p-slope score
]]

//event listeners!-------------------------------------------

document.getElementById("A1n").addEventListener('click', clickedCell);
document.getElementById("A2").addEventListener('click', clickedCell);
document.getElementById("A3p").addEventListener('click', clickedCell);
document.getElementById("B1").addEventListener('click', clickedCell);
document.getElementById("B2np").addEventListener('click', clickedCell);
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
	var cellObject = this.id.toString();
	for (i = 0; i < allTheCellsArray.length; i++) {
		if (allTheCellsArray[i][0] === cellObject) {
			console.log(cellObject + ' cell is at index ' + i);
			var currentCellArrayLocation = i;
		};
	};

}



function clickedAvatar(event) {
	console.log("you clicked on " + this.id);
}
