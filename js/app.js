


document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded");

    //starts the first play at "x"
    var state = 1;

    //Add an event listener to each cell in board.
    var board = document.getElementById("board");
    for(var i = 0; i < board.children.length; i++){
      board.children[i].addEventListener("click", clickCell);
    }

    //add event listener to reset button
    document.getElementById("resetBtn").addEventListener("click", resetFunction);

    //defining reset function
    function resetFunction() {
              console.log("reset ran");
      var board = document.getElementById("board");
      for(var i = 0; i < board.children.length; i++){
        board.children[i].addEventListener("click", clickCell);
        board.children[i].textContent="";
        board.children[i].style.backgroundColor= "white";
        console.log("event listener re-added");

        state = 1; //resets state back to "X"
      }
    }

    //if cell is clicked, then turn off event listener in cell, assign a textcontent to the cell,
    function clickCell(){
        console.log("cell clicked at this location:" +this.id);
        state++; //swtiches the X's and O's
        if (state % 2 === 0) {
          document.getElementById(this.id).textContent="X";
          this.style.backgroundColor = "red";
        } else {
          document.getElementById(this.id).textContent="O";
          this.style.backgroundColor = "blue";
//??????? how can I make this swtich to class?
//document.getElementById(this.id).className = .blueCell;
        };
        //remove event listner after click
        document.getElementById(this.id).removeEventListener("click", clickCell);
    }

    //adding reset function
    function reset() {
      document.getElementById("board").style.backgroundColor = "lightblue";
      for(var i = 0; i < board.children.length; i++){
        board.children[i].addEventListener("click", reset);
      }
    }


});
