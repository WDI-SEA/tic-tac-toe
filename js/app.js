console.log('Hello frontend');

document.addEventListener('DOMContentLoaded', function() {

	var boxset = [];
	var s1=document.getElementById ("square1");
	var s2=document.getElementById ("square2");
	var s3=document.getElementById ("square3");
	var s4=document.getElementById ("square4");
	var s5=document.getElementById ("square5");
	var s6=document.getElementById ("square6");
	var s7=document.getElementById ("square7");
	var s8=document.getElementById ("square8");
	var s9=document.getElementById ("square9");
	var player1 = "X";
	var player2 = "O";
	var firstPlayer = player1;

	var nextPlayer = player1;
	var marker = "x";
	var button =document.getElementById("button");
	console.log(button);
	var nextPlayerNotif = document.getElementById ("nextUp");
	var winNotify =document.getElementById ("win");

	var selectPlayer = function () {
		if (winNotify.value === "X wins!" || winNotify.value === "O wins!") {
		} else if (nextPlayer ==="X") {
			nextPlayer = player2;
			nextPlayerNotif.textContent = "O is Next";
		} else {
			nextPlayer =player1;
			nextPlayerNotif.textContent = "X is Next";
		}
	}

	
	var changeLetter1 = function () {
	    if (s1.textContent === 'X' ||
	        s1.textContent === 'O') {
	        	console.log("this box has been played")
	        } else {
	        	s1.textContent=nextPlayer;
	        	selectPlayer();
	        	checkWinner ();
	        	console.log("s1 hit and selectPlayer function run")
	    }
	}
	var changeLetter2 = function () {
	    if (s2.textContent === 'X' ||
	        s2.textContent === 'O') {
	        	console.log("this box has been played")
	        } else {
	        	s2.textContent=nextPlayer;
	        	selectPlayer();
	        	checkWinner ();
	        	console.log("s1 hit and selectPlayer function run")
	    }
	}
	var changeLetter3 = function () {
	    if (s3.textContent === 'X' ||
	        s3.textContent === 'O') {
	        	console.log("this box has been played")
	        } else {
	        	s3.textContent=nextPlayer;
	        	selectPlayer();
	        	checkWinner ();
	        	console.log("s1 hit and selectPlayer function run")
	    }
	}
	var changeLetter4 = function () {
		    if (s4.textContent === 'X' ||
		        s4.textContent === 'O') {
		        	console.log("this box has been played")
		        } else {
		        	s4.textContent=nextPlayer;
		        	selectPlayer();
		        	checkWinner ();
		        	console.log("s1 hit and selectPlayer function run")
		    }
		}
	var changeLetter5 = function () {
		    if (s5.textContent === 'X' ||
		        s5.textContent === 'O') {
		        	console.log("this box has been played")
		        } else {
		        	s5.textContent=nextPlayer;
		        	selectPlayer();
		        	checkWinner ();
		        	console.log("s1 hit and selectPlayer function run")
		    }
		}
	var changeLetter6 = function () {
		    if (s6.textContent === 'X' ||
		        s6.textContent === 'O') {
		        	console.log("this box has been played")
		        } else {
		        	s6.textContent=nextPlayer;
		        	selectPlayer();
		        	checkWinner ();
		        	console.log("s1 hit and selectPlayer function run")
		    }
		}
	var changeLetter7 = function () {
		    if (s7.textContent === 'X' ||
		        s7.textContent === 'O') {
		        	console.log("this box has been played")
		        } else {
		        	s7.textContent=nextPlayer;
		        	selectPlayer();
		        	checkWinner ();
		        	console.log("s1 hit and selectPlayer function run")
		    }
		}
	var changeLetter8 = function () {
		    if (s8.textContent === 'X' ||
		        s8.textContent === 'O') {
		        	console.log("this box has been played")
		        } else {
		        	s8.textContent=nextPlayer;
		        	selectPlayer();
		        	checkWinner ();
		        	console.log("s1 hit and selectPlayer function run")
		    }
		}
	var changeLetter9 = function () {
		    if (s9.textContent === 'X' ||
		        s9.textContent === 'O') {
		        	console.log("this box has been played")
		        } else {
		        	s9.textContent=nextPlayer;
		        	selectPlayer();
		        	checkWinner ();
		        	console.log("s1 hit and selectPlayer function run")
		    }
	}
	var displayimage = function (){
		document.getElementById ("winner");
		nextPlayerNotif. textContent ="Looks Like We Have a Winner!";
		documentgetElementById("nextUp").style.color = "pink";
		document.getElementById("winnerWinner").style.AnimationName="winBlink";
	}

	function reset() {
		nextPlayer=player1;
		console.log('Im in the reset function')
		s1.textContent="";
		s2.textContent="";
		s3.textContent="";
		s4.textContent="";
		s5.textContent="";
		s6.textContent="";
		s7.textContent="";
		s8.textContent="";
		s9.textContent="";
		nextPlayerNotif.textContent="X is Next!";
	}

	/*function checkForTie () {
		   (s1.textContent === "X" || "O") && 
		   (s2.textContent === "X" || "O") &&
		   (s3.textContent === "X" || "O") &&
		   (s4.textContent === "X" || "O") &&
		   (s5.textContent === "X" || "O") &&
		   (s6.textContent === "X" || "O") &&
		   (s7.textContent === "X" || "O") && 
		   (s8.textContent === "X" || "O") && 
		   (s9.textContent === "X" || "O");
		   setTimeout(function(){
		   	reset ();
		}
	}*/

	var checkWinner = function() {
		console.log('ill be thankful')
		if (s1.textContent === "X" && s2.textContent === "X" && s3.textContent === "X") {
			winNotify.textContent="X Wins!";
			setTimeout(function(){
				reset ();
			}, 3000);
		} else if (s4.textContent === "X" && s5.textContent === "X" && s6.textContent === "X") {
			winNotify.textContent="X Wins!"
			setTimeout(function(){
				reset ();
			}, 3000);
		} else if (s7.textContent === "X" && s8.textContent === "X" && s9.textContent === "X") {
			winNotify.textContent="X Wins!"
			setTimeout(function(){
				reset ();
			}, 3000);
		} else if (s1.textContent === "O" && s2.textContent === "O" && s3.textContent === "O") {
			winNotify.textContent="0 Wins!"
			setTimeout(function(){
				reset ();
			}, 3000);
		} else if (s4.textContent === "O" && s5.textContent === "O" && s6.textContent === "O") {
			winNotify.textContent="0 Wins!"
			setTimeout(function(){
				reset ();
			}, 3000);
		} else if (s7.textContent === "O" && s8.textContent === "O" && s9.textContent === "O") {
			winNotify.textContent="0 Wins!"
			setTimeout(function(){
				reset ();
			}, 3000);
		} else if (s7.textContent === "X" && s8.textContent === "X" && s9.textContent === "X") {
			winNotify.textContent="X Wins!"
			setTimeout(function(){
				reset ();
			}, 3000);
		} else if (s1.textContent === "X" && s4.textContent === "X" && s7.textContent === "X") {
			winNotify.textContent="X Wins!"
			setTimeout(function(){
				reset ();
			}, 3000);
		} else if (s2.textContent === "X" && s5.textContent === "X" && s8.textContent === "X") {
			winNotify.textContent="X Wins!"
			setTimeout(function(){
				reset ();
			}, 3000);
		} else if (s7.textContent === "O" && s8.textContent === "O" && s9.textContent === "O") {
			winNotify.textContent="0 Wins!"
			setTimeout(function(){
				reset ();
			}, 3000);
		} else if (s1.textContent === "O" && s4.textContent === "O" && s7.textContent === "O") {
			winNotify.textContent="0 Wins!"
			setTimeout(function(){
				reset ();
			}, 3000);
		} else if (s2.textContent === "O" && s5.textContent === "O" && s8.textContent === "O") {
			winNotify.textContent="0 Wins!"
			setTimeout(function(){
				reset ();
			}, 3000);
		} else if (s3.textContent === "X" && s6.textContent === "X" && s9.textContent === "X") {
			winNotify.textContent="X Wins!"
			setTimeout(function(){
				reset ();
			}, 3000);
		} else if (s1.textContent === "X" && s5.textContent === "X" && s9.textContent === "X") {
			winNotify.textContent="X Wins!"
			setTimeout(function(){
				reset ();
			}, 3000);
		} else if (s7.textContent === "X" && s5.textContent === "X" && s3.textContent === "X") {
			winNotify.textContent="X Wins!"
			setTimeout(function(){
				reset ();
			}, 3000);
		} else if (s3.textContent === "O" && s6.textContent === "O" && s9.textContent === "O") {
			winNotify.textContent="0 Wins!"
			setTimeout(function(){
				reset ();
			}, 3000);
		} else if (s1.textContent === "O" && s5.textContent === "O" && s9.textContent === "O") {
			winNotify.textContent="0 Wins!"
			setTimeout(function(){
				reset ();
			}, 3000);
		} else if (s7.textContent === "O" && s5.textContent === "O" && s3.textContent === "O") {
			winNotify.textContent="0 Wins!"
			setTimeout(function(){
				reset ();
			}, 3000);
		} else {
			winNotify.textContent = "No Winner Yet";
		}
	}
	

	button.addEventListener("click",reset);

	s1.addEventListener("click", changeLetter1);
	s2.addEventListener("click", changeLetter2);
	s3.addEventListener("click", changeLetter3);
	s4.addEventListener("click", changeLetter4);
	s5.addEventListener("click", changeLetter5);
	s6.addEventListener("click", changeLetter6);
	s7.addEventListener("click", changeLetter7);
	s8.addEventListener("click", changeLetter8);
	s9.addEventListener("click", changeLetter9);

})









