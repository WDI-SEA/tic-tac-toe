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

  function addEventListeners() {
    reset.addEventListener('click', resetBoard);
    Array.from(boxes).forEach(function(box) {
      box.addEventListener('click', function() {
        takePlayerTurn(this);
      });
    });
    playAi.addEventListener('click', playVsAi);
  }

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
      gameMessage.textContent = "It is player " + player.toUpperCase() + "'s turn!";
      if (vsAi) {
        takeAiTurn();
      }
    }
  }

  function resetBoard() {
    Array.from(boxes).forEach(function(box)  {
      box.classList.remove('x');
      box.classList.remove('o');
      box.classList.remove('box-overlay');
      box.title = "";
    });
    reset.classList.remove('active');
    reset.textContent = "Reset Board";
    player = 'x';
    gameMessage.textContent = "It is player " + player.toUpperCase() + "'s turn!";
    gameboardOverlay.style.display = "none";

  }

  function win() {
    var grid = getGrid();
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
    console.log(grid);
  }

  function playVsAi() {
    if (vsAi) {
      vsAi = false;
      console.log('did something');
      playAi.textContent = "Play AI";
    } else {
      vsAi = true;
      console.log('did something else');
      playAi.textContent = "Play Human";
    }
  }

  function takeAiTurn() {
    gameboardOverlay.style.display = 'inherit';
    setTimeout(function() {
      var grid = [];
      var rows = getRows();
      var move = generateValidMove();
      for (var i = 0; i < rows.length; i++) {
        col1 = rows[i].children[0];
        col2 = rows[i].children[1];
        col3 = rows[i].children[2];
        grid.push([col1, col2, col3]);
      }
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
    }, 2000);
  }

  function generateValidMove() {
    var validMove = false;
    var grid = getGrid();
    var randomMove;
    while (!validMove) {
      randomMove = [Math.floor(Math.random() * grid.length), Math.floor(Math.random() * grid.length)];
      if (grid[randomMove[0]][randomMove[1]] === "" && grid[randomMove[0]][randomMove[1]] !== 'x' && grid[randomMove[0]][randomMove[1]] !== 'o') {
        validMove = true;
      }
    }
    console.log(randomMove);
    return randomMove;
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
    var grid = getGrid();
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
