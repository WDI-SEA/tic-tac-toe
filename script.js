var cell_array = document.getElementsByClassName("cell");
var playerOne = true; 


var resetGame = function () {
	for (var i in cell_array) {
		cell_array[i].style.backgroundColor = " ";
		playerOne = true;
	}
}


var clickCell = function() {
	
	if (document.getElementsByClassName("cell").className.indexOf("playedSquare") === -1 ) { //checks to see if square is unplayed 
		
		if (playerOne === true) {
			document.getElementsByClassName("cell").className += " x"; //asigns value of x (powderblue)
			document.getElementsByClassName.className += " playedSquare"; //makes it so a square cannot be changed 
			PlayerOne = false;
		}

		else {
			document.getElementsByClassName("cell").className += " o"; //assigns value of o (gray)
			document.getElementsByClassName.className += " playedSquare"; //makes it so a square can't be played again
			playerOne= true;
		}
	}
}


document.getElementById('reset').addEventListener('click',function(){resetGame()} ); // listens for click on reset button
 

document.getElementById("1").addEventListener('click',function(){clickCell}); //listens for click on board


