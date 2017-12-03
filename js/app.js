// Setting up counter we will use to track who's turn it is
var turnCounter = 0;
var currentTurn;

// Setting up array where we will add in player names based on what square they click on
// Each item in the array pertains to a square on the board
var currentBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// For keeping track of score accross mulitple games
var player1Score = 0;
var player2Score = 0;

var gameType; // Will be either single or multi player based on what user selects

// Grabbing key elements from the DOM
var gameSpaces = document.querySelectorAll(".row div");		// Pulls all 9 game spaces
var controlWindow = document.getElementById("controlwindow");	// The score, status, reset button etc. section that adjusts based on gameplay status
var statusBox = document.getElementById("statusbox");	// Displays message about who's turn it is, who won, etc.
var player1ScoreSection = document.getElementById("player1score").children[0];	// To access and update scorebox for player1
var player2ScoreSection = document.getElementById("player2score").children[0];	// To access and update scorebox for player2
var resetButton = document.getElementById("reset");		// For reseting the entire game
var playAgainButton = document.getElementById("playagain");		// For starting a new round of the game
var singlePlayerButton = document.getElementById("singleplayer");	// For selecting single player mode (to play the computer)
var twoPlayerButton = document.getElementById("twoplayer");		// For selecting two player mode

var checkCurrentTurn = function() {
	if (turnCounter % 2 === 0) {
		currentTurn = "player1";
	} else {
		currentTurn = "player2";
	}
}

var newGame = function() {	// Functionality to clear the board, but not the scores
	currentBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];		// Empties array of current spaces played
	turnCounter = 0;	// Resets turn counter back to 0
	addSpaceEventListeners();   // Makes all game spaces clickable again
	statusBox.textContent = "Make a move Player 1";

	controlWindow.classList.remove("gameover");  	
    controlWindow.classList.add("gameinprogress");		// Changing all classes back to active gameplay status
	for (i = 0; i < controlWindow.children.length; i++) {	// Loops through control window and updates all styles
    	controlWindow.children[i].classList.remove("gameover");
    	controlWindow.children[i].classList.add("gameinprogress");
    }
	for (var i = 0; i < gameSpaces.length; i++) {   // Looping through all game spaces
		gameSpaces[i].classList.remove("player1"); 
		gameSpaces[i].classList.remove("player2");
		gameSpaces[i].classList.add("unplayed");
	}
}

var resetGame = function() {
	newGame();
	player1Score = 0;	// Reseting starts over completely, reseting all tracking of scores
	player2Score = 0;
	player1ScoreSection.textContent = player1Score;
	player2ScoreSection.textContent = player2Score;
	statusBox.textContent = "To begin, select the number of players";

	singlePlayerButton.addEventListener("click",startGame);		// Since reseting, bring back option to choose game type
	twoPlayerButton.addEventListener("click",startGame);

	controlWindow.classList.remove("gameinprogress");
	controlWindow.classList.remove("gameover");
    controlWindow.classList.add("gamestart");	// Since we are fully reseting the game, need to go not just to a new game board, but back to the initial screen
	for (i = 0; i < controlWindow.children.length; i++) {   // Loops through control window and updates all styles
    	controlWindow.children[i].classList.remove("gameinprogress");
    	controlWindow.children[i].classList.remove("gameover");
    	controlWindow.children[i].classList.add("gamestart");
	}
}

var startGame = function() {	// This function is only run when user selects 1 or 2 player game
	gameType = this.id;		// sets the game type to either single or two player based on button clicked
	console.log("User has selected " + gameType + " as the game type");
	statusBox.textContent = "Make a move Player 1";
	singlePlayerButton.removeEventListener("click",startGame);	// User will need to reset/quit game to go back and change to single or multi player
	twoPlayerButton.removeEventListener("click",startGame);

	controlWindow.classList.remove("gamestart");
    controlWindow.classList.add("gameinprogress");		// Update styles for start of game
	for (i = 0; i < controlWindow.children.length; i++) {   // Loops through control window and updates all styles
    	controlWindow.children[i].classList.remove("gamestart");
    	controlWindow.children[i].classList.add("gameinprogress");
	}
}

var gameOver = function() {
	for (var i = 0; i < gameSpaces.length; i++) {  // Loop through and remove all game space event listeners once the game is done
		gameSpaces[i].removeEventListener("click",spaceClicked);
	}
	controlWindow.classList.remove("gameinprogress");  
    controlWindow.classList.add("gameover");  // Activating this class will bring in the play again button
	for (i = 0; i < controlWindow.children.length; i++) {   // Loops through control window and updates all styles
    	controlWindow.children[i].classList.remove("gameinprogress");
    	controlWindow.children[i].classList.add("gameover");
	}
}

var checkForWin = function() {
	// Check all winning combinations for player 1
	if (((currentBoard[0] === "player1") && (currentBoard[1] === "player1") && (currentBoard[2] === "player1")) ||
		((currentBoard[3] === "player1") && (currentBoard[4] === "player1") && (currentBoard[5] === "player1")) ||
		((currentBoard[6] === "player1") && (currentBoard[7] === "player1") && (currentBoard[8] === "player1")) ||
		((currentBoard[0] === "player1") && (currentBoard[3] === "player1") && (currentBoard[6] === "player1")) ||
		((currentBoard[1] === "player1") && (currentBoard[4] === "player1") && (currentBoard[7] === "player1")) ||
		((currentBoard[2] === "player1") && (currentBoard[5] === "player1") && (currentBoard[8] === "player1")) ||
		((currentBoard[0] === "player1") && (currentBoard[4] === "player1") && (currentBoard[8] === "player1")) ||
		((currentBoard[2] === "player1") && (currentBoard[4] === "player1") && (currentBoard[6] === "player1"))) {
			statusBox.textContent = "Player 1 has won";
			console.log("Player 1 won the round");
			player1Score++;
			player1ScoreSection.textContent = player1Score;
			gameOver();

	// Check all winning combinations for player 2
	} else if (((currentBoard[0] === "player2") && (currentBoard[1] === "player2") && (currentBoard[2] === "player2")) ||
		((currentBoard[3] === "player2") && (currentBoard[4] === "player2") && (currentBoard[5] === "player2")) ||
		((currentBoard[6] === "player2") && (currentBoard[7] === "player2") && (currentBoard[8] === "player2")) ||
		((currentBoard[0] === "player2") && (currentBoard[3] === "player2") && (currentBoard[6] === "player2")) ||
		((currentBoard[1] === "player2") && (currentBoard[4] === "player2") && (currentBoard[7] === "player2")) ||
		((currentBoard[2] === "player2") && (currentBoard[5] === "player2") && (currentBoard[8] === "player2")) ||
		((currentBoard[0] === "player2") && (currentBoard[4] === "player2") && (currentBoard[8] === "player2")) ||
		((currentBoard[2] === "player2") && (currentBoard[4] === "player2") && (currentBoard[6] === "player2"))) {
			statusBox.textContent = "Player 2 has won";
			console.log("Player 2 won the round");
			player2Score++;
			player2ScoreSection.textContent = player2Score;
			gameOver();

	// If all squares played and none of the above are met, then it's a draw
	} else if (turnCounter > 7) {
			statusBox.textContent = "There was a draw";
			console.log("No winner");
			gameOver();

	// If no winner, keep the game going!
	} else {
		newTurn();
	}
}

var computerTurn = function (){
	// Function that can be called to select a random number
	function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	for (var i = 0; i < 50; i++) {
		var randomNumber = getRandomInt(0,8);	// Select a random number between 0 and 8 (the length of the currentBoard array)
		if (currentBoard[randomNumber] === 0) {		// Check if that number hasn't already been played (would be listed as 0 in the array)
			// If the randomly selected space is empty, then play that space
			console.log(currentTurn + " has played in " + gameSpaces[randomNumber].id);
			currentBoard[randomNumber] = "player2";		// Adds player2 into the array at the randomly selected spot
			gameSpaces[randomNumber].classList.remove("unplayed");	//removes default empty space class
			gameSpaces[randomNumber].classList.add("player2");	//class name equals player2
			gameSpaces[randomNumber].textContent = "O"; 
			gameSpaces[randomNumber].removeEventListener("click", spaceClicked);
			break;	// Want to stop the loop after we've found and updated 1 empty space
		} 
	}
	for (i = 0; i < currentBoard.length; i++) {		// Make the empty game spaces clickable again once computer is done playing
		if (currentBoard[i] === 0) {
			gameSpaces[i].addEventListener("click", spaceClicked);
		}
	}
	checkForWin();	
}

var newTurn = function () {   // Only called if there is no win or draw
	turnCounter++; 
	checkCurrentTurn();

	if (currentTurn === "player1") {
		statusBox.textContent = "Make a move Player 1";
	}

	if (currentTurn === "player2") {
		if (gameType === "singleplayer") {	// If user selected single player mode, the computer will play next
				statusBox.textContent = "Player 2 is playing";
				for (i = 0; i < currentBoard.length; i++) {		// While it's the computer's turn we need to make the empty spaces unclickable
					if (currentBoard[i] === 0) {
						gameSpaces[i].removeEventListener("click", spaceClicked);
					}
				}
				setTimeout(computerTurn, 1000);		// Computer waits 1 second before going to look more natural
			} else if (gameType === "twoplayer") { 	// If two player, now the game is waiting for the user to click a space
				statusBox.textContent = "Make a move Player 2";
		}
	}
}

var spaceClicked = function() {
	checkCurrentTurn();		// First, check who's turn it is

	for (var i = 0; i < gameSpaces.length; i++) {   
		if (gameSpaces[i].id === this.id) {
			var currentSpaceIndex = i;  // Finding what index in the array we should be adding this play into based on the space clicked
			console.log(currentTurn + " has played in " + this.id);
		}
	}

	this.classList.remove("unplayed");	// removes default empty space class
	this.classList.add(currentTurn);	// class name equals the player who's current turn it is
	this.removeEventListener("click", spaceClicked);	// Makes it so you can't play this space again

	// Determines what goes into the game space box and array based on current turn
	if (currentTurn === "player1") {
		this.textContent = "X";
		currentBoard[currentSpaceIndex] = "player1";  //Adds player1 into the appropriate spot in the currentBoard array
	}

	if (currentTurn === "player2") {	// This part of the function would only be tapped into if the player has chosen two player
		this.textContent = "O"; 
		currentBoard[currentSpaceIndex] = "player2";	//Adds player2 into the appropriate spot in the currentBoard array
	}
	checkForWin(); 
}

// Setting and calling event listeners
var addSpaceEventListeners = function() { //Creating event listeners for every game space
	for (var i = 0; i < gameSpaces.length; i++) {
		gameSpaces[i].addEventListener("click",spaceClicked);
	}
}
addSpaceEventListeners();
resetButton.addEventListener("click",resetGame);
playAgainButton.addEventListener("click",newGame);
singlePlayerButton.addEventListener("click",startGame);
twoPlayerButton.addEventListener("click",startGame);
