

var turn = 0;
var board = {
	boxZero: null,
	boxOne: null,
	boxTwo: null,
	boxThree: null,
	boxFour: null,
	boxFive: null,
	boxSix: null,
	boxSeven: null,
	boxEight: null,
}

document.getElementById('0').addEventListener("click", function(){

	document.getElementById('0').style.backgroundColor = "#45D0FF";

	if(document.getElementById("0").innerHTML == ""){
		if(turn % 2 === 0){
			document.getElementById("0").innerHTML = "X";
			board.boxZero = "X";
			turn ++;
		} else if (turn % 2 !== 0){
			document.getElementById("0").innerHTML = "O";
			board.boxZero = "O";
			turn ++;
		}
	} else {
		alert("This space is already taken");
	}

	checkTurn(turn);
	checkWin();
});

document.getElementById("1").addEventListener("click", function(){

	document.getElementById('1').style.backgroundColor = "#ECA1FF";

	if(document.getElementById("1").innerHTML == ""){
		if(turn % 2 === 0){
			document.getElementById("1").innerHTML = "X";
			board.boxOne = "X";
			turn ++;
		} else if (turn % 2 !== 0){
			document.getElementById("1").innerHTML = "O";
			board.boxOne = "O";
			turn ++;
		}
	} else {
		alert("This space is already taken");
	}

	checkTurn(turn);
	checkWin();
});

document.getElementById("2").addEventListener("click", function(){

	document.getElementById('2').style.backgroundColor = "#A1FFDE";

	if(document.getElementById("2").innerHTML == ""){
		if(turn % 2 === 0){
			document.getElementById("2").innerHTML = "X";
			board.boxTwo = "X";
			turn ++;
		} else if (turn % 2 !== 0){
			document.getElementById("2").innerHTML = "O";
			board.boxTwo = "O";
			turn ++;
		}
	} else {
		alert("This space is already taken");
	}

	checkTurn(turn);
	checkWin();
});

document.getElementById("3").addEventListener("click", function(){

	document.getElementById('3').style.backgroundColor = "#EDE84C";

	if(document.getElementById("3").innerHTML == ""){
		if(turn % 2 === 0){
			document.getElementById("3").innerHTML = "X";
			board.boxThree = "X";
			turn ++;
		} else if (turn % 2 !== 0){
			document.getElementById("3").innerHTML = "O";
			board.boxThree = "O";
			turn ++;
		}
	} else {
		alert("This space is already taken");
	}

	checkTurn(turn);
	checkWin();
});

document.getElementById("4").addEventListener("click", function(){

	document.getElementById('4').style.backgroundColor = "#4CEDD0";

	if(document.getElementById("4").innerHTML == ""){
		if(turn % 2 === 0){
			document.getElementById("4").innerHTML = "X";
			board.boxFour = "X";
			turn ++;
		} else if (turn % 2 !== 0){
			document.getElementById("4").innerHTML = "O";
			board.boxFour = "O";
			turn ++;
		}
	} else {
		alert("This space is already taken");
	}

	checkTurn(turn);
	checkWin();
});

document.getElementById("5").addEventListener("click", function(){

	document.getElementById('5').style.backgroundColor = "#9590AD";

	if(document.getElementById("5").innerHTML == ""){
		if(turn % 2 === 0){
			document.getElementById("5").innerHTML = "X";
			board.boxFive = "X";
			turn ++;
		} else if (turn % 2 !== 0){
			document.getElementById("5").innerHTML = "O";
			board.boxFive = "O";
			turn ++;
		}
	} else {
		alert("This space is already taken");
	}

	checkTurn(turn);
	checkWin();
});

document.getElementById("6").addEventListener("click", function(){

	document.getElementById('6').style.backgroundColor = "#F2855A";

	if(document.getElementById("6").innerHTML == ""){
		if(turn % 2 === 0){
			document.getElementById("6").innerHTML = "X";
			board.boxSix = "X";
			turn ++;
		} else if (turn % 2 !== 0){
			document.getElementById("6").innerHTML = "O";
			board.boxSix = "O";
			turn ++;
		}
	} else {
		alert("This space is already taken");
	}

	checkTurn(turn);
	checkWin();
});

document.getElementById("7").addEventListener("click", function(){

	document.getElementById('7').style.backgroundColor = "#F2C25A";

	if(document.getElementById("7").innerHTML == ""){
		if(turn % 2 === 0){
			document.getElementById("7").innerHTML = "X";
			board.boxSeven = "X";
			turn ++;
		} else if (turn % 2 !== 0){
			document.getElementById("7").innerHTML = "O";
			board.boxSeven = "O";
			turn ++;
		}
	} else {
		alert("This space is already taken");
	}

	checkTurn(turn);
	checkWin();
});

document.getElementById("8").addEventListener("click", function(){

	document.getElementById('8').style.backgroundColor = "#FFAEA8";

	if(document.getElementById("8").innerHTML == ""){
		if(turn % 2 === 0){
			document.getElementById("8").innerHTML = "X";
			board.boxEight = "X";
			turn ++;
		} else if (turn % 2 !== 0){
			document.getElementById("8").innerHTML = "O";
			board.boxEight = "O";
			turn ++;
		} 
	} else {
		alert("This space is already taken");
	}

	checkTurn(turn);
	checkWin();
});

function checkWin(){
	// rows
	if(board.boxZero === "X" && board.boxOne === "X" && board.boxTwo === "X"){
		console.log("X wins");
		document.querySelector('.player').innerHTML = "X Wins !";
		clearPlayer();
	}

	if(board.boxZero === "O" && board.boxOne === "O" && board.boxTwo === "O"){
		console.log("O wins");
		document.querySelector('.player').innerHTML = "O Wins !";
		clearPlayer();
	}

	if(board.boxThree === "X" && board.boxFour === "X" && board.boxFive === "X"){
		console.log("X wins");
		document.querySelector('.player').innerHTML = "X Wins !";
		clearPlayer();
	}

	if(board.boxThree === "O" && board.boxFour === "O" && board.boxFive === "O"){
		console.log("O wins");
		document.querySelector('.player').innerHTML = "O Wins !";
		clearPlayer();
	}

	if(board.boxSix === "X" && board.boxSeven === "X" && board.boxEight === "X"){
		console.log("X wins");
		document.querySelector('.player').innerHTML = "X Wins !";
		clearPlayer();
	}	
	
	if(board.boxSix === "O" && board.boxSeven === "O" && board.boxEight === "O"){
		console.log("O wins");
		document.querySelector('.player').innerHTML = "O Wins !";
		clearPlayer();
	}

	// columns
	if(board.boxZero === "X" && board.boxThree=== "X" && board.boxSix === "X"){
		console.log("X wins");
		document.querySelector('.player').innerHTML = "X Wins !";
		clearPlayer();
	}

	if(board.boxZero === "O" && board.boxThree=== "O" && board.boxSix === "O"){
		console.log("O wins");
		document.querySelector('.player').innerHTML = "O Wins !";
		clearPlayer();
	}

	if(board.boxOne === "X" && board.boxFour === "X" && board.boxSeven === "X"){
		console.log("X wins");
		document.querySelector('.player').innerHTML = "X Wins !";
		clearPlayer();
	}

	if(board.boxOne === "O" && board.boxFour === "O" && board.boxSeven === "O"){
		console.log("O wins");
		document.querySelector('.player').innerHTML = "O Wins !";
		clearPlayer();
	}

	if(board.boxTwo === "X" && board.boxFive === "X" && board.boxEight === "X"){
		console.log("X wins");
		document.querySelector('.player').innerHTML = "X Wins !";
		clearPlayer();
	}

	if(board.boxTwo === "O" && board.boxFive === "O" && board.boxEight === "O"){
		console.log("O wins");
		document.querySelector('.player').innerHTML = "O Wins !";
		clearPlayer();
	}

	if(board.boxZero === "X" && board.boxFour === "X" && board.boxEight === "X"){
		console.log("X wins");
		document.querySelector('.player').innerHTML = "X Wins !";
		clearPlayer();
	}

	if(board.boxZero === "O" && board.boxFour === "O" && board.boxEight === "O"){
		console.log("O wins");
		document.querySelector('.player').innerHTML = "O Wins !";
		clearPlayer();
	}

	if(board.boxTwo === "X" && board.boxFour === "X" && board.boxSix === "X"){
		console.log("X wins");
		document.querySelector('.player').innerHTML = "X Wins !";
		clearPlayer();
	}

	if(board.boxTwo === "O" && board.boxFour === "O" && board.boxSix === "O"){
		console.log("O wins");
		document.querySelector('.player').innerHTML = "O Wins !";
		clearPlayer();
	}
}


document.getElementById("resetButton").addEventListener("click", function(){ 
	location.reload();
});

function checkTurn(turn){
	console.log(turn);
	if(turn % 2 === 0){
		document.querySelector('.playerTurn').innerHTML = "X's Turn";
	} else if(turn % 2 !== 0){
		document.querySelector('.playerTurn').innerHTML = "O's Turn";
	}
}

function clearPlayer(){
	document.querySelector('.playerTurn').innerHTML = "Thanks for Playing!";
}


