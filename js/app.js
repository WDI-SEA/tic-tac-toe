document.addEventListener('DOMContentLoaded', function() {

var players = 2;
var X = "X";
var O = "O";
var nextPlayer = X;
var turn = 1;
var xPoints = 0;
var oPoints = 0;
var squares = document.getElementsByClassName("square");

// Turn function
function player(){
	document.getElementsByClassName("square");
	if(turn % 2 === 0){
		document.textContent= "X";
		// nextPlayer = O;
		turn = 2;
		console.log("O is next");
	}else{
		document.textContent = "O";
		// nextPlayer = X;
		turn = 2;
		console.log("X is next");
	}
}

// X, O function
function gamePiece(){
	console.log(this);
	/// use this.style or whatever
	if(squares.textContent === "X" || squares.textContent === "O"){
		console.log("this square has been played");
		squares.push('X').xPLayed;
		squares.push('O').oPlayed;
	} else{
		squares[0].textContent = nextPlayer;
		player();
		console.log("placed");
	}

	win();
} 
	
var xPlayed = []
var oPlayed = []

// win function
function win(){
	if(gamePiece === 3){
		alert("You win!");
	};
	switch(true){
		case squares[0], squares[1], squares[2]:
			break;
		case squares[0], squares[3], squares[6]:
			break;
		case squares[1], squares[4], squares[7]:
			break;
		case squares[2], squares[5], squares[8]:
			break;
		case squares[0], squares[4], squares[8]:
			break;
		case squares[3], squares[4], squares[5]:
			break;
		case squares[6], squares[7], squares[8]:
			break;
		case squares[2], squares[4], squares[6]:
			break;
	}
}

// create board function
function createBoard(){
	document.getElementById("board");
}

//reset function
function reset(){
	document.getElementById("board").reset();
	console.log("reset");
	reset();
}


////find a way to make this function apply to every member of array
squares[0].addEventListener("click", gamePiece);


// createBoard();

})