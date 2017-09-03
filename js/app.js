document.addEventListener('DOMContentLoaded', function() {

  console.log('javascript running');
  console.log('DOM loaded');

  var boxes = document.getElementsByClassName('box');
  var reset = document.querySelector('.reset');
  var gameMessage = document.getElementById('game-message');
  var gameboardOverlay = document.querySelector('.gameboard-overlay');
  var player = 'x';

  function addEventListeners() {
    reset.addEventListener('click', resetBoard);
    Array.from(boxes).forEach(function(box) {
      box.addEventListener('click', function() {
        takeTurn(this);
      });
    });
  }

  function takeTurn(box) {
    if (player === 'x') {
      box.classList.add('x');
      box.classList.add('overlay');
      box.title = 'x';
    }
    if (player === 'o') {
      box.classList.add('o');
      box.classList.add('overlay');
      box.title = 'o';
    }
    if (win()) {
      gameOver("win");
    } else if (tie()) {
      gameOver("tie");
    } else {
      if (player === 'x') {
        player = 'o';
      } else if (player === 'o') {
        player = 'x';
      }
      gameMessage.textContent = "It is player " + player.toUpperCase() + "'s turn!";
    }
  }

  function resetBoard() {
    Array.from(boxes).forEach(function(box)  {
      box.classList.remove('x');
      box.classList.remove('o');
      box.classList.remove('overlay');
      box.title = "";
    });
    reset.classList.remove('active');
    reset.textContent = "Reset Board";
    gameMessage.textContent = "It is player " + player.toUpperCase() + "'s turn!";
    gameboardOverlay.style.display = "none";
    player = 'x';
  }

  function win() {
    grid = getGrid();
    for (var i = 0; i < grid.length; i++) {
      if ((grid[i][0] === player && grid[i][1] === player && grid[i][2] === player)
       || (grid[0][i] === player && grid[1][i] === player && grid[2][i] === player)) {
        return true;
      }
    }
    if ((grid[0][0] === player && grid[1][1] === player && grid[2][2] === player)
     || (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player)) {
      return true;
    }
    // console.log(grid);
  }

  function getRows() {
    var row1 = document.getElementsByClassName('row-1');
    var row2 = document.getElementsByClassName('row-2');
    var row3 = document.getElementsByClassName('row-3');
    var rows = [row1[0], row2[0], row3[0]];
    return rows;
  }

  function getGrid() {
    var rows = getRows();
    var grid = [];
    for (var i = 0; i < rows.length; i++) {
      col1 = rows[i].children[0].title;
      col2 = rows[i].children[1].title;
      col3 = rows[i].children[2].title;
      grid.push([col1, col2, col3]);
    }
    return grid;
  }

  function tie() {
    grid = getGrid();
    for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === "") {
          return false;
        }
      }
    }
    return true;
  }

  function gameOver(winCondition) {
    if (winCondition === "win") {
      console.log(gameMessage.textContent);
      gameMessage.textContent = "Player " + player.toUpperCase() + " has won!";
      console.log(gameMessage.textContent);
    } else if (winCondition === "tie") {
      gameMessage.textContent = "It's a tie!";
    }
    gameboardOverlay.style.display = "inherit";
    reset.textContent = "Play Again?";
    reset.classList.add('active');
  }

  addEventListeners();

});
