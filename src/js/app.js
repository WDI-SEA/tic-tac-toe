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

  var inactive = document.getElementsByClassName('inactive');

  // console.log(inactive);

  var counter = 0;

  cell1.addEventListener('click', function(){
    alert('X goes first!');
    // event.preventDefault(event);
    makeMark(cell1);
  });

  cell2.addEventListener('click', function(){
    alert('X goes first!');
    // event.preventDefault(event);
    makeMark(cell2);
  });

function makeMark(mark) {
  if (counter % 2 === 0 && mark.innerHTML === '') {
      mark.innerHTML = 'X';
      counter += 1;
      console.log(counter);
      cell1.classList.remove('inactive');
      mark.classList.add('highlightorange');
    } else if (counter % 2 !== 0 && mark.innerHTML === '') {
      mark.innerHTML = 'O';
      counter += 1;
      console.log(counter);
      mark.classList.remove('inactive');
      mark.classList.add('highlightpurple');
    }
  }

});
