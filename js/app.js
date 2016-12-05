document.addEventListener("DOMContentLoaded", function() {

	var xTurn = true;
	var board = document.getElementById("board");
	var sizzle = document.getElementById("sizzle");
	var baconTurn = document.getElementById("bacon-turn");
	var eggTurn = document.getElementById("egg-turn");
	var upArrow = document.getElementById("up-arrow");
	var downArrow = document.getElementById("down-arrow");

	for (var i = 0; i < board.children.length; i++) {
	  board.children[i].addEventListener("click", clickCell);
	}

	function clickCell() {
		if (document.getElementById(this.id).classList.contains("empty")) {
			if (xTurn == true) {
				var xImg = document.createElement("img");
				xImg.src = "img/bacon-x.png";
				document.getElementById(this.id).append(xImg);
				xTurn = false;
			} else {
				var xImg = document.createElement("img");
				xImg.src = "img/egg-o.png";
				document.getElementById(this.id).append(xImg);
				xTurn = true;
			}
			document.getElementById(this.id).setAttribute("class", "chosen");
			sizzle.play();
		}
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


});