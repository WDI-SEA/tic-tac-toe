console.log("Hello Hailey!");
document.addEventListener("DOMContentLoaded", function(){
  console.log("DOM loaded");


  var playerXMoves= [];
  var playerOMoves= [];
  var playerXTurn= true;
  var board= document.getElementById("board");
  var space;

  function turnTrackerAlert(){
    if (playerXTurn == false){
      document.getElementById("turn").innerHTML="Your turn O!";
    } else{
      document.getElementById("turn").innerHTML="Your turn X!";
    }
  }

  for (var i = 0; i < board.children.length; i++) {
    board.children[i].addEventListener("click", markSpace);
  }


  function markSpace(){
    if (document.getElementById(this.id).classList.contains("empty")){
      if (playerXTurn == true){
        console.log("X went");
        space = this.id;
        document.getElementById(this.id).innerHTML="X";
        document.getElementById(this.id).classList.remove("empty");
        addMove();
        winChecker(playerXMoves);
        playerXTurn = false;
        turnTrackerAlert(playerXTurn);
      } else{
        console.log("O went");
        space = this.id;
        document.getElementById(this.id).innerHTML="O";
        document.getElementById(this.id).classList.remove("empty");
        addMove();
        winChecker(playerOMoves);
        playerXTurn = true;
        turnTrackerAlert(playerXTurn);
      }
    }
  }

  function addMove(){
    if (playerXTurn) {
      playerXMoves.push(space);
      console.log(playerXMoves);
    } else{
      playerOMoves.push(space);
      console.log(playerOMoves);
    }
  }

  function winChecker(){
    console.log("Winner?")
    switch(playerXMoves || playerOMoves){
      case "a1" && "b1" && "c1":
      case "a2" && "b2" && "c2":
      case "a3" && "b3" && "c3":
      case "a1" && "a2" && "a3":
      case "b1" && "b2" && "b3":
      case "c1" && "c2" && "c3":
      case "a1" && "b2" && "c3":
      case "c1" && "b2" && "a3":
        console.log("We have a winner!")
        document.getElementsByClassName(winner).display.block;
        break;
    }
  }

  function restGame(){

  }

})
