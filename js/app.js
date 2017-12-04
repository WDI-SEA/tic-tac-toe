// Setting up counter we will use to track who's turn it is
var turnCounter = 0;
var currentTurn;

// Setting up array where we will add in player names based on what square they click on
// Each item in the array pertains to a square on the board
var currentBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var currentSpaceIndex; 

// For keeping track of score accross mulitple games
var player1Score = 0;
var player2Score = 0;

var gameType; // Will be either single or multi player based on what user selects

// Grabbing key elements from the DOM
var gameSpaces = document.querySelectorAll('.row div');	// Pulls all 9 game spaces
var controlWindow = document.getElementById('controlwindow');	
var statusBox = document.getElementById('statusbox');
var player1ScoreSection = document.getElementById('player1score').children[0];
var player2ScoreSection = document.getElementById('player2score').children[0];
var resetButton = document.getElementById('reset');
var playAgainButton = document.getElementById('playagain');
var singlePlayerButton = document.getElementById('singleplayer');
var twoPlayerButton = document.getElementById('twoplayer');

var checkCurrentTurn = function() {
	if (turnCounter % 2 === 0) {
		currentTurn = 'player1';
	} else {
		currentTurn = 'player2';
	}
};

var startGame = function() {	// This function is only run when user selects 1 or 2 player game
	gameType = this.id;	// Sets the game type to either single or two player based on button clicked
	statusBox.textContent = 'Make a move Player 1';
	singlePlayerButton.removeEventListener('click', startGame);
	twoPlayerButton.removeEventListener('click', startGame);

	// Changes all classes to be active gameplay mode
	controlWindow.classList.remove('gamestart');
	controlWindow.classList.add('gameinprogress');
	for (var i = 0; i < controlWindow.children.length; i++) {
		controlWindow.children[i].classList.remove('gamestart');
		controlWindow.children[i].classList.add('gameinprogress');
	}
};

var gameOver = function() {
	for (var i = 0; i < gameSpaces.length; i++) {
		gameSpaces[i].removeEventListener('click', spaceClicked);
	}

	// Changes all classes to be game over (covers game board with status)
	controlWindow.classList.remove('gameinprogress');
	controlWindow.classList.add('gameover'); 
	for (var i = 0; i < controlWindow.children.length; i++) {
		controlWindow.children[i].classList.remove('gameinprogress');
		controlWindow.children[i].classList.add('gameover');
	}
};

var checkForWin = function() {
	// Check all winning combinations for player 1
	if (((currentBoard[0] === 'player1') && (currentBoard[1] === 'player1') && (currentBoard[2] === 'player1')) ||
		((currentBoard[3] === 'player1') && (currentBoard[4] === 'player1') && (currentBoard[5] === 'player1')) ||
		((currentBoard[6] === 'player1') && (currentBoard[7] === 'player1') && (currentBoard[8] === 'player1')) ||
		((currentBoard[0] === 'player1') && (currentBoard[3] === 'player1') && (currentBoard[6] === 'player1')) ||
		((currentBoard[1] === 'player1') && (currentBoard[4] === 'player1') && (currentBoard[7] === 'player1')) ||
		((currentBoard[2] === 'player1') && (currentBoard[5] === 'player1') && (currentBoard[8] === 'player1')) ||
		((currentBoard[0] === 'player1') && (currentBoard[4] === 'player1') && (currentBoard[8] === 'player1')) ||
		((currentBoard[2] === 'player1') && (currentBoard[4] === 'player1') && (currentBoard[6] === 'player1'))) {
			statusBox.textContent = 'Player 1 has won';
			player1Score++;
			player1ScoreSection.textContent = player1Score;
			gameOver();

	// Check all winning combinations for player 2
	} else if (((currentBoard[0] === 'player2') && (currentBoard[1] === 'player2') && (currentBoard[2] === 'player2')) ||
		((currentBoard[3] === 'player2') && (currentBoard[4] === 'player2') && (currentBoard[5] === 'player2')) ||
		((currentBoard[6] === 'player2') && (currentBoard[7] === 'player2') && (currentBoard[8] === 'player2')) ||
		((currentBoard[0] === 'player2') && (currentBoard[3] === 'player2') && (currentBoard[6] === 'player2')) ||
		((currentBoard[1] === 'player2') && (currentBoard[4] === 'player2') && (currentBoard[7] === 'player2')) ||
		((currentBoard[2] === 'player2') && (currentBoard[5] === 'player2') && (currentBoard[8] === 'player2')) ||
		((currentBoard[0] === 'player2') && (currentBoard[4] === 'player2') && (currentBoard[8] === 'player2')) ||
		((currentBoard[2] === 'player2') && (currentBoard[4] === 'player2') && (currentBoard[6] === 'player2'))) {
			statusBox.textContent = 'Player 2 has won';
			player2Score++;
			player2ScoreSection.textContent = player2Score;
			gameOver();

	// If all squares played and none of the above are met, then it's a draw
	} else if (turnCounter > 7) {
		statusBox.textContent = 'There was a draw';
		gameOver();

	// If no winner, keep the game going!
	} else {
		newTurn();
	}
};

var computerTurn = function () {
	// Function that can be called to select a random number
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	for (var i = 0; i < 50; i++) {
		var randomNumber = getRandomInt(0, 8);	// Select a random number between 0 and 8
		if (currentBoard[randomNumber] === 0) {	// Check if that number hasn't already been played
			// If the randomly selected space is empty, then play that space
			currentBoard[randomNumber] = 'player2';
			gameSpaces[randomNumber].classList.remove('unplayed');
			gameSpaces[randomNumber].classList.add('player2');
			gameSpaces[randomNumber].textContent = 'O';
			gameSpaces[randomNumber].removeEventListener('click', spaceClicked);
			break;	// Want to stop the loop after we've found and updated 1 empty space
		}
	}
	for (var i = 0; i < currentBoard.length; i++) {	// User can click after computer completes turn
		if (currentBoard[i] === 0) {
			gameSpaces[i].addEventListener('click', spaceClicked);
		}
	}
	checkForWin();
};

var newTurn = function () {	// Only called if there is no win or draw
	turnCounter++;
	checkCurrentTurn();

	if (currentTurn === 'player1') {
		statusBox.textContent = 'Make a move Player 1';

	} else if (currentTurn === 'player2') {
		if (gameType === 'singleplayer') {	// If user selected single player mode, the computer will play next
			statusBox.textContent = 'Player 2 is playing';
			for (var i = 0; i < currentBoard.length; i++) {	
				if (currentBoard[i] === 0) {	// Making spaces unclickable during computer's turn
					gameSpaces[i].removeEventListener('click', spaceClicked);
				}
			}
			setTimeout(computerTurn, 1000);	// Computer waits 1 second before going to look more natural
		} else if (gameType === 'twoplayer') {
				statusBox.textContent = 'Make a move Player 2';
			}
	}
};

var spaceClicked = function() {
	checkCurrentTurn();

	for (var i = 0; i < gameSpaces.length; i++) {
		if (gameSpaces[i].id === this.id) {
			currentSpaceIndex = i;  // Finding what index in the array we should be adding into
		}
	}

	this.classList.remove('unplayed');	// Removes default empty space class
	this.classList.add(currentTurn);	// class name equals the player who's current turn it is
	this.removeEventListener('click', spaceClicked);	// Makes current space unclickable

	// Determines what goes into the game space box and array based on current turn
	if (currentTurn === 'player1') {
		this.textContent = 'X';
		currentBoard[currentSpaceIndex] = 'player1';
	} else if (currentTurn === 'player2') {	// This only used if player is playing 2 player mode
		this.textContent = 'O';
		currentBoard[currentSpaceIndex] = 'player2';
	}
	checkForWin();
};


var addSpaceEventListeners = function() { // Creating event listeners for every game space
	for (var i = 0; i < gameSpaces.length; i++) {
		gameSpaces[i].addEventListener('click', spaceClicked);
	}
};

var newGame = function() {	// Functionality to clear the board, but not the scores
	currentBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	turnCounter = 0;	
	addSpaceEventListeners();  
	statusBox.textContent = 'Make a move Player 1';

	// Changing all classes back to active gameplay status and clearing played spaces
	controlWindow.classList.remove('gameover');
	controlWindow.classList.add('gameinprogress');		
	for (var i = 0; i < controlWindow.children.length; i++) {	
		controlWindow.children[i].classList.remove('gameover');
		controlWindow.children[i].classList.add('gameinprogress');
	}
	for (var i = 0; i < gameSpaces.length; i++) {   
		gameSpaces[i].classList.remove('player1');
		gameSpaces[i].classList.remove('player2');
		gameSpaces[i].classList.add('unplayed');
	}
};

var resetGame = function() {
	newGame();
	player1Score = 0;	// Reseting starts over completely, reseting all tracking of scores
	player2Score = 0;
	player1ScoreSection.textContent = player1Score;
	player2ScoreSection.textContent = player2Score;
	statusBox.textContent = 'To begin, select the number of players';

	singlePlayerButton.addEventListener('click', startGame);
	twoPlayerButton.addEventListener('click', startGame);

	// Changing all classes back to initial start screen status
	controlWindow.classList.remove('gameinprogress');
	controlWindow.classList.remove('gameover');
	controlWindow.classList.add('gamestart');
	for (var i = 0; i < controlWindow.children.length; i++) {
		controlWindow.children[i].classList.remove('gameinprogress');
		controlWindow.children[i].classList.remove('gameover');
		controlWindow.children[i].classList.add('gamestart');
	}
};

// Calling event listeners
addSpaceEventListeners();
resetButton.addEventListener('click', resetGame);
playAgainButton.addEventListener('click', newGame);
singlePlayerButton.addEventListener('click', startGame);
twoPlayerButton.addEventListener('click', startGame);
