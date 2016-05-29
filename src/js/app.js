console.log('Hello frontend');

// ======= Create Event Listeners =====//

document.addEventListener('DOMContentLoaded', function(){
  for (var i=0; i<=8; i++) {
    document.getElementById(i).addEventListener('mouseover', function(event){
      onMouse(event);
    });
    document.getElementById(i).addEventListener('mouseout', function(event){
      offMouse(event);
    });
    document.getElementById(i).addEventListener('click', function(event){
      clicked(event);
    });
  }
  // ================================= //
  document.getElementById("1P").addEventListener('click', function(event){
    event.preventDefault();
    console.log(event.path[0]);
    document.getElementById("1P").style.backgroundColor = "lightblue";
    document.getElementById("2P").style.backgroundColor = "white";
    mode = 0;
  });
  document.getElementById("2P").addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById("1P").style.backgroundColor = "white";
    document.getElementById("2P").style.backgroundColor = "lightblue";
    mode = 1;
  });
});

// ===== Event Listener Function Calls ===== //

function onMouse(cell) {
  var path = event.path[1].childNodes[1]
  if (path.textContent == "") {
    path.style.backgroundColor = "lightgrey";
  }
}

function offMouse(cell) {
  event.path[1].childNodes[1].style.backgroundColor = "white";
}

// ============== Main ================== //

var turn = 0;
var mode = 0;
var board = [
[,,],
[,,],
[,,]]

function clicked(cell) {
  var path = cell.path[1];
  // var thisCell = board[getCoor(path.id,1)][getCoor(path.id,2)];
  // var thisCell = board[Math.floor((path.id) / 3)][(path.id) % 3];
  // var thisCell = getCell(path.id);
  console.log(Math.floor((path.id) / 3), (path.id) % 3);
  console.log(getCell(path.id));

  if (getCell(path.id) == null) {
    var symbol = getSymbol();
    board[Math.floor((path.id) / 3)][(path.id) % 3] = symbol;

    // color symbol before placing it
    if (symbol == "X") {
      path.classList.add("x");
    } else {
      path.classList.add("o");
    }

    // Place symbol
    path.childNodes[1].textContent = symbol;
    turn ++;

    // If in single player... play computer
    if (mode == 0) {
      computerPlay();
      turn ++;
    }
  }
}


function getSymbol() {
  if (mode == 1) {
    if ((turn % 2) == 0) {
      return "X";
    } else {
      return "O";
    }
  }
  return "X";
}

function computerPlay() {
  console.log(Math.floor(Math.random()*9));
}

function getCell(num) {
  return board[Math.floor(num / 3)][num % 3];
}
