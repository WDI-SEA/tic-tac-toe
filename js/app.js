document.addEventListener("DOMContentLoaded", function() {

	var turnX = true;
	var squares = document.getElementsByClassName("square");
	var reset = document.getElementById("reset");
	var board = document.getElementById("board");

	//variable used to display image when somebody wins
	var winner = document.createElement("img");
	winner.src ="img/YouWin.png";
	winner.classList.add("win");

	//assigns a click event to each spot on the board
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", markSpace);
	}

	function markSpace() {
		if (document.getElementById(this.id).classList.contains("empty")) {
			if (turnX) {
				document.getElementById(this.id).style.background = "url(img/ticX.jpg)";
				document.getElementById(this.id).classList.remove("empty");
				document.getElementById(this.id).classList.add("X");
				turnX = false;
				checkWin();
			}
			else {
				document.getElementById(this.id).style.background = "url(img/ticO.jpg)";
				document.getElementById(this.id).classList.remove("empty");
				document.getElementById(this.id).classList.add("O");
				turnX = true;
				checkWin();
			}
		}
	};

	function checkWin() {
		switch(true) {
			case (document.getElementById("one").classList.contains("X") && document.getElementById("two").classList.contains("X") && document.getElementById("three").classList.contains("X")):
			case (document.getElementById("one").classList.contains("X") && document.getElementById("five").classList.contains("X") && document.getElementById("nine").classList.contains("X")):
			case (document.getElementById("one").classList.contains("X") && document.getElementById("four").classList.contains("X") && document.getElementById("seven").classList.contains("X")):
			case (document.getElementById("two").classList.contains("X") && document.getElementById("five").classList.contains("X") && document.getElementById("eight").classList.contains("X")):
			case (document.getElementById("three").classList.contains("X") && document.getElementById("six").classList.contains("X") && document.getElementById("nine").classList.contains("X")):
			case (document.getElementById("three").classList.contains("X") && document.getElementById("five").classList.contains("X") && document.getElementById("seven").classList.contains("X")):
			case (document.getElementById("four").classList.contains("X") && document.getElementById("five").classList.contains("X") && document.getElementById("six").classList.contains("X")):
			case (document.getElementById("seven").classList.contains("X") && document.getElementById("eight").classList.contains("X") && document.getElementById("nine").classList.contains("X")):

			case (document.getElementById("one").classList.contains("O") && document.getElementById("two").classList.contains("O") && document.getElementById("three").classList.contains("O")):
			case (document.getElementById("one").classList.contains("O") && document.getElementById("five").classList.contains("O") && document.getElementById("nine").classList.contains("O")):
			case (document.getElementById("one").classList.contains("O") && document.getElementById("four").classList.contains("O") && document.getElementById("seven").classList.contains("O")):
			case (document.getElementById("two").classList.contains("O") && document.getElementById("five").classList.contains("O") && document.getElementById("eight").classList.contains("O")):
			case (document.getElementById("three").classList.contains("O") && document.getElementById("six").classList.contains("O") && document.getElementById("nine").classList.contains("O")):
			case (document.getElementById("three").classList.contains("O") && document.getElementById("five").classList.contains("O") && document.getElementById("seven").classList.contains("O")):
			case (document.getElementById("four").classList.contains("O") && document.getElementById("five").classList.contains("O") && document.getElementById("six").classList.contains("O")):
			case (document.getElementById("seven").classList.contains("O") && document.getElementById("eight").classList.contains("O") && document.getElementById("nine").classList.contains("O")):
			console.log("Winner!");
			document.getElementById("board").appendChild(winner);
		}
	}

	//adds click event to reset button
	reset.addEventListener("click", resetBoard);

	function resetBoard() {
		turnX = true;
		clearSpaces();
		resetClasses();
		board.removeChild(winner);
	}
	//changes each space back to the blank orange background
	function clearSpaces() {
		for (var i = 0; i < document.getElementsByClassName("square").length; i++) {
			document.getElementsByClassName("square")[i].style.background = "lightblue";
		}
	}
	//removes X & O classes and adds empty class so that all spaces are clickable again
	function resetClasses() {
		for (var i = 0; i <document.getElementsByClassName("square").length; i++) {
			document.getElementsByClassName("square")[i].classList.remove("X");
			document.getElementsByClassName("square")[i].classList.remove("O");
			document.getElementsByClassName("square")[i].classList.add("empty");
		}
	}
});