// Declare global variables for tracking turn, state, and elements that will need click handlers later.
var xTurn = true;
var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var aiEasy = document.querySelector("input[value='easy']").checked;
var aiHard = document.querySelector("input[value='hard']").checked;
var nextTurn = document.getElementById("nextTurn");
var squares = document.getElementsByClassName("square");
var winnerBox = document.getElementById("winnerBox");
var winner = document.getElementById("winner");

// Helper function for finding available squares on the board.
function checkAvails(board) {
  var avails = board.filter(function(val){
      return isNaN(val) ? false : true;
  })
  return avails;
}

// Checks rows, columns, and diagonals to see if a player has won. This is separate from the "checkWinner" function 
// (which handles DOM manipulation) because AI hard-mode algorithm needs to check for winners on hypothetical boards.
function checkWin(brd, player) {
  if (brd[0] === player && brd[1] === player && brd[2] === player ||
  brd[3] === player && brd[4] === player && brd[5] === player ||
  brd[6] === player && brd[7] === player && brd[8] === player ||
  brd[0] === player && brd[3] === player && brd[6] === player ||
  brd[1] === player && brd[4] === player && brd[7] === player ||
  brd[2] === player && brd[5] === player && brd[8] === player ||
  brd[0] === player && brd[4] === player && brd[8] === player ||
  brd[2] === player && brd[4] === player && brd[6] === player) {
    return true;
  } else {
    return false;
  }
}

// If an end state has been reached, update the DOM to show who won.
function checkWinner() {
	if (checkWin(board, "X")) {
		winner.innerText = "X wins"
		winnerBox.style.display = "block";
		nextTurn.innerText = "Click 'reset' to play again."
	} else if (checkWin(board, "O")) {
		winner.innerText = "O wins"
		winnerBox.style.display = "block";
		nextTurn.innerText = "Click 'reset' to play again."
	} else if (checkAvails(board).length === 0) {
		winner.innerText = "It's a tie"
		winnerBox.style.display = "block";
		nextTurn.innerText = "Click 'reset' to play again."
	}
}

// Click handler to process human moves.
function humanMove() {
	if (!isNaN(board[this.dataset.square])) {
		// Only allow the move if the square hasn't been claimed.
		var square = this.dataset.square;
		if (xTurn) {
			board[square] = "X";
			this.innerText = "X";
			nextTurn.innerText = "Next turn: O";
		} else {
			board[square] = "O";
			this.innerText = "O";
			nextTurn.innerText = "Next turn: X";
		}
		setTimeout(checkWinner, 250);
		xTurn = xTurn ? false : true;
		if (checkAvails(board).length > 0 && (aiEasy || aiHard)) { 
			setTimeout(aiMove, 250); 
		}
	}
}


// This algorithm was written using help from a freeCodeCamp guide: https://goo.gl/AvVGX8

function checkMoves(board, player) {
  var avails = checkAvails(board);
  var moves = [];
  var bestMove = null;
  
  // Check to see if an end state has been reached.
  // This goes at the beginning of the function – before a new move is considered – to make recursion easier.
  if (avails.length === 0) {
    return { score: 0 };
  } else if (checkWin(board, "X")) {
    return { score: -10 }
  } else if (checkWin(board, "O")) {
    return { score: 10 }
  }
  
  // Loop through the available squares and check what happens if you move there by calling this function.
  // This function only returns a value when the move results in an end state, so if the next move doesn't end the game,
  // the function gets called again for a subsequent move... and again, etc, until an end state is reached. 
  for (var i = 0; i < avails.length; i++) {
    let newBoard = Array.from(board);
    newBoard[avails[i]] = player;
    console.log(newBoard);
    moves[i] = { move : avails[i] };
    var result = null;
    if (player === "X") {
      result = checkMoves(newBoard, "O");
    } else {
      result = checkMoves(newBoard, "X");
    }
    moves[i].score = result.score;
  }
  
  // Once all of the available moves have been scored, choose the best one.
  if (player === "X") {
    // Player X chooses the lowest scoring move because negative values are used when X wins.
    bestMove = moves.reduce(function(accumulator, currentValue){
      if (accumulator.score === undefined || currentValue.score < accumulator.score) {
        accumulator = currentValue;
      }
      return accumulator;
    });
  } else {
    // Player O chooses the highest scoring move because positive values are used when O wins.
    bestMove = moves.reduce(function(accumulator, currentValue){
      if (accumulator.score === undefined || currentValue.score > accumulator.score) {
        accumulator = currentValue;
      }
      return accumulator;
    });
  }
  
  return bestMove;
}

// This function handles easy-AI logic and DOM manipulation for computer moves.
// If the AI is in easy mode, it just chooses a random square from the list of what's available.
function aiMove() {
	var move = null;
	var squareElement = null;
	if (aiEasy) {
		var avails = checkAvails(board);
		move = Math.round(Math.random() * (avails.length - 1));
		squareElement = document.querySelector("div[data-square='" + avails[move] + "']");
		board[avails[move]] = "O";
	} else if (aiHard) {
		move = checkMoves(board, "O");
		squareElement = document.querySelector("div[data-square='" + move.move + "']");
		board[move.move] = "O";
	}
	squareElement.innerText = "O";
	xTurn = true;
	setTimeout(checkWinner, 250);
}

// This function resets the board, hides the winner div, etc.
function reset() {
	Array.prototype.forEach.call(squares, function(item){
		item.innerText = "";
	})
	xTurn = true
	winnerBox.style.display = "none";
	nextTurn.innerText = "X plays first."
	board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	// Play thunder sound
	var sound = new Audio("sounds/thunder.wav");
	sound.volume = 0.5;
	sound.play();
}


// Adds click handlers to allow human players to claim squares.
Array.prototype.forEach.call(squares, function(item){
	item.addEventListener("click", humanMove);
})

// Adds a click handler to pass AI selections into the script.
var aiSelect = document.getElementsByClassName("ai");
Array.prototype.forEach.call(aiSelect, function(item){
	item.addEventListener("click", function(){
		reset();
		aiEasy = document.querySelector("input[value='easy']").checked;
		aiHard = document.querySelector("input[value='hard']").checked;
	});
})

// Adds a click handler for reset button.
document.getElementById("reset").addEventListener("click", reset);

// Play the theme song!
var song = new Audio("sounds/MainTheme.mp3");
song.play();

// After 10 seconds, fade it out.
setTimeout(function() {
	var turnDown = setInterval(function() {
		song.volume = song.volume - 0.05;
	}, 100);
	setTimeout(function(){
		clearInterval(turnDown);
		song.pause();
	}, 2000);
}, 8500);
