
player= "X";
space = document.getElementsByClassName("space");


// var boardCheck;

// var cellValue = function cells(key) {
//     switch(key) {
//         case 'a': return "";
//         case 'b': return "";
//         case 'c': return "";
//         case 'd': return "";
//         case 'e': return "";
//         case 'f': return "";
//         case 'g': return "";
//         case 'h': return "";
//         case 'i': return "";
//         default : return "";
//     }
// }


//-------------------------------------------------------------------
function clickSpace() {
    if (this.id == "a") {
        if(document.getElementById("a").innerHTML == ""){ 
           document.getElementById("a").innerHTML == player;
           changeTurn();
         }
    } else if (this.id == "b") {
        if(document.getElementById("b").innerHTML == ""){ 
           document.getElementById("b").innerHTML = player;
           changeTurn();
         }
    } else if (this.id == "c") {
        if(document.getElementById("c").innerHTML == ""){ 
           document.getElementById("c").innerHTML = player;
           changeTurn();
         }

    } else if (this.id == "d") {
      if(document.getElementById("d").innerHTML == ""){ 
           document.getElementById("d").innerHTML = player;
           changeTurn();
         }
    } else if (this.id == "e") {
        if(document.getElementById("e").innerHTML == ""){ 
           document.getElementById("e").innerHTML = player;
           changeTurn();
         }
    } else if (this.id == "f") {
        if(document.getElementById("f").innerHTML == ""){ 
           document.getElementById("f").innerHTML = player;
           changeTurn();
         }

    } else if (this.id == "g") {
        if(document.getElementById("g").innerHTML == ""){ 
           document.getElementById("g").innerHTML = player;
           changeTurn();
           }
    } else if (this.id == "h") {
        if(document.getElementById("h").innerHTML == ""){ 
           document.getElementById("h").innerHTML = player;
           changeTurn();
         }
    } else if (this.id == "i") {
        if(document.getElementById("i").innerHTML == ""){ 
           document.getElementById("i").innerHTML = player;
           changeTurn();
    }
}
    
}

document.getElementById("a").onclick = clickSpace;
document.getElementById("b").onclick = clickSpace;
document.getElementById("c").onclick = clickSpace;
document.getElementById("d").onclick = clickSpace;
document.getElementById("e").onclick = clickSpace;
document.getElementById("f").onclick = clickSpace;
document.getElementById("g").onclick = clickSpace;
document.getElementById("h").onclick = clickSpace;
document.getElementById("i").onclick = clickSpace;

function changeTurn(){
  if (player == 'x') {
    player = 'o';
  }  else {
    player = 'x';
  }
  }


function getWinner() {
    if (isWinner('x')) {
      return 'x';
    }
    if (isWinner('o')) {
      return 'o';
    }
    return null;
}
function isWinner(player) {
    return winsRow(player) || winsColumn(player) || winsDiagonal(player);
}
function winsRow(player) {
    return allThree(player, cells('a'), cells('b'), cells('c')) ||
           allThree(player, cells('d'), cells('e'), cells('f')) ||
           allThree(player, cells('g'), cells('h'), cells('i'));
}
function winsColumn(player) {
    return allThree(player, cells('a'), cells('d'), cells('g')) ||
           allThree(player, cells('b'), cells('e'), cells('h')) ||
           allThree(player, cells('c'), cells('f'), cells('i'));
}
function winsDiagonal(player) {
    return allThree(player, cells('a'), cells('e'), cells('i')) ||
           allThree(player, cells('c'), cells('e'), cells('g'));
}
var allThree = function(player, cellOne, cellTwo, cellThree) {
  return (cellOne === player) && (cellTwo === player) && (cellThree === player);
}

function reset() {
document.getElementById("a").innerHTML = " ";
document.getElementById("b").innerHTML = " ";
document.getElementById("c").innerHTML = " ";
document.getElementById("d").innerHTML = " ";
document.getElementById("e").innerHTML = " ";
document.getElementById("f").innerHTML = " ";
document.getElementById("g").innerHTML = " ";
document.getElementById("h").innerHTML = " ";
document.getElementById("i").innerHTML = " ";
}
