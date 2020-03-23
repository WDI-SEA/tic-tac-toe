console.log('Let\'s play a game!');
//What are we doing here?
//Making a tic tac toe game with artificial intelligence
//Images need to be grabbed on clicks inside the tick tac toe squares
//They need to be different to represent 2 players
//The game needs to read that a box has been clicked and record the image there
//no boxes can be clicked twice during a game
//win condition is three images in a row
//it has to be 3 in a row for 3 of the same type
//can be diagonal, vertical, or horizontal
//display win after win condition
//gameboard should have 3 rows and 3 columns
//A win condition is an entire row, column, or diagonal has been filled
//make the robot cry and lose his car on win condition


//defining global variables



const gameStatus = document.querySelector('.gamestatus');

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winMessage = () => `You won! Now take that robot's car!`;
const stalemate = () => `It's a tie! Keep playing!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

gameStatus.innerHTML = currentPlayerTurn();

const winCombos = [		//Win is when one of the arrays for 3 in a row or column are selected
 	[0, 1, 2],				
 	[3, 4, 5],				//horizontal winning rows
 	[6, 7, 8],
 	[0, 3, 6],
 	[1, 4, 7],				//vertical winning columns
 	[2, 5, 8],
 	[0, 4, 8],				//winning diagonal row and columns
 	[2, 4, 6]
 ];

const handleCellPlayed = (clickedCell, clickedCellIndex) => {
	gameState[clickedCellIndex] = currentPlayer;
	clickedCell.innerHTML = currentPlayer;
};

const handlePlayerChange = () => {
	currentPlayer = currentPlayer === "X" ? "O" : "X";
	gameStatus.innerHTML = currentPlayerTurn();
};



const handleResultValidation = () => {
	let roundWon = false;
	for (let i = 0; i <= 7; i++) {
		const winCombo = winCombos[i];
		let a = gameState[winCombo[0]];
		let b = gameState[winCombo[1]];
		let c = gameState[winCombo[2]];
		if (a === '' || b === '' || c === '') {
			continue;
		}
		if (a === b && b === c) {
			roundWon = true;
			break
		}
	}
	if (roundWon) {
	gameStatus.innerHTML = winMessage();
	gameActive = false;
	document.getElementById('music').play();
	return;
	}

	let roundDraw = !gameState.includes("");
	if (roundDraw) {
		gameStatus.innerHTML = stalemate();
		gameActive = false;
		return;
	}

	handlePlayerChange();
};


const handleCellClick = (clickedCellEvent) => {
	const clickedCell = clickedCellEvent.target;
	const clickedCellIndex = parseInt(
		clickedCell.getAttribute('data-cell-index'));
	if (gameState[clickedCellIndex] !== "" || !gameActive) {
		return;
	}
	handleCellPlayed(clickedCell, clickedCellIndex);
	handleResultValidation();
};


const handleRestartGame = () => {
		gameActive = true;
		currentPlayer = 'X';
		gameState = ["", "", "", "", "", "", "", "", ""];
		gameStatus.innerHTML = currentPlayerTurn();
		document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
		document.getElementById('music').pause();
		document.getElementById('music').currentTime = 0;

};










document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.restart').addEventListener('click', handleRestartGame);










