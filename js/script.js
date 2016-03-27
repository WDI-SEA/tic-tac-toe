//click different squares
//track moves

var debug = true;
var clickCounter = 0;
var turn;
var x = "x";
var o = "o";


//all dis for functional code 
var firstInput = document.getElementById("first");
var secondInput = document.getElementById("second");
var thirdInput = document.getElementById("third");
var fourthInput = document.getElementById("fourth");
var fifthInput = document.getElementById("fifth");
var sixthInput = document.getElementById("sixth");
var seventhInput = document.getElementById("seventh");
var eighthInput = document.getElementById("eighth");
var ninthInput = document.getElementById("ninth");

var click1 = firstInput.addEventListener('click', function(e) { 
  clickCounter++;
  clickedBox(e);
  }, false);

var click2 = secondInput.addEventListener('click', function(e) { 
  clickCounter++;
  clickedBox(e);
  }, false);

var click3 = thirdInput.addEventListener('click', function(e) { 
  clickCounter++;
  clickedBox(e);
    }, false);

var click4 = fourthInput.addEventListener('click', function(e) { 
  clickCounter++;
  clickedBox(e);
    }, false);

var click5 = fifthInput.addEventListener('click', function(e) { 
  clickCounter++;
  clickedBox(e);
    }, false);

var click6 = sixthInput.addEventListener('click', function(e) { 
  clickCounter++;
  clickedBox(e);
    }, false);

var click7 = seventhInput.addEventListener('click', function(e) { 
  clickCounter++;
  clickedBox(e);
    }, false);

var click8 = eighthInput.addEventListener('click', function(e) { 
  clickCounter++;
  clickedBox(e);
    }, false);

var click9 = ninthInput.addEventListener('click', function(e) { 
  clickCounter++;
  clickedBox(e);
    }, false);


//this runs every time any of the divs is clicked
var clickedBox = function(e) {
  console.log("click");
  isEven(e);
}


//remnant from running through each element using select by ID
// for (var i = 0; i < box.length; i++) {
//  box[i].addEventListener('click', clickedBox, false);
// }


//mark boxes alternate X & O

//dis checks for turn
function isEven(e) {
  if (clickCounter % 2 === 0) {
    classYellow(e);
  } else {
  classBlue(e);   
  }
} 

//these make the the pretty HTMl and the pretty background

// yellow
var classYellow = function(e) {
  var id= e.target.id;
  var d;
  d=document.getElementById(id);
  d.className += " yellow"; 
  d.innerHTML += "O";
};

//blue
var classBlue = function(e) {
  var id= e.target.id;
  var d;
  d=document.getElementById(id);
  d.className += " blue"; 
  d.innerHTML += "X";
};

