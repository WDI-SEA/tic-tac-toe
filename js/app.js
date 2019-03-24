document.addEventListener('DOMContentLoaded', function() {
  //add event handler for start/reset button
  var newMatchButton = document.getElementById("newmatchbutton");
  newMatchButton.addEventListener("click", newMatchEvents);
});

var ame = "\u96E8";
var arashi = "\u5D50";
var awa = "\u6CE1";
var chi = "\u5730";
var doro = "\u6CE5";
var ha = "\u8449";
var hana = "\u83EF";
var hara = "\u539F";
var hatake = "\u7551";
var hayashi = "\u6797";
var hikari = "\u5149";
var hinata = "\u967D";
var homura = "\u7114";
var honoo = "\u708E";
var hyou = "\u96F9";
var iwa = "\u5CA9";
var izumi = "\u6CC9";
var kaminari = "\u96F7";
var kiri = "\u9727";
var kumo = "\u96F2";
var mizu = "\u6C34";
var moe = "\u71C3";
var mori = "\u68EE";
var nami = "\u6CE2";
var numa = "\u6CBC";
var sakura = "\u685C";
var shimo = "\u971C";
var sora = "\u7a7a";
var suna = "\u7802";
var taki = "\u6EDD";
var tsuchi = "\u571F";
var uzu = "\u6E26";
var yama = "\u5C71";
var yuki = "\u96EA";
var chars = [
  ame, arashi, awa, chi, doro, ha, hana, hara, hatake, hayashi, hikari, hinata, homura, honoo, hyou, iwa, izumi, kaminari, kiri, kumo, mizu, moe, mori, nami, numa, sakura, shimo, sora, suna, taki, tsuchi, uzu, yama, yuki
]
var numTiles = 9;
var whoseTurn = 0;
var numPlayers = 2;
var player001 = {
  char: shimo,
  teamColor: "red",
  score: 0,
  flippedIds: []
}
var player002 = {
  char: homura,
  teamColor: "blue",
  score: 0,
  flippedIds: []
}
var players = [
  player001,
  player002
]
//CELL DATA HOLDERS -- DATUM POSITION CORRESPONDS TO CELL NUMBER
var cellData = [];
for (i = 0; i < numTiles; i++) {
  cellData.push(undefined);
}

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

  var selectedTileNo = Number(selectedTile.getAttribute("id").slice(1,selectedTile.getAttribute("id").length));
  //ADD TO PLAYER'S SELECTED TILES ARRAY
  players[whoseTurn].flippedIds.push(selectedTileNo);
  console.log(players[whoseTurn].flippedIds);
  //CHANGE CELL DATA ARRAY ITEM TO REFLECT WHICH PLAYER OWNS CELL
  cellData[selectedTileNo - 1] = whoseTurn;
  console.log("Cell " + selectedTileNo + " owned by players[" + (cellData[selectedTileNo - 1]) + "].");
}

function checkGameEndCondition() {
  console.log("brb checking if someone won");
  var markedCellCount = 0;
  console.log("markedCellCount", markedCellCount);

  //checks for current player's win
  switch (true) {
    case (
      cellData[0] === whoseTurn && cellData[1] === whoseTurn && cellData[2] === whoseTurn
    ):
    endGame(whoseTurn);
    return;
      break;
    case (
      cellData[3] === whoseTurn && cellData[4] === whoseTurn && cellData[5] === whoseTurn
    ):
    endGame(whoseTurn);
    return;
      break;
    case (
      cellData[6] === whoseTurn && cellData[7] === whoseTurn && cellData[8] === whoseTurn
    ):
    endGame(whoseTurn);
    return;
      break;
    case (
      cellData[0] === whoseTurn && cellData[3] === whoseTurn && cellData[6] === whoseTurn
    ):
    endGame(whoseTurn);
    return;
      break;
    case (
      cellData[1] === whoseTurn && cellData[4] === whoseTurn && cellData[7] === whoseTurn
    ):
    endGame(whoseTurn);
    return;
      break;
    case (
      cellData[2] === whoseTurn && cellData[5] === whoseTurn && cellData[8] === whoseTurn
    ):
    endGame(whoseTurn);
    return;
      break;
    case (
      cellData[0] === whoseTurn && cellData[4] === whoseTurn && cellData[8] === whoseTurn
    ):
    endGame(whoseTurn);
    return;
      break;
    case (
      cellData[2] === whoseTurn && cellData[4] === whoseTurn && cellData[6] === whoseTurn
    ):
    endGame(whoseTurn);
    return;
      break;
    default: console.log("no win do nothing");
  }
  for (i = 0; i < numPlayers; i++) {
    console.log(players[i].flippedIds.length);
    markedCellCount = markedCellCount + (players[i].flippedIds.length);
    console.log("After adding " + players[i].char + "'s cells, total marked cells is " + markedCellCount);
  }
  if (markedCellCount === 9) {
    endGame(-1);
    return;
  }
}

function endGame(victorNo) {
  //MAKE ALL CELLS UNCLICKABLE
  //COME BACK AND OPTIMIZE
  c1.removeEventListener("click", cellClickedEvents);
  c2.removeEventListener("click", cellClickedEvents);
  c3.removeEventListener("click", cellClickedEvents);
  c4.removeEventListener("click", cellClickedEvents);
  c5.removeEventListener("click", cellClickedEvents);
  c6.removeEventListener("click", cellClickedEvents);
  c7.removeEventListener("click", cellClickedEvents);
  c8.removeEventListener("click", cellClickedEvents);
  c9.removeEventListener("click", cellClickedEvents);

  console.log("All cells now unclickable");
  console.log("Game end under way");

  if (victorNo === -1) {
    console.log("DRAW RATS");
  } else {
    console.log("Congrats on win, Team", players[victorNo].char);
    //DISPLAY WIN MESSAGE


    //ADD TO SCORE OF WINNING TEAM
    players[victorNo].score = players[victorNo].score + 1;
    console.log("Team", players[victorNo].char, "score now", players[victorNo].score);
    //DISPLAY NEW SCORE ON BOARD

  }
}

console.log("c1 marked is", c1.getAttribute("data-turn"));
