document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('reset').addEventListener('click', restartGame);
});

var winner = false;

function getWinner () {
	var box1 = document.getElementById("box1"),
		box2 = document.getElementById("box2"),
		box3 = document.getElementById("box3"),
		box4 = document.getElementById("box4"),
		box5 = document.getElementById("box5"),
		box6 = document.getElementById("box6"),
		box7 = document.getElementById("box7"),
		box8 = document.getElementById("box8"),
		box9 = document.getElementById("box9");

	// Get all possibilities and display winning message

	if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
		message.innerHTML=box1.innerHTML + " WON! CONGRATS!";
		winner = true;
		console.log(winner);
	}
	else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
		message.innerHTML=box4.innerHTML + " WON! CONGRATS!";
		winner = true;
		console.log(winner);
	}
	else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
		message.innerHTML=box7.innerHTML + " WON! CONGRATS!";
		winner = true;
		console.log(winner);
	}
	else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
		message.innerHTML=box1.innerHTML + " WON! CONGRATS!";
		winner = true;
		console.log(winner);
	}
	else if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
		message.innerHTML=box2.innerHTML + " WON! CONGRATS!";
		winner = true;
		console.log(winner);
	}
	else if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
		message.innerHTML=box3.innerHTML + " WON! CONGRATS!";
		winner = true;
		console.log(winner);
	}
	else if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
		message.innerHTML=box1.innerHTML + " WON! CONGRATS!";
		winner = true;
		console.log(winner);
	}
	else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
		message.innerHTML=box3.innerHTML + " WON! CONGRATS!";
		winner = true;
		console.log(winner);
	} else if (X_or_O === 9 && winner == false) {
		message.innerHTML= "ITS A DRAW! Play again?";
		console.log("ITS A DRAW");
	}
}

// set event onclick
var boxes = document.querySelectorAll("#main div"), X_or_O = 0;

for(var i = 0; i < boxes.length; i++){
	boxes[i].onclick = function() {
		document.getElementById('reset').textContent = 'Play again?';
		// inhitbits player from clicking on box twice
		if(this.innerHTML !== "X" && this.innerHTML !== "O" && winner == false) {
			if (X_or_O%2 == 0) {
				console.log(X_or_O);
				this.innerHTML = "X";
				message.innerHTML = "O turn now";
				X_or_O += 1;
				getWinner();
			} 
			else{
				console.log(X_or_O);
				this.innerHTML = "O";
				message.innerHTML = "X turn now";
				X_or_O += 1;
				getWinner();
			} 
		}
	}
}


// restart the game
function restartGame () {
	for(var i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = "";
        message.innerHTML = "Player one, please select a spot on the grid";
        // Change button text to "restart game"
		reset.textContent = 'Restart Game';
		winner = false;
		X_or_O = 0;
	}
}

