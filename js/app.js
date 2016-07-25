//declare variables for all elements that need some type of interaction
var container = document.getElementById("container");
var btn = document.getElementById("btn");
var boxes = document.getElementsByClassName("box");
var count = 0;
var combinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];
//different combinations to win
var arrayO = [];
var arrayX = [];

//start eventlistener for boxes
container.addEventListener("click", function(e) {
  var target = e.target || e.srcElement; //.srcElement Supports IE6-8

  //if element has class attribute and does not equal clicked
    if (target.getAttribute("class") && !target.getAttribute("clicked")) {

    if (!(count % 2)) { //take every other turn
      count += 1;
      target.innerHTML = "O"; //change HTML to O in box
      target.setAttribute("clicked", "o"); //set attributes to property of clicked, and value of o
      arrayO.push(parseInt(target.getAttribute("id"))); //gotta use parseInt since getAttribute returns a string
    } else {
      count += 1;
      target.innerHTML = "X"; //change HTML to X in box
      target.setAttribute("clicked", "x"); //set attributes to property of clicked, and value of x
      arrayX.push(parseInt(target.getAttribute("id")));
    }

    winner();
    if (arrayO.length + arrayX.length === 9) { 
      alert("No winner! Play again!");
      reset();
    } //reset if no one is the winner when all 9 boxes are filled

  }

}); //end of eventlistener for boxes

//check for a winner
function winner() {
  for (var i = 0; i < combinations.length; i++) {
    if (combinations[i].every(function(e) {
        return arrayX.indexOf(e) !== -1
      })) //check if all elements of combination[i] are found in arrayX 
    {
      alert("Player X is the winner!");
      reset();
    } else if (combinations[i].every(function(e) {
        return arrayO.indexOf(e) !== -1 //check if all elements of combination[i] are found in arrayO 
      })) {
      alert("Player O is the winner!");
      reset();
    }
  }
}; //end of winner check function

function reset() {

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].removeAttribute("clicked");
    arrayX = [];
    arrayO = [];
    count = 0;
  }
}; //end of function for resetting the boxes

btn.addEventListener("click", function() {
  reset();
}); //end of eventlistener to reset boxes