console.log('Javascript running!');
var turns = [];

var objectX = {
  b1: false,
  b2: false,
  b3: false,
  b4: false,
  b6: false,
  b7: false,
  b8: false,
  b9: false
};

var objectO = {
  b1: false,
  b2: false,
  b3: false,
  b4: false,
  b6: false,
  b7: false,
  b8: false,
  b9: false
};

var reset = function() {
	document.getElementsByClassName('box').remove('img');
}

//checks the objects for a win of X
var checkForWinX = function() {
	if (objectX.b1 && objectX.b2 && objectX.b3) {
		alert('X wins')
	} else if (objectX.b4 && objectX.b5 && objectX.b6) {
		alert('X wins')
	} else if (objectX.b7 && objectX.b8 && objectX.b9) {
		alert('X wins')
	} else if (objectX.b1 && objectX.b4 && objectX.b7) {
		alert('X wins')
	} else if (objectX.b2 && objectX.b5 && objectX.b8) {
		alert('X wins')
	} else if (objectX.b3 && objectX.b6 && objectX.b9) {
		alert('X wins')
	} else if (objectX.b1 && objectX.b5 && objectX.b9) {
		alert('X wins')
	} else if (objectX.b3 && objectX.b5 && objectX.b7) {
		alert('X wins')
	} else if (turns.length === 9) {
		alert("Draw")
	}
}

//checks for win of O
var checkForWinO = function() {
	if (objectO.b1 && objectO.b2 && objectO.b3) {
		alert('O wins')
	} else if (objectO.b4 && objectO.b5 && objectO.b6) {
		alert('O wins')
	} else if (objectO.b7 && objectO.b8 && objectO.b9) {
		alert('O wins')
	} else if (objectO.b1 && objectO.b4 && objectO.b7) {
		alert('O wins')
	} else if (objectO.b2 && objectO.b5 && objectO.b8) {
		alert('O wins')
	} else if (objectO.b3 && objectO.b6 && objectO.b9) {
		alert('O wins')
	} else if (objectO.b1 && objectO.b5 && objectO.b9) {
		alert('O wins')
	} else if (objectO.b3 && objectO.b5 && objectO.b7)  {
		alert('O wins')
	} else if (turns.length === 9) {
		alert("Draw")
	}
}

//checks whos turn it is x or o and plays a turn. add 1 to the turns array to see whose turn it is next. 
//changes the box it the appropriate object to true so you can check match
var turn = function() {
	if (!objectX[this.children[0].id] && !objectO[this.children[0].id]) {
		console.log("the click worked");
		if (turns.length % 2 == 0) {
			this.children[0].src = "img/x.png";
			turns.push(1);
			objectX[this.children[0].id] = true;
			document.getElementById('playerturn').innerHTML = "Turn: Player 2. O";
			checkForWinX();
		} else {
			this.children[0].src = "img/o.png";
			turns.push(1);
			objectO[this.children[0].id] = true;
			document.getElementById('playerturn').innerHTML = "Turn: Player 1. X";
			checkForWinO();
		}
	}

}

var boxes = document.getElementsByClassName('box');
for (let i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener('click', turn);
}

var reset = document.getElementById('reset');
	reset.addEventListener('click', reset);

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
  });



