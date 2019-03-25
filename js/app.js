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
var colorScheme = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

var roundNo = 0;
var lastOutcome = -2;
var numTiles = 9;
var whoseTurn = 0;
var numPlayers = 2;
var player001 = {
  char: chars[Math.round(Math.random() * 33)],
  teamColor: colorScheme[Math.round(Math.random() * 12)],
  score: 0,
  flippedIds: []
}
var player002 = {
  char: chars[Math.round(Math.random() * 33)],
  teamColor: colorScheme[Math.round(Math.random() * 12)],
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
  for (i = 0; i < numTiles; i++) {
    cellData.pop();
  }
  for (i = 0; i < numTiles; i++) {
    cellData.push(undefined);
  }

  //TRIGGER WHOSETURN DISPLAY
  var whoseTurnDisplayElem = document.getElementById("whoseturndisplay");
  whoseTurnDisplayElem.textContent = ("Team " + players[whoseTurn].char + "'s turn");
  console.log("Team " + players[whoseTurn].char + "'s color is colorOpt" + players[whoseTurn].teamColor);
  whoseTurnDisplayElem.classList.add("colcolorOpt" + players[whoseTurn].teamColor)

  var alertcenter = document.getElementById("alertcenter");
  alertcenter.textContent = "";
  console.log("lastOutcome =", lastOutcome);
  switch (true) {
    case (lastOutcome + 1):
    console.log("removing winner class");
    alertcenter.classList.remove("alertWinner");
      break;
    case lastOutcome === -1:
    alertcenter.classList.remove("draw");
      break;
    default:
  }
  alertcenter.classList.add("noalerts");

  roundNo++;
  console.log(roundNo);
  //RESET MARKED CELLS ARRAY
  if (roundNo !== 1) {
    for (i = 0; i < players.length; i++) {
      console.log("resetting Team " + players[i].char + "'s flippedIds " + players[i].flippedIds.length);
      for (j = players[i].flippedIds.length; j > 0; j--) {
        console.log(players[i].flippedIds);
        //cell number only
        var resetCellNo = players[i].flippedIds.pop();
        console.log(players[i].flippedIds, resetCellNo);
        var resetCellElem = document.getElementById("c" + resetCellNo);
        resetCellElem.setAttribute("data-turn", "false");
        console.log("made cell", resetCellNo, resetCellElem.getAttribute("data-turn"));
        console.log("attempting to remove", resetCellNo, "color class colorOpt" + players[i].teamColor);
        resetCellElem.classList.remove("colorOpt" + players[i].teamColor);
        console.log("attempting to add color class 'unmarked'");
        resetCellElem.classList.add("unmarked");
        resetCellElem.textContent = "";
        console.log(players[i].flippedIds.length);
      }
      console.log(players[i].flippedIds);
    }
  }



  //CHANGE BACK FLIPPED VALUES OF ELEMENTS
  // for (h = 0; h < numTiles; h++) {
  //   var hCell = document.getElementById("c" + (h + 1));
  //   console.log(hCell);
  //   hCell.setAttribute("data-turn", "false");
  //   console.log(hCell.getAttribute("data-turn"));
  //   hCell.classList.remove("colorOpt" + players[whoseTurn].teamColor);
  // }

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
  selectedTile.setAttribute("data-turn", "true");
  console.log("now", selectedTile.getAttribute("data-turn"));

  //CHANGE COLOR OF CLICKED CELL TO TEAM COLOR
  selectedTile.classList.remove("unmarked");
  selectedTile.classList.add("colorOpt" + players[whoseTurn].teamColor);
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
  console.log("before check, markedCellCount", markedCellCount);

  //checks for current player's win
  switch (true) {
    case (
      cellData[0] === whoseTurn && cellData[1] === whoseTurn && cellData[2] === whoseTurn
    ):
    console.log("WIN CELLS 1 2 3");
    endGame(whoseTurn);
    return;
      break;
    case (
      cellData[3] === whoseTurn && cellData[4] === whoseTurn && cellData[5] === whoseTurn
    ):
    console.log("WIN CELLS 4 5 6");
    endGame(whoseTurn);
    return;
      break;
    case (
      cellData[6] === whoseTurn && cellData[7] === whoseTurn && cellData[8] === whoseTurn
    ):
    console.log("WIN CELLS 7 8 9");
    endGame(whoseTurn);
    return;
      break;
    case (
      cellData[0] === whoseTurn && cellData[3] === whoseTurn && cellData[6] === whoseTurn
    ):
    console.log("WIN CELLS 1 4 7");
    endGame(whoseTurn);
    return;
      break;
    case (
      cellData[1] === whoseTurn && cellData[4] === whoseTurn && cellData[7] === whoseTurn
    ):
    console.log("WIN CELLS 2 5 8");
    endGame(whoseTurn);
    return;
      break;
    case (
      cellData[2] === whoseTurn && cellData[5] === whoseTurn && cellData[8] === whoseTurn
    ):
    console.log("WIN CELLS 3 6 9");
    endGame(whoseTurn);
    return;
      break;
    case (
      cellData[0] === whoseTurn && cellData[4] === whoseTurn && cellData[8] === whoseTurn
    ):
    console.log("WIN CELLS 1 5 9");
    endGame(whoseTurn);
    return;
      break;
    case (
      cellData[2] === whoseTurn && cellData[4] === whoseTurn && cellData[6] === whoseTurn
    ):
    console.log("WIN CELLS 3 5 7");
    endGame(whoseTurn);
    return;
      break;
    default: console.log("no win do nothing");
  }
  for (i = 0; i < numPlayers; i++) {
    // console.log(players[i].flippedIds.length);
    markedCellCount = markedCellCount + (players[i].flippedIds.length);
    console.log("After adding " + players[i].char + "'s cells, total marked cells is " + markedCellCount);
  }
  if (markedCellCount === 9) {
    endGame(-1);
    return;
  }
}

function endGame(victorNo) {
  lastOutcome = victorNo;
  console.log("after team", victorNo, "win, lastOutcome =", lastOutcome);
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

  //REMOVE WHOSETURN DISPLAY
  var whoseTurnDisplayElem = document.getElementById("whoseturndisplay");
  whoseTurnDisplayElem.classList.remove("colorOpt" + whoseTurn);
  whoseTurnDisplayElem.textContent = "";


  if (victorNo === -1) {
    console.log("DRAW RATS");
    var alertCtrElem = document.getElementById("alertcenter");
    alertCtrElem.textContent = "DRAW. RATS.";
    alertCtrElem.classList.remove("noalerts");
    alertCtrElem.classList.add("draw");
  } else {
    console.log("Congrats on win, Team", players[victorNo].char);
    //DISPLAY WIN MESSAGE
    var alertCtrElem = document.getElementById("alertcenter");
    alertCtrElem.textContent = "Congrats on the win, Team " + players[victorNo].char;
    alertCtrElem.classList.remove("noalerts");
    alertCtrElem.classList.add("alertWinner");

    //ADD TO SCORE OF WINNING TEAM
    players[victorNo].score = players[victorNo].score + 1;
    console.log("Team", players[victorNo].char, "score now", players[victorNo].score);
    //DISPLAY NEW SCORE ON BOARD

  }
  markedCellCount = 0;
}
