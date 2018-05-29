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




//checks whos turn it is x or o and plays a turn. add 1 to the turns array to see whose turn it is next. 
//changes the box it the appropriate object to true so you can check match
var turn = function() {
	if (turns.length % 2 == 0) {
	var xTurn = function() {
		this.src = "/Users/nikotsafos/code/unit1/tic-tac-toe/img/x.png";
		turns.push(1);
		objectX.this = true
		checkForWinX();
	}}

	else {
		var oTurn = function() {
			this.src = "/Users/nikotsafos/code/unit1/tic-tac-toe/img/o.png";
			turns.push(1);
			objectO.this = true
			checkForWinO();
		}}}

addEventListener('click', turn());



//checks the objects for a win of X
var checkForWinX = function() {
if (objectX.b1 && objectX.b2 && objectX.b3 == true) {
	alert('you win')
} else if (objectX.b4 && objectX.b5 && objectX.b6 == true) {
	alert('you win')
} else if (objectX.b7 && objectX.b8 && objectX.b9 == true) {
	alert('you win')
} else if (objectX.b1 && objectX.b4 && objectX.b7 == true) {
	alert('you win')
} else if (objectX.b2 && objectX.b5 && objectX.b8 == true) {
	alert('you win')
} else if (objectX.b3 && objectX.b6 && objectX.b9 == true) {
	alert('you win')
} else if (objectX.b1 && objectX.b5 && objectX.b9 == true) {
	alert('you win')
} else if (objectX.b3 && objectX.b5 && objectX.b7 == true) {
	alert('you win')
} else if (turns.length === 9) {
	alert("Draw")
}
}

//checks for win of O
var checkForWinO = function() {
if (objectO.b1 && objectO.b2 && objectO.b3 == true) {
	alert('you win')
} else if (objectO.b4 && objectO.b5 && objectO.b6 == true) {
	alert('you win')
} else if (objectO.b7 && objectO.b8 && objectO.b9 == true) {
	alert('you win')
} else if (objectO.b1 && objectO.b4 && objectO.b7 == true) {
	alert('you win')
} else if (objectO.b2 && objectO.b5 && objectO.b8 == true) {
	alert('you win')
} else if (objectO.b3 && objectO.b6 && objectO.b9 == true) {
	alert('you win')
} else if (objectO.b1 && objectO.b5 && objectO.b9 == true) {
	alert('you win')
} else if (objectO.b3 && objectO.b5 && objectO.b7 == true) {
	alert('you win')
} else if (turns.length === 9) {
	alert("Draw")
}
}



document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
  });



