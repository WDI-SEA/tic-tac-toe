document.addEventListener('DOMContentLoaded', function() {

var player = 1;
var X = "X";
var O = "O";
var nextPlayer = "O";
var turn = 1;
var xPoints = 0;
var oPoints = 0;
var squares = document.getElementsByClassName("square");

// Turn function
var player = function (){
	// document.getElementsByClassName("square");
	if(turn % 2 === 0){
		// document.textContent= "X";
		nextPlayer = "O";
		turn++;
		// console.log("O is next");
	}else{
		// document.textContent = "O";
		nextPlayer = "X";
		turn++;
		// console.log("X is next");
	}
};

//second turn function
// function player(){
// 	if(player === 1){
// 		document.getElementsByClassName("squares").textContent = "X";
// 		player = 0;
// 	}else {
// 		document.getElementsByClassName("squares").textContent = "O";
// 		player = 1;
// 	}
// }


// X, O function
function gamePiece(index){
	/// use this.style or whatever
	if(squares.textContent === "X" || squares.textContent === "O"){
		console.log("this square has been played");
		// squares.push('X').xPLayed;
		// squares.push('O').oPlayed;
	} else{
		squares[index].textContent = nextPlayer;
	}
	player();
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
squares[0].addEventListener("click", function(){
	gamePiece(0);	
});
squares[1].addEventListener("click", function(){
	gamePiece(1);	
});
squares[2].addEventListener("click", function(){
	gamePiece(2);	
});
squares[3].addEventListener("click", function(){
	gamePiece(3);	
});
squares[4].addEventListener("click", function(){
	gamePiece(4);	
});
squares[5].addEventListener("click", function(){
	gamePiece(5);	
});
squares[6].addEventListener("click", function(){
	gamePiece(6);	
});
squares[7].addEventListener("click", function(){
	gamePiece(7);	
});
squares[8].addEventListener("click", function(){
	gamePiece(8);	
});

// createBoard();

})