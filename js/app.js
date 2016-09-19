console.log('Hello frontend');




document.addEventListener("DOMContentLoaded", function() {

// CATS GAME IMAGE
	var displayBreadCat = function() {
		var img = document.createElement("img");
		img.src = '../img/breadcat.gif';
		messageBox.appendChild(img);
		img.className = 'catsGame';
		console.log('breadcat works');
	}


// Variables

	var messageBox = document.getElementById('messaging');
	var resetButton = document.getElementById('reset');
	var compChoice;
	var userSquares = [];
	var compSquares = [];
	var boxes = document.getElementsByClassName('box');


	var squaresInPlay = ['first', 
						'second', 
						'third',
						'fourth',
						'fifth',
						'sixth',
						'seventh',
						'eighth',
						'ninth'
						];


// Boxes

	var box1 = document.getElementById('box1');
	var box2 = document.getElementById('box2');
	var box3 = document.getElementById('box3');
	var box4 = document.getElementById('box4');
	var box5 = document.getElementById('box5');
	var box6 = document.getElementById('box6');
	var box7 = document.getElementById('box7');
	var box8 = document.getElementById('box8');
	var box9 = document.getElementById('box9');

	
// MESSAGEBOX

	// YOUR TURN INDICATION

	var sayYourTurn = function() {
		messageBox.textContent = 'your turn';
		}

	var yourTurnNewGame = function() {
		messageBox.innerHTML = 'new game! you go first';
	}

	var sayCompTurn = function() {
		messageBox.textContent = "computer's turn";
	}




// SAY YOUR TURN AT START OF GAME

	yourTurnNewGame();




	// COMPUTER TURN

	var computerTurn = function() {
		console.log('computer taking turn');

		var compChoice = Math.floor((Math.random() * squaresInPlay.length - 1) + 1);

		console.log('computer chooses: ' + compChoice);

		if (squaresInPlay[compChoice] == 'first') {
			box1.innerHTML = '<img src="../img/O.png" class="xo">';
			box1.className += " compBox";
			squaresInPlay.splice(squaresInPlay.indexOf('first'), 1);
			compSquares.push('first');
			checkCompWin();
		}
		else if (squaresInPlay[compChoice] == 'second') {
			box2.innerHTML = '<img src="../img/O.png" class = "xo">';
			box2.className += " compBox";
			squaresInPlay.splice(squaresInPlay.indexOf('second'), 1);
			compSquares.push('second');
			checkCompWin();
		}
		else if (squaresInPlay[compChoice] == 'third') {
			box3.innerHTML = '<img src="../img/O.png" class = "xo">';
			box3.className += " compBox";
			squaresInPlay.splice(squaresInPlay.indexOf('third'), 1);
			compSquares.push('third');
			checkCompWin();
		}
		else if (squaresInPlay[compChoice] == 'fourth') {
			box4.innerHTML = '<img src="../img/O.png" class = "xo">';
			box4.className += " compBox";
			squaresInPlay.splice(squaresInPlay.indexOf('fourth'), 1);
			compSquares.push('fourth');
			checkCompWin();
		}
		else if (squaresInPlay[compChoice] == 'fifth') {
			box5.innerHTML = '<img src="../img/O.png" class = "xo">';
			box5.className += " compBox";
			squaresInPlay.splice(squaresInPlay.indexOf('fifth'), 1);
			compSquares.push('fifth');
			checkCompWin();
		}
		else if (squaresInPlay[compChoice] == 'sixth') {
			box6.innerHTML = '<img src="../img/O.png" class = "xo">';
			box6.className += " compBox";
			squaresInPlay.splice(squaresInPlay.indexOf('sixth'), 1);
			compSquares.push('sixth');
			checkCompWin();
		}
		else if (squaresInPlay[compChoice] == 'seventh') {
			box7.innerHTML = '<img src="../img/O.png" class = "xo">';
			box7.className += " compBox";
			squaresInPlay.splice(squaresInPlay.indexOf('seventh'), 1);
			compSquares.push('seventh');
			checkCompWin();
		}
		else if (squaresInPlay[compChoice] == 'eighth') {
			box8.innerHTML = '<img src="../img/O.png" class = "xo">';
			box8.className += " compBox";
			squaresInPlay.splice(squaresInPlay.indexOf('eighth'), 1);
			compSquares.push('eighth');
			checkCompWin();
		}
		else if (squaresInPlay[compChoice] == 'ninth') {
			box9.innerHTML = '<img src="../img/O.png" class = "xo">';
			box9.className += " compBox";
			squaresInPlay.splice(squaresInPlay.indexOf('ninth'), 1);
			compSquares.push('ninth');
			checkCompWin();
		};

		//squaresInPlay.splice(squaresInPlay.indexOf(i), 1);
		console.log('computer squares: ' + compSquares);
	}






		// for (i = 0; i < 9; i++) {

		// 	if (compChoice == squaresInPlay[i]) {
		// 		console.log(i);
		// 		squaresInPlay.splice(squaresInPlay.indexOf(i), 1);

		// 		document.getElementsByClassName('box')[i].textContent = 'O';
		// 		console.log(squaresInPlay);
		// 	}
		// 	else {
		// 		console.log(i + '(number already selected');
		// 	}
		// }



	// Matching Computer Choice to Array Value:

	//if 


	// USER TURN - CLICKING BOXES

	box1.addEventListener('click', function() {
		console.log('user clicked box 1');

		if (squaresInPlay.indexOf('first') > -1) {
			squaresInPlay.splice(squaresInPlay.indexOf('first'), 1);
			console.log(squaresInPlay);
			box1.innerHTML = '<img src="../img/X.png" class = "xo">';
			box1.className += " userBox";
			userSquares.push('first');
			checkForWin();
		}
		// else if (squaresInPlay == 'gameOver') {
		// 	messageBox.textContent = 'game over - no more moves';
		// }
		else {
			messageBox.textContent = 'square already picked - try again';
		}
	});

	box2.addEventListener('click', function() {
		console.log('user clicked box 2');
			
		if (squaresInPlay.indexOf('second') > -1) {
			squaresInPlay.splice(squaresInPlay.indexOf('second'), 1);
			console.log(squaresInPlay);
			box2.innerHTML = '<img src="../img/X.png" class = "xo">';
			box2.className += " userBox";
			userSquares.push('second');
			checkForWin();
		}
		// else if (squaresInPlay == 'gameOver') {
		// 	messageBox.textContent = 'game over - no more moves';
		// }
		else {
			messageBox.textContent = 'square already picked - try again';
		}
	});

	box3.addEventListener('click', function() {
		console.log('user clicked box 3');
		
		if (squaresInPlay.indexOf('third') > -1) {
			squaresInPlay.splice(squaresInPlay.indexOf('third'), 1);
			console.log(squaresInPlay);
			box3.innerHTML = '<img src="../img/X.png" class = "xo">';
			box3.className += " userBox";
			userSquares.push('third');
			checkForWin();
		}
		// else if (squaresInPlay == 'gameOver') {
		// 	messageBox.textContent = 'game over - no more moves';
		// }
		else {
			messageBox.textContent = 'square already picked - try again';
		}
	});

	box4.addEventListener('click', function() {
		console.log('user clicked box 4');
			
		if (squaresInPlay.indexOf('fourth') > -1) {
			squaresInPlay.splice(squaresInPlay.indexOf('fourth'), 1);
			console.log(squaresInPlay);
			box4.innerHTML = '<img src="../img/X.png" class = "xo">';
			box4.className += " userBox";
			userSquares.push('fourth');
			checkForWin();
		}
		// else if (squaresInPlay == 'gameOver') {
		// 	messageBox.textContent = 'game over - no more moves';
		// }
		else {
			messageBox.textContent = 'square already picked - try again';
		}
	});

	box5.addEventListener('click', function() {
		console.log('user clicked box 5');
		
		if (squaresInPlay.indexOf('fifth') > -1) {
			squaresInPlay.splice(squaresInPlay.indexOf('fifth'), 1);
			console.log(squaresInPlay);
			box5.innerHTML = '<img src="../img/X.png" class = "xo">';
			box5.className += " userBox";
			userSquares.push('fifth');
			checkForWin();
		}
		// else if (squaresInPlay == 'gameOver') {
		// 	messageBox.textContent = 'game over - no more moves';		}
		else {
			messageBox.textContent = 'square already picked - try again';
		}
	});

	box6.addEventListener('click', function() {
		console.log('user clicked box 6');
			
		if (squaresInPlay.indexOf('sixth') > -1) {
			squaresInPlay.splice(squaresInPlay.indexOf('sixth'), 1);
			console.log(squaresInPlay);
			box6.innerHTML = '<img src="../img/X.png" class = "xo">';
			box6.className += " userBox";
			userSquares.push('sixth');
			checkForWin();
		}
		// else if (squaresInPlay == 'gameOver') {
		// 	messageBox.textContent = 'game over - no more moves';
		// }
		else {
			messageBox.textContent = 'square already picked - try again';
		}
	});

	box7.addEventListener('click', function() {
		console.log('user clicked box 7');

		if (squaresInPlay.indexOf('seventh') > -1) {
			squaresInPlay.splice(squaresInPlay.indexOf('seventh'), 1);
			console.log(squaresInPlay);
			box7.innerHTML = '<img src="../img/X.png" class = "xo">';
			box7.className += " userBox";
			userSquares.push('seventh');
			checkForWin();
		}
		// else if (squaresInPlay == 'gameOver') {
		// 	messageBox.textContent = 'game over - no more moves';
		// }
		else {
			messageBox.textContent = 'square already picked - try again';
		}
	});

	box8.addEventListener('click', function() {
		console.log('user clicked box 8');
		
		if (squaresInPlay.indexOf('eighth') > -1) {
			squaresInPlay.splice(squaresInPlay.indexOf('eighth'), 1);
			console.log(squaresInPlay);
			box8.innerHTML = '<img src="../img/X.png" class = "xo">';
			box8.className += " userBox";
			userSquares.push('eighth');
			checkForWin();
		}
		// else if (squaresInPlay == 'gameOver') {
		// 	messageBox.textContent = 'game over - no more moves';
		// }
		else {
			messageBox.textContent = 'square already picked - try again';
		}
	});

	box9.addEventListener('click', function() {
		console.log('user clicked box 9');
			
		if (squaresInPlay.indexOf('ninth') > -1) {
			squaresInPlay.splice(squaresInPlay.indexOf('ninth'), 1);
			console.log(squaresInPlay);
			box9.innerHTML = '<img src="../img/X.png" class = "xo">';
			box9.className += " userBox";
			userSquares.push('ninth');
			checkForWin();
		}
		// else if (squaresInPlay == 'gameOver') {
		// 	messageBox.textContent = 'game over - no more moves';
		// }
		else {
			messageBox.textContent = 'square already picked - try again';
		}
	});


	// Reset Board

	resetButton.addEventListener('click', function() {
		// can't get all boxes to work...
		//document.querySelectorAll('.box').textContent = '';

		//patch for now:

		box1.textContent = '';
		box2.textContent = '';
		box3.textContent = '';
		box4.textContent = '';
		box5.textContent = '';
		box6.textContent = '';
		box7.textContent = '';
		box8.textContent = '';
		box9.textContent = '';

		squaresInPlay = ['first', 
						'second', 
						'third',
						'fourth',
						'fifth',
						'sixth',
						'seventh',
						'eighth',
						'ninth'
						];

		userSquares = [];
		compSquares = [];

		for (i = 0; i < boxes.length; i++) {
			boxes[i].className = 'box';
		}

		yourTurnNewGame();
	});


	// DISABLE BOARD AFTER WIN

	var disableBoard = function() {
		squaresInPlay = 'gameOver';
	}





	// WINNING LOGIC

	var checkForWin = function() {

	// USER WINS:

		// COLUMN WIN

			if (userSquares.indexOf('first') > -1 &&
				userSquares.indexOf('fourth') > -1 &&
				userSquares.indexOf('seventh') > -1) {
				messageBox.textContent = 'ZOMG YOU WON!!!!!!';
				disableBoard();

			}

			else if (userSquares.indexOf('second') > -1 &&
				userSquares.indexOf('fifth') > -1 &&
				userSquares.indexOf('eighth') > -1) {
				messageBox.textContent = 'ZOMG YOU WON!!!!!!';
				disableBoard();
			}

			else if (userSquares.indexOf('third') > -1 &&
				userSquares.indexOf('sixth') > -1 &&
				userSquares.indexOf('ninth') > -1) {
				messageBox.textContent = 'ZOMG YOU WON!!!!!!';
				disableBoard();
			}

			else if (userSquares.indexOf('first') > -1 &&
				userSquares.indexOf('fifth') > -1 &&
				userSquares.indexOf('ninth') > -1) {
				messageBox.textContent = 'ZOMG YOU WON!!!!!!';
				disableBoard();
			}

		// DIAGONAL WIN

			else if (userSquares.indexOf('second') > -1 &&
				userSquares.indexOf('fifth') > -1 &&
				userSquares.indexOf('eighth') > -1) {
				messageBox.textContent = 'ZOMG YOU WON!!!!!!';
				disableBoard();
			}

			else if (userSquares.indexOf('third') > -1 &&
				userSquares.indexOf('fifth') > -1 &&
				userSquares.indexOf('seventh') > -1) {
				messageBox.textContent = 'ZOMG YOU WON!!!!!!';
				disableBoard();
			}

		// ROW WIN

			else if (userSquares.indexOf('first') > -1 &&
				userSquares.indexOf('second') > -1 &&
				userSquares.indexOf('third') > -1) {
				messageBox.textContent = 'ZOMG YOU WON!!!!!!';
				disableBoard();
			}

			else if (userSquares.indexOf('fourth') > -1 &&
				userSquares.indexOf('fifth') > -1 &&
				userSquares.indexOf('sixth') > -1) {
				messageBox.textContent = 'ZOMG YOU WON!!!!!!';
				disableBoard();
			}

			else if (userSquares.indexOf('seventh') > -1 &&
				userSquares.indexOf('eighth') > -1 &&
				userSquares.indexOf('ninth') > -1) {
				messageBox.textContent = 'ZOMG YOU WON!!!!!!';
				disableBoard();
			}

			else if (squaresInPlay.length == 0) {
				messageBox.textContent = 'CATS GAME';
				displayBreadCat();
			}

			else {
				sayCompTurn();
				setTimeout(computerTurn, 1000);
			}
		}


	// COMPUTER WINS:

	var checkCompWin = function() {
		// COLUMN WIN

			if (compSquares.indexOf('first') > -1 &&
				compSquares.indexOf('fourth') > -1 &&
				compSquares.indexOf('seventh') > -1) {
				messageBox.textContent = 'You lose.';
				disableBoard();

			}

			else if (compSquares.indexOf('second') > -1 &&
				compSquares.indexOf('fifth') > -1 &&
				compSquares.indexOf('eighth') > -1) {
				messageBox.textContent = 'You lose.';
				disableBoard();
			}

			else if (compSquares.indexOf('third') > -1 &&
				compSquares.indexOf('sixth') > -1 &&
				compSquares.indexOf('ninth') > -1) {
				messageBox.textContent = 'You lose.';
				disableBoard();
			}

			else if (compSquares.indexOf('first') > -1 &&
				compSquares.indexOf('fifth') > -1 &&
				compSquares.indexOf('ninth') > -1) {
				messageBox.textContent = 'You lose.';
				disableBoard();
			}

		// DIAGONAL WIN

			else if (compSquares.indexOf('second') > -1 &&
				compSquares.indexOf('fifth') > -1 &&
				compSquares.indexOf('eighth') > -1) {
				messageBox.textContent = 'You lose.';
				disableBoard();
			}

			else if (compSquares.indexOf('third') > -1 &&
				compSquares.indexOf('fifth') > -1 &&
				compSquares.indexOf('seventh') > -1) {
				messageBox.textContent = 'You lose.';
				disableBoard();
			}

		// ROW WIN

			else if (compSquares.indexOf('first') > -1 &&
				compSquares.indexOf('second') > -1 &&
				compSquares.indexOf('third') > -1) {
				messageBox.textContent = 'You lose.';
				disableBoard();
			}

			else if (compSquares.indexOf('fourth') > -1 &&
				compSquares.indexOf('fifth') > -1 &&
				compSquares.indexOf('sixth') > -1) {
				messageBox.textContent = 'You lose.';
				disableBoard();
			}

			else if (compSquares.indexOf('seventh') > -1 &&
				compSquares.indexOf('eighth') > -1 &&
				compSquares.indexOf('ninth') > -1) {
				messageBox.textContent = 'You lose.';
				disableBoard();
			}

			else if (squaresInPlay.length == 0) {
				messageBox.textContent = 'CATS GAME';
				displayBreadCat();
			}

			else {
				console.log('Your turn!');
				sayYourTurn();
			}
		}

//end of domContentLoaded
});








