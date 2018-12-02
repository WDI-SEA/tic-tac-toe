document.addEventListener("DOMContentLoaded", function(){
document.getElementById("reset").addEventListener("click", playGame);
playGame();
});

var initialBoard;
var moves = 0;
var xMarks = [];
var oMarks = [];

const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

var cells = document.querySelectorAll('.cell');

function playGame(){
	document.querySelector(".endGame").style.display = "none";
	initialBoard = Array.from(Array(9).keys());
	for(i = 0; i < cells.length; i++){
	cells[i].innerText = '';
	// cells[i].style.removeProperty("background-color");
	cells[i].addEventListener("click", turnClick)
	}	
}

function turnClick(event){
	if (event.target.innerText.length === 0){
		if (moves % 2 ===0){
			xMarks.push(event.target.id);
			console.log(xMarks);
			document.getElementById(event.target.id).innerText = "X";
			document.getElementById(event.target.id).style.background = "green";
		}
		else{
			oMarks.push(event.target.id);
			console.log(oMarks);
			document.getElementById(event.target.id).innerText = "O";
			document.getElementById(event.target.id).style.background = "blue";
		}
	}
	else{
		alert("You already Clicked!");
	}
	moves++;
	winCheck(xMarks);
	winCheck(oMarks);
	if (moves === 9){
		alert("It's a Draw! Reset the board to play again");
	}
}

// function turnClick(event){	
// 	if (player1 == true){
// 	document.getElementById(event.target.id).innerText = "O"; //target.id refers cells[i]
// // console.log("this is what the event's grabbing", event.target); //for checking
// 	player1 = 0; 
// 	} else {
// 		document.getElementById(event.target.id).innerText = "X";
// 		player1 = 1;
// 	}
// 		moves++;
// }

function winCheck(oMarks, xMarks, winCombos){
		for(var i = 0; i < winCombos.length; i++){
				var oWins = 0;
				var xWins = 0;
					 for(var j = 0; j < winCombos[i].length; j++){
			 		// var innerVal = winCombos[i][j];
			 			if(winCombos[i].indexOf(oMarks) != -1){
			 				oWins++;
			 			}
			 			if(winCombos[i].indexOf(xMarks) != -1){
			 				xWins++
			 			}
			 			if(oWins === 3){
			 				alert("O wins!");
			 			}
			 			if(xWins === 3){
			 				alert("X wins!");
			 			}
			 			else{
			 				playGame();
			 			}
			 			}
			 		}
	}

	
function stopGame(messageContent){
	//different message pops ("win"/"lost")
	document.getElementById("message").textContent = messageContent;
}

function winTheGame(){
	stopGame("You won!");
}

function tieTheGame(){
	stopGame("You both suck!")
}

function loseTheGame(){
	stopGame("Boo, You lost!");
}