document.addEventListener('DOMContentLoaded', function() {

  console.log('javascript running');
  console.log('DOM loaded');

  var boxes = document.getElementsByClassName('box');
  var reset = document.querySelector('.reset');
  var set = document.querySelector('.set');
  var turnMessage = document.getElementById('player-turn-message');

  var player = 'x';

  function addEventListeners() {
    reset.addEventListener('click', resetBoard);
    Array.from(boxes).forEach(function(box) {
      box.addEventListener('click', function() {
        makeMove(this);
      });
    });
    set.addEventListener('click', function() {
      confirmMove();
    });
  }

  function makeMove(box) {
    
    if (player === 'x') {
      if (box.classList.contains('x')) {
        box.classList.remove('x');
        set.classList.remove('active');
      } else {
        box.classList.add('x');
        set.classList.add('active');
      }
    } else if (player === 'o') {
      if (box.classList.contains('o')) {
        box.classList.remove('o');
        set.classList.remove('active');
      } else {
        box.classList.add('o');
        set.classList.add('active');
      }
    }
    // containsX = box.classList.contains('x');
    // containsO = box.classList.contains('o');
    // if (containsX) {
    //   box.classList.remove('x');
    //   box.classList.add('o');
    // } else if (containsO) {
    //   box.classList.remove('o');
    //   box.classList.add('x');
    // } else {
    //   box.classList.add('x');
    // }
  }

  function resetBoard() {
    Array.from(boxes).forEach(function(box)  {
      box.classList.remove('x');
      box.classList.remove('o');
      box.classList.remove('overlay');
    });
    set.classList.remove('active');
    player = 'o';
  }

  function confirmMove() {
    if (set.classList.contains('active')) {
      Array.from(boxes).forEach(function(box) {
        containsX = box.classList.contains('x');
        containsO = box.classList.contains('o');
        if (containsX || containsO) {
          box.classList.add('overlay');
        }
        if (containsX) {
          box.title = 'x';
        }
        if (containsO) {
          box.title = 'o';
        }
      });
      if (win()) {
        alert(player + 'has won!');
      }
      if (player === 'x') {
        player = 'o';
      } else if (player === 'o') {
        player = 'x';
      }
      turnMessage.textContent = "It is player " + player.toUpperCase() + "'s turn!";
      set.classList.remove('active');
    }
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
    console.log(grid);
  }

  function getRows() {
    var row1 = document.getElementsByClassName('row-1');
    var row2 = document.getElementsByClassName('row-2');
    var row3 = document.getElementsByClassName('row-3');
    var rows = [row1[0], row2[0], row3[0]];
    console.log("Rows: " + rows);
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

  }

  addEventListeners();

});
