console.log('Hello frontend');

// ======= Create Event Listeners =====/

document.addEventListener('DOMContentLoaded', function(){
  for (var i=1; i<=9; i++) {
    document.getElementById("grid-" + i).addEventListener('mouseover', function(event){
      onMouse(event);
    });
    document.getElementById("grid-" + i).addEventListener('mouseout', function(event){
      offMouse(event);
    });
    document.getElementById("grid-" + i).addEventListener('click', function(event){
      clicked(event);
    });
  }
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

function clicked(cell) {
  var path = cell.path[1].childNodes[1]
  if (path.textContent == "") {
    // var symbol = getSymbol();
    var symbol = "X";
    if (symbol == "X") {
      path.classList.add("x");
    } else {
      path.classList.add("o");
    }
    path.textContent = symbol;
    turn ++;
  }
}

function getSymbol() {
  var symbolBool = turn % 2
  if (symbolBool == 1) {
    return "O";
  } else {
    return "X";
  }
}
