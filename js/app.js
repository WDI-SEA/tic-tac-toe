var players = 2;
var X = "X";
var O = "O";
var turn = 0;
var xPoints = 0;
var oPoints = 0;


function player(){
	document.getElementByClassName("square");
	document.addEventListener("click", gamePiece);
	if(turn % 2 === 0){
		document.textContent("X");
	}else{
		document.textContent("O");
	}
}

function gamePiece(){
	document.getElementByClassName("square").textContent = "X";
	document.addEventListener("click",player);
	
}

function win(){
	if(gamePiece === 3){
		alert("You win!");

	}
}

function createBoard(){
	document.getElementById("board");
}

createBoard();