
document.addEventListener('DOMContentLoaded', function() {
  console.log('dom loaded');

  var container = document.getElementById('container');

  var count = 0;

  var a = document.getElementById('a');
  var b = document.getElementById('b');
  var c = document.getElementById('c');
  var d = document.getElementById('d');
  var e = document.getElementById('e');
  var f = document.getElementById('f');
  var g = document.getElementById('g');
  var h = document.getElementById('h');
  var j = document.getElementById('j');

  var reset = document.getElementById('reset');

  var array = [a, b, c, d, e, f, g, h, j];

  function move(event) {
    var square = event.currentTarget;
    if(count % 2 === 0) {
    square.classList.add('o');
    square.textContent = 'O';
    count = count + 1;
    console.log(count);
    square.removeEventListener('click', move);
  } else {
    square.classList.add('x');
    square.textContent = 'X';
    count = count + 1;
    console.log(count);
    square.removeEventListener('click', move);
  }
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
