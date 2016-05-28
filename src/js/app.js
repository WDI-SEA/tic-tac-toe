console.log('Hello front end');
document.addEventListener('DOMContentLoaded', function() {

var cell1 = document.getElementById('cell1');
var cell2 = document.getElementById('cell2');
var cell3 = document.getElementById('cell3');
var cell4 = document.getElementById('cell4');
var cell5 = document.getElementById('cell5');
var cell6 = document.getElementById('cell6');
var cell7 = document.getElementById('cell7');
var cell8 = document.getElementById('cell8');
var cell9 = document.getElementById('cell9');

var inactive = cell1.classList.contains('inactive');

var counter = 0;

  cell1.addEventListener('click', function(event){
    alert('X goes first!');
    event.preventDefault(event);
    mark();


  });

function mark() {
  if (counter % 2 === 0 && inactive) {
      cell1.innerHTML = 'X';
      counter += 1;
      console.log(counter);
      cell1.classList.remove('inactive');
      cell1.classList.add('highlightorange');
    } else if (counter % 2 !== 0 && inactive){
      cell1.innerHTML = 'O';
      counter += 1;
      console.log(counter);
      cell1.classList.remove('inactive');
      cell1.classList.add('highlightpurple');
    }
  }

});
