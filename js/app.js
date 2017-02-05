console.log("Hello Hailey!");
document.addEventListener("DOMContentLoaded", function(){
  console.log("DOM loaded");


  var playerXMoves = [];
  var playerOMoves = [];
  var playerXTurn = true;
  var board = document.getElementById("board");
  var resetButton = document.getElementById("reset");
  var space;


  function turnTrackerAlert(){
    if (playerXTurn == false){
      document.getElementById("turn").innerHTML="Your turn O!";
    } else{
      document.getElementById("turn").innerHTML="Your turn X!";
    }
  };

 for (var i = 0; i < board.children.length; i++) {
    board.children[i].addEventListener("click", markSpace);
  };


  function markSpace(){
    if (document.getElementById(this.id).classList.contains("empty")){
      if (playerXTurn == true){
        console.log("X went");
        space = this.id;
        document.getElementById(this.id).innerHTML="X";
        document.getElementById(this.id).style.backgroundColor="rgba(238,223,204,.09)";
        document.getElementById(this.id).classList.remove("empty");
        document.getElementById(this.id).classList.add("X");
        addMove();
        winChecker(playerXMoves);
        playerXTurn = false;
        turnTrackerAlert(playerXTurn);
      } else{
        console.log("O went");
        space = this.id;
        document.getElementById(this.id).innerHTML="O";
        document.getElementById(this.id).style.backgroundColor="rgba(0,0,0,.09)";
        document.getElementById(this.id).classList.remove("empty");
        document.getElementById(this.id).classList.add("O");
        addMove();
        winChecker(playerOMoves);
        playerXTurn = true;
        turnTrackerAlert(playerXTurn);
      }
    }
  };

  function addMove(){
    if (playerXTurn) {
      playerXMoves.push(space);
      console.log(playerXMoves);
    } else{
      playerOMoves.push(space);
      console.log(playerOMoves);
    }
  };

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
        document.getElementsByClassName(turn).display.none;
        document.getElementsByClassName(winner).display.block;
        break;
    }
  };

  resetButton.addEventListener("click", resetGame);

  function resetGame(){
    console.log("Reset!")
    playerXMoves= [];
    playerOMoves= [];
    playerXTurn= true;
    document.getElementById("turn").style.display.block;
    document.getElementById("turn").innerHTML="Player one, your turn!";
    document.getElementById("winner").style.display.none;
    clearXSpace();
    clearOSpace();
    fixClasses();
  };

  function clearXSpace(){
    console.log("I'm clearing Xs");
    for (var i = 0; i < document.getElementsByClassName("X").length; i++) {
      document.getElementsByClassName("X")[i].innerHTML="__";
      document.getElementsByClassName("X")[i].style.backgroundColor="inherit";
        // document.getElementsByClassName("X")[i].add("empty");
    }
  };

  function clearOSpace(){
    console.log("I'm clearing Os");
    for (var i = 0; i < document.getElementsByClassName("O").length; i++) {
      document.getElementsByClassName("O")[i].innerHTML="__";
      document.getElementsByClassName("O")[i].style.backgroundColor="inherit";
    }
  };

  function fixClasses(){
    for (var i = 0; i < document.getElementsByClassName("resetClass").length; i++) {
      document.getElementsByClassName("resetClass")[i].classList.remove("X");
      document.getElementsByClassName("resetClass")[i].classList.remove("O");
      document.getElementsByClassName("resetClass")[i].classList.add("empty");
    }
  }

          // document.getElementById(this.id).classList.remove("X" || "O");
          // document.getElementById(this.id).classList.add("empty");

});
