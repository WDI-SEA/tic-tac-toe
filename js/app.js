//console.log('javascript running');

var row1 = document.getElementsByClassName('row1');
var row2 = document.getElementsByClassName('row2');
var row3 = document.getElementsByClassName('row3');
var col1 = document.getElementsByClassName('col1');
var col2 = document.getElementsByClassName('col2');
var col3 = document.getElementsByClassName('col3');
var diag1 = document.getElementsByClassName('diag1');
var diag2 = document.getElementsByClassName('diag2');
var turn = 'x';
var boxes = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];

var checkForWin = function (player) {
//rows
    if (row1[0].classList.contains(player) && row1[1].classList.contains(player) && row1[2].classList.contains(player)){
      alert('Winnner is' + player);
    }
    if (row2[0].classList.contains(player) && row2[1].classList.contains(player) && row2[2].classList.contains(player)){
      alert('Winnner is' + player);
    }
    if (row3[0].classList.contains(player) && row3[1].classList.contains(player) && row3[2].classList.contains(player)){
      alert('Winnner is' + player);
    }
//columns
    if (col1[0].classList.contains(player) && col1[1].classList.contains(player) && col1[2].classList.contains(player)){
      alert('Winnner is' + player);
    }
    if (col2[0].classList.contains(player) && col2[1].classList.contains(player) && col2[2].classList.contains(player)){
      alert('Winnner is' + player);
    }
    if (col3[0].classList.contains(player) && col3[1].classList.contains(player) && col3[2].classList.contains(player)){
      alert('Winnner is' + player);
    }
//diags
    if (diag1[0].classList.contains(player) && diag1[1].classList.contains(player) && diag1[2].classList.contains(player)){
      alert('Winnner is' + player);
    }
    if (diag2[0].classList.contains(player) && diag2[1].classList.contains(player) && diag2[2].classList.contains(player)){
      alert('Winnner is' + player);
    }
}

var addLogo = function() {
  //console.log(this.classList.contains('claim'))
  if (turn === 'x' && !this.classList.contains('claim')) {
    this.classList.add("boxbackrebel");
    this.classList.add('claim');
    this.classList.add('x');
    checkForWin(turn);
    turn = 'o';
  }

  if(turn === 'o' && !this.classList.contains('claim')) {
    this.classList.add("boxbackempire");
    this.classList.add('claim');
    this.classList.add('o');
    checkForWin(turn);
    turn = 'x';
  }
}

document.addEventListener("DOMContentLoaded", function() {
  //console.log("DOM loaded");
  boxes.forEach(function(box) {
  document.getElementById(box).addEventListener('click', addLogo);
  })
});

function myFunction() {
    location.reload();
}
