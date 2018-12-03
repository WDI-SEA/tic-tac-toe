document.addEventListener("DOMContentLoaded", function(){
document.getElementById("reset").addEventListener("click", playGame);
playGame();
});

var initialBoard;
var moves = 0;
var xMarks = [];
var oMarks = [];

const winCombos = [
	["one", "two", "three"],
	["four", "five", "six"],
	["seven", "eight", "nine"],
	["one", "four", "seven"],
	["two", "five", "eight"],
	["three", "six", "nine"],
	["one", "five", "nine"],
	["three", "five", "seven"]
];

var cells = document.querySelectorAll('.cell');


function playGame(){
	// document.querySelector(".endGame").style.display = "none";
	initialBoard = Array.from(Array(9).keys());
	for(i = 0; i < cells.length; i++){
	cells[i].innerText = '';
	cells[i].addEventListener("click", turnClick)
	document.getElementById("reset").addEventListener("click", resetBtn);
	}
}

function turnClick(event){
	if (event.target.innerText.length === 0){
		if (moves % 2 ===0){
			xMarks.push(event.target.id);
			console.log("xMarks", xMarks);
			document.getElementById(event.target.id).innerText = "X";
			document.getElementById(event.target.id).style.background = "#FF85F3";
		}
		else{
			oMarks.push(event.target.id);
			console.log("oMarks", oMarks);
			document.getElementById(event.target.id).innerText = "O";
			document.getElementById(event.target.id).style.background = "#64CFE8";
		}
	}
	else{
		alert("You already Clicked!");
	}
	moves++;
	winCheck(oMarks, xMarks, winCombos);
	if (moves === 9){
		alert("It's a Draw! Reset the board to play again");
	}
}

function winCheck(oMarks, xMarks, winCombos){
		for(var i = 0; i < winCombos.length; i++){
				var oWins = 0;
				var xWins = 0;
					 for(var j = 0; j < winCombos[i].length; j++){
			 			if(oMarks.includes(winCombos[i][j])){
			 				oWins++;
			 				console.log(oWins);
			 			}
			 			if(oWins === 3){
			 				playGame();
			 				alert("O wins!");
			 			}
			 			if(xMarks.includes(winCombos[i][j])){
			 				xWins++;
			 				console.log(xWins);
			 			}	 			
			 			if(xWins === 3){
			 				playGame();
			 				alert("X wins!");
			 			}
			 			}
			 		}
	}

function resetBtn(){
var resetBtn = document.getElementById("reset");
	for(i = 0; i < cells.length; i++){
		cells[i].innerText != '';
		cells[i].style.background = "transparent";
	}
		xMarks = new Array();
		oMarks = new Array();
		moves = 0;
		playGame();
	}

