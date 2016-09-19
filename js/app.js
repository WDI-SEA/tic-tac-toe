
var board = document.getElementById('board');

// function to count turns
var count = 0;
var turnCount = function() {
	count++;
}


// clear the board to set up for game
for (var i = 0; i < 3; i++) {
	for (var j = 0; j < 3; j++) {
		board.children[i].children[j].textContent = "";
	};
};



//mark X or O
var currentSquare = "none";
var markXO = function() {
if (count % 2 === 0 && currentSquare.textContent === ""){
		currentSquare.textContent = "X"
		currentSquare.style.backgroundColor = '#90CAF9';
		document.getElementById('turn').textContent = " ";
		setTimeout(oUp, 400);
	};
	if (count % 2 !== 0 && currentSquare.textContent === ""){
		currentSquare.textContent = "O"
		currentSquare.style.backgroundColor = '#FFD54F';
		document.getElementById('turn').textContent = " ";
		setTimeout(xUp, 400);
	};
};



//square 1
var square1 = board.children[0].children[0];
square1.addEventListener('click', function() {
	turnCount();
	currentSquare = board.children[0].children[0];
	markXO();
	setTimeout(checkWin, 550);
});

//square 2
var square2 = board.children[0].children[1];
square2.addEventListener('click', function() {
	turnCount();
	currentSquare = board.children[0].children[1];
	markXO();
	setTimeout(checkWin, 550);
});

//square 3
var square3 = board.children[0].children[2];
square3.addEventListener('click', function() {
	turnCount();
	currentSquare = board.children[0].children[2];
	markXO();
	setTimeout(checkWin, 550);
});

//square 4
var square4 = board.children[1].children[0];
square4.addEventListener('click', function() {
	turnCount();
	currentSquare = board.children[1].children[0];
	markXO();
	setTimeout(checkWin, 550);
});

//square 5
var square5 = board.children[1].children[1];
square5.addEventListener('click', function() {
	turnCount();
	currentSquare = board.children[1].children[1];
	markXO();
	setTimeout(checkWin, 550);
});

//square 6
var square6 = board.children[1].children[2];
square6.addEventListener('click', function() {
	turnCount();
	currentSquare = board.children[1].children[2];
	markXO();
	setTimeout(checkWin, 550);
});

//square 7
var square7 = board.children[2].children[0];
square7.addEventListener('click', function() {
	turnCount();
	currentSquare = board.children[2].children[0];
	markXO();
	setTimeout(checkWin, 550);
});

//square 8
var square8 = board.children[2].children[1];
square8.addEventListener('click', function() {
	turnCount();
	currentSquare = board.children[2].children[1];
	markXO();
	setTimeout(checkWin, 550);
});

//square 9
var square9 = board.children[2].children[2];
square9.addEventListener('click', function() {
	turnCount();
	currentSquare = board.children[2].children[2];
	markXO();
	setTimeout(checkWin, 550);
});



//Display Turn
var xUp = function() {
	document.getElementById('turn').textContent = "X IS UP!";
};
var oUp = function() {
	document.getElementById('turn').textContent = "O IS UP!";
};
var turn = 0;





//check if winner
var checkWin = function() {
	//check x
	if (square1.textContent === "X" && square2.textContent === "X" && square3.textContent === "X") {
	document.getElementById('turn').textContent = "X WINS!";
	}
	if (square1.textContent === "X" && square4.textContent === "X" && square7.textContent === "X") {
	document.getElementById('turn').textContent = "X WINS!";
	}
	if (square4.textContent === "X" && square5.textContent === "X" && square6.textContent === "X") {
	document.getElementById('turn').textContent = "X WINS!";
	}
	if (square7.textContent === "X" && square8.textContent === "X" && square9.textContent === "X") {
	document.getElementById('turn').textContent = "X WINS!";
	}
	if (square2.textContent === "X" && square5.textContent === "X" && square8.textContent === "X") {
	document.getElementById('turn').textContent = "X WINS!";
	}
	if (square3.textContent === "X" && square6.textContent === "X" && square9.textContent === "X") {
	document.getElementById('turn').textContent = "X WINS!";
	}
	if (square1.textContent === "X" && square5.textContent === "X" && square9.textContent === "X") {
	document.getElementById('turn').textContent = "X WINS!";
	}
	if (square7.textContent === "X" && square5.textContent === "X" && square3.textContent === "X") {
	document.getElementById('turn').textContent = "X WINS!";
	}

	//check o
	if (square1.textContent === "O" && square2.textContent === "O" && square3.textContent === "O") {
	document.getElementById('turn').textContent = "O WINS!";
	}
	if (square1.textContent === "O" && square4.textContent === "O" && square7.textContent === "O") {
	document.getElementById('turn').textContent = "O WINS!";
	}
	if (square4.textContent === "O" && square5.textContent === "O" && square6.textContent === "O") {
	document.getElementById('turn').textContent = "O WINS!";
	}
	if (square7.textContent === "O" && square8.textContent === "O" && square9.textContent === "O") {
	document.getElementById('turn').textContent = "O WINS!";
	}
	if (square2.textContent === "O" && square5.textContent === "O" && square8.textContent === "O") {
	document.getElementById('turn').textContent = "O WINS!";
	}
	if (square3.textContent === "O" && square6.textContent === "O" && square9.textContent === "O") {
	document.getElementById('turn').textContent = "O WINS!";
	}
	if (square1.textContent === "O" && square5.textContent === "O" && square9.textContent === "O") {
	document.getElementById('turn').textContent = "O WINS!";
	}
	if (square7.textContent === "O" && square5.textContent === "O" && square3.textContent === "O") {
	document.getElementById('turn').textContent = "O WINS!";
	}
}



//reset button
var resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function() {
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			board.children[i].children[j].textContent = "";
			board.children[i].children[j].style.backgroundColor = '#E0E0E0';
		};
	};
	document.getElementById('turn').textContent = "";
	turn = 0;
});




// for (var i = 0; i < 3; i++) {
// 	for (var j = 0; j < 3; j++) {

// 		board.children[i].children[j].addEventListener('click', function() {
// 			turnCount();
// 			if (count % 2 === 0){
// 				board.children[i].children[j].textContent = "X";
// 				board.children[i].children[j].style.backgroundColor = 'blue';
// 			};
// 			if (count % 2 !== 0){
// 				board.children[i].children[j].textContent = "O";
// 			};
// 		});

// 	};
// };

// var row1 = board.children[0];
// var row2 = board.children[1];
// var row3 = board.children[2];

// for (var i = 0; i < 3; i++) {
// 	row1.children[i].addEventListener('click', function() {
// 	turnCount();
// 	if (count % 2 === 0){
// 		row1.children[i].textContent = "X"
// 	};
// 	if (count % 2 !== 0){
// 		row1.children[i].textContent = "O"
// 	};

// 	});
// }