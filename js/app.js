var aiTurnBuffer
var whosTurn
var nickScore = 0
var jackScore = 0
var aiStarted = false
// identify squares on game board
var squares = document.querySelectorAll('#game-board .box')
// 
function randomizeStart() {
	if (Math.random() > .5) {
		whosTurn = "nick";
	} else {
		whosTurn = "jack";
	}
	document.getElementById('whos-turn').textContent = whosTurn + " starts this round";
}

function addMarkListenersToSquares() {
	// add event listener to each square
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener('click', markSquare);
	}
}

function removeMarkListenersFromSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].removeEventListener('click', markSquare);
	}
}

function addListenersToVsCpu() {
	// Makes the "I have no friends" button clickable
	document.getElementById('ai-human').addEventListener('click', computerMarkSquare);
}

function removeListenersToVsCpu() {
	document.getElementById('ai-human').removeEventListener('click', computerMarkSquare);	
}

function computerMarkSquare() {
	// Remove "I have no friends" button
	removeListenersToVsCpu()
	document.getElementById('simple-ai').textContent = ""
	// Tell the computer that it's playing after each of my turns
	aiStarted = true
	if (!checkWinCondition()) {
		// Create images
		var nickImage = document.createElement('img');
		nickImage.src = "./img/Nick.png";
		var jackImage = document.createElement('img');
		jackImage.src = "./img/Jack.png";
		// Pick a random square
		var randomSquare = Math.floor(Math.random() * 9)
		// Keep picking a square until you find one that is unmarked
		while (squares[randomSquare].getAttribute('data-marked')) {
			randomSquare = Math.floor(Math.random() * 9)
		}
		// Mark the square for each player and play their sound
		if (whosTurn === "nick") {
			document.getElementById('nick1').play()
			squares[randomSquare].appendChild(nickImage)
			squares[randomSquare].setAttribute('data-marked', "nick")
		} else if (whosTurn === "jack") {
			document.getElementById('jack1').play()	
			squares[randomSquare].appendChild(jackImage)
			squares[randomSquare].setAttribute('data-marked', "jack")
		} 
		// Make the square unclickable
		squares[randomSquare].removeEventListener('click', markSquare);
		// Check for win
		if (checkWinCondition() === "nick") {
			nickWin();
		} else if (checkWinCondition() === "jack") {
			jackWin();
		} else if (checkWinCondition() === "draw") {
			draw();
		}
		// If the game is over , display "Start Over" text and reset score text
		if (checkWinCondition()) {
			document.getElementById('reset').textContent = "Start Over";
			document.getElementById('reset').addEventListener('click', reset);
			document.getElementById('reset-score').textContent = "Reset Score";
			document.getElementById('reset-score').addEventListener('click', resetScore);
			addListenersToVsCpu();
		}
		changeTurn();
	}
}

function markSquare() {
	// Create images
	var nickImage = document.createElement('img');
	nickImage.src = "./img/Nick.png";
	var jackImage = document.createElement('img');
	jackImage.src = "./img/Jack.png";
	// Mark the square for each player and play their sound
	if (whosTurn === "nick") {
		document.getElementById('nick1').play()
		this.appendChild(nickImage)
		this.setAttribute('data-marked', "nick")
	} else if (whosTurn === "jack") {
		document.getElementById('jack1').play()
		this.appendChild(jackImage)
		this.setAttribute('data-marked', "jack")
	}
	// Make square unclickable
	this.removeEventListener('click', markSquare);
	// Check for win
	if (checkWinCondition() === "nick") {
		nickWin();
	} else if (checkWinCondition() === "jack") {
		jackWin();
	} else if (checkWinCondition() === "draw") {
		draw();
	}
	// If the game is over , display "Start Over" text and reset score text
	if (checkWinCondition()) {
		document.getElementById('reset').textContent = "Start Over";
		document.getElementById('reset').addEventListener('click', reset);
		document.getElementById('reset-score').textContent = "Reset Score";
		document.getElementById('reset-score').addEventListener('click', resetScore);
		addListenersToVsCpu();

	}
	changeTurn();
	// Tell the computer it's their turn
	if (aiStarted === true) {
		setTimeout(computerMarkSquare, 1800);
	}
	document.getElementById('simple-ai').textContent = "";
}

function checkWinCondition() {
	if (squares[0].getAttribute('data-marked') === "nick" &&
		squares[1].getAttribute('data-marked') === "nick" &&
		squares[2].getAttribute('data-marked') === "nick") {
		return "nick";
	} else if (squares[3].getAttribute('data-marked') === "nick" &&
		squares[4].getAttribute('data-marked') === "nick" &&
		squares[5].getAttribute('data-marked') === "nick") {
		return "nick";
	} else if (squares[6].getAttribute('data-marked') === "nick" &&
		squares[7].getAttribute('data-marked') === "nick" &&
		squares[8].getAttribute('data-marked') === "nick") {
		return "nick";
	} else if (squares[0].getAttribute('data-marked') === "nick" &&
		squares[3].getAttribute('data-marked') === "nick" &&
		squares[6].getAttribute('data-marked') === "nick") {
		return "nick";
	} else if (squares[1].getAttribute('data-marked') === "nick" &&
		squares[4].getAttribute('data-marked') === "nick" &&
		squares[7].getAttribute('data-marked') === "nick") {
		return "nick";
	} else if (squares[2].getAttribute('data-marked') === "nick" &&
		squares[5].getAttribute('data-marked') === "nick" &&
		squares[8].getAttribute('data-marked') === "nick") {
		return "nick";
	} else if (squares[0].getAttribute('data-marked') === "nick" &&
		squares[4].getAttribute('data-marked') === "nick" &&
		squares[8].getAttribute('data-marked') === "nick") {
		return "nick";
	} else if (squares[2].getAttribute('data-marked') === "nick" &&
		squares[4].getAttribute('data-marked') === "nick" &&
		squares[6].getAttribute('data-marked') === "nick") {
		return "nick";
	} else if (squares[0].getAttribute('data-marked') === "jack" &&
		squares[1].getAttribute('data-marked') === "jack" &&
		squares[2].getAttribute('data-marked') === "jack") {
		return "jack";
	} else if (squares[3].getAttribute('data-marked') === "jack" &&
		squares[4].getAttribute('data-marked') === "jack" &&
		squares[5].getAttribute('data-marked') === "jack") {
		return "jack";
	} else if (squares[6].getAttribute('data-marked') === "jack" &&
		squares[7].getAttribute('data-marked') === "jack" &&
		squares[8].getAttribute('data-marked') === "jack") {
		return "jack";
	} else if (squares[0].getAttribute('data-marked') === "jack" &&
		squares[3].getAttribute('data-marked') === "jack" &&
		squares[6].getAttribute('data-marked') === "jack") {
		return "jack";
	} else if (squares[1].getAttribute('data-marked') === "jack" &&
		squares[4].getAttribute('data-marked') === "jack" &&
		squares[7].getAttribute('data-marked') === "jack") {
		return "jack";
	} else if (squares[2].getAttribute('data-marked') === "jack" &&
		squares[5].getAttribute('data-marked') === "jack" &&
		squares[8].getAttribute('data-marked') === "jack") {
		return "jack";
	} else if (squares[0].getAttribute('data-marked') === "jack" &&
		squares[4].getAttribute('data-marked') === "jack" &&
		squares[8].getAttribute('data-marked') === "jack") {
		return "jack";
	} else if (squares[2].getAttribute('data-marked') === "jack" &&
		squares[4].getAttribute('data-marked') === "jack" &&
		squares[6].getAttribute('data-marked') === "jack") {
		return "jack";
	} else if (squares[0].getAttribute('data-marked') &&
		squares[1].getAttribute('data-marked') &&
		squares[2].getAttribute('data-marked') &&
		squares[3].getAttribute('data-marked') &&
		squares[4].getAttribute('data-marked') &&
		squares[5].getAttribute('data-marked') &&
		squares[6].getAttribute('data-marked') &&
		squares[7].getAttribute('data-marked') &&
		squares[8].getAttribute('data-marked')) {
		return "draw";
	}
}

function endGame() {
	removeMarkListenersFromSquares();
}

function nickWin() {
	endGame();
	nickScore++;
	document.getElementById('nick-score').textContent = nickScore;
}

function jackWin() {
	endGame();
	jackScore++;
	document.getElementById('jack-score').textContent = jackScore;
}

function draw() {
	endGame();
}

function changeTurn() {
	// See if any win conditions are met
	if (!checkWinCondition() && whosTurn === "nick") {
		whosTurn = "jack";
	} else if (!checkWinCondition() && whosTurn === "jack") {
		whosTurn = "nick";
	}
	if (checkWinCondition() === "draw") {
		// Change message to draw
		document.getElementById('whos-turn').style.fontSize = "40px"
		document.getElementById('whos-turn').textContent = "You both suck";
	} else if (checkWinCondition()) {
		// Change message to winner's
		document.getElementById('whos-turn').style.fontSize = "50px"
		document.getElementById('whos-turn').textContent = whosTurn + " wins!";
	} else {
		// If the game isn't over, display who's turn it is
		document.getElementById('whos-turn').textContent = whosTurn + "'s move";
	}
} 

function reset() {
	for (var i = 0; i < squares.length; i++) {
		while (squares[i].hasChildNodes()) {
			squares[i].removeChild(squares[i].firstChild)
		}
		squares[i].removeAttribute('data-marked')
		addMarkListenersToSquares()
		document.getElementById('whos-turn').style.fontSize = "30px"
		randomizeStart() 
	}
	document.getElementById('reset').textContent = "";
	document.getElementById('reset').removeEventListener('click', reset);
	document.getElementById('simple-ai').textContent = "I have no friends";
	addListenersToVsCpu();
	aiStarted = false
}

function resetScore() {
	nickScore = 0;
	document.getElementById('nick-score').textContent = "";
	jackScore = 0;
	document.getElementById('jack-score').textContent = "";
	document.getElementById('reset-score').textContent = "";
	document.getElementById('reset-score').removeEventListener('click', resetScore);
}

randomizeStart()
addMarkListenersToSquares()
addListenersToVsCpu()