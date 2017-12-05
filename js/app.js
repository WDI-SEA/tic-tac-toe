var currentPlayer = prompt("X or O? (X=1 O=2)");


var grid=new Array(3);
    grid[0]=new Array(3);
    grid[1]=new Array(3);
    grid[2]=new Array(3);

for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    grid[i][j]=0;
  }
}
// Checks If Grid Is Already Clicked
function clickCell(x,y) {
      if (grid[x][y]>0) {

  }
// Clicking Of Boxes
    else {
      if (currentPlayer==1) {
        document.getElementById("cell_"+x+"_"+y).style.color="black";
        document.getElementById("cell_"+x+"_"+y).innerHTML="X";
      grid[x][y]=1;
      currentPlayer=2;
    } else {
        document.getElementById("cell_"+x+"_"+y).style.color="purple";
        document.getElementById("cell_"+x+"_"+y).innerHTML="O";
      grid[x][y]=2;
      currentPlayer=1;
    }
  }
}
// Reset Game
function reset() {
  for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    grid[i][j]=0;
    document.getElementById("cell_"+i+"_"+j).innerHTML="&nbsp;";
  }
}
 currentPlayer=1;
}
