
//var turn = 0;
//console.log(turn);

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");

    //Add an event listener to each cell in board
    var board = document.getElementById("board");
    console.log(board);
    for(var i = 0; i < board.children.length; i++){
      board.children[i].addEventListener("click", clickCell);
    }

    //reset button will reset board
    //var reset = document.getElementById("board");


    function resetButton() {
      console.log("checkIfClicked");
      for (i = 0; i < 8; i++) {
        //console.log("run 9 times");
        var clickedStatus = []
      }
    }

    //checkIfClicked();

    var state = 1;
    //if cell is clicked, then turn off event listener in cell, assign a text value to the cell,
    function clickCell(){
        console.log("CELL CLICKED");
        console.log("cell location" +this.id);
        state++;
        console.log("state" + state);
        console.log(state%2);
        if (state % 2 === 0) {
          document.getElementById(this.id).textContent="X";
          this.style.backgroundColor = "red";
        } else {
          document.getElementById(this.id).textContent="O";
          this.style.backgroundColor = "blue";
        };
        //remove event listner
        document.getElementById(this.id).removeEventListener("click", clickCell);
        var location = this;
        console.log(location);

      }



});
