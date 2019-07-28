

//interval is used to track turns and winner
var interval = 0;
var positions = document.querySelectorAll("#gameBoard span");



document.getElementById("start").addEventListener("click", function(){
	
	//creating the gameboard
	for (var i = 0; i < positions.length; i++) {
		document.getElementById(`box${i+1}`).textContent = "--";
		if (i % 2 === 0) {
		positions[i].setAttribute("data-piece", "1")
		} else {
			positions[i].setAttribute("data-piece", "2");
		}
	}
	interval = 0;

	//start game, which means allow changes to letters inside the board
	removePositionListeners();
	addPositionListeners();
	this.textContent = "Restart Game";
	whoseTurn();
})


function addPositionListeners(){
	// var positions = document.querySelectorAll("#gameBoard span");


	for (var i = 0; i < positions.length; i++) {
		positions[i].addEventListener("click", placePiece)
	}
}

function placePiece() {
	

	//change the inner text to X or O
	if (interval % 2 === 0) {
		this.textContent = "X";
		this.setAttribute("data-piece", "X");
	} else {
		this.textContent = "O";
		this.setAttribute("data-piece", "O");
	}


	//remove event listener

	this.removeEventListener("click", placePiece);

	//increase the interval
	interval +=1;
	// console.log(interval);

	whoseTurn();

	if (interval >= 5) {
		checkWin();
		if(checkWin()) {
			return winGame();
		}
	}

	if (interval >= 9) {
		draw();
	}

}

function whoseTurn() {

	//used to determine whose turn it is

	if (interval % 2 == 0) {
		document.getElementById("message").textContent = "It is X's turn";
	} else {
		document.getElementById("message").textContent = "It is O's turn";
	}
}

function removePositionListeners() {
	for (var i = 0; i < positions.length; i++) {
		positions[i].removeEventListener("click",placePiece);
	}
}


function checkWin() {
	if (positions[0].getAttribute("data-piece") == positions[1].getAttribute("data-piece") && positions[0].getAttribute("data-piece") == positions[2].getAttribute("data-piece")) {
		return true;
		
	} else if (positions[3].getAttribute("data-piece") == positions[4].getAttribute("data-piece") && positions[3].getAttribute("data-piece") == positions[5].getAttribute("data-piece")) {
		return true;
	} else if (positions[6].getAttribute("data-piece") == positions[7].getAttribute("data-piece") && positions[6].getAttribute("data-piece") == positions[8].getAttribute("data-piece")) {
		return true;
	} else if (positions[0].getAttribute("data-piece") == positions[3].getAttribute("data-piece") && positions[0].getAttribute("data-piece") == positions[6].getAttribute("data-piece")) {
		return true;
	} else if (positions[1].getAttribute("data-piece") == positions[4].getAttribute("data-piece") && positions[1].getAttribute("data-piece") == positions[7].getAttribute("data-piece")) {
		return true;
	} else if (positions[2].getAttribute("data-piece") == positions[5].getAttribute("data-piece") && positions[2].getAttribute("data-piece") == positions[8].getAttribute("data-piece")) {
		return true;
	} else if (positions[0].getAttribute("data-piece") == positions[4].getAttribute("data-piece") && positions[0].getAttribute("data-piece") == positions[8].getAttribute("data-piece")) {
		return true;
	} else if (positions[2].getAttribute("data-piece") == positions[4].getAttribute("data-piece") && positions[2].getAttribute("data-piece") == positions[6].getAttribute("data-piece")) {
		return true;
	} else {
		return false;
	}

}


function draw() {
	endGame();

	//change message to show nobody won
	document.getElementById("message").textContent = "There are no winners in war...";
	
}

function winGame() {

	//remove event listeners so the game can't coninute
	endGame();

	//if statement to determine who won the game
	if (interval % 2 == 0) {
	document.getElementById("message").textContent = "O wins!";
	} else {
		document.getElementById("message").textContent = "X wins!";
	}

}

function endGame(){
	removePositionListeners();
	document.getElementById("start").textContent = "Play again?"
}



