document.addEventListener("DOMContentLoaded", function(){

  var playerXTurn = true;
  var row1 = document.getElementById("row1");
  var row2 = document.getElementById("row2");
  var row3 = document.getElementById("row3");
  var resetButton = document.getElementById("reset");
  var space;
  var moves =0;

  addEventListener();

  function turnTrackerAlert(){
    if (playerXTurn == false){
      document.getElementById("turn").innerHTML="Your turn O!";
    } else{
      document.getElementById("turn").innerHTML="Your turn X!";
    }
  };

  function addEventListener(){
    for (var i = 0; i < row1.children.length; i++) {
      row1.children[i].addEventListener("click", markSpace);
    }
    for (var i = 0; i < row2.children.length; i++) {
      row2.children[i].addEventListener("click", markSpace);
    }
    for (var i = 0; i < row3.children.length; i++) {
      row3.children[i].addEventListener("click", markSpace);
    }
  };

  function removeEventListener(){
    for (var i = 0; i < row1.children.length; i++) {
      row1.children[i].removeEventListener("click", markSpace);
    }
    for (var i = 0; i < row2.children.length; i++) {
      row2.children[i].removeEventListener("click", markSpace);
    }
    for (var i = 0; i < row3.children.length; i++) {
      row3.children[i].removeEventListener("click", markSpace);
    }
  };

  function markSpace(){
    if (document.getElementById(this.id).classList.contains("empty")){
      if (playerXTurn == true){
        space = this.id;
        document.getElementById(this.id).innerHTML="X";
        document.getElementById(this.id).style.backgroundColor="rgba(238,223,204,.2)";
        document.getElementById(this.id).classList.remove("empty");
        document.getElementById(this.id).classList.add("X");
        playerXTurn = false;
        turnTrackerAlert(playerXTurn);
        winChecker();
      } else{
        space = this.id;
        document.getElementById(this.id).innerHTML="O";
        document.getElementById(this.id).style.backgroundColor="rgba(0,0,0,.2)";
        document.getElementById(this.id).classList.remove("empty");
        document.getElementById(this.id).classList.add("O");
        playerXTurn = true;
        turnTrackerAlert(playerXTurn);
        winChecker();
      }
    }
  };

  function winChecker(){
    moves ++;
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
        document.getElementById("turn").style.display="none";
        document.getElementById("winner").style.display="block";
        removeEventListener();
        break;
      case (moves == 9):
        document.getElementById("tie").style.display="block";
        document.getElementById("turn").style.display='none';
        break;
      }
  };

  resetButton.addEventListener("click", resetGame);

  function resetGame(){
    playerXTurn = true;
    moves = 0;
    document.getElementById("turn").style.display="block";
    document.getElementById("turn").innerHTML="Player one, your turn!";
    document.getElementById("winner").style.display="none";
    document.getElementById("tie").style.display="none";
    clearXSpace();
    clearOSpace();
    fixClasses();
    addEventListener();
  };

  function clearXSpace(){
    for (var i = 0; i < document.getElementsByClassName("X").length; i++) {
      document.getElementsByClassName("X")[i].innerHTML="__";
      document.getElementsByClassName("X")[i].style.backgroundColor="inherit";
    }
  };

  function clearOSpace(){
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
