// declare all the variables
var cell0 = document.getElementById('cell0');
var cell1 = document.getElementById('cell1');
var cell2 = document.getElementById('cell2');
var cell3 = document.getElementById('cell3');
var cell4 = document.getElementById('cell4');
var cell5 = document.getElementById('cell5');
var cell6 = document.getElementById('cell6');
var cell7 = document.getElementById('cell7');
var cell8 = document.getElementById('cell8');
var reset = document.getElementById('reset');
//game state
var player = 'X';
var row1 = [cell0, cell1, cell2];
var row2 = [cell3, cell4, cell5];
var row3 = [cell6, cell7, cell8];
var col1 = [cell0,cell3, cell6];
var col2 = [cell1,cell4, cell7];
var col3 = [cell2,cell5, cell8];
var diag1 = [cell0, cell4, cell8];
var diag2 = [cell2, cell4, cell6];
var gBoard = [row1, row2, row3];//this is set by var rows1-3 above
var totalMoves = 0;
var wonByLine = function(line) {
    if (line[0].className === player && 
        line[1].className === player && 
        line[2].className === player) {
        return true;
    } 
    return false;
}

var didWin = function(cellId) {
    switch (cellId) {
        case "cell0":
            return wonByLine(row1) || wonByLine(col1) || wonByLine(diag1);
        break;
        
        case "cell1":
            return wonByLine(row1) || wonByLine(col2);
        break;
        case "cell2":
            return wonByLine(row1) || wonByLine(col3) || wonByLine(diag2);
        break;
        case "cell3":
            return wonByLine(row2) || wonByLine(col1);
        break;
        case "cell4":
            return wonByLine(row2) || wonByLine(col2) || wonByLine(diag1) || wonByLine(diag2);
        break;
        case "cell5":
            return wonByLine(row2) || wonByLine(col3);
        break;
        case "cell6":
            return wonByLine(row3) || wonByLine(col1) || wonByLine(diag2);
        break;
        case "cell7":
            return wonByLine(row3) || wonByLine(col2);
        break;
        case "cell8":
            return wonByLine(row3) || wonByLine(col3) || wonByLine(diag1);
        break;
            }
}
var stopGame = function() {
    gBoard.forEach(function(row) {
        row.forEach(function(cell) {
            cell.removeEventListener('click', moveMade);
        });
    });
    alert('Player ' + player + ' wins!');
}
var moveMade = function(cell) {
    //see if cell is clicked/ empty
    if (cell.target.className !== "") { //dont do anything if the cell is taken - if not empty
        return;
    }
    totalMoves += 1;
    //mark the player cell
    cell.target.className = player;
    cell.target.textContent = player;

    //check to see if its a winning move
    if (didWin(cell.target.id)) {
        stopGame();
    }else { 
      //if not, is it a tie?
      if (totalMoves === 9){
        alert("You both lose!");
      } 
      //switch player
      if (player === "X") {
        player = "O";
      }else {
        player = "X";
      }
    } 
}
//clickHandlers
var gameClicker = function() {
    gBoard.forEach(function(row) {
        row.forEach(function(cell) {
           //get click event working on each cell
           cell.addEventListener('click', moveMade)
        });
    });
}
gameClicker();

reset.addEventListener('click', function() {
    totalMoves = 0;
    player = 'X';
    gameClicker();
    gBoard.forEach(function(row) {
        row.forEach(function(cell) {
            cell.className = '';
            cell.textContent = '';
        });
    });
});
