var turn = 'X';
var winCount = 0;

var div1 = document.getElementById('cell1');
var div2 = document.getElementById('cell2');
var div3 = document.getElementById('cell3');
var div4 = document.getElementById('cell4');
var div5 = document.getElementById('cell5');
var div6 = document.getElementById('cell6');
var div7 = document.getElementById('cell7');
var div8 = document.getElementById('cell8');
var div9 = document.getElementById('cell9');

var selector = document.querySelectorAll('.square');

for (var i = 0; i < selector.length; i++) {
  selector[i].addEventListener('click', function(event) {
    if (winCount === 1) {
      return;
    } else {
      if (event.target.played) {
        return;
      }
      event.target.innerHTML = turn;
      if (turn === 'X') {
        turn = 'O'
        event.target.className = 'square x'
      } else {
        turn = 'X'
        event.target.className = 'square o'
    }
  }
    event.target.played = 'true';
    winCheck();
  });
};

var reset = document.getElementById('reset');

reset.addEventListener('click', function(){
  for (var i = 0; i < selector.length; i++) {
    selector[i].played = '';
    selector[i].innerHTML = '';
    selector[i].className = 'square';
  }
  winCount = 0
  turn = 'X'
})

function winCheck() {
  for (var i = 0; i < selector.length; i++) {
    if (div1.innerHTML === 'X' && div2.innerHTML === 'X' && div3.innerHTML === 'X') {
      console.log('x wins');
      winCount = 1;
      return;
    } else if (div4.innerHTML === 'X' && div5.innerHTML === 'X' && div6.innerHTML === 'X') {
      console.log('x wins');
      winCount = 1;
      return;
    } else if (div7.innerHTML === 'X' && div8.innerHTML === 'X' && div9.innerHTML === 'X') {
      console.log('x wins');
      winCount = 1;
      return;
    } else if (div1.innerHTML === 'X' && div4.innerHTML === 'X' && div7.innerHTML === 'X') {
      console.log('x wins');
      winCount = 1;
      return;
    } else if (div2.innerHTML === 'X' && div5.innerHTML === 'X' && div8.innerHTML === 'X') {
      console.log('x wins');
      winCount = 1;
      return;
    } else if (div3.innerHTML === 'X' && div6.innerHTML === 'X' && div9.innerHTML === 'X') {
      console.log('x wins');
      winCount = 1;
      return;
    } else if (div1.innerHTML === 'X' && div5.innerHTML === 'X' && div9.innerHTML === 'X') {
      console.log('x wins');
      winCount = 1;
      return;
    } else if (div3.innerHTML === 'X' && div5.innerHTML === 'X' && div7.innerHTML === 'X') {
      console.log('x wins');
      winCount = 1;
      return;
    } else if (div1.innerHTML === 'O' && div2.innerHTML === 'O' && div3.innerHTML === 'O') {
      console.log('o wins');
      winCount = 1;
      return;
    } else if (div4.innerHTML === 'O' && div5.innerHTML === 'O' && div6.innerHTML === 'O') {
      console.log('o wins');
      winCount = 1;
      return;
    } else if (div7.innerHTML === 'O' && div8.innerHTML === 'O' && div9.innerHTML === 'O') {
      console.log('o wins');
      winCount = 1;
      return;
    } else if (div1.innerHTML === 'O' && div4.innerHTML === 'O' && div7.innerHTML === 'O') {
      console.log('o wins');
      winCount = 1;
      return;
    } else if (div2.innerHTML === 'O' && div5.innerHTML === 'O' && div8.innerHTML === 'O') {
      console.log('o wins');
      winCount = 1;
      return;
    } else if (div3.innerHTML === 'O' && div6.innerHTML === 'O' && div9.innerHTML === 'O') {
      console.log('o wins');
      winCount = 1;
      return;
    } else if (div1.innerHTML === 'O' && div5.innerHTML === 'O' && div9.innerHTML === 'O') {
      console.log('o wins');
      winCount = 1;
      return;
    } else if (div3.innerHTML === 'O' && div5.innerHTML === 'O' && div7.innerHTML === 'O') {
      console.log('o wins');
      winCount = 1;
      return;
    }
  }
}
