console.log('Hello front end');
document.addEventListener('DOMContentLoaded', function() {

// Variables
  var cell1 = document.getElementById('cell1');
  var cell2 = document.getElementById('cell2');
  var cell3 = document.getElementById('cell3');
  var cell4 = document.getElementById('cell4');
  var cell5 = document.getElementById('cell5');
  var cell6 = document.getElementById('cell6');
  var cell7 = document.getElementById('cell7');
  var cell8 = document.getElementById('cell8');
  var cell9 = document.getElementById('cell9');

  var msg = document.getElementById('msg');

  var counter = 0;

// Events
  cell1.addEventListener('click', function(){
    makeMark(cell1);
    console.log('cell clicked')
  });

  cell2.addEventListener('click', function(){
    makeMark(cell2);
  });

  cell3.addEventListener('click', function(){
    makeMark(cell3);
  });

  cell4.addEventListener('click', function(){
    makeMark(cell4);
  });

  cell5.addEventListener('click', function(){
    makeMark(cell5);
  });

  cell6.addEventListener('click', function(){
    makeMark(cell6);
  });

  cell7.addEventListener('click', function(){
    makeMark(cell7);
  });

  cell8.addEventListener('click', function(){
    makeMark(cell8);
  });

  cell9.addEventListener('click', function(){
    makeMark(cell9);
  });

// Game Play Functions
function makeMark(mark) {
  if (counter % 2 === 0 && mark.innerHTML === '') {
      mark.innerHTML = 'X';
      counter += 1;
      console.log(counter);
      cell1.classList.remove('inactive');
      mark.classList.add('highlightorange');
      msg.innerHTML = 'Player O, your turn...';

    } else if (counter % 2 !== 0 && mark.innerHTML === '') {
      mark.innerHTML = 'O';
      counter += 1;
      console.log(counter);
      mark.classList.remove('inactive');
      mark.classList.add('highlightpurple');
      msg.innerHTML = 'Player X, your turn...';
    }
  } // end makeMark





}); // end of DOMContentLoad
