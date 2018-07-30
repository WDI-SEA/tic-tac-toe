const NUM_COLS = 7;
const NUM_ROWS = 6;
const gameBoard = document.getElementById('gameboard');
const scoreBoard = document.getElementById('scoreboard');

let board, sbData;

function startGame() {
  clearScoreboard();
  renderStartingBoard();
  addColumnListeners();
  renderActivePlayer();
  if(this.id === 'player1') {
    sbData.singlePlayer = true;
    if(sbData.activePlayer === 2) {
      cpuMoves();
    }
  }
}

function setActivePlayer() {
  sbData.activePlayer = Math.round(Math.random()) + 1;
}

function clearScoreboard() {
  while (scoreBoard.firstChild) {
    scoreBoard.removeChild(scoreBoard.firstChild);
  }
}

function addColumnListeners() {
  let columns = document.querySelectorAll('.column');
  columns.forEach(column => column.addEventListener('click', handleClick));
}

function renderActivePlayer() {
  const activePlayer = document.createElement('h2');
  activePlayer.setAttribute('id', 'active-player');
  activePlayer.innerText = getPlayer() + " goes first!";
  scoreBoard.appendChild(activePlayer);
}

function getPlayer() {
  if(sbData.activePlayer === 1) {
    return "Player 1";
  } else if(sbData.singlePlayer === true) {
    return "CPU";
  } else {
    return "Player 2";
  }
}

function handleClick() {
  const activeColumn = parseInt(this.getAttribute('id'));
  if(checkForValidMove(activeColumn)){
    var lowestAvailableRow = fetchLowestAvailableRow(activeColumn);
    board[lowestAvailableRow][activeColumn] = sbData.activePlayer;
    sbData.movesRemaining--;
    fillCell([lowestAvailableRow, activeColumn]);
  } else {
    alert("That column is full. Choose a different one.");
  }
}

function checkForValidMove(column) {
  // Check if top cell in column is occupied.
  if(board[0][column] === 0) {
    return true;
  }
  return false;
}

function fetchLowestAvailableRow(columnIndex) {
  let position = NUM_ROWS - 1;
  while(position >= 0) {
    if (board[position][columnIndex] != 0) {
      position--;
    } else {
      return position;
    }
  }
}

function fillCell(coordinate) {
  let currentColor;
  if(sbData.activePlayer === 1) {
    currentColor = 'red';
  } else {
    currentColor = 'yellow';
  }

  document.querySelector('div.cell[data-coordinate="['+coordinate[0]+', '+coordinate[1]+']"]').style = "background-color: " + currentColor;

  if(checkForWin()){
    gameOver();
  } else {
    switchPlayer();
  }
}

function checkForWin() {
  // Check vertical for win
  for(var row = 0; row < NUM_ROWS - 3; row++) {
    for(var col = 0; col < NUM_COLS; col++) {
      if(checkLine(board[row][col], board[row+1][col], board[row+2][col], board[row+3][col])) {
        return board[row][col];
      }
    }
  }

  // Check horizontal for win
  for(var row = 0; row < NUM_ROWS; row++) {
    for(var col = 0; col < NUM_COLS - 3; col++) {
      if(checkLine(board[row][col], board[row][col+1], board[row][col+2], board[row][col+3])) {
        return board[row][col];
      }
    }
  }

  // Check diagonal right and down
  for(var row = 0; row < NUM_ROWS - 3; row++) {
    for(var col = 0; col < NUM_COLS - 3; col++) {
      if(checkLine(board[row][col], board[row+1][col+1], board[row+2][col+2], board[row+3][col+3])) {
        return board[row][col];
      }
    }
  }

  // Check diagonal right and up
  for(var row = 3; row < NUM_ROWS; row++) {
    for(var col = 0; col < NUM_COLS - 3; col++) {
      if(checkLine(board[row][col], board[row-1][col+1], board[row-2][col+2], board[row-3][col+3])) {
        return board[row][col];
      }
    }
  }

  // Conditional helper function
  function checkLine(cond1, cond2, cond3, cond4) {
    return ((cond1 !== 0) && (cond1 === cond2) && (cond1 === cond3) && (cond1 === cond4));
  }
}

function removeColumnListeners() {
  let columns = document.querySelectorAll('.column');
  columns.forEach(column => column.removeEventListener('click', handleClick));
}

function gameOver() {
  removeColumnListeners();
  clearScoreboard();
  const gameOverMessage = document.createElement('h2');
  gameOverMessage.setAttribute('id', 'game-over');
  gameOverMessage.innerText = "Player " + sbData.activePlayer + " has won!";
  scoreBoard.appendChild(gameOverMessage);

  const playAgainButton = document.createElement('button');
  playAgainButton.setAttribute('id', 'play-again');
  playAgainButton.setAttribute('class', 'menuButton');
  playAgainButton.addEventListener('click', renderMenu);
  playAgainButton.textContent = 'Play Again!';
  scoreBoard.appendChild(playAgainButton);
}

function switchPlayer() {
  if(sbData.movesRemaining === 0){
    gameOver();
    renderTieGame();
  } else {
  sbData.activePlayer === 1 ? sbData.activePlayer = 2 : sbData.activePlayer = 1;
  updateActivePlayer();
  }
}

function renderTieGame() {
  const message = document.getElementById('game-over');
  message.textContent = "A tie game!?!  How'd you manage that?";
}

function cpuMoves() {
  let cpuMove = Math.floor(Math.random() * NUM_COLS);
  if(checkForValidMove(cpuMove)){
    document.getElementById(cpuMove).click();
  } else {
    cpuMoves();
  }
}

function updateActivePlayer() {
  document.getElementById('active-player').textContent = getPlayer() + "'s move";
  if(sbData.singlePlayer === true && sbData.activePlayer === 2) {
    cpuMoves();
  }
}

function renderMenu() {
  clearScoreboard();
  const numPlayerMessage = document.createElement('h2');
  numPlayerMessage.textContent = "How many players?";
  scoreBoard.appendChild(numPlayerMessage);

  for (let playerNum = 1; playerNum <= 2; playerNum++) {
    const currentPlayer = document.createElement('button');
    currentPlayer.setAttribute('id', 'player' + playerNum);
    currentPlayer.setAttribute('class', 'menuButton');
    currentPlayer.addEventListener('click', startGame);
    currentPlayer.textContent = playerNum + " Player";
    scoreBoard.appendChild(currentPlayer);
  }

  initializeStartingData();
  setActivePlayer();
}

function renderStartingBoard() {
  clearGameboard();
  // Build a column element
  for (let col = 0; col < NUM_COLS; col++) {
    let currColumn = document.createElement('div');
    currColumn.setAttribute('class', 'column');
    currColumn.setAttribute('id', col);
    gameBoard.appendChild(currColumn);

    //  Generate cell elements for current column
    for (let cell = 0; cell < NUM_ROWS; cell++) {
      let currCell = document.createElement('div');
      currCell.setAttribute('class', 'cell');
      currCell.setAttribute('data-coordinate', '['+cell+', '+col+']');
      document.getElementById(col).appendChild(currCell);
    }
  }
  initializeStartingData();
}

function clearGameboard() {
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild);
  }
}

function initializeStartingData() {
  board = [];
  for (let row = 0; row < NUM_ROWS; row++) {
    let currentRow = [];
    for (let col = 0; col < NUM_COLS; col++) {
      currentRow.push(0);
    }
    board.push(currentRow);
  }

  sbData = {
    activePlayer: Math.round(Math.random()) + 1,
    singlePlayer: false,
    movesRemaining: NUM_COLS * NUM_ROWS
  };
}

renderMenu();
