document.addEventListener('DOMContentLoaded', function() {
  //add event handler for start/reset button
  var newMatchButton = document.getElementById("newmatchbutton");
  newMatchButton.addEventListener("click", newMatchEvents);
})

var ame = "\u96E8"
var arashi = "\u5D50";
var doro = "\u6CE5"
var ha = "\u8449";
var hana = "\u83EF"
var hinata = "\u967D"
var honoo = "\u708E";
var iwa = "\u5CA9";
var mori = "\u68EE"
var sora = "\u7a7a"
var taki = "\u6EDD";
var uzu = "\u6E26";
var yuki = "\u96EA";

var numTiles = 9;
var whoseTurn = 0;
var numPlayers = 2;
var player001 = {
  char: yuki,
  score: 0,
  flippedIds: []
}
var player002 = {
  char: hana,
  score: 0,
  flippedIds: []
}
var players = [
  player001,
  player002
]

function turnChange() {
  console.log("whoseTurn was", whoseTurn);
  if (whoseTurn < numPlayers - 1) {
    whoseTurn += 1;
  } else {
    whoseTurn = 0;
  }
  console.log("whoseTurn is now", whoseTurn);
}



var cellClickedEvents = function() {
  //MAKE CELL UNCLICKABLE
  this.removeEventListener("click", cellClickedEvents);

  //MARK BOX CLICKED
  markCellClicked(this);

  //DISPLAY X OR O MARK IN CELL
  displayXO(this);

  //ADD CELL ID TO X'S OR O'S MARKED ARRAY
  addCellToMarkedArray(this);

  //CHECK FOR WIN CONDITION
  checkGameEndCondition(whoseTurn);

  turnChange();
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

function markCellClicked(selectedTile) {
  console.log("Cell", selectedTile.getAttribute("id"), "has been clicked. Changing from", selectedTile.getAttribute("data-turn"));

  //MARK HTML DATA AS CLICKED
  selectedTile.setAttribute("data-turn", "true")

  console.log("now", selectedTile.getAttribute("data-turn"));
}

function displayXO(selectedTile) {
  selectedTile.textContent = players[whoseTurn].char;
}

function addCellToMarkedArray(selectedTile) {
  console.log("add to " + players[whoseTurn].char + "'s array");
  players[whoseTurn].flippedIds.push(Number(selectedTile.getAttribute("id").slice(1,selectedTile.getAttribute("id").length)));
  console.log(players[whoseTurn].flippedIds);
}

function checkGameEndCondition() {
  console.log("brb checking if someone won");
  var markedCellCount = 0;
  console.log("markedCellCount", markedCellCount);

  //checks for current player's win
  if (players[whoseTurn]) {
    //check for presence of two opposite corner marks

    //return;
  } else {
    //check for three in a row hor or vert

  }
  for (i = 0; i < numPlayers; i++) {
    console.log(players[i].flippedIds.length);
    markedCellCount = markedCellCount + (players[i].flippedIds.length);
    console.log("After adding " + players[i].char + "'s score, total is " + markedCellCount);
  }
  if (markedCellCount === 9) {
    endGame(-1);
  }
}

function endGame(victorNo) {
  //MAKE ALL CELLS UNCLICKABLE


  console.log("All cells now unclickable");
  console.log("Game end under way");

  if (victorNo === -1) {
    console.log("DRAW RATS");
  } else {
    console.log("Congrats on win, Team", players[victorNo].char);
    //DISPLAY WIN MESSAGE

    //ADD TO SCORE OF WINNING TEAM

  }
}

console.log("c1 marked is", c1.getAttribute("data-turn"));
