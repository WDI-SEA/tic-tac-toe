  console.log('Hello front-end');

  var move = 0;
  var square = document.getElementsByClassName("square");

  // funtion to determine next turn (x or o)
  // X always starts first


  function nextMove() {
    console.log(move);
    if (move === 1) {
      move = 0;
    } else {
      move = 1;
    }
  }

  // Add listener to restart button
  document.getElementById("restart").addEventListener("click",gameRestart());




  // add an event listener to each board square
  // var square = document.getElementsByClassName("square");
  for (var i=0; i<square.length; i++) {
    square[i].addEventListener("click", addPiece);
  }


  // function to put game piece on board after click
  function addPiece() {
    console.log(this.id + " clicked");
    this.removeEventListener("click", addPiece); //remove click listener
    if (move===0) {
      this.children[0].className = "xPiece";
      this.children[0].textContent = "X";
    } else {
      this.children[0].className = "oPiece";
      this.children[0].textContent = "O";
    }

    isWinner(winners());
    // nextMove();
  }

  // Determine if there is a winner and announce
    function isWinner(a) {
      console.log("isWinner");
      if (a) {
        document.getElementById("title").hidden=true;
        if (move===0) {
          document.getElementById("xWin").hidden=false;
        } else {
          document.getElementById("oWin").hidden=false;
        }
        // gameRestart();
      }
      nextMove();
    }

  // function of if there are three marks in a row
  function winners() {
    console.log("winners");
    var winAr = [];
    for (var i=0; i<square.length; i++){
      winAr.push(square[i].children[0].className);
    }
    console.log(winAr);
    // row 1
    if (winAr[0]!== "" && winAr[0] == winAr[1] && winAr[0] == winAr[2]) {
      return true;
      // row 2
    } else if (winAr[3]!== "" && winAr[3] == winAr[4] && winAr[3] == winAr[5]) {
      return true;
      // row 3
    } else if (winAr[6]!== "" && winAr[6] == winAr[7] && winAr[6] == winAr[8]) {
      return true;
      // column 1
    } else if (winAr[0]!== "" && winAr[0] == winAr[3] && winAr[0] == winAr[6]) {
      return true;
      // column 2
    } else if (winAr[1]!== "" && winAr[1] == winAr[4] && winAr[1] == winAr[7]) {
      return true;
      // column 3
    } else if (winAr[2]!== "" && winAr[2] == winAr[5] && winAr[2] == winAr[8]) {
      return true;
      // diagonal left to right
    } else if (winAr[0]!== "" && winAr[0] == winAr[4] && winAr[0] == winAr[8]) {
      return true;
      // diagonal right to left
    } else if (winAr[2]!== "" && winAr[2] == winAr[4] && winAr[2] == winAr[6]) {
      return true;
    } else {
      return false;
    }
  }

  //Restart game
  function gameRestart() {
    console.log("restart function");
    for (var i=0; i<square.length; i++) {
      // square[i].children[0].className = "";
      square[i].addEventListener("click", addPiece);
    }
    document.getElementById("title").hidden=false;
    document.getElementById("xWin").hidden=true;
    document.getElementById("oWin").hidden=true;
    move = 0;
    nextMove();
  }
