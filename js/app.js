document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded!");
  /* ------------ DOM REFS -------------- */
  let moveGrid = document.querySelector("#move-grid");
  let resetBtn = document.getElementById("reset");
  let gameStatus = document.querySelector(".turn-status");

  /* ------------ GAME LOGIC VARIABLES ------------- */
  let gameOver = false;
  let currentTurn = "X";
  let boardState = ["", "", "", "", "", "", "", "", ""];
  let winCombinations = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  /* --------- EVENT LISTENERS ---------- */
  resetBtn.addEventListener("click", reset);
  moveGrid.addEventListener("click", cellClick);

  gameStatus.innerHTML = `${currentTurn}'s turn to pick`;

  function cellClick(e) {
    console.log(e.target);
    const clickedCell = e.target;
    // Take the data cell index of clicked grid spot and convert to integer
    const clickedCellIndex = parseInt(
      clickedCell.getAttribute("data-cell-index")
    );
    // If Cell has already been clicked, or the game is over, ignore the click
    if (boardState[clickedCellIndex] !== "" || gameOver) {
      return;
    } else {
      playCell(clickedCell, clickedCellIndex);
      checkWin();
    }
    console.log(boardState);
  }

  function playCell(clickedCell, clickedCellIndex) {
    // Add clicked cell to our boardState array with the value of whoever's turn it is
    boardState[clickedCellIndex] = currentTurn;
    clickedCell.innerHTML = `<div class="centered">${currentTurn}</div>`;
  }

  function changeTurn() {
    currentTurn = currentTurn === "X" ? "O" : "X";
    gameStatus.innerHTML === `It's ${currentTurn}'s turn to pick`;
  }

  function checkWin() {
    let roundWon = false;
    for (let i = 0; i < winCombinations.length; i++) {
      const winCombination = winCombinations[i];
      let caseA = boardState[winCombination[0]];
      let caseB = boardState[winCombination[1]];
      let caseC = boardState[winCombination[2]];
      console.log(caseA, caseB, caseC);
      if (caseA === "" || caseB === "" || caseC === "") {
        continue;
      }
      if (caseA === caseB && caseB === caseC) {
        roundWon = true;
        break;
      }
    }
    if (roundWon) {
      gameStatus.innerText = `Congradulations, ${currentTurn} wins!`;
      gameOver = true;
      return;
    }

    changeTurn();
  }

  function reset() {
    gameOver = false;
    currentTurn = "X";
    boardState = ["", "", "", "", "", "", "", "", ""];
    gameStatus.innerHTML = `It's ${currentTurn}'s turn to pick`;
    // clear game grid
    document
      .querySelectorAll(".grid-box")
      .forEach((cell) => (cell.innerHTML = ""));
  }
});
