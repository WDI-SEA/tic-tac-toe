//blue D2FFFF or 9AEEEE
//yellow ffffd2

//kind of want to have them fade in like in DOM-stuff
// var generateBlock = function () {
  // if (document.querySelectorAll('div').length >= iterations) {
  //   return;
  //   }
var clickCounter;

var firstBoxInput = document.getElementById("firstBox");
var secondBoxInput = document.getElementById("secondBox");
var thirdBoxInput = document.getElementById("thirdBox");
var fourthBoxInput = document.getElementById("fourthBox");
var fifthBoxInput = document.getElementById("fifthBox");
var sixthBoxInput = document.getElementById("sixthBox");
var seventhBoxInput = document.getElementById("seventhBox");
var eighthBoxInput = document.getElementById("eighthBox");
var ninthBoxInput = document.getElementById("ninthBox");

// function blue() {
//   document.body.style.backgroundColor = #D2FFFF
// };

firstBoxInput.addEventListener('click', function() { 
  console.log("click!");
  //console clicks back!
    }, false);

secondBoxInput.addEventListener('click', function() { 
  console.log("click2!");
  //console doesn't click back!
    }, false);

//anywhosier, this isn't changing the background color... yet!
