console.log("Hello Hailey!");
document.addEventListener("DOMContentLoaded", function(){
  console.log("DOM loaded");

  var playerXTurn = true;
  var board = document.getElementById("board");
  var resetButton = document.getElementById("reset");
  var space;
  var row1 = (document.getElementById("a1").innerHTML == document.getElementById("b1").innerHTML) && document.getElementById("c1").innerHTML;
  var row2 = (document.getElementById("a2").innerHTML == document.getElementById("b2").innerHTML) && document.getElementById("c2").innerHTML;
  var row3 = (document.getElementById("a3").innerHTML == document.getElementById("b3").innerHTML) && document.getElementById("c3").innerHTML;
  var collum1 = (document.getElementById("a1").innerHTML == document.getElementById("a2").innerHTML) && document.getElementById("a3").innerHTML;
  var collum2 = (document.getElementById("b1").innerHTML == document.getElementById("b2").innerHTML) && document.getElementById("b3").innerHTML;
  var collum3 = (document.getElementById("c1").innerHTML == document.getElementById("c2").innerHTML) && document.getElementById("c3").innerHTML;
  var diagonal1 = (document.getElementById("a1").innerHTML == document.getElementById("b2").innerHTML) && document.getElementById("c3").innerHTML;
  var diagonal2 = (document.getElementById("c1").innerHTML == document.getElementById("b2").innerHTML) && document.getElementById("a3").innerHTML;

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
        playerXTurn = false;
        turnTrackerAlert(playerXTurn);
        winChecker();
      } else{
        console.log("O went");
        space = this.id;
        document.getElementById(this.id).innerHTML="O";
        document.getElementById(this.id).style.backgroundColor="rgba(0,0,0,.09)";
        document.getElementById(this.id).classList.remove("empty");
        document.getElementById(this.id).classList.add("O");
        playerXTurn = true;
        turnTrackerAlert(playerXTurn);
        winChecker();
      }
    }
  };

  function winChecker(){
    console.log("win checking...");
    switch(true){
      case (document.getElementById("a1").innerHTML == ("X")) && (document.getElementById("b1").innerHTML == ("X")) && (document.getElementById("c1").innerHTML == ("X")):
      case (document.getElementById("a2").innerHTML == ("X")) && (document.getElementById("b2").innerHTML == ("X")) && (document.getElementById("c2").innerHTML == ("X")):
      case (document.getElementById("a3").innerHTML == ("X")) && (document.getElementById("b3").innerHTML == ("X")) && (document.getElementById("c3").innerHTML == ("X")):
      case (document.getElementById("a1").innerHTML == ("X")) && (document.getElementById("a2").innerHTML == ("X")) && (document.getElementById("a3").innerHTML == ("X")):
      case (document.getElementById("b1").innerHTML == ("X")) && (document.getElementById("b2").innerHTML == ("X")) && (document.getElementById("b3").innerHTML == ("X")):
      case (document.getElementById("c1").innerHTML == ("X")) && (document.getElementById("c2").innerHTML == ("X")) && (document.getElementById("c3").innerHTML == ("X")):
      case (document.getElementById("a1").innerHTML == ("X")) && (document.getElementById("b2").innerHTML == ("X")) && (document.getElementById("c3").innerHTML == ("X")):
      case (document.getElementById("c1").innerHTML == ("X")) && (document.getElementById("b2").innerHTML == ("X")) && (document.getElementById("a3").innerHTML == ("X")):

      case (document.getElementById("a1").innerHTML == ("O")) && (document.getElementById("b1").innerHTML == ("O")) && (document.getElementById("c1").innerHTML == ("O")):
      case (document.getElementById("a2").innerHTML == ("O")) && (document.getElementById("b2").innerHTML == ("O")) && (document.getElementById("c2").innerHTML == ("O")):
      case (document.getElementById("a3").innerHTML == ("O")) && (document.getElementById("b3").innerHTML == ("O")) && (document.getElementById("c3").innerHTML == ("O")):
      case (document.getElementById("a1").innerHTML == ("O")) && (document.getElementById("a2").innerHTML == ("O")) && (document.getElementById("a3").innerHTML == ("O")):
      case (document.getElementById("b1").innerHTML == ("O")) && (document.getElementById("b2").innerHTML == ("O")) && (document.getElementById("b3").innerHTML == ("O")):
      case (document.getElementById("c1").innerHTML == ("O")) && (document.getElementById("c2").innerHTML == ("O")) && (document.getElementById("c3").innerHTML == ("O")):
      case (document.getElementById("a1").innerHTML == ("O")) && (document.getElementById("b2").innerHTML == ("O")) && (document.getElementById("c3").innerHTML == ("O")):
      case (document.getElementById("c1").innerHTML == ("O")) && (document.getElementById("b2").innerHTML == ("O")) && (document.getElementById("a3").innerHTML == ("O")):
        console.log("We have a winner!");
        document.getElementById("turn").style.display="none";
        document.getElementById("winner").style.display="block";
        for (var i = 0; i < board.children.length; i++) {
          board.children[i].removeEventListener("click", markSpace);
        }
        break;
    }
  };

  resetButton.addEventListener("click", resetGame);

  function resetGame(){
    console.log("Reset!")
    playerXMoves = [];
    playerOMoves = [];
    playerXTurn = true;
    document.getElementById("turn").style.display="block";
    document.getElementById("turn").innerHTML="Player one, your turn!";
    document.getElementById("winner").style.display="none";
    clearXSpace();
    clearOSpace();
    fixClasses();
  };

  function clearXSpace(){
    console.log("I'm clearing Xs");
    for (var i = 0; i < document.getElementsByClassName("X").length; i++) {
      document.getElementsByClassName("X")[i].innerHTML="__";
      document.getElementsByClassName("X")[i].style.backgroundColor="inherit";
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

});
