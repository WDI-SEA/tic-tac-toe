function TicTacToe() {
  this.newGame();
}

TicTacToe.prototype = {
  
}

TicTacToe.prototype.newGame = function() {
  // Reset each cell.
  $(".cell").each(function(i, el) {
    el.textContent = "_";
  });

  // New games are not over, and X always has the first turn.
  this.isGameOver = false;
  this.turn = "X";
  this.winner = undefined;

  this.announceTurn();
};

TicTacToe.prototype.takeTurn = function(cell) {
  // Prevent players from taking turns after the game is over.
  if (this.isGameOver) {
    return
  }

  var isChanged = this.toggleCell(cell);

  if (isChanged) {
    this.assertWinner();

    if (this.isGameOver) {
      this.announceWinner();
    } else {
      this.nextTurn();
    }
  }
};

// Changes a cell to the current turn.
// Returns true if the cell was changed.
// Returns false if the cell could not be changed.
TicTacToe.prototype.toggleCell = function(cell) {
  var value = cell.textContent;

  if (value != "X" && value != "O") {
    // Set the value of the box to the current turn.
    cell.textContent = this.turn;
    return true;
  }
  return false;
};

TicTacToe.prototype.nextTurn = function() {
  // Set the turn to the opposite value.
  if (this.turn == "X") {
    this.turn = "O";
  } else {
    this.turn = "X";
  }

  this.announceTurn();
};

TicTacToe.prototype.assertWinner = function() {
  // Check each row.
  this.checkLine(0, 1, 2);
  this.checkLine(3, 4, 5);
  this.checkLine(6, 7, 8);

  // Check each column.
  this.checkLine(0, 3, 6);
  this.checkLine(1, 4, 7);
  this.checkLine(2, 5, 8);

  // Check top-left to bottom-right diagonal
  this.checkLine(0, 4, 8);

  // Check top-right to bottom-left diagonal
  this.checkLine(2, 4, 6);
};

TicTacToe.prototype.checkLine = function(c0, c1, c2) {
  var id0 = "#cell" + c0;
  var id1 = "#cell" + c1;
  var id2 = "#cell" + c2;

  if ($(id0).text() === $(id1).text() &&
      $(id1).text() === $(id2).text() &&
      $(id0).text() !== "_") {
    this.winner = $(id0).text();
    this.isGameOver = true;
  }
}

TicTacToe.prototype.announceTurn = function() {
  $("#winner").text(this.turn + "'s turn.");
};

TicTacToe.prototype.announceWinner = function() {
  $("#winner").text(this.winner + " won!");
};

