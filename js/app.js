document.addEventListener('DOMContentLoaded', function() {


var boxset = [];

var box1 = document.getElementById("b1");
var box2 = document.getElementById("b2");
var box3 = document.getElementById("b3");
var box4 = document.getElementById("b4");
var box5 = document.getElementById("b5");
var box6 = document.getElementById("b6");
var box7 = document.getElementById("b7");
var box8 = document.getElementById("b8");
var box9 = document.getElementById("b9");
var player1 = "X";
var player2 = "O";
var firstPlayer = player1;
var nextPlayer = player1;
var marker = "X";

var selectPlayer = function () {
	if (nextPlayer === "X") {
		nextPlayer = player2;
		console.log("player 2 is next")
	} else {
		nextPlayer = player1;
		console.log("player 1 is next")
	}
}

var changeLetter1 = function () {
	if (box1.textContent==='X' || box1.textContent==='O') {
		console.log("this box has been played");
	} else {
		box1.textContent = nextPlayer;
		selectPlayer();
		// if (marker = "X") {
		// 	marker = "O";
		// } else {
		// 	marker = "X";
		console.log("box1 hit and selectPlayer function run")
	}
}
var changeLetter2 = function () {
	if (box2.textContent==='X' || box2.textContent==='O') {
		console.log("this box has been played");
	} else {
		box2.textContent = nextPlayer;
		selectPlayer();
		// if (marker = "X") {
		// 	marker = "O";
		// } else {
		// 	marker = "X";
		console.log("box2 hit and selectPlayer function run")
	}
}
var changeLetter3 = function () {
	if (box3.textContent==='X' || box3.textContent==='O') {
		console.log("this box has been played");
	} else {
		box3.textContent = nextPlayer;
		selectPlayer();
		// if (marker = "X") {
		// 	marker = "O";
		// } else {
		// 	marker = "X";
		console.log("box3 hit and selectPlayer function run")
	}
}
var changeLetter4 = function () {
	if (box4.textContent==='X' || box4.textContent==='O') {
		console.log("this box has been played");
	} else {
		box4.textContent = nextPlayer;
		selectPlayer();
		// if (marker = "X") {
		// 	marker = "O";
		// } else {
		// 	marker = "X";
		console.log("box4 hit and selectPlayer function run")
	}
}
var changeLetter5 = function () {
	if (box5.textContent==='X' || box5.textContent==='O') {
		console.log("this box has been played");
	} else {
		box5.textContent = nextPlayer;
		selectPlayer();
		// if (marker = "X") {
		// 	marker = "O";
		// } else {
		// 	marker = "X";
		console.log("box5 hit and selectPlayer function run")
	}
}
var changeLetter6 = function () {
	if (box6.textContent==='X' || box6.textContent==='O') {
		console.log("this box has been played");
	} else {
		box6.textContent = nextPlayer;
		selectPlayer();
		// if (marker = "X") {
		// 	marker = "O";
		// } else {
		// 	marker = "X";
		console.log("box6 hit and selectPlayer function run")
	}
}
var changeLetter7 = function () {
	if (box7.textContent==='X' || box7.textContent==='O') {
		console.log("this box has been played");
	} else {
		box7.textContent = nextPlayer;
		selectPlayer();
		// if (marker = "X") {
		// 	marker = "O";
		// } else {
		// 	marker = "X";
		console.log("box7 hit and selectPlayer function run")
	}
}
var changeLetter8 = function () {
	if (box8.textContent==='X' || box8.textContent==='O') {
		console.log("this box has been played");
	} else {
		box8.textContent = nextPlayer;
		selectPlayer();
		// if (marker = "X") {
		// 	marker = "O";
		// } else {
		// 	marker = "X";
		console.log("box8 hit and selectPlayer function run")
	}
}
var changeLetter9 = function () {
	if (box9.textContent==='X' || box9.textContent==='O') {
		console.log("this box has been played");
	} else {
		box9.textContent = nextPlayer;
		selectPlayer();
		// if (marker = "X") {
		// 	marker = "O";
		// } else {
		// 	marker = "X";
		console.log("box9 hit and selectPlayer function run")
	}
}

// var changeLetter2 = function () {
// 	if (box2.value === undefined) {
// 		box2.textContent = marker;
// 		if (marker = "X") {
// 			marker = "O";
// 		} else {
// 			marker = "X";
// 		}
// 		console.log("box2")
// 	} else {
// 		return "this box has been played, idiot"
// 		alert("this box has been played, idiot")
// 		console.log("this box has been played")
// 	}
// }

// var changeLetter3 = function () {
// 	if (box3.value === undefined) {
// 		box3.textContent = marker;
// 		if (marker = "X") {
// 			marker = "O";
// 		} else {
// 			marker = "X";
// 		}
// 		console.log("box3")
// 	} else {
// 		return "this box has been played, idiot"
// 		alert("this box has been played, idiot")
// 		console.log("this box has been played")
// 	}
// }

// var changeLetter4 = function () {
// 	if (box4.value === undefined) {
// 		box4.textContent = marker;
// 		if (marker = "X") {
// 			marker = "O";
// 		} else {
// 			marker = "X";
// 		}
// 		console.log("box4")
// 	} else {
// 		return "this box has been played, idiot"
// 		alert("this box has been played, idiot")
// 		console.log("this box has been played")
// 	}
// }

// var changeLetter5 = function () {
// 	if (box5.value === undefined) {
// 		box5.textContent = marker;
// 		if (marker = "X") {
// 			marker = "O";
// 		} else {
// 			marker = "X";
// 		}
// 		console.log("box5")
// 	} else {
// 		return "this box has been played, idiot"
// 		alert("this box has been played, idiot")
// 		console.log("this box has been played")
// 	}
// }

// var changeLetter6 = function () {
// 	if (box6.value === undefined) {
// 		box6.textContent = marker;
// 		if (marker = "X") {
// 			marker = "O";
// 		} else {
// 			marker = "X";
// 		}
// 		console.log("box6")
// 	} else {
// 		return "this box has been played, idiot"
// 		alert("this box has been played, idiot")
// 		console.log("this box has been played")
// 	}
// }

// var changeLetter7 = function () {
// 	if (box7.value === undefined) {
// 		box7.textContent = marker;
// 		if (marker = "X") {
// 			marker = "O";
// 		} else {
// 			marker = "X";
// 		}
// 		console.log("box7")
// 	} else {
// 		return "this box has been played, idiot"
// 		alert("this box has been played, idiot")
// 		console.log("this box has been played")
// 	}
// }

// var changeLetter8 = function () {
// 	if (box8.value === undefined) {
// 		box8.textContent = marker;
// 		if (marker = "X") {
// 			marker = "O";
// 		} else {
// 			marker = "X";
// 		}
// 		console.log("box8")
// 	} else {
// 		return "this box has been played, idiot"
// 		alert("this box has been played, idiot")
// 		console.log("this box has been played")
// 	}
// }

// var changeLetter9 = function () {
// 	if (box9.value === undefined) {
// 		box9.textContent = marker;
// 		if (marker = "X") {
// 			marker = "O";
// 		} else {
// 			marker = "X";
// 		}
// 		console.log("box9")
// 	} else {
// 		return "this box has been played, idiot"
// 		alert("this box has been played, idiot")
// 		console.log("this box has been played")
// 	}
// }


// var changeLetter = function (whichBox) { //maybe delete both of these
// 	if (this.value/* maybe .value*/ == "") {  //maybe empty string
// 		whichBox.textContent = marker;
// 		if (marker = "x") {
// 			marker = "O";
// 		} else {
// 			marker = "X";
// 		}
// 		console.log("this function works")
// 	} else {
// 		return "this box has been played, idiot"
// 		alert("this box has been played, idiot")
// 		console.log("this box has been played")
// 	}
// }



box1.addEventListener("click", changeLetter1);
box2.addEventListener("click", changeLetter2);
box3.addEventListener("click", changeLetter3);
box4.addEventListener("click", changeLetter4);
box5.addEventListener("click", changeLetter5);
box6.addEventListener("click", changeLetter6);
box7.addEventListener("click", changeLetter7);
box8.addEventListener("click", changeLetter8);
box9.addEventListener("click", changeLetter9);
// document.addEventListener("click", selectPlayer);


})