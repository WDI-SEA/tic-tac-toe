var player1Turn = true;
var boxes = document.getElementsByClassName('box');
var clickCount = 0;
var boardOn = true;
var player1 = 'X';
var player2 = 'O';
var unmarked = [];

// win location objects
var row1 = {'X': 0, 'O': 0, boxIds: ['0', '1', '2']};
var row2 = {'X': 0, 'O': 0, boxIds: ['3', '4', '5']};
var row3 = {'X': 0, 'O': 0, boxIds: ['6', '7', '8']};
var col1 = {'X': 0, 'O': 0, boxIds: ['0', '3', '6']};
var col2 = {'X': 0, 'O': 0, boxIds: ['1', '4', '7']};
var col3 = {'X': 0, 'O': 0, boxIds: ['2', '5', '8']};
var diag1 = {'X': 0, 'O': 0, boxIds: ['0', '4', '8']};
var diag2 = {'X': 0, 'O': 0, boxIds: ['2', '4', '6']};
var locationObjects = [row1, row2, row3, col1, col2, col3, diag1, diag2];
var locationArr = [];
var winner = document.getElementById('winner');


var gameWon = function(player) {
	winner.textContent = player + ' wins!'

	// turn off board
	boardOn = false;
};

var gameTied = function() {
	winner.textContent = 'Cat got it!'

	// turn off board
	boardOn = false;
};

var aiMove = function(locations, unmarkedIds) {
	let boxToPlay;

	// loop through potential location ids,
	// see if any id matches an id in the unmarked array
	locations.forEach(function(ids) {
		for(let i = 0; i < ids.length; i++) {
			if(unmarkedIds.indexOf(ids[i]) > -1) {
				boxToPlay = document.querySelector('[data-id="' + ids[i] + '"]');
			}
		}
	});
	if(boxToPlay) {
		markBox(boxToPlay);
	} else {
		let randomBox = unmarked[Math.floor(Math.random() * unmarked.length)];
		markBox(randomBox);
	}
};

var aiLogic = function(player, comp) {

	let canWin = false;
	let shouldBlock = false;
	let winLocations = [];
	let blockLocations = [];
	let unmarkedIds = [];
	let unmarkedBoxes = [].slice.call(unmarked);

	// collect data-ids of all unmarked boxes
	unmarkedBoxes.forEach(function(box) {
		unmarkedIds.push(box.dataset.id);
	});

	// see if any locations contain 2 comp marks
	locationObjects.forEach(function(obj) {
		if(obj[comp] === 2) {
			winLocations.push(obj.boxIds);
			canWin = true;
		}

		if(obj[player] === 2) {
			blockLocations.push(obj.boxIds);
			shouldBlock = true;
		}
	});

	if(canWin) {
		aiMove(winLocations, unmarkedIds);
		console.log('win')
	} else if(shouldBlock) {
		aiMove(blockLocations, unmarkedIds);
		console.log('block');
	} else {
		let random = unmarkedBoxes[Math.floor(Math.random() * unmarkedBoxes.length)];
		markBox(document.querySelector('[data-id="' + random.dataset.id + '"]'));
	}
};

var checkWin = function(player, location) {
	// loop through location objects and check the letter counts
	for (let i = 0; i < location.length; i++) {
		if (location[i][player] === 3) {
			// call gameOver if value of X or O is 3
			gameWon(player);
			return;
		} 
	} 

	if (clickCount === 9) gameTied();
};

var markBox = function(box) {

	// make sure box is unmarked
	if (box.classList.contains('unmarked') && boardOn) {

		// assign letter depending on whose turn, switch turns
		var letter = (player1Turn) ? player1 : player2;
		box.children[0].textContent = letter;

		// remove unmarked class, increase count
		box.classList.remove('unmarked');
		clickCount++;

		// determine box location using class name,
		// update appropriate objects and push into location array
		var boxLocation = box.classList[0];
		switch (boxLocation) {
			case 'row1-col1-diag1':
				row1[letter] += 1;
				col1[letter] += 1;
				diag1[letter] += 1;
				locationArr = [row1, col1, diag1];
				break;
			case 'row1-col2':
				row1[letter] += 1;
				col2[letter] += 1;
				locationArr = [row1, col1];
				break;
			case 'row1-col3-diag2':
				row1[letter] += 1;
				col3[letter] += 1;
				diag2[letter] += 1;
				locationArr = [row1, col3, diag2];
				break;
			case 'row2-col1':
				row2[letter] += 1;
				col1[letter] += 1;
				locationArr = [row2, col1];
				break;
			case 'row2-col2-diag1-diag2':
				row2[letter] += 1;
				col2[letter] += 1;
				diag1[letter] += 1;
				diag2[letter] += 1;
				locationArr = [row2, col2, diag1, diag2];
				break;
			case 'row2-col3':
				row2[letter] += 1;
				col3[letter] += 1;
				locationArr = [row2, col3];
				break;
			case 'row3-col1-diag2':
				row3[letter] += 1;
				col1[letter] += 1;
				diag2[letter] += 1;
				locationArr = [row3, col1, diag2];
				break;
			case 'row3-col2':
				row3[letter] += 1;
				col2[letter] += 1;
				locationArr = [row3, col2];
				break;
			case 'row3-col3-diag1':
				row3[letter] += 1;
				col3[letter] += 1;
				diag1[letter] += 1;
				locationArr = [row3, col3, diag1];
				break;
		}

		// update list of unmarked boxes
		unmarked = document.getElementsByClassName('unmarked');

		// check for win if clickCount is 5 or more
		if (clickCount >= 5) checkWin(letter, locationArr);

		player1Turn = !player1Turn;
		// call ai after player1s turn
		if(!player1Turn) {
			let timeout = setTimeout(function(){
				aiLogic(player1, player2);
			}, 1000);
		};
	}
};

var reset = function() {
	// set every location object to 0
	locationObjects.forEach(function(obj) {
		for (let key in obj) {
			obj[key] = 0;
		}
	});

	// set clickCount to 0
	clickCount = 0;

	// remove text from boxes
	for (let box of boxes) {
		box.children[0].textContent = '';
	}

	// add unmarked class
	for (let box of boxes) {
		box.classList.add('unmarked');
	}

	// turn on board
	boardOn = true;
	player1Turn = true;
	unmarked = boxes;
	console.log(unmarked, boxes);

};

document.addEventListener('DOMContentLoaded', function() {

	console.log('DOM Loaded');
	for (let box of boxes) {
		box.addEventListener('click', function() {
			markBox(this);
		});
	}

});
