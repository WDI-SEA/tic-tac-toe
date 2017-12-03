(function() {
  "use strict";

  var turn = 0;
  var board = document.getElementById('board');

  //initialize the board
  // create game controller - to contain score, whose turn it is etc. 
  // 
  // create logic
  // create win condition(row, col, player)

  //Does any row, column or diagonal contain the wining score(mac )
  // create draw condition
  //create restart
  //
  //
  //
  //

  //Create "click handlers" by using the event parameter
  board.addEventListener('click', (cell) => {
    populateCell(cell);
  });

  //takes in an element clicked and changes the value accordint to which player clicked it
  function populateCell(cell) {
    if (checkIfFree(cell)) {
      if (turn % 2 === 0) {
        cell.target.innerText = 'X';
      } else {
        cell.target.innerText = 'O';
      }
      if(checkIfWon(board)){alert('you won');};
      turn += 1;
    }

  }
  // Returns true if there is no text in the cell.
  function checkIfFree(cell) {
    if (cell.target.innerText === '') {
      return true;
    }
    return false;
  }


  function checkIfWon(player) {
    //get row

    var rows = document.querySelectorAll('tr');
    var rowResult = [];
    var colResult = [];
    var diagRight = [];
    var diagLeft = [];
    var cellsLength = null
    player = 'XXX'
    for (var i = 0; i < rows.length; i += 1) {
        var last = rows[i].cells.length - i -1;

         for (var j = 0; j < rows[i].cells.length; j += 1) { 
            colResult.push(rows[j].cells[i].innerText);
        rowResult.push(rows[i].cells[j].innerText);
        
      }  
        diagLeft.push(rows[i].cells[last].innerText);
        diagRight.push(rows[i].cells[i].innerText);
       console.log(colResult);

      if (rowResult.join('') === player || colResult.join('') === player || diagLeft.join('') === player || diagRight.join('') === player ) { 
        return true; }
    }


  }

  // var rows = 3;
  var cols = 3;
  var board = document.getElementById('board');
  var rows = document.querySelectorAll('tr');



  // for (var i=0; i < rows; i+=1){
  //    for (var j=0; j < cols; j+=1){
  //        rowResult.push(rows[i].cells[j].innerText);
  //  console.log(rows[i].cells[j].innerText );

  //  }
  //  console.log(rowResult);
  // }

  // console.log(rows[0].children[0].innerText);

  //console.log(rows[0].cells.length);


}());
