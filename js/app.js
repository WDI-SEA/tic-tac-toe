// global variables------------------------------------------

const startButtonText = 'start game!'
let currentPlayer = '';
const ticTacState = 'neutral';
const toeState = 'neutral';

//function to randomly assign initial player-----------------

const getPlayer = function() {
	if (Math.random() > .5) {
		currentPlayer = 'ticTac';
	} else {
		currentPlayer = 'toe';
	};
}
getPlayer();
console.log('the starting player is', currentPlayer);

//starting values for all of the cells----------------------

let allTheCellsArray = [
['A1n',	'', 'A', '1', 'n', '0' ],
['A2',	'', 'A', '2', '0', '0'],
['A3p',	'', 'A', '3', '0', 'p'],
['B1',	'', 'B', '1', '0', '0'],
['B2np', '', 'B', '2', 'n', 'p'],
['B3',	'', 'B', '3', '0', '0'],
['C1p',	'', 'C', '1', '0', 'p'],
['C2',	'', 'C', '2', '0', '0'],
['C3n', '', 'C', '3', 'n', '0']
];

//scoreCard array . . . ticTac=index 0, toe=index 1 ---------

const scoreCard = [[
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
]];



//all the things that gotta happen when a cell gets clicked -----

let clickedCell = function(event) {

	var currentCellArrayLocation;


	// first, locate correct cell in allTheCellsArray

	var cellObject = this.id.toString();
	for (i = 0; i < allTheCellsArray.length; i++) {
		if (allTheCellsArray[i][0] === cellObject) {
			console.log(cellObject + ' cell is at index ' + i);
			currentCellArrayLocation = i;
		};
	};

	// next, determine if that cell has already been occupied

	if(allTheCellsArray[currentCellArrayLocation][1] === 'ticTac'|| allTheCellsArray[currentCellArrayLocation][1] === 'toe') {
		console.log('that tickles! cell occupied by', allTheCellsArray[currentCellArrayLocation][1]);
	}
	else {
		allTheCellsArray[currentCellArrayLocation][1] = currentPlayer;
		console.log('current player is', currentPlayer);
		console.log('currentCellArrayLocation =', currentCellArrayLocation);
		console.log('cell now occupied by', allTheCellsArray[currentCellArrayLocation][1], '!');
		console.log('get ready for some score keeping!');

		//establish a numeric value for the current player for use in scoreCard index navigation
		if (currentPlayer === 'ticTac') {
			var playerIndex = 0;
		} else {
			var playerIndex = 1;
		};

		// increment relevant ABC123np numbers in relevent scorecard. 
		switch (allTheCellsArray[currentCellArrayLocation][2]) {
			case 'A':
				scoreCard[playerIndex][0]++;
				console.log('just incremented A score to', scoreCard[playerIndex][0], 'for', currentPlayer);
				break;
			case 'B':
				scoreCard[playerIndex][1]++;
				console.log('just incremented B score to', scoreCard[playerIndex][1], 'for', currentPlayer);
				break;
			case 'C':
				scoreCard[playerIndex][2]++;
				console.log('just incremented A score to', scoreCard[playerIndex][2], 'for', currentPlayer);
				break;
			default:
				//console.log('current cell has no column?');
			};

		switch (allTheCellsArray[currentCellArrayLocation][3]) {
			case '1':
				scoreCard[playerIndex][3]++;
				//console.log('just incremented col1 score to', scoreCard[playerIndex][3], 'for', currentPlayer);
				break;
			case '2':
				scoreCard[playerIndex][4]++;
				//console.log('just incremented col2 score to', scoreCard[playerIndex][4], 'for', currentPlayer);
				break;
			case '3':
				scoreCard[playerIndex][5]++;
				//console.log('just incremented col3 score to', scoreCard[playerIndex][5], 'for', currentPlayer);
				break;
			default:
				//console.log('current cell has no row?');
			};

		switch (allTheCellsArray[currentCellArrayLocation][4]) {
			case 'n':
				scoreCard[playerIndex][6]++;
				//console.log('just incremented nSlope score to', scoreCard[playerIndex][6], 'for', currentPlayer);
				break;
			default:
				//console.log('no n value to this cell');
			};

		switch (allTheCellsArray[currentCellArrayLocation][5]) {
			case 'p':
				scoreCard[playerIndex][7]++;
				//console.log('just incremented pSlope score to', scoreCard[playerIndex][7], 'for', currentPlayer);
				break;
			default:
				//console.log('no p value to this cell');
			};	

		//check for a winner

		for(q = 0; q < 8; q++) {
			if(scoreCard[0][q] === 3) {
				console.log('ticTac WINS!!!!!!');
			}
		};
		for(q = 0; q < 8; q++) {
			if(scoreCard[1][q] === 3) {
				console.log('toe WINS!!!!!!');
			}
		};

		//check for a tie (if tie, do the following)
			// shut down listeners
			// display tie messages w/ avatars

		let emptyCellCount = 0;
		for (z = 0; z < allTheCellsArray.length; z++) {
			if (allTheCellsArray[z][1] === '') {
				emptyCellCount++;
			};
		};
		if (emptyCellCount === 0) {
			console.log('GAME TIED!');
		}


		//switch current player
		if (currentPlayer === 'ticTac') {
			currentPlayer = 'toe';
			console.log('current player switched to', currentPlayer);
			console.log('');
		} else {
			currentPlayer = 'ticTac';
			console.log('current player switched to', currentPlayer);
			console.log('');
		};

	}; //end of else statement tasks

}; //end of clickedCell function


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






// stuff that gotta happen when an avatar is clicked

function clickedAvatar(event) {
	console.log("you clicked on " + this.id);
}
