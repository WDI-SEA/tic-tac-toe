
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

container.addEventListener('click', function(event){
  event.preventDefault();
  count = count + 1;
  console.log(count);
});

a.addEventListener('click', function(event){
  event.preventDefault();
  if(count % 2 === 0) {
    a.classList.add('o');
    a.textContent = '';
  } else {
    a.classList.add('x');
    a.textContent = '';
  }
});

});

 a.removeEventListener('click', function(event){
    a.classList.add('o');
  });


//add x or o in box, keeps shifing boxes down

//center board
