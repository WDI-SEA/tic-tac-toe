document.addEventListener('DOMContentLoaded', function() {
  newMatchEvents();
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
];
const NUM_OFFERED_COLOR_SCHEMES = 13;
var colorScheme = [];
for (var i = 0; i < NUM_OFFERED_COLOR_SCHEMES; i++) {
  colorScheme.push(i + 1);
}

var numPlayers = 2;
var numPlayersNextRound = 2;
var gamePlayers = [];

class Player {
  constructor(char, teamColor, score, flippedIds) {
    this.char = char;
    this.teamColor = teamColor;
    this.score = score;
    this.flippedIds = flippedIds;
  }
}

//   char: chars[Math.ceil(Math.random() * 33)],
//   teamColor: colorScheme[Math.ceil(Math.random() * 12)],
function initializeGame(numPlayers) {
  var unchosenColors = [];
  for (var i = 0; i < numPlayers; i++) {
    var newPlayer = new Player(chars[i], colorScheme[i], 0, []);
    players.push(newPlayer);
  }
}

var roundNo = 0;
var lastOutcome = -2;
var cellsNum = 9;
var cellsAll = [];
var whoseTurn = 0;

console.log(`cellsAll = ${cellsAll}`);

var players = [];
// CELL DATA HOLDERS -- DATUM POSITION CORRESPONDS TO CELL NUMBER
var cellData = [];
for (i = 0; i < cellsNum; i++) {
  cellData.push(undefined);
}

initializeGame(numPlayers);

function turnChange() {
  console.log("whoseTurn was", whoseTurn);
  var whoseTurnDisplayElem = document.getElementById("whoseturndisplay");
  whoseTurnDisplayElem.classList.remove(`colorOpt${players[whoseTurn].teamColor}`);
  if (whoseTurn < numPlayers - 1) {
    whoseTurn += 1;
  } else {
    whoseTurn = 0;
  }
  console.log(`whoseTurn is now ${whoseTurn}`);
  whoseTurnDisplayElem.textContent = `Team ${players[whoseTurn].char}'s turn`;
  whoseTurnDisplayElem.classList.add(`colorOpt${players[whoseTurn].teamColor}`);
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
  if (lastOutcome === -2) {
    turnChange();
  }
}

//COME BACK AND OPTIMIZE
for (var i = 0; i < cellsNum; i++) {
  var cellToListen = document.getElementById(`c${i + 1}`);
  cellsAll.push(cellToListen);
}
console.log(`cellsAll = ${cellsAll}`);

//DO WHEN "NEW MATCH" BUTTON CLICKED
function newMatchEvents() {
  console.log("New match has begun HELLOOOOOOOOOOOO");
  for (i = 0; i < cellsNum; i++) {
    cellData.pop();
  }
  for (i = 0; i < cellsNum; i++) {
    cellData.push(undefined);
  }

  //TRIGGER WHOSETURN DISPLAY
  var whoseTurnDisplayElem = document.getElementById("whoseturndisplay");
  whoseTurnDisplayElem.textContent = (`Team ${players[whoseTurn].char}'s turn`);

  //WHOSETURN COLOR TS
  console.log(`Team ${players[whoseTurn].char}'s color is colorOpt${players[whoseTurn].teamColor} and the class is ${whoseTurnDisplayElem.classList}`);
  console.log(`TO CHANGE CLASS FROM ${whoseTurnDisplayElem.classList} to NEW`);
  whoseTurnDisplayElem.classList.add(`colorOpt${players[whoseTurn].teamColor}`);

  var alertcenter = document.getElementById("alertcenter");
  alertcenter.textContent = "";
  console.log("lastOutcome =", lastOutcome);
  switch (true) {
    case (lastOutcome + 1) > 0:
    console.log("removing winner class");
    alertcenter.classList.remove("alertWinner");
      break;
    case (lastOutcome + 1) === 0:
    alertcenter.classList.remove("draw");
      break;
    default:
  }
  alertcenter.classList.add("noalerts");

  lastOutcome = -2;

  roundNo++;
  console.log(roundNo);
  //RESET MARKED CELLS ARRAY
  if (roundNo !== 1) {
    for (i = 0; i < players.length; i++) {
      console.log(`resetting Team ${players[i].char}'s flippedIds ${players[i].flippedIds.length}`);
      for (j = players[i].flippedIds.length; j > 0; j--) {
        console.log(players[i].flippedIds);
        //cell number only
        var resetCellNo = players[i].flippedIds.pop();
        console.log(players[i].flippedIds, resetCellNo);
        var resetCellElem = document.getElementById(cellsAll[resetCellNo]);
        console.log(cellsAll[resetCellNo - 1]);
        cellsAll[resetCellNo - 1].setAttribute("data-turn", "false");
        cellsAll[resetCellNo - 1].classList.remove(`colorOpt${players[i].teamColor}`)
        cellsAll[resetCellNo - 1].classList.add("unmarked");
        cellsAll[resetCellNo - 1].textContent = "";
        console.log(players[i].flippedIds.length);
      }
      console.log(players[i].flippedIds);
    }
  }

  // MAKE EVENT LISTENERS ON ALL CELLS
  for (var i = 0; i < cellsNum; i++) {
    (cellsAll[i]).addEventListener("click", cellClickedEvents);
  }
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

  //UPDATE SCORE
  var victorScore = document.querySelectorAll("#scoreboard scoreP" + victorNo);
  console.log(victorScore);

  //MAKE ALL CELLS UNCLICKABLE
  for (var i = 0; i < cellsNum; i++) {
    (cellsAll[i]).removeEventListener("click", cellClickedEvents);
  }

  console.log("All cells now unclickable");
  console.log("Game end under way");

  //REMOVE WHOSETURN DISPLAY
  console.log();
  var whoseTurnDisplayElem = document.getElementById("whoseturndisplay");
  whoseTurnDisplayElem.classList.remove("colorOpt" + players[whoseTurn].teamColor);
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
    console.log("victorNo =" + (victorNo + 1));
    //DISPLAY NEW SCORE ON BOARD
    var winningPlayerScore = document.getElementById("s" + (victorNo + 1));
    console.log("winningPlayerScore =" + winningPlayerScore);
    winningPlayerScore.textContent = players[victorNo].score;
  }
  markedCellCount = 0;
}
