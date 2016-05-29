
document.addEventListener('DOMContentLoaded', function() {

  var container = document.getElementById('container');

  var count = 0;

  var array = [
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
    }
    else {
      square.classList.add('x');
      square.textContent = 'X';
    }

    count = count + 1;
    square.removeEventListener('click', move);
  };

  for (var i = 0; i < array.length; i++) {
    array[i].addEventListener('click', move);
  };

  reset.addEventListener('click', function(event){
    for (var i = 0; i < array.length; i++){
      array[i].classList.remove('x');
      array[i].classList.remove('o');
      array[i].innerHTML = "&nbsp;";
      count = 0;
      array[i].addEventListener('click', move);
    };
  });

});

//center board
