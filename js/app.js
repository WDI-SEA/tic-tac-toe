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
	    if (s1.textContent === 'X' ||
	        s1.textContent === '0') {
	        	console.log("this box has been played")
	        } else {
	        	s1.textContent=nextPlayer;
	        	selectPlayer();
	        	console.log("s1 hit and selectPlayer function run")
	    }
	}
	var changeLetter2 = function () {
	    if (s2.textContent === 'X' ||
	        s2.textContent === '0') {
	        	console.log("this box has been played")
	        } else {
	        	s2.textContent=nextPlayer;
	        	selectPlayer();
	        	console.log("s1 hit and selectPlayer function run")
	    }
	}
	var changeLetter3 = function () {
	    if (s3.textContent === 'X' ||
	        s3.textContent === '0') {
	        	console.log("this box has been played")
	        } else {
	        	s3.textContent=nextPlayer;
	        	selectPlayer();
	        	console.log("s1 hit and selectPlayer function run")
	    }
	}
	var changeLetter4 = function () {
		    if (s4.textContent === 'X' ||
		        s4.textContent === '0') {
		        	console.log("this box has been played")
		        } else {
		        	s4.textContent=nextPlayer;
		        	selectPlayer();
		        	console.log("s1 hit and selectPlayer function run")
		    }
		}
	var changeLetter5 = function () {
		    if (s5.textContent === 'X' ||
		        s5.textContent === '0') {
		        	console.log("this box has been played")
		        } else {
		        	s5.textContent=nextPlayer;
		        	selectPlayer();
		        	console.log("s1 hit and selectPlayer function run")
		    }
		}
	var changeLetter6 = function () {
		    if (s6.textContent === 'X' ||
		        s6.textContent === '0') {
		        	console.log("this box has been played")
		        } else {
		        	s6.textContent=nextPlayer;
		        	selectPlayer();
		        	console.log("s1 hit and selectPlayer function run")
		    }
		}
	var changeLetter7 = function () {
		    if (s7.textContent === 'X' ||
		        s7.textContent === '0') {
		        	console.log("this box has been played")
		        } else {
		        	s7.textContent=nextPlayer;
		        	selectPlayer();
		        	console.log("s1 hit and selectPlayer function run")
		    }
		}
	var changeLetter8 = function () {
		    if (s8.textContent === 'X' ||
		        s8.textContent === '0') {
		        	console.log("this box has been played")
		        } else {
		        	s8.textContent=nextPlayer;
		        	selectPlayer();
		        	console.log("s1 hit and selectPlayer function run")
		    }
		}
	var changeLetter9 = function () {
		    if (s9.textContent === 'X' ||
		        s9.textContent === '0') {
		        	console.log("this box has been played")
		        } else {
		        	s9.textContent=nextPlayer;
		        	selectPlayer();
		        	console.log("s1 hit and selectPlayer function run")
		    }
	}

	var someoneWon = function () {
		if (s1.textContent === "X" && s2.textContent === "X" && s3.textContent === "X") {
		console.log ("X Wins");
		} else if (s4.textContent === "X" && s5.textContent === "X" && s6.textContent === "X") {
		console.log ("X Wins");
		} else if (s7.textContent === "X" && s8.textContent === "X" && s9.textContent === "X") {
		console.log ("X Wins"); 
		} if (s1.textContent === "O" && s2.textContent === "O" && s3.textContent === "O") {
		console.log ("O Wins");
		} else if (s4.textContent === "O" && s5.textContent === "O" && s6.textContent === "O") {
		console.log ("O Wins");
		} else if (s7.textContent === "O" && s8.textContent === "O" && s9.textContent === "O") {
		console.log ("O Wins");
		console.log ("no winner yet")} 
	}

	/*== return true}; else 
		{return false;
		}

	*/
	/*document.getElementById("input").onclick = function () {
  	document.getElementById(".textContent").innerHTML = ""; // Button not working
	};*/

	        
	        
	


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









