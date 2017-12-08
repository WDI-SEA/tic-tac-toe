document.getElementById("imgs").style.visibility = "hidden";

var turn = 0;

var winningCombos =[
	[1, 2, 3],
	[1, 4, 7],
	[1, 5, 9],
	[2, 5, 8],
	[3, 5, 7],
	[3, 6, 9],
	[4, 5, 6],
	[7, 8, 9]
];
var currentBoard = [];

var buttons = document.getElementsByTagName("button");

var afterClick = function(){
	turn += 1;

	if((turn+1) % 2 === 0){
		this.innerHTML="<img src='img/imagex.png'/>";
		this.removeEventListener("click", afterClick);
		this.style.backgroundColor = "#4F0C24";
		currentBoard[this.id] = "x";
		checkWinner();
	} else {
		this.innerHTML="<img src='img/imageo.jpg'/>";
		this.removeEventListener("click", afterClick);
		this.style.backgroundColor = "#F7D86B"
		currentBoard[this.id] = "o";
		checkWinner();
	}
	if(turn === 8){
		alert("draw!");
		gameOver();
	}
}
var checkWinner = function(){
	winningCombos.forEach(function(winningCombo){
		 if((currentBoard[winningCombo[0]] === 
		 	currentBoard[winningCombo[1]]) && (currentBoard[winningCombo[0]] 
		 	=== currentBoard[winningCombo[2]]) && currentBoard[winningCombo[0]]!==undefined
	 	){
		 	alert("You won!!");
		 	gameOver();
		 }
	});
}

var cellClick =
	document.querySelectorAll("button");
	for (var i = 0; i < cellClick.length; i++){
	cellClick[i].addEventListener("click", afterClick);
}


var gameOver = function(){
	document.querySelectorAll("button");
		for (var i = 0; i < cellClick.length; i++){
		cellClick[i].removeEventListener("click", afterClick);
	}
}
