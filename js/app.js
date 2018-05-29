
// TIC TAC TOE
// ... a novel

var player1Text = document.getElementsByClassName('player1')[0];
var player2Text = document.getElementsByClassName('player2')[0];
var gameWonDisplay = document.getElementsByClassName('game-over')[0];
var gameTiedDisplay = document.getElementsByClassName('game-tied')[0];
var board = document.getElementsByClassName('board-container')[0];
var boxes = document.getElementsByClassName('box');
var colorInterval, onePlayerGame, unmarked, player1, player2;
var player1Turn = true;
var boardOn = true;
var gameOver = false;
var clickCount = 0;

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

// function to run if game is won
var gameWon = function(player) {
	// turn off board, gameOver true
	boardOn = false;
	gameOver = true;
	document.getElementsByClassName('letter-winner')[0].textContent = player;

	var winnerDelay = setTimeout(function() {
		// display game won elements, hide board
		gameWonDisplay.style.display = 'block';
		board.classList.add('hide');

		// color class toggle
		colorInterval = setInterval(function() {
			if(gameWonDisplay.classList.contains('game-over-blue')) {
				gameWonDisplay.classList.remove('game-over-blue');
				gameWonDisplay.classList.add('game-over-white');
			} else {
				gameWonDisplay.classList.remove('game-over-white');
				gameWonDisplay.classList.add('game-over-blue');
			}
		}, 700);
	}, 1000);

};

// function to run if game is tied
var gameTied = function() {
	// turn off board, gameOver true
	boardOn = false;
	gameOver = true; 

	var tiedDelay = setTimeout(function() {
		// display game tied elements
		gameTiedDisplay.style.display = 'block';
		document.getElementById('explode').play();
	}, 1000);
};


/********************************************** 
					AI LOGIC 
************************************************/

var aiMove = function(locations, unmarkedIds) {
	let boxToPlay;

	// loop through potential location ids,
	// see if any id matches an id in the unmarked array
	// if so, set it to boxToPlay
	locations.forEach(function(ids) {
		for(let i = 0; i < ids.length; i++) {
			if(unmarkedIds.indexOf(ids[i]) > -1) {
				boxToPlay = document.querySelector('[data-id="' + ids[i] + '"]');
			}
		}
	});

	// if there is a box to play, play it
	// or pick a random box
	if(boxToPlay) {
		markBox(boxToPlay);
	} else {
		let randomBox = unmarked[Math.floor(Math.random() * unmarked.length)];
		markBox(randomBox);
	}
};

var aiLogic = function(player, comp) {
	// turn board back on
	boardOn = true;
	// if the game is not over
	if(!gameOver) {
		let winLocations = [];
		let blockLocations = [];
		let unmarkedIds = [];
		let unmarkedBoxes = [].slice.call(unmarked);

		// collect data-ids of all unmarked boxes
		unmarkedBoxes.forEach(function(box) {
			unmarkedIds.push(box.dataset.id);
		});

		// see if any locations contain 2 comp marks or player marks,
		// and 0 marks from the other player
		// push their ids into corresponding arrays
		locationObjects.forEach(function(obj) {
			if(obj[comp] === 2 && obj[player] === 0) {
				winLocations.push(obj.boxIds);
			}

			if(obj[player] === 2 && obj[comp] === 0) {
				blockLocations.push(obj.boxIds);
			}
		});

		// see which array is not empty,
		// call aiMove with that array,
		// or play a random square
		if(winLocations.length) {
			aiMove(winLocations, unmarkedIds);
		} else if(blockLocations.length) {
			aiMove(blockLocations, unmarkedIds);
		} else {
			let random = unmarkedBoxes[Math.floor(Math.random() * unmarkedBoxes.length)];
			markBox(document.querySelector('[data-id="' + random.dataset.id + '"]'));
		}
	}
};

/********************************************** 
					
************************************************/

var checkWin = function(player, location) {
	// loop through location objects and check the letter counts
	for (let i = 0; i < location.length; i++) {
		if (location[i][player] === 3) {
			// call gameWon if value of X or O is 3
			gameWon(player);
			return;
		} 
	} 
	// call game tied if board is full
	if (clickCount === 9) gameTied();
};


// array to store potential win locations
var locationArr = [];
var markBox = function(box) {
	// only works if board is on and box is unmarked
	if(boardOn && box.classList.contains('unmarked')) {
		// assign letter depending on whose turn
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
				locationArr = [row1, col2];
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
		// check for win using location array if clickCount is 5 or more 
		console.log(locationArr);
		if (clickCount >= 5) checkWin(letter, locationArr);
		// switch turns and active class (change colors)
		player1Turn = !player1Turn;
		if(player1Turn) {
			player1Text.classList.add('active');
			player2Text.classList.remove('active');
		} else {
			player1Text.classList.remove('active');
			player2Text.classList.add('active');
		}


		// if one player mode is selected, its not players1s turn
		if(onePlayerGame && !player1Turn) {
			// turn off board (for one second timeout)
			boardOn = false;
			let timeout = setTimeout(function(){
				aiLogic(player1, player2);
			}, 1000);
		}
	}
};

var reset = function() {
	player1Text.classList.add('active');
	player2Text.classList.remove('active');
	gameWonDisplay.style.display = 'none';
	gameTiedDisplay.style.display = 'none';
	board.classList.remove('hide');
	player1Turn = true;
	clickCount = 0;
	boardOn = true;
	gameOver = false;
	unmarked = [];
	locationArr = [];
	clearInterval(colorInterval);
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
	// hide front page, display game page
	document.getElementsByClassName('front-page')[0].classList.add('hide');
	document.getElementsByClassName('game-page')[0].classList.remove('hide');
	// assign letter to player
	if(player === 'X') {
		player1 = 'X';
		player2 = 'O';
	} else {
		player1 = 'O';
		player2 = 'X';
	}
	// display player/letter
	player1Text.textContent = 'Player 1: \xa0 \xa0 \xa0' + player1;
	player2Text.textContent = onePlayerGame ? 'Computer: \xa0 \xa0 \xa0' + player2 : 'Player 2: \xa0 \xa0 \xa0' + player2;
}

var setHeights = function() {
	for (let box of boxes) {
		let boxWidth = box.offsetWidth;
		box.style.height = boxWidth + 'px';

		box.children[0].style.lineHeight = boxWidth + 'px';
	}
};

document.addEventListener('DOMContentLoaded', function() {

	setHeights();
	var selectGameBtns = document.getElementsByClassName('select-game-btn');
	var selectLetterBtns = document.getElementsByClassName('select-letter-btn');
	
	// add click event to boxes
	for (let box of boxes) {
		box.addEventListener('click', function() {
			markBox(this);
		});
	}

	// add click event to buttons
	for (let btn of selectGameBtns) {
		btn.addEventListener('click', function() {
			onePlayerGame = (this.id === 'one-player') ? true : false;
			document.getElementsByClassName('select-game')[0].classList.add('hide');
			document.getElementsByClassName('select-letter')[0].classList.remove('hide');
		});
	}

	for (let btn of selectLetterBtns) {
		btn.addEventListener('click', function() {
			init(this.id);
		});
	}

	// reset box heights on window resize
	window.addEventListener('resize', setHeights);
});
