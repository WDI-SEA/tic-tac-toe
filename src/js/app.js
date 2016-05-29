document.addEventListener('DOMContentLoaded', function() {

  var count = 0;

  var squares = [
    document.getElementById('a'),
    document.getElementById('b'),
    document.getElementById('c'),
    document.getElementById('d'),
    document.getElementById('e'),
    document.getElementById('f'),
    document.getElementById('g'),
    document.getElementById('h'),
    document.getElementById('j')
  ];

  var reset = document.getElementById('reset');

  function move(event) {
    var square = event.currentTarget;

    if (count % 2 === 0) {
      square.classList.add('o');
      square.textContent = 'O';
    } else {
      square.classList.add('x');
      square.textContent = 'X';
    }

    count = count + 1;
    square.removeEventListener('click', move);
  }

  squares.forEach(function(square) {
    square.addEventListener('click', move);
  });

  reset.addEventListener('click', function() {
    squares.forEach(function (square){
      square.classList.remove('x');
      square.classList.remove('o');
      square.innerHTML = "&nbsp;";
      square.addEventListener('click', move);
      count = 0;
    });
  });

});
