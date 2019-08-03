console.log('Hello frontend');



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
let newParagraph = document.getElementById('player-switch');
let winnerMessage = document.getElementById('winner-message');
let bucketOneArray = [false, false, false, false, false, false, false, false, false];
let bucketTwoArray = [false, false, false, false, false, false, false, false, false];
let currentPlayer = 0;
let playerProfileOne = 0;
let playerProfileTwo = 0;
let ultimateWin = 0;
let gameOver = false;
let gameWinningPossibilities =  [
								[0,1,2],
								[3,4,5], 
								[6,7,8],
								[0,3,6],
								[1,4,7],
								[2,5,8],
								[0,4,8], 
								[2,4,6]
								];



let emptyGrid = document.querySelectorAll('.grid');
for (let i = 0; i < emptyGrid.length; i++) {
	emptyGrid[i].addEventListener('click', xAndO);
	console.log(emptyGrid[i]);
}

function canGameContinue() {
//loop through the empty grid
	for (let i = 0; i < emptyGrid.length; i++) {
		//if an empty box is checked; game can continue
		if (emptyGrid[i].getAttribute('game-board-grid') === 'true') {

			return false;
		}	
	}
	return true;
}

function xAndO(e) {
	if (this.textContent == "" && gameOver == false) {
		if (currentPlayer == 0) {
			this.textContent = "X";
			this.classList.add("green");
			console.log(this.id);
			bucketOneArray[this.id] = true;
			checkForWin();
			currentPlayer = 1;
			newParagraph.textContent = "Player Two Has A Turn";
			console.log(bucketOneArray);
			//store the clicked div into variable
			//bucketOneArray[e.target.id] = true;

		} else {
			this.textContent = "O";
			this.classList.add("blue");
			console.log(this.id);
			bucketTwoArray[this.id] = true;
			checkForWin();
			currentPlayer = 0;
			newParagraph.textContent = "Back to Player One";
			console.log(bucketTwoArray);
		}
	}	
}



function checkForWin() {
	
	var currentPlayerMoves;
	if (currentPlayer === 0) {
		currentPlayerMoves = bucketOneArray;
	} else {
		currentPlayerMoves = bucketTwoArray;
	}
		//loop over the gamewinningpossibilitiesarray
	//why are we looping over the game winning possibilities array? because we want to check each of the win conditions
	for(var i = 0; i < gameWinningPossibilities.length; i++) {
		var winCombo = gameWinningPossibilities[i];
		var sequenceCorrect = true;
		// var winsChecked = true;
		//why are we looping over winning combos? because we already have the game winning possibilities
		//now we need to loop over the combo moves
		for (var j = 0; j < winCombo.length; j++) {
			var index = winCombo[j];
			//
			//check if the current player moves matches part of winning combo
			if (currentPlayerMoves[index] === true) {
			//fine for game conditions
			} else {
			 sequenceCorrect = false;
			
			}

		}
		//we are checking sequenceCorrect. if it is true, then winGame
		if(sequenceCorrect === true) {
		winGame();
		}
	}
}		


function winGame() {
	winnerMessage.textContent = "We have a Winner";
}					
//winnerMessage.textContent = "We have a Winner";
					
				
//if the total trues are equal to nine, we have a draw
		
			


//function draw () {
	//bucketOneArray.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
	//var trueFirstArray;
	//var trueSecondArray;
		//if trueSecondArray = trueSecondArray
		//return true;	

	










	


//Add a reset button that will clear the contents of the board.
function resetGame() {

	for (let i = 0; i < emptyGrid.length; i++) {
		//clear xAndO plays
		emptyGrid[i].textContent = "";
		//clear class changes
		emptyGrid[i].classList.remove("green");
		emptyGrid[i].classList.remove("blue");
	}
	//set gameOver back to false
	gameOver = false;
}	

let resetButton = document.getElementById('resetgame');
resetButton.addEventListener('click', resetGame);

//endGame();
