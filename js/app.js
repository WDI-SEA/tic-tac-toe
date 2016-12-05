// js booted
console.log('Hello frontend');
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");
  whoGoes();
});

//decide whos turn
var count = 3;
var turn = "x";

function whosTurn() {
  if (count % 2 === 0) {
    turn = "x";
  } else if (count % 2 !== 0) {
    turn = "o";
  }
  count++;
  whoGoes();
  return (turn);
};

//say whos turn
function whoGoes(){
  var player = document.getElementById("player");
  if (turn =="x"){
    player.textContent = "It is X's turn"
  } else if (turn =="o") {
    player.textContent = "It is O's turn"
  }
}



// click handlers for the buttons
document.getElementById("tl").addEventListener("click", function() {
  console.log("tl");
  if (turn == "x") {
    tl.classList.add("x");
    this.removeEventListener("click", function(){});
  } else if (turn == "o") {
    tl.classList.add("o");
    this.removeEventListener("click", function(){});
  }
  whosTurn();
});

document.getElementById("tm").addEventListener("click", function() {
  console.log("tm");
  if (turn == "x") {
    tm.classList.add("x");
    // this.removeEventListener("click", function(){});
  } else if (turn == "o") {
    tm.classList.add("o");
    // this.removeEventListener("click", function(){});
  }
  whosTurn();
});

document.getElementById("tr").addEventListener("click", function() {
  console.log("tr");
  if (turn == "x") {
    tr.classList.add("x");
    // this.removeEventListener("click", function(){});
  } else if (turn == "o") {
    tr.classList.add("o");
    // this.removeEventListener("click", function(){});
  }
  whosTurn();
});

document.getElementById("ml").addEventListener("click", function() {
  console.log("ml");
  if (turn == "x") {
    ml.classList.add("x");
    // this.removeEventListener("click", function(){});
  } else if (turn == "o") {
    ml.classList.add("o");
    // this.removeEventListener("click", function(){});
  }
  whosTurn();
});

document.getElementById("mm").addEventListener("click", function() {
  console.log("mm");
  if (turn == "x") {
    mm.classList.add("x");
    // this.removeEventListener("click", function(){});
  } else if (turn == "o") {
    mm.classList.add("o");
    // this.removeEventListener("click", function(){});
  }
  whosTurn();
});

document.getElementById("mr").addEventListener("click", function() {
  console.log("mr");
  if (turn == "x") {
    mr.classList.add("x");
    // this.removeEventListener("click", function(){});
  } else if (turn == "o") {
    mr.classList.add("o");
    // this.removeEventListener("click", function(){});
  }
  whosTurn();
});

document.getElementById("bl").addEventListener("click", function() {
  console.log("bl");
  if (turn == "x") {
    bl.classList.add("x");
    // this.removeEventListener("click", function(){});
  } else if (turn == "o") {
    bl.classList.add("o");
    // this.removeEventListener("click", function(){});
  }
  whosTurn();
});

document.getElementById("bm").addEventListener("click", function() {
  console.log("bm");
  if (turn == "x") {
    bm.classList.add("x");
    // this.removeEventListener("click", function(){});
  } else if (turn == "o") {
    bm.classList.add("o");
    // this.removeEventListener("click", function(){});
  }
  whosTurn();
});

document.getElementById("br").addEventListener("click", function() {
  console.log("br");
  if (turn == "x") {
    br.classList.add("x");
    // this.removeEventListener("click", function(){});
  } else if (turn == "o") {
    br.classList.add("o");
    // this.removeEventListener("click", function(){});
  }
  whosTurn();
});
