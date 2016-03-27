//click different squares
//track moves

var debug = true;
var clickCounter = 0;
var turn;
var x = "x";
var o = "o";

var box = document.getElementsByClassName("box");

var consoleLogs = function() {
  clickCounter++;
  console.log("click");
  isEven();
}

for (var i = 0; i < box.length; i++) {
 box[i].addEventListener('click', consoleLogs, false);
}

//mark boxes alternate X & O

function isEven(clickCounter) {
  if (clickCounter % 2 === 0) 
    turn === "X"; 
} 


if (isEven === true) {
  this.document.getinnerHTML === x;
  classYellow;
} else {
  this.document.innerHTML === o;
  classBlue;
}
 
//add class to display separate colors

//first grabs id
//blue
var classBlue = document.addEventListener('click', function(e) {
  var id= e.target.id;
  var d;
  d=document.getElementById(id);
  d.className += " blue"; 
  d.innerHTML += "X";
});

//yellow

var classYellow = document.addEventListener('click', function(e) {
  var id= e.target.id;
  var d;
  d=document.getElementById(id);
  d.className += " yellow"; 
  d.innerHTML += "O";
});

//cell not able to be replayed
//Something something (null || clikced)


//reset button

