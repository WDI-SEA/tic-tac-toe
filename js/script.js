//click different squares
//track moves


//functions at top
//make a game loop that holds ALL OTHER FUNCTIONS


var clickCounter = 0;
var turn;


//from Emilie tying everything together
// function gameLoop(e){
//   isEmpty(e);
//   isEven(e);
// }


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
  isEmpty(e);
  }, false);

var click2 = secondInput.addEventListener('click', function(e) { 
  isEmpty(e);
  }, false);

var click3 = thirdInput.addEventListener('click', function(e) { 
  isEmpty(e);
    }, false);

var click4 = fourthInput.addEventListener('click', function(e) { 
  isEmpty(e);
    }, false);

var click5 = fifthInput.addEventListener('click', function(e) { 
  isEmpty(e);
    }, false);

var click6 = sixthInput.addEventListener('click', function(e) { 
  isEmpty(e);
    }, false);

var click7 = seventhInput.addEventListener('click', function(e) { 
  isEmpty(e);
    }, false);

var click8 = eighthInput.addEventListener('click', function(e) { 
  isEmpty(e);
    }, false);

var click9 = ninthInput.addEventListener('click', function(e) { 
  isEmpty(e);
    }, false);


//click only once 
function isEmpty(e) {
  var isEmpty = document.getElementById(e.target.id).innerHTML === "";
  if (isEmpty === true) {
    isEven(e); 
  } else {
    console.log("clicked box already d00d");
  }
}

//mark boxes alternate X & O

//dis checks for turn
function isEven(e) {
  clickCounter++;
  if (clickCounter % 2 === 0) {
    classYellow(e);
    // getWinner();
  } else {
  classBlue(e);  
  // getWinner(); 
  }
} 

//these make the the pretty HTMl and the pretty background

// yellow
var classYellow = function(e) {
  var id = e.target.id;
  var d;
  d=document.getElementById(id);
  d.className += " yellow"; 
  d.innerHTML += "O";
};

//blue
var classBlue = function(e) {
  var id=e.target.id;
  var d;
  d=document.getElementById(id);
  d.className += " blue"; 
  d.innerHTML += "X";
};

//clear boxes
function clearBoxes() {
  var boxes = document.getElementsByClassName("box");
  for(var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].className = "box";
  }
}


// function getWinner() {
//   if(firstInput === "X" && secondInput === "X" && thirdInput === "X" ||
//     fourthInput === "X" && fifthInput === "X" && sixthInput === "X" ||
//     seventhInput === "X" && eighthInput === "X" && ninthInput === "X" ||
//     firstInput === "X" && fourthInput === "X" && seventhInput === "X" ||
//     secondInput ==="X" && fifthInput === "X" && eighthInput === "X" ||
//     thirdInput === "X" && sixthInput === "X" && ninthInput === "X" ||
//     firstInput === "X" && fifthInput === "X" && ninthInput === "X" ||
//     thirdInput === "X" && fifthInput === "X" && seventhInput === "X" ||) {
//     alert("Winner is X!");
//   } else if(firstInput === "O" && secondInput === "O" && thirdInput === "O" ||
//     fourthInput === "O" && fifthInput === "O" && sixthInput === "O" ||
//     seventhInput === "O" && eighthInput === "O" && ninthInput === "O" ||
//     firstInput === "O" && fourthInput === "O" && seventhInput === "O" ||
//     secondInput ==="O" && fifthInput === "O" && eighthInput === "O" ||
//     thirdInput === "O" && sixthInput === "O" && ninthInput === "O" ||
//     firstInput === "O" && fifthInput === "O" && ninthInput === "O" ||
//     thirdInput === "O" && fifthInput === "O" && seventhInput === "O" ||) {
//     alert("Winner is O!");
//   } else {
//     alert("Cat's game");
//   }
// }


