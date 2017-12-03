(function() {
  "use strict";
  var turn = 0;
  var xScore = 0;
  var oScore = 0;
  var draw = 0;

  var board = document.getElementById('board');
  var rows = document.querySelectorAll('tr');
  var cells = document.querySelectorAll('td');
  board.addEventListener('click', (cell) => {
    populateCell(cell);
  });

  function resetBoard() {
    turn = 0;

    console.log('reseting board');
    for (var i = 0; i < cells.length; i += 1) {
      cells[i].textContent = '';
      console.log(cells[i]);
    }
  }

  //takes in an element clicked and changes the value accordint to which player clicked it
  function populateCell(cell) {
    if (checkIfFree(cell)) {
      if (turn % 2 === 0) {
        cell.target.innerText = 'X';
        if (checkIfWon(turn % 2)) {
          xScore += 1;
          console.log('resetting Board X won');
          setTimeout(resetBoard, 1000);
          console.log('xscore ' + xScore);
        }
      } else {
        cell.target.innerText = 'O';
        if (checkIfWon(turn % 2)) {
          oScore += 1; 
          console.log('resetting Board O won');
          setTimeout(resetBoard, 1000);
          console.log('Oscore ' + oScore);
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
        winCondition = 'XXX'
        break;
      case 1:
        symbol = "O";
        winCondition = 'OOO'
    }
    for (var i = 0; i < rows.length; i += 1) {
      var last = rows[i].cells.length - i - 1;
      for (var j = 0; j < rows[i].cells.length; j += 1) {
        if (rows[i].cells[j].innerText === symbol) {
          rowResult.push(rows[i].cells[j].innerText);
        }
        if (rows[j].cells[i].innerText === symbol) {
          colResult.push(rows[j].cells[i].innerText);
        }
      }
      diagLeft.push(rows[i].cells[last].innerText);
      diagRight.push(rows[i].cells[i].innerText);
      if (rowResult.join('') === winCondition || colResult.join('') === winCondition) {
        return true;
      }
      //clear row and column arays
      rowResult = [];
      colResult = [];
    }
    if (diagRight.join('') === winCondition || diagLeft.join('') === winCondition) {
      return true;
    }
    //clear diagonal arrays
    diagRight = [];
    diagLeft = [];
    console.log('turn',turn)
    //increment draw variable upon a draw match and reset the board
    if (turn === 8) {
      draw += 1;
      console.log('resetting Board - Draw');
      setTimeout(resetBoard, 1000);
    }
  }

  function getAllIndexes(arr, val) {
    var indexes = []
    var index = -1;
    while ((iindex = arr.indexOf(val, index + 1)) != -1) {
      indexes.push(i);
    }
    return indexes;
  }
}());
