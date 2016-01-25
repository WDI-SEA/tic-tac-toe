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

	//do I have to declare the class of playedSquare somewhere?! 
		
		if (playerOne === true) {
			document.getElementsByClassName("cell").className += " x"; //asigns value of x (powderblue)
			document.getElementsByClassName.("cell").className += " playedSquare"; //makes it so a square cannot be changed 
			document.getElementsByClassName("cell").innerHTML = "X"; //assigns value of x (with text)
			PlayerOne = false;
		}

		else {
			document.getElementsByClassName("cell").className += " o"; //assigns value of o (gray)
			document.getElementsByClassName("cell").className += " playedSquare"; //makes it so a square can't be played again
			document.getElementsByClassName("cell").innerHTML = "o" //assigns value of o (with text)
			playerOne= true;
		}
	}
}


document.getElementById('reset').addEventListener('click',function(){resetGame()} ); // listens for click on reset button
 

document.getElementById("1").addEventListener('click',function(){clickCell}); //listens for click on board
document.getElementById("2").addEventListener('click',function(){clickCell}); //listens for click on board
document.getElementById("3").addEventListener('click',function(){clickCell}); //listens for click on board
document.getElementById("4").addEventListener('click',function(){clickCell}); //listens for click on board
document.getElementById("5").addEventListener('click',function(){clickCell}); //listens for click on board
document.getElementById("6").addEventListener('click',function(){clickCell}); //listens for click on board
document.getElementById("7").addEventListener('click',function(){clickCell}); //listens for click on board
document.getElementById("8").addEventListener('click',function(){clickCell}); //listens for click on board
document.getElementById("9").addEventListener('click',function(){clickCell}); //listens for click on board

// is there a more efficient way to write all this? can you write "1 2 3 .. 9 "in one parantheses ? 

