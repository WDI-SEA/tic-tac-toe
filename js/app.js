(function() {
  "use strict";
  var turn = 0;
  var xScore = 0;
  var oScore = 0;
  var draw = 0;
  var board = document.getElementById('board');
  var rows = document.querySelectorAll('tr');
  var cells = document.querySelectorAll('td');
  var playerTurn = document.getElementById('player-turn');
  //add an event listener to the board and pass the event for cell population.
  board.addEventListener('click', (cell) => {
    populateCell(cell);
  });
  var boardXScore = document.getElementById('x-score');
  var boardOScore = document.getElementById('o-score');
  var boardDraw = document.getElementById('draw-score');

  function resetBoard() {
    turn = 0;
    for (var i = 0; i < cells.length; i += 1) {
      cells[i].textContent = '';
    }
    playerTurn.innerText = "Ready for another one?";
  }
  //takes in an element clicked and changes the value accordint to which player clicked it
  function populateCell(cell) {
    if (checkIfFree(cell)) {
      if (turn % 2 === 0) {
        cell.target.innerText = 'X';
        cell.target.style = 'color:#F00';
        if (checkIfWon(turn % 2)) {
          xScore += 1;
          setTimeout(resetBoard, 1000);
          boardXScore.innerText = 'X games won: ' + xScore;
        }
      } else {
        cell.target.innerText = 'O';
        cell.target.style = 'color:#0F0';
        if (checkIfWon(turn % 2)) {

          oScore += 1;
          boardOScore.innerText = 'O games won:  ' + oScore;
          setTimeout(resetBoard, 1000);
        }
      }
      turn += 1;
    }
  }
  // Returns true if there is no text in the cell.
  function checkIfFree(cell) {
    if (cell.target.innerText === '') {
      return true;
    }
    return false;
  }
  function highlightPlayerTurn(player){
    playerTurn.innerText = 'It\'s ' +player+'\'s turn';
  }


  //scans through the entire board and checks for a winCondition.
  function checkIfWon(player) {
    var rowResult = [];
    var colResult = [];
    var diagRight = [];
    var diagLeft = [];
    var winCondition = null;
    var symbol = null;
    switch (player) {
      case 0:
        symbol = 'X';
        winCondition = 'XXX';
        highlightPlayerTurn('O');

        break;
      case 1:
        symbol = "O";
        winCondition = 'OOO';
        highlightPlayerTurn('X');
        break;
      default:
        console.log("Internal error: player unknown");
    }
    //loop through all the rows
    for (var i = 0; i < rows.length; i += 1) {
      var last = rows[i].cells.length - i - 1; // used for diagLeft - 1st row, last position, 2nd row, next to last position etc.
      //loop through all the cells in a row
      for (var j = 0; j < rows[i].cells.length; j += 1) {
        //checks how many like symbols a row contains and adds them to an array
        if (rows[i].cells[j].innerText === symbol) {
          rowResult.push(rows[i].cells[j].innerText);
        }
        //checks how many like symbols a column contains and adds them to an array
        if (rows[j].cells[i].innerText === symbol) {
          colResult.push(rows[j].cells[i].innerText);
        }
      }
      //checks how many like symbols are contained in the diagonals and adds them to an array
      diagLeft.push(rows[i].cells[last].innerText);
      diagRight.push(rows[i].cells[i].innerText);
      // if the content of row or column matche the winCondition returns true
      if (rowResult.join('') === winCondition || colResult.join('') === winCondition) {
        return true;
      }
      //clears row and column arays
      rowResult = [];
      colResult = [];
    }
    //if the content of the diagonals match the winCondition and return true
    if (diagRight.join('') === winCondition || diagLeft.join('') === winCondition) {
      return true;
    }
    //clear diagonal arrays
    diagRight = [];
    diagLeft = [];
    //increment draw variable upon a draw match and reset the board
    if (turn === 8) {
      draw += 1;
      boardDraw.innerText = 'Draw games: ' + draw;
      setTimeout(resetBoard, 1000);
    }
  }
}());
