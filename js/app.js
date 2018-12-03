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
	var avatarImage = "img/" + currentPlayer +"_turn.png";
	var avatarImageId = currentPlayer + "Avatar";
	document.getElementById(avatarImageId).src = avatarImage;

}
getPlayer();

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

let scoreCard = [[
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


		if (currentPlayer === 'ticTac') {
			var avatarSrc = "img/ticTac_neutral.png";
		} else {
			var avatarSrc = "img/toe_neutral.png";
		};

		var imageId = allTheCellsArray[currentCellArrayLocation][0] + "_img";
		console.log(imageId);

		document.getElementById(imageId).src = avatarSrc;


		//establish a numeric value for the current player for use in scoreCard index navigation
		if (currentPlayer === 'ticTac') {
			var playerIndex = 0;
		} else {
			var playerIndex = 1;
		};

		// increment  ABC123np numbers in scoreCard array ------- 
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

		var nextSteps = 'finish turn';

		for(q = 0; q < 8; q++) {
			if(scoreCard[0][q] === 3) {
				console.log('ticTac WINS!!!!!!');
				nextSteps = 'ticTac wins';
				gameOver('ticTac');
			}
		};
		for(q = 0; q < 8; q++) {
			if(scoreCard[1][q] === 3) {
				console.log('toe WINS!!!!!!');
				nextSteps = 'toe wins';
				gameOver('toe');
			}
		};

		//check for a tie (if tie, do the following)
		// display tie messages w/ avatars

		if(nextSteps === 'finish turn') { 
			let emptyCellCount = 0;
			for (z = 0; z < allTheCellsArray.length; z++) {
				if (allTheCellsArray[z][1] === '') {
					emptyCellCount++;
				};
			};
			if (emptyCellCount === 0) {
				console.log('GAME TIED!');
				tiedGame();
				nextSteps = 'tied game';
			};
		};

		if(nextSteps === 'finish turn') {
			var avatarImage = "img/" + currentPlayer +"_blank.png";
			var avatarImageId = currentPlayer + "Avatar";
			document.getElementById(avatarImageId).src = avatarImage;

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

			//change the avatar for the new currrent player

			var avatarImage = "img/" + currentPlayer +"_turn.png";
			var avatarImageId = currentPlayer + "Avatar";

			document.getElementById(avatarImageId).src = avatarImage;
		}

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
document.getElementById("reStart").addEventListener('click', clearTheBoard);

// document.getElementById("toeAvatar").addEventListener('click', clickedAvatar);
// document.getElementById("ticTacAvatar").addEventListener('click', clickedAvatar);



function tiedGame() {
	var ticTacAvatarImage = "img/ticTac_tie.png";
	var avatarImage = 'ticTacAvatar';
	document.getElementById(avatarImage).src = ticTacAvatarImage;

	var toeAvatarImage = "img/toe_tie.png";
	var avatarImage = 'toeAvatar';
	document.getElementById(avatarImage).src = toeAvatarImage;
}


// stuff that gotta happen when an avatar is clicked

// function clickedAvatar(event) {
// 	console.log("you clicked on " + this.id);
// }

function gameOver(winner) {
	console.log('the game is over,', winner, 'wins');

	//remove the event listeners
	document.getElementById("A1n").removeEventListener('click', clickedCell);
	document.getElementById("A2").removeEventListener('click', clickedCell);
	document.getElementById("A3p").removeEventListener('click', clickedCell);
	document.getElementById("B1").removeEventListener('click', clickedCell);
	document.getElementById("B2np").removeEventListener('click', clickedCell);
	document.getElementById("B3").removeEventListener('click', clickedCell);
	document.getElementById("C1p").removeEventListener('click', clickedCell);
	document.getElementById("C2").removeEventListener('click', clickedCell);
	document.getElementById("C3n").removeEventListener('click', clickedCell);

if(winner === 'toe') {
		var ticTacAvatarImage = "img/ticTac_blank.png";
		var avatarImage = 'ticTacAvatar';
		document.getElementById(avatarImage).src = ticTacAvatarImage;

		var toeAvatarImage = "img/toe_wins.png";
		var avatarImage = 'toeAvatar';
		document.getElementById(avatarImage).src = toeAvatarImage;
	} else {
		var ticTacAvatarImage = "img/ticTac_wins.png";
		var avatarImage = 'ticTacAvatar';
		document.getElementById(avatarImage).src = ticTacAvatarImage;

		var toeAvatarImage = "img/toe_blank.png";
		var avatarImage = 'toeAvatar';
		document.getElementById(avatarImage).src = toeAvatarImage;

	};
};

function clearTheBoard() {
	var toeAvatarImage = "img/toe_blank.png";
	var avatarImage = 'toeAvatar';
	document.getElementById(avatarImage).src = toeAvatarImage;

	var ticTacAvatarImage = "img/ticTac_blank.png";
	var avatarImage = 'ticTacAvatar';
	document.getElementById(avatarImage).src = ticTacAvatarImage;

	allTheCellsArray = [
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

	scoreCard = [[
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

	var imageVar = "img/T.png";
	var mugga = "A1n_img";
	document.getElementById(mugga).src = imageVar;

	var imageVar = "img/i_lc.png";
	var targetId = 'A2_img';
	document.getElementById(targetId).src = imageVar;

	var imageVar = "img/C.png";
	var targetId = 'A3p_img';
	document.getElementById(targetId).src = imageVar;

	var imageVar = "img/t_lc.png";
	var targetId = 'B1_img';
	document.getElementById(targetId).src = imageVar;

	var imageVar = "img/A.png";
	var targetId = 'B2np_img';
	document.getElementById(targetId).src = imageVar;

	var imageVar = "img/c_lc.png";
	var targetId = 'B3_img';
	document.getElementById(targetId).src = imageVar;

	var imageVar = "img/T.png";
	var targetId = 'C1p_img';
	document.getElementById(targetId).src = imageVar;

	var imageVar = "img/o_lc.png";
	var targetId = 'C2_img';
	document.getElementById(targetId).src = imageVar;

	var imageVar = "img/E.png";
	var targetId = 'C3n_img';
	document.getElementById(targetId).src = imageVar;
	
getPlayer();
}
