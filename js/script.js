//blue D2FFFF or 9AEEEE
//yellow ffffd2

//kind of want to have them fade in like in DOM-stuff
// var generateBlock = function () {
  // if (document.querySelectorAll('div').length >= iterations) {
  //   return;
  //   }

var debug = true;

var clickCounter;

//here down: to DRY
var firstInput = document.getElementById("first");
var secondInput = document.getElementById("second");
var thirdInput = document.getElementById("third");
var fourthInput = document.getElementById("fourth");
var fifthInput = document.getElementById("fifth");
var sixthInput = document.getElementById("sixth");
var seventhInput = document.getElementById("seventh");
var eighthInput = document.getElementById("eighth");
var ninthInput = document.getElementById("ninth");

var click1 = firstInput.addEventListener('click', function() { 
  console.log("click!");
    }, false);

var click2 = secondInput.addEventListener('click', function() { 
  console.log("click2!");
    }, false);

var click3 = thirdInput.addEventListener('click', function() { 
  console.log("click3!");
    }, false);

var click4 = fourthInput.addEventListener('click', function() { 
  console.log("click4!");
    }, false);

var click5 = fifthInput.addEventListener('click', function() { 
  console.log("click5!");
    }, false);

var click6 = sixthInput.addEventListener('click', function() { 
  console.log("click6!");
    }, false);

var click7 = seventhInput.addEventListener('click', function() { 
  console.log("click7!");
    }, false);

var click8 = eighthInput.addEventListener('click', function() { 
  console.log("click8!");
    }, false);

var click9 = ninthInput.addEventListener('click', function() { 
  console.log("click9!");
    }, false);



//from josh's temp converter code!

var yellowOrBlue = function(click) {
  var blue;
  var yellow;

  if (debug)
    {console.log("yellowOrBlue");
  }
}