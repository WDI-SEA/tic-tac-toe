document.addEventListener('DOMContentLoaded', function() {

var box1 = document.getElementById("b1");
var box2 = document.getElementById("b2");
var box3 = document.getElementById("b3");
var box4 = document.getElementById("b4");
var box5 = document.getElementById("b5");
var box6 = document.getElementById("b6");
var box7 = document.getElementById("b7");
var box8 = document.getElementById("b8");
var box9 = document.getElementById("b9");
var allBoxes = document.getElementsByClassName("boxes");
var resBut = document.getElementById("resetButton");
var player1 = "X";
var player2 = "O";
var firstPlayer = player1;
var nextPlayer = player1;
var winNotify = document.getElementById("win");
var nextPlayerNotif = document.getElementById("nextUp");
//select the next player
var selectPlayer = function () {
	if (winNotify.value === "X Wins!" || winNotify.value === "O Wins!") {
	} else if (nextPlayer === "X") {
		nextPlayer = player2;
		nextPlayerNotif.textContent = "O Is Next";
	} else {
		nextPlayer = player1;
		nextPlayerNotif.textContent = "X Is Next";
	}
}
//place letters on board
var changeLetter1 = function () {
	if (box1.textContent==='X' || box1.textContent==='O') {
	} else {
		box1.textContent = nextPlayer;
		selectPlayer();
		didSomeoneWin();
	}
}
var changeLetter2 = function () {
	if (box2.textContent==='X' || box2.textContent==='O') {
	} else {
		box2.textContent = nextPlayer;
		selectPlayer();
		didSomeoneWin();
	}
}
var changeLetter3 = function () {
	if (box3.textContent==='X' || box3.textContent==='O') {
	} else {
		box3.textContent = nextPlayer;
		selectPlayer();
		didSomeoneWin();
	}
}
var changeLetter4 = function () {
	if (box4.textContent==='X' || box4.textContent==='O') {
	} else {
		box4.textContent = nextPlayer;
		selectPlayer();
		didSomeoneWin();
	}
}
var changeLetter5 = function () {
	if (box5.textContent==='X' || box5.textContent==='O') {
	} else {
		box5.textContent = nextPlayer;
		selectPlayer();
		didSomeoneWin();
	}
}
var changeLetter6 = function () {
	if (box6.textContent==='X' || box6.textContent==='O') {
	} else {
		box6.textContent = nextPlayer;
		selectPlayer();
		didSomeoneWin();
	}
}
var changeLetter7 = function () {
	if (box7.textContent==='X' || box7.textContent==='O') {
	} else {
		box7.textContent = nextPlayer;
		selectPlayer();
		didSomeoneWin();
	}
}
var changeLetter8 = function () {
	if (box8.textContent==='X' || box8.textContent==='O') {
	} else {
		box8.textContent = nextPlayer;
		selectPlayer();
		didSomeoneWin();
	}
}
var changeLetter9 = function () {
	if (box9.textContent==='X' || box9.textContent==='O') {
	} else {
		box9.textContent = nextPlayer;
		selectPlayer();
		didSomeoneWin();
	}
}
var resetBoard = function () {
	nextPlayer = player1;
	box1.textContent = "-";
	box2.textContent = "-";
	box3.textContent = "-";
	box4.textContent = "-";
	box5.textContent = "-";
	box6.textContent = "-";
	box7.textContent = "-";
	box8.textContent = "-";
	box9.textContent = "-";
	winNotify.textContent = "No Winner Yet";
	nextPlayerNotif.textContent = "X Is Next";
	document.getElementById("winnerWinner").style.animationDuration="";
	document.getElementById("winnerWinner").style.animationIterationCount="";
	// allBoxes.textContent = "-";  // CAN NOT GET THIS TO WORK, I THINK IT HAS SOMETHING TO DO W/ CALLING A CLASS
}
var blinkScreen = function() {
		document.getElementById("win").style.color = "red";
		nextPlayerNotif.textContent = "We Have a Winner!";
		document.getElementById("nextUp").style.color = "red";
		document.getElementById("winnerWinner").style.AnimationName="winBlink";
		document.getElementById("winnerWinner").style.animationDuration="1s";
		document.getElementById("winnerWinner").style.animationIterationCount="infinite";
}
//verify winner
var didSomeoneWin = function () {
	if (box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X") {
		winNotify.textContent = "X Wins!"
		blinkScreen();
		} else if (box4.textContent === "X" && box5.textContent === "X" && box6.textContent === "X") {
			winNotify.textContent = "X Wins!"
			blinkScreen();
		} else if (box7.textContent === "X" && box8.textContent === "X" && box9.textContent === "X") {
			winNotify.textContent = "X Wins!"
			blinkScreen();
		} else if (box1.textContent === "O" && box2.textContent === "O" && box3.textContent === "O") {
			winNotify.textContent = "O Wins!"
			blinkScreen();
		} else if (box4.textContent === "O" && box5.textContent === "O" && box6.textContent === "O") {
			winNotify.textContent = "O Wins!"
			blinkScreen();
		} else if (box7.textContent === "O" && box8.textContent === "O" && box9.textContent === "O") {
			winNotify.textContent = "O Wins!"
			blinkScreen();
		} else if (box1.textContent === "X" && box4.textContent === "X" && box7.textContent === "X") {
			winNotify.textContent = "X Wins!"
			blinkScreen();
		} else if (box2.textContent === "X" && box5.textContent === "X" && box8.textContent === "X") {
			winNotify.textContent = "X Wins!"
			blinkScreen();
		} else if (box3.textContent === "X" && box6.textContent === "X" && box9.textContent === "X") {
			winNotify.textContent = "X Wins!"
			blinkScreen();
		} else if (box1.textContent === "O" && box4.textContent === "O" && box7.textContent === "O") {
			winNotify.textContent = "O Wins!"
			blinkScreen();
		} else if (box2.textContent === "O" && box5.textContent === "O" && box8.textContent === "O") {
			winNotify.textContent = "O Wins!"
			blinkScreen();
		} else if (box3.textContent === "O" && box6.textContent === "O" && box9.textContent === "O") {
			winNotify.textContent = "O Wins!"
			blinkScreen();
		} else if (box1.textContent === "X" && box5.textContent === "X" && box9.textContent === "X") {
			winNotify.textContent = "X Wins!"
			blinkScreen();
		} else if (box7.textContent === "X" && box5.textContent === "X" && box3.textContent === "X") {
			winNotify.textContent = "X Wins!"
			blinkScreen();
		} else if (box1.textContent === "O" && box5.textContent === "O" && box9.textContent === "O") {
			winNotify.textContent = "O Wins!"
			blinkScreen();
		} else if (box7.textContent === "O" && box5.textContent === "O" && box3.textContent === "O") {
			winNotify.textContent = "O Wins!"
			blinkScreen();
	} else {
		winNotify.textContent = "No Winner Yet";
	}
}
//event listeners to run functions
box1.addEventListener("click", changeLetter1);
box2.addEventListener("click", changeLetter2);
box3.addEventListener("click", changeLetter3);
box4.addEventListener("click", changeLetter4);
box5.addEventListener("click", changeLetter5);
box6.addEventListener("click", changeLetter6);
box7.addEventListener("click", changeLetter7);
box8.addEventListener("click", changeLetter8);
box9.addEventListener("click", changeLetter9);
resBut.addEventListener("click", resetBoard);
})