/* ------------------------------Game State / Global Variables -------------------------------------- */
// Now I am on my new branch - finished product. This is where I will complete the entire game.
let player = "X";

let gameOn = true;

 







// use following for checkWin func

function checkSquares(one, two, three) {
  if (
    one.innerText === "X" &&
    two.innerText == "X" &&
    three.innerText === "X"
  ) {
    message.innerText = `"${player}" Wins!!!`;
    gameOn = false;
  } else if (
    one.innerText === "O" &&
    two.innerText == "O" &&
    three.innerText === "O"
  ) {
    message.innerText = '"O" Wins!!!';
    gameOn = false;
  }
}

// run this after every click

function checkWin() {
  checkSquares(
    document.getElementById("s1"),
    document.getElementById("s2"),
    document.getElementById("s3")
  );
  checkSquares(
    document.getElementById("s4"),
    document.getElementById("s5"),
    document.getElementById("s6")
  );
  checkSquares(
    document.getElementById("s7"),
    document.getElementById("s8"),
    document.getElementById("s9")
  );
  checkSquares(
    document.getElementById("s1"),
    document.getElementById("s4"),
    document.getElementById("s7")
  );
  checkSquares(
    document.getElementById("s2"),
    document.getElementById("s5"),
    document.getElementById("s8")
  );
  checkSquares(
    document.getElementById("s3"),
    document.getElementById("s6"),
    document.getElementById("s9")
  );
  checkSquares(
    document.getElementById("s1"),
    document.getElementById("s5"),
    document.getElementById("s9")
  );
  checkSquares(
    document.getElementById("s3"),
    document.getElementById("s5"),
    document.getElementById("s7")
  );
}


/* ------------------------------- New Solution Below -----------------------------------------------*/




// main game functions still being worked on

function gameOnNow() {
  
  setUpSquares();

 
}

document.addEventListener("DOMContentLoaded", function(e) {

  // These are variables for messaging players
  // And displaying the Xs and Os
  const allSquares = document.querySelectorAll(".squares");
  const message = document.getElementById("message-text");
  const initialMessage =
    '"Always Play To Win"\n"X" Goes First';
  const winMessageX = '"X" Wins!!!';
  const winMessageO = '"O" Wins!!!';
  const tieGameMessage = '"Cat\'s Game" You are tied!';
  const xTurn = 'Make A Move "X"';
  const oTurn = 'Make A Move "O"';

  // This is the reset button
  const rButton = document.getElementById("r-button");

  // This is the variable containing all the h1 elements with containing "" or "X" or "O"
  const arrOfMarks = document.querySelectorAll(".letter");

  // Initial Setup of Squares
  function setUpSquares() {
    for (let i = 0; i < allSquares.length; i++) {
      allSquares[i].addEventListener("click", function(e) {
        allSquares[i].style.backgroundColor = "yellow";
        if (message.innerText === initialMessage || message.innerText === xTurn) {
          // document.getElementById("clickX").play();
          allSquares[i].firstChild.innerText = "X";
          player = "O";
          message.innerText = oTurn;
        } else {
          player = "X";
          // document.getElementById("clickO").play();
          allSquares[i].firstChild.innerText = "O";
          message.innerText = xTurn;
        }
      });
    }
  }
  // --------------------------Calling setUpSquares Here -----------------------------------------
  setUpSquares()

  // for resetting the Xs and Os

function resetMarks() {
  for (let i = 0; i < arrOfMarks.length; i++) {
    arrOfMarks[i].innerText = "";
  }
}

//reset the color of the squares

function resetColor() {
  for (let i = 0; i < allSquares.length; i++) {
    allSquares[i].style.backgroundColor = "#ff5252";
  }
}


  // adding event listener for reset button
  rButton.addEventListener("click", function(e) {
    resetColor();
    resetMarks();
    message.innerText = initialMessage;
  });
 
  message.innerText = initialMessage;

  


  // gameOnNow();
  // console.log(allSquares);
});
