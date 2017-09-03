document.addEventListener('DOMContentLoaded', function() {

  console.log('javascript running');
  console.log('DOM loaded');

  var boxes = document.getElementsByClassName('box');
  var reset = document.querySelector('.reset');
  var set = document.querySelector('.set');
  var winner;
  var won = false;

  function addEventListeners() {
    reset.addEventListener('click', resetBoard);
    Array.from(boxes).forEach(function(box) {
      box.addEventListener('click', function() {
        changeBox(this);
      });
    });
    set.addEventListener('click', setOverlay);
  }

  function changeBox(box) {
    containsX = box.classList.contains('x');
    containsO = box.classList.contains('o');
    if (containsX) {
      box.classList.remove('x');
      box.classList.add('o');
    } else if (containsO) {
      box.classList.remove('o');
      box.classList.add('x');
    } else {
      box.classList.add('x');
    }
    set.classList.add('active');
  }

  function resetBoard() {
    Array.from(boxes).forEach(function(box)  {
      box.classList.remove('x');
      box.classList.remove('o');
      box.classList.remove('overlay');
    });
    set.classList.remove('active');
  }

  function setOverlay() {
    Array.from(boxes).forEach(function(box) {
      containsX = box.classList.contains('x');
      containsO = box.classList.contains('o');
      if (containsX || containsO) {
        box.classList.add('overlay');
      }
    });
    set.classList.remove('active');
  }

  function checkWinCondition() {
    rowOne = document.getElementsByClassName('row-1');
    rowTwo = document.getElementsByClassName('row-2');
    rowThree = document.getElementsByClassName('row-3');
    grid = [rowOne, rowTwo, rowThree];
    //horizontal
    Array.for(grid).forEach(function(row) {
      if (row[0] === row[1] && row[1] === row[2]) {
        containsX = row[0].classList.contains('x');
        containsO = row[0].classList.contains('o');
        if (containsX) {
          winner = "X";
          won = true;
        } else if (containsO) {
          winner = "O";
          won = true;
        }
      }
    });
  }

  addEventListeners();

});
