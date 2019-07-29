console.log('Hello frontend');

var currentMove = 0;

var validWins = [	[0, 1, 2],
					[3, 4, 5],
					[6, 7, 8],
					[0, 3, 6],
					[1, 4, 7],
					[2, 5, 8],
					[0, 4, 8],
					[2, 4, 6]];



var gameTiles = document.querySelectorAll(".game-tile");

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetGame);

var warGamesModeButton = document.getElementById("wargames-button");
warGamesModeButton.addEventListener("click", startWarGamesMode);
var inWarGamesMode = false;
var warGamesCounter = 0;
const WARGAMES_LIMIT = 50;
const WARGAMES_START_DELAY = 1000;
const WARGAMES_MIN_DELAY = 30;
var warGamesDelay = WARGAMES_START_DELAY;
var warGamesInterval;

// Start the game
resetGame();


function resetGame() {
	for (tile of gameTiles) {
		tile.src = "img/ttt-blank.jpg";
		tile.addEventListener("click", flipTile);
		tile.parentElement.setAttribute("class", "box in-play-box");
	}

	document.getElementById("wargames-message").innerText = "";

	currentMove = 0;
}

function flipTile() {
	console.log("flipping a tile");
	if (currentMove % 2) {
		this.setAttribute("src", "img/ttt-x.jpg");
	} else {
			this.setAttribute("src", "img/ttt-o.jpg");
	}

	// Turn off event listener so you can't click it a second time
	this.removeEventListener("click", flipTile);

	currentMove++;
	checkGameStatus();
}

function checkGameStatus() {
	// Checks if the game was won with the most recent move, or
	// if all the boxes are filled

	// We'll use the game tile images and check them against this array
	// of possible winning combinations
	var gameCompleted = true;

	var winningPattern; // for use to highlight the winning boxes if the game was won


	for (winPattern of validWins) {
		var checkTeam = getTeamName(gameTiles[winPattern[0]].src);
		var possibleWinningTeam = checkTeam;

		var hasWon = true;
		for (i of winPattern) {
			checkTeam = getTeamName(gameTiles[i].src);
			if (checkTeam == "k") {
				gameCompleted = false;
				hasWon = false;
				break;
			} else if (checkTeam != possibleWinningTeam) {
				hasWon = false;
				break;
			}
		}
		if (hasWon) {
			winningPattern = winPattern;
			break;
		}
	}
	if (hasWon) {
		console.log(checkTeam, "won!");
		highlightWinPattern(winningPattern);
		stopGame();
		} else if (gameCompleted && !hasWon) {
		console.log("The game is a draw");
		stopGame();
	} else {
		console.log("No winner yet");
	}
}

function stopGame() {
	// remove event listeners from all tiles
	for (tile of gameTiles) {
		tile.removeEventListener("click", flipTile);
	}
	if (inWarGamesMode && warGamesCounter < WARGAMES_LIMIT) {
		warGamesCounter++;
		resetGame();			
	} else if (inWarGamesMode && warGamesCounter >= WARGAMES_LIMIT) {
		clearInterval(warGamesInterval);
		sendWarGamesMessage();
		document.getElementById("reset").addEventListener("click", resetGame);
		document.getElementById("wargames-button").addEventListener("click", startWarGamesMode);

	}
}

function getTeamName(src) {
	// Reads the character 'x', 'o', or 'k' (blank) from the src attribute text
	// The 5th from last character in the image path is k, x, or o
	return src[src.length - 5];
}

function highlightWinPattern(pattern) {
	for (tile of pattern) {
		gameTiles[tile].parentElement.setAttribute("class", "box winning-box");
	}
}

function startWarGamesMode() {
	inWarGamesMode = true;
	warGamesCounter = 0;
	wargamesDelay = WARGAMES_START_DELAY;
	resetGame();
	warGamesInterval = setInterval(warGamesMode, warGamesDelay);
	document.getElementById("reset").removeEventListener("click", resetGame);
	document.getElementById("wargames-button").removeEventListener("click", startWarGamesMode);
}

function warGamesMode() {
	// Choose next tile to play by first blocking
	// imminent wins, and then picking an offensive
	// move, in that order

	// First figure out the other player's imminent wins
	// by seeing if any of the winPatterns have two of the
	// opposing player's tiles set. If so, then place a tile
	// in the third set to block.

	// If there are no imminent wins, then pick a tile out of
	// the available blanks.

	var possibleDefensiveMoves = [];
	var possibleOffensiveMoves = [];
	var currentPlayer, opposingPlayer;

	if (currentMove % 2 == 0) { // o
		currentPlayer = "o";
		opposingPlayer = "x";
	} else { // x
		currentPlayer = "x";
		opposingPlayer = "o";
	}
	for (winPattern of validWins) {
		// Count number of opposing tiles and number of blanks
		var opposingTiles = 0;
		var blankTiles = [];
		for(tile of winPattern) {
			var tileOwner = getTeamName(gameTiles[tile].src);
			if (tileOwner == opposingPlayer) {
				opposingTiles++;
			} else if (tileOwner == "k") {
				blankTiles.push(tile);
			}
		}
		if (opposingTiles == 2 && blankTiles.length == 1) {
			possibleDefensiveMoves.push(blankTiles[0]);
		} else if (opposingTiles < 2 && blankTiles.length > 0) {
			for (blankTile of blankTiles) {
				possibleOffensiveMoves.push(blankTile);
			}
		}
	}

	if (possibleDefensiveMoves.length > 0) {
		gameTiles[possibleDefensiveMoves[Math.floor(Math.random() * possibleDefensiveMoves.length)]].click();
	} else if (possibleOffensiveMoves.length > 0 ) {
		gameTiles[possibleOffensiveMoves[Math.floor(Math.random() * possibleOffensiveMoves.length)]].click();
	} else {
		console.log ("No available moves -- the game should never get here!");
	}

	if (warGamesDelay > WARGAMES_MIN_DELAY) {
		clearInterval(warGamesInterval);
		warGamesDelay -= 10;
		warGamesInterval = setInterval(warGamesMode, warGamesDelay);
	}

}

function sendWarGamesMessage() {
	document.getElementById("wargames-message").innerText = "A strange game. The only winning move is not to play.";
}