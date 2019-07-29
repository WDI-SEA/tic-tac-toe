document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('reset').addEventListener('click', getWinner);
});

/*function start () {
	// Welcome message
	document.getElementById('message').textContent = "Welcome to Tic Tac Toe! Let's get started! Player 1, click the square in which you would like to start";
	
	// Change button text to "restart game"
	this.textContent = 'Restart Game';

	// Set up event listeners for boxes
	//removeBoxListeners();
	//addBoxListeners();
}*/

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
		console.log("WIN!");
		youWon(box1, box2, box3);
	}
	else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
		console.log("WIN!");
		youWon(box4, box5, box6);
	}
	else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
		console.log("WIN!");
		youWon(box7, box8, box9);
	}
	else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
		console.log("WIN!");
		youWon(box1, box4, box7);
	}
	else if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
		console.log("WIN!");
		youWon(box2, box5, box8);
	}
	else if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
		console.log("WIN!");
		youWon(box3, box6, box9);
	}
	else if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
		console.log("WIN!");
		youWon(box1, box5, box9);
	}
	else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
		console.log("WIN!");
		youWon(box3, box5, box7);
	}
}

// set event onclick
var boxes = document.querySelectorAll("#main div"), X_or_O = 0;

for(var i = 0; i < boxes.length; i++){
	boxes[i].onclick = function() {
		document.getElementById('reset').textContent = 'Play again?';
		// inhitbits player from clicking on box twice
		if(this.innerHTML !== "X" && this.innerHTML !== "O") {
			if (X_or_O%2 == 0) {
				console.log(X_or_O);
				this.innerHTML = "X";
				message.innerHTML = "O turn now";
				getWinner();
				X_or_O += 1;
			}
			else{
				console.log(X_or_O);
				this.innerHTML = "O";
				message.innerHTML = "X turn now";
				getWinner();
				X_or_O += 1;
			} 
		}
	}
}

function youWon(b1, b2, b3){
	b1.classList.add("WIN");
	b2.classList.add("WIN");
	b3.classList.add("WIN");
	message.innerHTML=b1.innerHTML + " WON! CONGRATS!";
}

// restart the game
function restartGame () {
	reset.onclick = function(){
		for(var i = 0; i < boxes.length; i++){
        	boxes[i].innerHTML = "";
        	message.innerHTML = "Player one, please select a spot on the grid";
        	// Change button text to "restart game"
			reset.textContent = 'Restart Game';
		}
	}
}

