var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var round = 0;
var computerplay = false;

var clickedBox = function (element){
	var turn = "";
	if ((element.classList.contains('blue') === false)&& 
		(element.classList.contains('yellow') === false)){
		if (round % 2 === 0){
			turn = "X";
			round++;
			element.classList.add("blue");
					element.innerHTML = turn;
			buildArray(element);
			winner2();
			if (computerplay === true){
				computerturn();	
		}else {
			turn = "O";
			round++;
			element.classList.add("yellow");
			element.innerHTML = turn;
			buildArray(element);
			winner2();
			if (computerplay === true){
				computerturn();	
			} 
		}
	}
}

};

var computerturn = function(){
	if (round === 1){
		x =compWin();
		if (x === false){
			y = blockMove();
			if (y === false){
				compMove();
				}
			}
			winner2();
		}else if ((round === 3) && (!((document.getElementById("winner").innerHTML === "X is the Winner!"))) &&
		(!(document.getElementById("winner").innerHTML === "O is the Winner!"))){
			x =compWin();
			if (x === false){
				y = blockMove();
				if (y === false){
					compMove();
				}
			}
			winner2();
		} else if ((round === 5) && (!((document.getElementById("winner").innerHTML === "X is the Winner!"))) &&
		(!(document.getElementById("winner").innerHTML === "O is the Winner!"))){
			x =compWin();
			if (x === false){
				y = blockMove();
				if (y === false){
					compMove();
				}
			}
			winner2();	
		} else if ((round === 7) && (!((document.getElementById("winner").innerHTML === "X is the Winner!"))) &&
(!(document.getElementById("winner").innerHTML === "O is the Winner!"))){
			x =compWin();
			if (x === false){
				y = blockMove();
				if (y === false){
					compMove();
			}		
		}
	}
			winner2();
};

var buildArray = function (element){
	if (element === document.getElementById("1")){
		if (document.getElementById("1").innerHTML === "X"){
			board[0][0] = 5;
		} else if (document.getElementById("1").innerHTML === "O"){
			board[0][0] = 3;
		}
	}
	if (element === document.getElementById("2")){
		if (document.getElementById("2").innerHTML === "X"){
			board[0][1] = 5;
		} else if (document.getElementById("2").innerHTML === "O"){
			board[0][1] = 3;
		}
	}
	if (element === document.getElementById("3")){
		if (document.getElementById("3").innerHTML === "X"){
			board[0][2] = 5;
		} else if (document.getElementById("3").innerHTML === "O"){
			board[0][2] = 3;
		}
	}	
	if (element === document.getElementById("4")){
		if (document.getElementById("4").innerHTML === "X"){
			board[1][0] = 5;
		} else if (document.getElementById("4").innerHTML === "O"){
			board[1][0] = 3;
		}
	}
	if (element === document.getElementById("5")){
		if (document.getElementById("5").innerHTML === "X"){
			board[1][1] = 5;
		} else if (document.getElementById("5").innerHTML === "O"){
			board[1][1] = 3;
		}
	}
	if (element === document.getElementById("6")){
		if (document.getElementById("6").innerHTML === "X"){
			board[1][2] = 5;
		} else if (document.getElementById("6").innerHTML === "O"){
			board[1][2] = 3;
		}
	}
	if (element === document.getElementById("7")){
		if (document.getElementById("7").innerHTML === "X"){
			board[2][0] = 5;
		} else if (document.getElementById("7").innerHTML === "O"){
			board[2][0] = 3;
		}
	}
	if (element === document.getElementById("8")){
		if (document.getElementById("8").innerHTML === "X"){
			board[2][1] = 5;
		} else if (document.getElementById("8").innerHTML === "O"){
			board[2][1] = 3;
		}
	}
	if (element === document.getElementById("9")){
		if (document.getElementById("9").innerHTML === "X"){
			board[2][2] = 5;
		} else if (document.getElementById("9").innerHTML === "O"){
			board[2][2] = 3;
		}
	}
	console.log("board is " + board);
	return board;
};

var winner2 = function (){
	//X win
	if (((board[0][0] + board[0][1] + board[0][2]) === 15) ||
		((board[1][0] + board[1][1] + board[1][2]) === 15) ||
		((board[2][0] + board[2][1] + board[2][2]) === 15) ||
		((board[0][0] + board[1][0] + board[2][0]) === 15) ||
		((board[0][1] + board[1][1] + board[2][1]) === 15) ||
		((board[0][2] + board[1][2] + board[2][2]) === 15) ||
		((board[0][0] + board[1][1] + board[2][2]) === 15) ||
		((board[0][2] + board[1][1] + board[2][0]) === 15)){
		document.getElementById("winner").innerHTML = "X is the Winner!";
	// O win
	} else if (((board[0][0] + board[0][1] + board[0][2]) === 9) ||
			((board[1][0] + board[1][1] + board[1][2]) === 9) ||
			((board[2][0] + board[2][1] + board[2][2]) === 9) ||
			((board[0][0] + board[1][0] + board[2][0]) === 9) ||
			((board[0][1] + board[1][1] + board[2][1]) === 9) ||
			((board[0][2] + board[1][2] + board[2][2]) === 9) ||
			((board[0][0] + board[1][1] + board[2][2]) === 9) ||
			((board[0][2] + board[1][1] + board[2][0]) === 9)){
		document.getElementById("winner").innerHTML = "O is the Winner!";
	}
	
	return (board);
};

var compWin = function(){
	// across
	if ((board[0][0] + board[0][1] + board[0][2]) === 6){
		if (board[0][0] === 0){
			idOne.classList.add("yellow");
			idOne.innerHTML = "O";
			round++;
			buildArray(idOne);
			
		} else if (board[0][1] === 0){
			idTwo.classList.add("yellow");
			idTwo.innerHTML = "O";
			round++;
			buildArray(idTwo);
			
		} else if (board[0][2] === 0){
			idThree.classList.add("yellow");
			idThree.innerHTML = "O";
			round++;
			buildArray(idThree);
		
		}
	} else if ((board[1][0] + board[1][1] + board[1][2]) === 6){
		if (board[1][0] === 0){
			idFour.classList.add("yellow");	
			idFour.innerHTML = "O";
			round++;
			buildArray(idFour);
			
		} else if (board[1][1] === 0){
			idFive.classList.add("yellow");
			idFive.innerHTML = "O";
			round++;
			buildArray(idFive);
			
		} else if (board[1][2] === 0){
			idSix.classList.add("yellow");
			idSix.innerHTML = "O";
			round++;
			buildArray(idSix);
			
		}
	} else if ((board[2][0] + board[2][1] + board[2][2]) === 6){
		if (board[2][0] === 0){
			idSeven.classList.add("yellow");
			idSeven.innerHTML = "O";
			round++;
			buildArray(idSeven);
			
		} else if (board[2][1] === 0){
			idEight.classList.add("yellow");
			idEight.innerHTML = "O";
			round++;
			buildArray(idEight);
			
		} else if (board[2][2] === 0){
			idNine.classList.add("yellow");
			idNine.innerHTML = "O";
			round++;
			buildArray(idNine);
			
		}
	//down
	} else if ((board[0][0] + board[1][0] + board[2][0]) === 6){
		if (board[0][0] === 0){
			idOne.classList.add("yellow");
			idOne.innerHTML = "O";
			round++;
			buildArray(idOne);
		} else if (board[1][0] === 0){
			idTwo.classList.add("yellow");
			idTwo.innerHTML = "O";
			round++;
			buildArray(idTwo);
		} else if (board[2][0] === 0){
			idSeven.classList.add("yellow");
			idseven.innerHTML = "O";
			round++;
			buildArray(idSeven);
		}
	}else if ((board[0][1] + board[1][1] + board[2][1]) === 6){
		if (board[0][1] === 0){
			idTwo.classList.add("yellow");
			idTwo.innerHTML = "O";
			round++;
			buildArray(idTwo);
		} else if (board[1][1] === 0){
			idFive.classList.add("yellow");
			idFive.innerHTML = "O";
			round++;
			buildArray(idFive);
		} else if (board[2][1] === 0){
			idEight.classList.add("yellow");
			idEight.innerHTML = "O";
			round++;
			buildArray(idEight);
		}
	}else if ((board[0][2] + board[1][2] + board[2][2]) === 6){
		if (board[0][2] === 0){
			idThree.classList.add("yellow");
			idThree.innerHTML = "O";
			round++;
			buildArray(idThree);
		} else if (board[1][2] === 0){
			idSix.classList.add("yellow");
			idSix.innerHTML = "O";
			round++;
			buildArray(idSix);
		} else if (board[2][2] === 0){
			idNine.classList.add("yellow");
			idNine.innerHTML = "O";
			round++;
			buildArray(idNine);
		}
	//diagonal
	}else if ((board[0][0] + board[1][1] + board[2][2]) === 6){
		if (board[0][0] === 0){
			idOne.classList.add("yellow");
			idOne.innerHTML = "O";
			round++;
			buildArray(idOne);
		} else if (board[1][1] === 0){
			idTwo.classList.add("yellow");
			idTwo.innerHTML = "O";
			round++;
			buildArray(idTwo);
		} else if (board[2][2] === 0){
			idSeven.classList.add("yellow");
			idSeven.innerHTML = "O";
			round++;
			buildArray(idSeven);
		}
	}else if ((board[0][2] + board[1][1] + board[2][0]) === 6){
		if (board[0][2] === 0){
			idThree.classList.add("yellow");
			idThree.innerHTML = "O";
			round++;
			buildArray(idThree);
		} else if (board[1][1] === 0){
			idTwo.classList.add("yellow");
			idTwo.innerHTML = "O";
			round++;
			buildArray(idtwo);
		} else if (board[2][0] === 0){
			idSeven.classList.add("yellow");
			idSeven.innerHTML = "O";
			round++;
			buildArray(idSeven);
		}
	} else {
		return false;
	}
};

var blockMove = function () {
	// across
	if ((board[0][0] + board[0][1] + board[0][2]) === 10){
		if (board[0][0] === 0){
			idOne.classList.add("yellow");
			idOne.innerHTML = "O";
			round++;
			buildArray(idOne);
		} else if (board[0][1] === 0){
			idTwo.classList.add("yellow");
			idTwo.innerHTML = "O";
			round++;
			buildArray(idTwo);
		} else if (board[0][2] === 0){
			idThree.classList.add("yellow");
			idThree.innerHTML = "O";
			round++;
			buildArray(idThree);
		}
	} else if ((board[1][0] + board[1][1] + board[1][2]) === 10){
		if (board[1][0] === 0){
			idFour.classList.add("yellow");
			idFour.innerHTML = "O";
			round++;
			buildArray(idFour);
		} else if (board[1][1] === 0){
			idFive.classList.add("yellow");
			idFive.innerHTML = "O";
			round++;
			buildArray(idFive);
		} else if (board[1][2] === 0){
			idSix.classList.add("yellow");
			idSix.innerHTML = "O";
			round++;
			buildArray(idSix);
		}
	} else if ((board[2][0] + board[2][1] + board[2][2]) === 10){
		if (board[2][0] === 0){
			idSeven.classList.add("yellow");
			idseven.innerHTML = "O";
			round++;
			buildArray(idSeven);
		} else if (board[2][1] === 0){
			idEight.classList.add("yellow");
			idEight.innerHTML = "O";
			round++;
			buildArray(idEight);
		} else if (board[2][2] === 0){
			idNine.classList.add("yellow");
			idNine.innerHTML = "O";
			round++;
			buildArray(idNine);
		}
	//down
	} else if ((board[0][0] + board[1][0] + board[2][0]) === 10){
		if (board[0][0] === 0){
			idOne.classList.add("yellow");
			idOne.innerHTML = "O";
			round++;
			buildArray(idOne);
		} else if (board[1][0] === 0){
			idTwo.classList.add("yellow");
			idTwo.innerHTML = "O";
			round++;
			buildArray(idTwo);
		} else if (board[2][0] === 0){
			idSeven.classList.add("yellow");
			idSeven.innerHTML = "O";
			round++;
			buildArray(idSeven);
		}
	}else if ((board[0][1] + board[1][1] + board[2][1]) === 10){
		if (board[0][1] === 0){
			idTwo.classList.add("yellow");
			idTwo.innerHTML = "O";
			round++;
			buildArray(idTwo);
		} else if (board[1][1] === 0){
			idFive.classList.add("yellow");
			idFive.innerHTML = "O";
			round++;
			buildArray(idFive);
		} else if (board[2][1] === 0){
			idEight.classList.add("yellow");
			idEight.innerHTML = "O";
			round++;
			buildArray(idEight);
		}
	}else if ((board[0][2] + board[1][2] + board[2][2]) === 10){
		if (board[0][2] === 0){
			idThree.classList.add("yellow");
			idThree.innerHTML = "O";
			round++;
			buildArray(idThree);
		} else if (board[1][2] === 0){
			idSix.classList.add("yellow");
			idSix.innerHTML = "O";
			round++;
			buildArray(idSix);
		} else if (board[2][2] === 0){
			idNine.classList.add("yellow");
			idNine.innerHTML = "O";
			round++;
			buildArray(idNine);
		}
	//diagonal
	}else if ((board[0][0] + board[1][1] + board[2][2]) === 10){
		if (board[0][0] === 0){
			idOne.classList.add("yellow");
			idOne.innerHTML = "O";
			round++;
			buildArray(idOne);
		} else if (board[1][1] === 0){
			idTwo.classList.add("yellow");
			idTwo.innerHTML = "O";
			round++;
			buildArray(idTwo);
		} else if (board[2][2] === 0){
			idSeven.classList.add("yellow");
			idSeven.innerHTML = "O";
			round++;
			buildArray(idSeven);
		}
	}else if ((board[0][2] + board[1][1] + board[2][0]) === 10){
		if (board[0][2] === 0){
			idThree.classList.add("yellow");
			idThree.innerHTML = "O";
			round++;
			buildArray(idThree);
		} else if (board[1][1] === 0){
			idTwo.classList.add("yellow");
			idTwo.innerHTML = "O";
			round++;
			buildArray(idTwo);
		} else if (board[2][0] === 0){
			idSeven.classList.add("yellow");
			idSeven.innerHTML = "O";
			round++;
			buildArray(idSeven);
		}
	} else {
		return false;
	}
};

var compMove = function (){
	if (board[1][1] === 0){
		idFive.classList.add("yellow");
		idFive.innerHTML = "O";
		round++;
		buildArray(idFive);
	} else if (board[0][2] === 0){
		idThree.classList.add("yellow");
		idThree.innerHTML = "O";
		round++;
		buildArray(idThree);
	}else if (board[2][2] === 0){
		idNine.classList.add("yellow");
		idNine.innerHTML = "O";
		round++;
		buildArray(idNine);
	}else if (board[2][0] === 0){
		idSeven.classList.add("yellow");
		idSeven.innerHTML = "O";
		round++;
		buildArray(idSeven);
	}
};
var idOne = document.getElementById("1");
var idTwo = document.getElementById("2");
var idThree = document.getElementById("3");
var idFour = document.getElementById("4");
var idFive = document.getElementById("5");
var idSix = document.getElementById("6");
var idSeven = document.getElementById("7");
var idEight = document.getElementById("8");
var idNine = document.getElementById("9");
var idTen = document.getElementById("winner");

idOne.addEventListener("click", function (){clickedBox(idOne);});
idTwo.addEventListener("click", function (){clickedBox(idTwo);})
idThree.addEventListener("click", function (){clickedBox(idThree);});
idFour.addEventListener("click", function (){clickedBox(idFour);});
idFive.addEventListener("click", function (){clickedBox(idFive);});
idSix.addEventListener("click", function (){clickedBox(idSix);});
idSeven.addEventListener("click", function (){clickedBox(idSeven);});
idEight.addEventListener("click", function (){clickedBox(idEight);});
idNine.addEventListener("click", function (){clickedBox(idNine);});


document.getElementById("computer").addEventListener("click", function(){
	computerplay = true;
});

document.getElementById("clear").addEventListener("click", function() {
	round = 0;
	board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
	computerplay = false;
	document.getElementById('winner').innerHTML = '';
	var clicked = document.querySelectorAll('span');
	for (var i = 0; i < clicked.length; i++){
		clicked[i].innerHTML = ' ';
		clicked[i].classList.remove('blue');
		clicked[i].classList.remove('yellow');
	}
});
	