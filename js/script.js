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
} else {
  this.document.innerHTML === o;
}
 
//add class to display separate colors

//this grabs id first

document.addEventListener('click', function(e) {
  var id= e.target.id;
  var myMinty=" minty"; 
  var d;
  d=document.getElementById(id);
  d.className=d.minty.replace(minty,""); 
  d.className = d.blue + blue; 
});

// snippet of code detailing how to add class
// var myClassName=" className"; //must keep a space before class name
// d.className=d.className.replace(myClassName,""); // first remove the class name if that already exists
// d.className = d.className + myClassName; // adding new class name



//cell not able to be replayed

//reset button

