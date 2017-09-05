document.addEventListener('DOMContentLoaded', function() {

  console.log('javascript running');
  console.log('DOM loaded');

  var boxes = document.getElementsByClassName('box');
  var reset = document.querySelector('.reset');
  var playAi = document.querySelector('.play-ai')
  var gameMessage = document.getElementById('game-message');
  var gameboardOverlay = document.querySelector('.gameboard-overlay');
  var player = 'x';
  var ai = 'o';
  var vsAi = false;

  /* turn functionality */

  function takePlayerTurn(box) {
    if (player === 'x') {
      box.classList.add('x');
      box.classList.add('box-overlay');
      box.title = 'x';
    }
    if (player === 'o') {
      box.classList.add('o');
      box.classList.add('box-overlay');
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
      if (vsAi) {
        gameMessage.textContent = "It is AI " + player.toUpperCase() + "'s turn!";
        takeAiTurn();
      } else {
        gameMessage.textContent = "It is player " + player.toUpperCase() + "'s turn!";
      }
    }
  }

  function takeAiTurn() {
    gameboardOverlay.style.display = 'inherit';
    setTimeout(function() {
      var grid = getGridDOM();
      var rows = getRows();
      var move = generateValidMove();

      grid[move[0]][move[1]].title = 'o';
      grid[move[0]][move[1]].classList.add('o');
      grid[move[0]][move[1]].classList.add('box-overlay');
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
        gameboardOverlay.style.display = "none";
      }
    }, 1000);
  }

  function generateValidMove() {
    var validMove = false;
    var grid = getGridData();
    var randomMove;
    while (!validMove) {
      randomMove = [Math.floor(Math.random() * grid.length), Math.floor(Math.random() * grid.length)];
      if (grid[randomMove[0]][randomMove[1]] === "" && grid[randomMove[0]][randomMove[1]] !== 'x' && grid[randomMove[0]][randomMove[1]] !== 'o') {
        validMove = true;
      }
    }
    return randomMove;
  }

  /* grid data */

  function getRows() {
    var row1 = document.getElementsByClassName('row-1');
    var row2 = document.getElementsByClassName('row-2');
    var row3 = document.getElementsByClassName('row-3');
    var rows = [row1[0], row2[0], row3[0]];
    return rows;
  }

  function getGridDOM() {
    var rows = getRows();
    var grid = [];
    for (var i = 0; i < rows.length; i++) {
      col1 = rows[i].children[0];
      col2 = rows[i].children[1];
      col3 = rows[i].children[2];
      grid.push([col1, col2, col3]);
    }
    return grid;
  }

  function getGridData() {
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

  /* game ending conditionals */

  function win() {
    var grid = getGridData();
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
  }

  function highlightWinningCells() {
    var gridDOM = getGridDOM();
    var gridData = getGridData();
    for (var i = 0; i < gridData.length; i++) {
      if (gridData[i][0] === player && gridData[i][1] === player && gridData[i][2] === player) {
        console.log("did something");
        gridDOM[i][0].classList.add('winning-solution');
        gridDOM[i][1].classList.add('winning-solution');
        gridDOM[i][2].classList.add('winning-solution');
      } else if (gridData[0][i] === player && gridData[1][i] === player && gridData[2][i] === player) {
        gridDOM[0][i].classList.add('winning-solution');
        gridDOM[1][i].classList.add('winning-solution');
        gridDOM[2][i].classList.add('winning-solution');
      } else if (gridData[0][0] === player && gridData[1][1] === player && gridData[2][2] === player) {
        gridDOM[0][0].classList.add('winning-solution');
        gridDOM[1][1].classList.add('winning-solution');
        gridDOM[2][2].classList.add('winning-solution');
      } else if (gridData[0][2] === player && gridData[1][1] === player && gridData[2][0] === player) {
        gridDOM[2][0].classList.add('winning-solution');
        gridDOM[1][1].classList.add('winning-solution');
        gridDOM[0][2].classList.add('winning-solution');
      }
    }
  }

  function tie() {
    var grid = getGridData();
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
      highlightWinningCells();
      gameMessage.textContent = "Player " + player.toUpperCase() + " has won!";
    } else if (winCondition === "tie") {
      gameMessage.textContent = "It's a tie!";
    }
    gameboardOverlay.style.display = "inherit";
    reset.textContent = "Play Again?";
    reset.classList.add('active');
  }

  /* handlers */

  function addEventListeners() {
    reset.addEventListener('click', resetBoard);
    Array.from(boxes).forEach(function(box) {
      box.addEventListener('click', function() {
        takePlayerTurn(this);
      });
    });
    playAi.addEventListener('click', playVsAi);
  }

  function playVsAi() {
    resetBoard();
    if (vsAi) {
      vsAi = false;
      playAi.textContent = "Play AI";
    } else {
      vsAi = true;
      playAi.textContent = "Play Human";
    }
  }

  function resetBoard() {
    Array.from(boxes).forEach(function(box)  {
      box.classList.remove('x');
      box.classList.remove('o');
      box.classList.remove('box-overlay');
      box.classList.remove('winning-solution');
      box.title = "";
    });
    reset.classList.remove('active');
    reset.textContent = "Reset Board";
    player = 'x';
    gameMessage.textContent = "It is player " + player.toUpperCase() + "'s turn!";
    gameboardOverlay.style.display = "none";
  }

  addEventListeners();

});
