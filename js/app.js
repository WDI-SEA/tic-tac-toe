document.addEventListener("DOMContentLoaded", function() {

	var xTurn = true;
	var board = document.getElementById("board");
	var sizzle = document.getElementById("sizzle");
	var baconTurn = document.getElementById("bacon-turn");
	var eggTurn = document.getElementById("egg-turn");
	var upArrow = document.getElementById("up-arrow");
	var downArrow = document.getElementById("down-arrow");
	var numChosen = 0;

	// ASSIGNING CLICK ACTIONS TO CELLS

	for (var i = 0; i < board.children.length; i++) {
	 	board.children[i].addEventListener("click", clickCell);
	}

	// CLICKING A CELL

	function clickCell() {
		if (document.getElementById(this.id).classList.contains("empty")) {
			if (xTurn == true) {
				var newImg = document.createElement("img");
				newImg.src = "img/bacon-x.png";
				document.getElementById(this.id).append(newImg);
				xTurn = false;
			} else {
				var newImg = document.createElement("img");
				newImg.src = "img/egg-o.png";
				document.getElementById(this.id).append(newImg);
				xTurn = true;
			}
			document.getElementById(this.id).setAttribute("class", "chosen");
			sizzle.play();
			numChosen += 1;
			console.log(numChosen);
		}

		// Changing turn indicator
		if (xTurn == true) {
			baconTurn.setAttribute("src", "img/bacon_act.svg");
			eggTurn.setAttribute("src", "img/egg_in.svg");
			upArrow.setAttribute("class", "fa fa-caret-up");
			downArrow.setAttribute("class", "fa fa-caret-down inactive");
		} else {
			baconTurn.setAttribute("src", "img/bacon_in.svg");
			eggTurn.setAttribute("src", "img/egg_act.svg");
			upArrow.setAttribute("class", "fa fa-caret-up inactive");
			downArrow.setAttribute("class", "fa fa-caret-down");
		}
	}

	// RESET GAME

	document.getElementById("reset").addEventListener("click", function() {
		for (var i = 0; i < numChosen; i++) {
			document.getElementsByClassName("chosen")[i].removeChild(document.getElementsByClassName("chosen")[i].firstChild);
		}
		for (var i = 0; i < board.children.length; i++) {
			board.children[i].setAttribute("class", "empty");
		}
		xTurn = true;
		numChosen = 0;
	});


});