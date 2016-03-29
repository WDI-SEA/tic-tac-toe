//functions at top
//make a game loop that holds ALL OTHER FUNCTIONS

var clickCounter = 0;

//from Emilie tying everything together
// function gameLoop(e){
//   isEmpty(e);
//   isEven(e);
// }

//all this for functional code (not DRY)
var firstInput = document.getElementById("first");
var secondInput = document.getElementById("second");
var thirdInput = document.getElementById("third");
var fourthInput = document.getElementById("fourth");
var fifthInput = document.getElementById("fifth");
var sixthInput = document.getElementById("sixth");
var seventhInput = document.getElementById("seventh");
var eighthInput = document.getElementById("eighth");
var ninthInput = document.getElementById("ninth");

var click1 = firstInput.addEventListener('click', isEmpty, false);

var click2 = secondInput.addEventListener('click', isEmpty, false);

var click3 = thirdInput.addEventListener('click', isEmpty, false);

var click4 = fourthInput.addEventListener('click', isEmpty, false);

var click5 = fifthInput.addEventListener('click', isEmpty, false);

var click6 = sixthInput.addEventListener('click', isEmpty, false);

var click7 = seventhInput.addEventListener('click', isEmpty, false);

var click8 = eighthInput.addEventListener('click', isEmpty, false);

var click9 = ninthInput.addEventListener('click', isEmpty, false);


//click only once 
function isEmpty(e) {
  var isEmpty = document.getElementById(e.target.id).innerHTML === "";
  if (isEmpty === true) {
    isEven(e); 
  } else {
    return;
  }
}

//mark boxes alternate X & O
function isEven(e) {
  clickCounter++;
  if (clickCounter % 2 === 0) {
    classYellow(e);
    getWinner();
    d=document.getElementById("message");
    d.innerHTML = "Player X's Turn!";
    
  } else {
    classBlue(e);  
    getWinner();
    d=document.getElementById("message");
    d.innerHTML = "Player O's Turn!"; 
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

// getWinner function works
function getWinner() {
  if(firstInput.innerHTML === "X" && secondInput.innerHTML === "X" && thirdInput.innerHTML === "X" ||
    fourthInput.innerHTML === "X" && fifthInput.innerHTML === "X" && sixthInput.innerHTML === "X" ||
    seventhInput.innerHTML === "X" && eighthInput.innerHTML === "X" && ninthInput.innerHTML === "X" ||
    firstInput.innerHTML === "X" && fourthInput.innerHTML === "X" && seventhInput.innerHTML === "X" ||
    secondInput.innerHTML ==="X" && fifthInput.innerHTML === "X" && eighthInput.innerHTML === "X" ||
    thirdInput.innerHTML === "X" && sixthInput.innerHTML === "X" && ninthInput.innerHTML === "X" ||
    firstInput.innerHTML === "X" && fifthInput.innerHTML === "X" && ninthInput.innerHTML === "X" ||
    thirdInput.innerHTML === "X" && fifthInput.innerHTML === "X" && seventhInput.innerHTML === "X") {
      d=document.getElementById("message");
      d.innerHTML = "Player X wins!"; 
  } else if (firstInput.innerHTML === "O" && secondInput.innerHTML === "O" && thirdInput.innerHTML === "O" ||
    fourthInput.innerHTML === "O" && fifthInput.innerHTML === "O" && sixthInput.innerHTML === "O" ||
    seventhInput.innerHTML === "O" && eighthInput.innerHTML === "O" && ninthInput.innerHTML === "O" ||
    firstInput.innerHTML === "O" && fourthInput.innerHTML === "O" && seventhInput.innerHTML === "O" ||
    secondInput.innerHTML ==="O" && fifthInput.innerHTML === "O" && eighthInput.innerHTML === "O" ||
    thirdInput.innerHTML === "O" && sixthInput.innerHTML === "O" && ninthInput.innerHTML === "O" ||
    firstInput.innerHTML === "O" && fifthInput.innerHTML === "O" && ninthInput.innerHTML === "O" ||
    thirdInput.innerHTML === "O" && fifthInput.innerHTML === "O" && seventhInput.innerHTML === "O") {
      d=document.getElementById("message");
      d.innerHTML = "Player O wins!"; 
  } else if (
    firstInput.innerHTML != "" && secondInput.innerHTML != "" && thirdInput.innerHTML != "" && 
    fourth.innerHTML != "" && fifthInput.innerHTML != "" && sixthInput.innerHTML != "" && 
    seventhInput.innerHTML != "" && eighthInput.innerHTML != "" && ninthInput.innerHTML != "")
   {
    alert("Cat's game!");
  } else { console.log("no winner yet");
  }
}

//AI code

