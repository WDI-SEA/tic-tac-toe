document.addEventListener('DOMContentLoaded', function() {
  //add event handler for start/reset button
  var newMatchButton = document.getElementById("newmatchbutton");
  newMatchButton.addEventListener("click", newMatchEvents);
})

var isXsTurn = true;

function turnChange() {
  console.log("runnin'");
  console.log("isXsTurn was", isXsTurn);
  if (isXsTurn) {
    isXsTurn = false;
  } else {
    isXsTurn = true;
  }
  console.log("isXsTurn is now", isXsTurn);
}

var cellClickedEvents = function() {
  //MARK BOX CLICKED
  turnChange();
  console.log("Cell", this.getAttribute("id"), "has been clicked. Changing from", this.getAttribute("data-turn"));

  //MARK HTML DATA AS CLICKED
  this.setAttribute("data-turn", "true");

  console.log("now", this.getAttribute("data-turn"));

  //DISPLAY X OR O MARK IN CELL


  //ADD CELL ID TO X'S OR O'S MARKED ARRAY

  //PASS ARG TO REPRESENT TEAM X OR Y
  if (isXsTurn) {
    checkWinCondition();
  } else {
    checkWinCondition();
  }
  //CHECK FOR WIN CONDITION


  //MAKE CELL UNCLICKABLE


  //MAKE IT WHOMEVER"S TURN
  turnChange;
  console.log("HIIIII");
}

//COME BACK AND OPTIMIZE
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");
var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");

console.log("Hello frontend");
console.log(c1.getAttribute("data-turn"));




//DO WHEN "NEW MATCH" BUTTON CLICKED
function newMatchEvents() {
  console.log("New match has begun");

  //MAKE EVENT LISTENERS ON ALL CELLS
  //COME BACK AND OPTIMIZE
  c1.addEventListener("click", cellClickedEvents);
  c2.addEventListener("click", cellClickedEvents);
  c3.addEventListener("click", cellClickedEvents);
  c4.addEventListener("click", cellClickedEvents);
  c5.addEventListener("click", cellClickedEvents);
  c6.addEventListener("click", cellClickedEvents);
  c7.addEventListener("click", cellClickedEvents);
  c8.addEventListener("click", cellClickedEvents);
  c9.addEventListener("click", cellClickedEvents);
}

function markCellClicked() {
  console.log("Cell", this.getAttribute("id"), "has been clicked. Changing from");
  console.log(this.getAttribute("data-turn"));


  //MARK HTML DATA AS CLICKED
  this.setAttribute("data-turn", "true")

  console.log(this, "now", this.getAttribute("data-turn"));
}

function displayXO() {

}

function addCellToMarkedArray(isXsTurn) {

}

function checkWinCondition() {

}

function endGame() {
  console.log("Game end under way");

  //MAKE ALL CELLS UNCLICKABLE


  //DISPLAY WIN MESSAGE


  //ADD TO SCORE OF WINNING TEAM

}



console.log(c1.getAttribute("data-turn"));
