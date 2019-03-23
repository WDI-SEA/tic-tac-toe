console.log('Hello frontend');
// A user should be able to click on different squares to make a move.
// Every click will alternate between marking an X and O
// Upon marking of an individual cell, use JavaScript to add a class to each cell to display the separate players.
// A cell should not be able to be replayed once marked.
// You should not be able to click remaining empty cells after the game is over.
// Add a reset button that will clear the contents of the board.
// Display a message to indicate which turn is about to be played.
// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
var nick, jack
// establish who's turn it is
var whosTurn = "nick"
// identify squares on game board
var squares = document.querySelectorAll('#game-board .box')
// 
function addMarkListenersToSquares() {
	// add event listener to each square
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener('click', markSquare);
	}
}

function removeMarkListenersFromSquares() {

}

function markSquare() {
	// Determine appropriate marker and add it to the clicked square
	var nickImage = document.createElement('img');
	nickImage.src = "./img/Nick.png";
	var jackImage = document.createElement('img');
	jackImage.src = "./img/Jack.png";
	if (whosTurn === "nick") {
		this.appendChild(nickImage)
	} else if (whosTurn === "jack") {
		this.appendChild(jackImage)
	}
	this.removeEventListener('click', markSquare);
	changeTurn();
}

function changeTurn() {
	if (whosTurn === "nick") {
		whosTurn = "jack";
	} else if (whosTurn === "jack") {
		whosTurn = "nick";
	}
}

addMarkListenersToSquares()