console.log('Hello frontend');

//global variables
var playersArray = ['Player X', 'Player O']
//set up a variable to start a turn counter at 0 and toggle between x and o clicks
var counter = 0;
//set up a variable to count clicks. When the total is 9, we have a draw
var clicks = 0;

//allow all the columns to be accessed
var columnClick = document.getElementsByClassName('columns')
//allow reset button to be activated
var resetButton = document.getElementById('reset')
//allow start button to be activated



//create function that accesses the gameboard through class 'column'
var accessGame = function () {
	//loop through all the columnClicks
	for (let i = 0; i < columnClick.length; i++) {
		//add an event listenter for each click
		columnClick[i].addEventListener('click', addXsAndOs)
		//set Attributes for 'data-x' and 'data-o' initialize them to false. 
		//This sets conditions for a win or draw
		columnClick[i].setAttribute('data-x', 'false')
		columnClick[i].setAttribute('data-o', 'false')

		if (columnClick[i].getAttribute('data-board') === 'true') {
			columnClick[i].removeChild(columnClick[i].firstChild)
		}
	}
}
accessGame()




//create function to add an x or an o
function addXsAndOs () {
    if (counter === 0 || counter % 2 === 0) {
      var paragraphElementX = document.createElement('p')
      paragraphElementX.textContent = "X"
      paragraphElementX.alignText = 'center'
      paragraphElementX.style.color = 'black'
      this.append(paragraphElementX)
      //remove the ability to continue to click on the same spot
      this.removeEventListener('click', addXsAndOs)
      //set boolean for endgame logic
      this.setAttribute('data-x', 'true')
      this.setAttribute('data-board', 'true')
	  counter++
	  clicks++
	  console.log(clicks)
	  var playerMessageO = document.getElementById('player-message').textContent = `${playersArray[1]} has a turn`
	  console.log(playerMessageO)
      //I want to check to win after each piece is placed.
      winQuery()
	  drawQuery()
    }
    else {
      //placePieceO();
      var paragraphElementO = document.createElement('p')
      paragraphElementO.textContent = "O";
      paragraphElementO.style.color = 'black';
      this.append(paragraphElementO);
      this.setAttribute('data-o', 'true')
      //This is telling the draw function that a board slot is full.
      this.setAttribute('data-board', 'true')
      this.removeEventListener('click', addXsAndOs)
	  counter++
	  clicks++
	  console.log(clicks)
	  var playerMessageX = document.getElementById('player-message').textContent = `Back to ${playersArray[0]}`

      //I want to check to win after each piece is placed.
	  winQuery()
	  drawQuery()
    }
}

//game logic. Grab elementsByTagName to set an if/else statement that checks if
//each box has data in it(getAttribute('data-x').  if it is truthy, then that counts as a win)
var winQuery = function() {
	//row access
	let topRowQuery = document.getElementsByClassName('top-row')
	let middleRowQuery = document.getElementsByClassName('middle-row')
	let bottomRowQuery = document.getElementsByClassName('bottom-row')
	//column access
	let leftColumnQuery = document.getElementsByClassName('left-column')
	let middleColumnQuery = document.getElementsByClassName('middle-column')
	let rightColumnQuery = document.getElementsByClassName('right-column')
	//diagonal access
	let leftDiagonalQuery = document.getElementsByClassName('left-diagonal')
	let rightDiagonalQuery = document.getElementsByClassName('right-diagonal')
		
	if ((topRowQuery[0].getAttribute('data-x') === 'true' && topRowQuery[1].getAttribute('data-x') === 'true' && topRowQuery[2].getAttribute('data-x') === 'true') ||
		(middleRowQuery[0].getAttribute('data-x') === 'true' && middleRowQuery[1].getAttribute('data-x') === 'true' && middleRowQuery[2].getAttribute('data-x') === 'true') ||
		(bottomRowQuery[0].getAttribute('data-x') === 'true' && bottomRowQuery[1].getAttribute('data-x') === 'true' && bottomRowQuery[2].getAttribute('data-x') === 'true') ||
		(leftColumnQuery[0].getAttribute('data-x') === 'true' && leftColumnQuery[1].getAttribute('data-x') === 'true' && leftColumnQuery[2].getAttribute('data-x') === 'true') ||
		(middleColumnQuery[0].getAttribute('data-x') === 'true' && middleColumnQuery[1].getAttribute('data-x') === 'true' && middleColumnQuery[2].getAttribute('data-x') === 'true') ||
		(rightColumnQuery[0].getAttribute('data-x') === 'true' && rightColumnQuery[1].getAttribute('data-x') === 'true' && rightColumnQuery[2].getAttribute('data-x') === 'true') ||
		(leftDiagonalQuery[0].getAttribute('data-x') === 'true' && leftDiagonalQuery[1].getAttribute('data-x') === 'true' && leftDiagonalQuery[2].getAttribute('data-x') === 'true') ||
		(rightDiagonalQuery[0].getAttribute('data-x') === 'true' && rightDiagonalQuery[1].getAttribute('data-x') === 'true' && rightDiagonalQuery[2].getAttribute('data-x') === 'true')) {
			console.log('add up the wins for x')
			document.getElementById('player-message').textContent = `${playersArray[0]} is the WINNER`
		} 
		else if 
		((topRowQuery[0].getAttribute('data-o') === 'true' && topRowQuery[1].getAttribute('data-o') === 'true' && topRowQuery[2].getAttribute('data-o') === 'true') ||
		(middleRowQuery[0].getAttribute('data-o') === 'true' && middleRowQuery[1].getAttribute('data-o') === 'true' && middleRowQuery[2].getAttribute('data-o') === 'true') ||
		(bottomRowQuery[0].getAttribute('data-o') === 'true' && bottomRowQuery[1].getAttribute('data-o') === 'true' && bottomRowQuery[2].getAttribute('data-o') === 'true') ||
		(leftColumnQuery[0].getAttribute('data-o') === 'true' && leftColumnQuery[1].getAttribute('data-o') === 'true' && leftColumnQuery[2].getAttribute('data-o') === 'true') ||
		(middleColumnQuery[0].getAttribute('data-o') === 'true' && middleColumnQuery[1].getAttribute('data-o') === 'true' && middleColumnQuery[2].getAttribute('data-o') === 'true') ||
		(rightColumnQuery[0].getAttribute('data-o') === 'true' && rightColumnQuery[1].getAttribute('data-o') === 'true' && rightColumnQuery[2].getAttribute('data-o') === 'true') ||
		(leftDiagonalQuery[0].getAttribute('data-o') === 'true' && leftDiagonalQuery[1].getAttribute('data-o') === 'true' && leftDiagonalQuery[2].getAttribute('data-o') === 'true') ||
		(rightDiagonalQuery[0].getAttribute('data-o') === 'true' && rightDiagonalQuery[1].getAttribute('data-o') === 'true' && rightDiagonalQuery[2].getAttribute('data-o') === 'true')) {
			console.log('add up the wins for o')
			document.getElementById('player-message').textContent = `${playersArray[1]} is the WINNER`
	} 

}

var drawQuery = function () {
	//the same for loop as above for the gameboard
	for (let i = 0; i < columnClick.length; i++) {
		if (clicks === 9) {
			document.getElementById('winner-message').textContent = 'We Have A Tie'
		}
	}
}
drawQuery()


// //create a function to clear game
// function clearGame () {
// 	for(let i = 0; i < columnClick.length; i++) {
// 	columnClick[i].setAttribute('data-board', 'false')
// 	console.log(clearGame)
// 	}
// }

//reset button. removes the textContent elements

function resetGame () {
	//a for loop again to go through the boardgame
	//for (let i = 0; i < columnClick.length; i++) {
		//clear addXsAndOx
		// var resetGame = columnClick[i].textContent = ''
		// document.getElementById('player-message').textContent = ''
		location.reload()
	}
//}
resetButton.addEventListener('click', resetGame)


	// var resetGame = columnClick[i].removeEventListener('click', addXsAndOs)
	// columnClick[i].setAttribute('data-x', 'false')
	// columnClick[i].setAttribute('data-o', 'false')

	
////----first attempt. Not apart of 2nd
// }
//global variables
// var playerOne;
// var playerTwo;
// var winMessage = '';
// var winningArrays = [
// 	[0,1,2]
// 	[3,4,5]
// 	[6,7,8]
// 	[0,3,6]
// 	[1,4,7]
// 	[2,5,8]
// 	[0,4,8]
// 	[2,4,6]
// ]
//event listeners


//


//game winning scenario

	//tally or add the "plays"

	//store those results

	//add tallies together to playerProfileOne

	//add tallies together to playerProfileTwo

	//call winner

	//call gameOver


//draw situation

	//if playerProfileOne and PlayerProfileTwo cannot get 3 in a row = draw

	//call gamOver

	//direct to resetGame




//function gameOver

	//if winner != draw

	//gameOver();
// let newParagraph = document.getElementById('player-switch');
// let winnerMessage = document.getElementById('winner-message');
// let bucketOneArray = [false, false, false, false, false, false, false, false, false];
// let bucketTwoArray = [false, false, false, false, false, false, false, false, false];
// let currentPlayer = 0;
// let playerProfileOne = 0;
// let playerProfileTwo = 0;
// let ultimateWin = 0;
// let gameOver = false;
// let gameWinningPossibilities =  [
// 								[0,1,2],
// 								[3,4,5], 
// 								[6,7,8],
// 								[0,3,6],
// 								[1,4,7],
// 								[2,5,8],
// 								[0,4,8], 
// 								[2,4,6]
// 								];



// let emptyGrid = document.querySelectorAll('.grid');
// for (let i = 0; i < emptyGrid.length; i++) {
// 	emptyGrid[i].addEventListener('click', xAndO);
// 	console.log(emptyGrid[i]);
// }

// function checkForDraw() {
// 	//variable to store boxes clicked
// 	var boxesClicked = 0;

// 	//loop through the empty grid
// 	for (let i = 0; i < emptyGrid.length; i++) {
// 		//if an empty box is checked; game can continue
// 		if (emptyGrid[i].textContent !== '') {
// 			boxesClicked++;
// 		}	
// 	}
// 	if (boxesClicked === 9 && gameOver === false) {
// 		gameOver = true;
// 		winnerMessage.textContent = "CAT GAME";
// 	}
// }

// function xAndO(e) {
// 	if (this.textContent == "" && gameOver == false) {
// 		if (currentPlayer == 0) {
// 			this.textContent = "X";
// 			this.classList.add("green");
// 			console.log(this.id);
// 			bucketOneArray[this.id] = true;
// 			checkForWin();
// 			checkForDraw();
// 			currentPlayer = 1;
// 			newParagraph.textContent = "Player Two Has A Turn";
// 			console.log("Player X:", bucketOneArray);
// 			//store the clicked div into variable
// 			//bucketOneArray[e.target.id] = true;

// 		} else {
// 			this.textContent = "O";
// 			this.classList.add("blue");
// 			console.log(this.id);
// 			bucketTwoArray[this.id] = true;
// 			checkForWin();
// 			checkForDraw();
// 			currentPlayer = 0;
// 			newParagraph.textContent = "Back to Player One";
// 			console.log("Player O:", bucketTwoArray);
// 		}
// 	}	
// }



// function checkForWin() {
	
// 	var currentPlayerMoves;
// 	if (currentPlayer === 0) {
// 		currentPlayerMoves = bucketOneArray;
// 	} else {
// 		currentPlayerMoves = bucketTwoArray;
// 	}
// 		//loop over the gamewinningpossibilitiesarray
// 	//why are we looping over the game winning possibilities array? because we want to check each of the win conditions
// 	for(var i = 0; i < gameWinningPossibilities.length; i++) {
// 		var winCombo = gameWinningPossibilities[i];
// 		var sequenceCorrect = true;
// 		// var winsChecked = true;
// 		//why are we looping over winning combos? because we already have the game winning possibilities
// 		//now we need to loop over the combo moves
// 		for (var j = 0; j < winCombo.length; j++) {
// 			var index = winCombo[j];
// 			//
// 			//check if the current player moves matches part of winning combo
// 			if (currentPlayerMoves[index] === true) {
// 			//fine for game conditions
// 			} else {
// 			 sequenceCorrect = false;
			
// 			}

// 		}
// 		//we are checking sequenceCorrect. if it is true, then winGame
// 		if(sequenceCorrect === true) {
// 		winGame();
// 		}
// 	}
// }		


// function winGame() {
// 	winnerMessage.textContent = "We have a Winner";

// 	gameOver = true;
// }					

				
// //if the total trues are equal to nine, we have a draw

			


// //function draw () {
// 	//bucketOneArray.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// 	//var trueFirstArray;
// 	//var trueSecondArray;
// 		//if trueSecondArray = trueSecondArray
// 		//return true;	

	

// //remove event listeners


// //players cannot continue to click after game is won




// //You should not be able to click remaining empty cells after the game is over.


	


// //Add a reset button that will clear the contents of the board.
// function resetGame() {

// 	for (let i = 0; i < emptyGrid.length; i++) {
// 		//clear xAndO plays
// 		emptyGrid[i].textContent = "";
// 		//clear class changes
// 		emptyGrid[i].classList.remove("green");
// 		emptyGrid[i].classList.remove("blue");
// 	}
// 	//set gameOver back to false
// 	gameOver = false;
// 	// reset buckets back to false
// 	bucketOneArray = [false, false, false, false, false, false, false, false, false];
// 	bucketTwoArray = [false, false, false, false, false, false, false, false, false];
// 	// reset "we have a winner"/"Cat game" message
// 	winnerMessage.textContent = "Start Over?";
// }	

// let resetButton = document.getElementById('resetgame');
// resetButton.addEventListener('click', resetGame);

// //endGame();
