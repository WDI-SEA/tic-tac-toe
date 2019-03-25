
var aiTurnBuffer
// establish who's turn it is
var whosTurn, startingPlayer
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
	startingPlayer = whosTurn
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
	document.getElementById('ai-human').addEventListener('click', computerMarkSquare);
}

function computerMarkSquare() {
	console.log("I have no friends");
	aiStarted = true
	if (!checkWinCondition()) {
		var randomSquare = Math.floor(Math.random() * 9)
		var nickImage = document.createElement('img');
		nickImage.src = "./img/Nick.png";
		var jackImage = document.createElement('img');
		jackImage.src = "./img/Jack.png";
		while (squares[randomSquare].getAttribute('data-marked')) {
			randomSquare = Math.floor(Math.random() * 9)
		}
		if (whosTurn === "nick") {
			document.getElementById('nick2').play()
			squares[randomSquare].appendChild(nickImage)
			squares[randomSquare].setAttribute('data-marked', "nick")
		} else if (whosTurn === "jack") {
			document.getElementById('jack1').play()	
			squares[randomSquare].appendChild(jackImage)
			squares[randomSquare].setAttribute('data-marked', "jack")
		} 
		squares[randomSquare].removeEventListener('click', markSquare);
		if (checkWinCondition() === "nick") {
			removeMarkListenersFromSquares();
			nickWin();
		} else if (checkWinCondition() === "jack") {
			removeMarkListenersFromSquares();
			jackWin();
		} else if (checkWinCondition() === "draw") {
			draw();
		}
		// Display "Start Over" text
		if (checkWinCondition()) {
			document.getElementById('reset').textContent = "Start Over";
			document.getElementById('reset').addEventListener('click', reset)
			document.getElementById('reset-score').textContent = "Reset Score";
			document.getElementById('reset-score').addEventListener('click', resetScore)
		}
		changeTurn();
	}
}

function markSquare() {
	// Determine appropriate marker and add it to the clicked square
	var nickImage = document.createElement('img');
	nickImage.src = "./img/Nick.png";
	var jackImage = document.createElement('img');
	jackImage.src = "./img/Jack.png";
	if (whosTurn === "nick") {
		document.getElementById('nick2').play()
		this.appendChild(nickImage)
		this.setAttribute('data-marked', "nick")
	} else if (whosTurn === "jack") {
		document.getElementById('jack1').play()
		this.appendChild(jackImage)
		this.setAttribute('data-marked', "jack")
	}
	this.removeEventListener('click', markSquare);
	if (checkWinCondition() === "nick") {
		removeMarkListenersFromSquares();
		nickWin();
	} else if (checkWinCondition() === "jack") {
		removeMarkListenersFromSquares();
		jackWin();
	} else if (checkWinCondition() === "draw") {
		draw();
	}
	// Display "Start Over" text
	if (checkWinCondition()) {
		document.getElementById('reset').textContent = "Start Over";
		document.getElementById('reset').addEventListener('click', reset)
		document.getElementById('reset-score').textContent = "Reset Score";
		document.getElementById('reset-score').addEventListener('click', resetScore)

	}
	changeTurn();
	if (aiStarted === true) {
		setTimeout(computerMarkSquare, 2000)
	}
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

function nickWin() {
	console.log("nickWin");
	nickScore++;
	document.getElementById('nick-score').textContent = nickScore;
}

function jackWin() {
	console.log("jackWin")
	jackScore++;
	document.getElementById('jack-score').textContent = jackScore;
}

function draw() {
	console.log("draw")
}

function changeTurn() {
	if (!checkWinCondition() && whosTurn === "nick") {
		whosTurn = "jack";
	} else if (!checkWinCondition() && whosTurn === "jack") {
		whosTurn = "nick";
	}
	if (checkWinCondition() === "draw") {
		document.getElementById('whos-turn').style.fontSize = "40px"
		document.getElementById('whos-turn').textContent = "You both suck";
	} else if (checkWinCondition()) {
		document.getElementById('whos-turn').style.fontSize = "50px"
		document.getElementById('whos-turn').textContent = whosTurn + " wins!";
	} else {
		document.getElementById('whos-turn').textContent = whosTurn + "'s move";
	}
} 

function reset() {
	console.log("clear")
	for (var i = 0; i < squares.length; i++) {
		// Get the <ul> element with id="myList"
		while (squares[i].hasChildNodes()) {
			squares[i].removeChild(squares[i].firstChild)
		}
		squares[i].removeAttribute('data-marked')
		addMarkListenersToSquares()
		document.getElementById('whos-turn').style.fontSize = "30px"
		randomizeStart() 
	}
	aiStarted= false
}
function resetScore() {
	nickScore = 0;
	document.getElementById('nick-score').textContent = "";
	jackScore = 0;
	document.getElementById('jack-score').textContent = "";
}

randomizeStart()
addMarkListenersToSquares()
addListenersToVsCpu()