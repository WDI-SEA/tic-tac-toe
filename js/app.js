var player1Turn = true;
var boxes = document.getElementsByClassName('box');
var clickCount = 0;
var boardOn = true;
var player1, player2;
var game;
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


	// turn off board
	boardOn = false;
};

var gameTied = function() {

	// turn off board
	boardOn = false;
};

var aiMove = function(locations, unmarkedIds) {
	console.log(locations, diag2);
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
		console.log('win/block');
	} else {
		let randomBox = unmarked[Math.floor(Math.random() * unmarked.length)];
		markBox(randomBox);
	}
};

var aiLogic = function(player, comp) {
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
		if(obj[comp] === 2 && obj[player] === 0) {
			winLocations.push(obj.boxIds);
		}

		if(obj[player] === 2 && obj[comp] === 0) {
			blockLocations.push(obj.boxIds);
		}
	});

	if(winLocations.length) {
		aiMove(winLocations, unmarkedIds);
	} else if(blockLocations.length) {
		aiMove(blockLocations, unmarkedIds);
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
		
		if(!player1Turn && game === 'one-player') {
			let timeout = setTimeout(function(){
				aiLogic(player1, player2);
			}, 1000);
		};
	}
};

var reset = function() {
	player1Turn = true;
	clickCount = 0;
	boardOn = true;
	unmarked = [];
	locationArr = [];
	locationObjects.forEach(function(obj) {
		obj['X'] = 0;
		obj['O'] = 0;
	});
	for(let box of boxes) {
		box.children[0].textContent = '';
		box.classList.add('unmarked');
	}
};

var init = function(player) {
	document.getElementsByClassName('front-page')[0].classList.add('hide');
	document.getElementsByClassName('game-page')[0].classList.remove('hide');
	if(player === 'X') {
		player1 = 'X';
		player2 = 'O';
	} else {
		player1 = 'O';
		player2 = 'X';
	}
}

var setHeights = function() {
	for (let box of boxes) {
		let boxWidth = box.offsetWidth;
		box.style.height = boxWidth + 'px';

		box.children[0].style.lineHeight = boxWidth + 'px';
	}
};

document.addEventListener('DOMContentLoaded', function() {

	console.log('DOM Loaded');
	setHeights();
	var selectGameBtns = document.getElementsByClassName('select-game-btn');
	var selectLetterBtns = document.getElementsByClassName('select-letter-btn');
	
	for (let box of boxes) {
		box.addEventListener('click', function() {
			markBox(this);
		});
	}

	for (let btn of selectGameBtns) {
		btn.addEventListener('click', function() {
			game = (this.id === 'one-player') ? 'one-player' : 'two-player';
			document.getElementsByClassName('select-game')[0].classList.add('hide');
			document.getElementsByClassName('select-letter')[0].classList.remove('hide');
		});
	}

	for (let btn of selectLetterBtns) {
		btn.addEventListener('click', function() {
			init(this.id);
		});
	}

	window.addEventListener('resize', setHeights);

});
