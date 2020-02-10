/* ------------------------------Game State / Global Variables -------------------------------------- */
// Now I am on my new branch - finished product. This is where I will complete the entire game.

let gameOn = true;
let clickCounter = 0;

document.addEventListener("DOMContentLoaded", function(e) {
  // These are variables for messaging players
  // And displaying the Xs and Os
  const allSquares = document.querySelectorAll(".squares");
  const message = document.getElementById("message-text");
  const initialMessage = '"Always Play To Win"\n"X" Goes First';
  const winMessageX = '"X" Wins!!!';
  const winMessageO = '"O" Wins!!!';
  const tieGameMessage = '"Cat\'s Game" You are tied!\nReset to Play Again!';
  const xTurn = 'Make A Move "X"';
  const oTurn = 'Make A Move "O"';

  // This is the reset button
  const rButton = document.getElementById("r-button");

  // This is the variable containing all the h1 elements with containing "" or "X" or "O"
  const arrOfMarks = document.querySelectorAll(".letter");

  // use following for checkWin func - this is a function DECLARATION

  function checkSquares(one, two, three) {
    if (
      one.innerText === "X" &&
      two.innerText === "X" &&
      three.innerText === "X"
    ) {
      gameOn = false;
      message.innerText = '"X" Wins!!!';
      one.parentElement.style.backgroundColor = "purple";
      two.parentElement.style.backgroundColor = "purple";
      three.parentElement.style.backgroundColor = "purple";
    } else if (
      one.innerText === "O" &&
      two.innerText === "O" &&
      three.innerText === "O"
    ) {
      gameOn = false;
      message.innerText = '"O" Wins!!!';
      one.parentElement.style.backgroundColor = "green";
      two.parentElement.style.backgroundColor = "green";
      three.parentElement.style.backgroundColor = "green";
    }
  }

  // run this after every click - this is a function DECLARATION

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


  function catsGame() {
    if (clickCounter === 9 && gameOn === true) {
      message.innerText = tieGameMessage;
      for (let i = 0; i < allSquares.length; i++) {
        allSquares[i].style.backgroundColor = "#1E90FF";
      }
    }
  }

  // Initial Setup of Squares - this is function DECLARATION
  function setUpSquares() {
    for (let i = 0; i < allSquares.length; i++) {
      allSquares[i].addEventListener("click", function(e) {
        // checking for empty square here
        if (allSquares[i].firstChild.textContent === "") {
          // turning background to yellow after click
          allSquares[i].style.backgroundColor = "yellow";
          if (
            message.innerText === initialMessage ||
            message.innerText === xTurn
          ) {
            // document.getElementById("clickX").play();
            allSquares[i].firstChild.innerText = "X";
            message.innerText = oTurn;
          } else {
            // document.getElementById("clickO").play();
            allSquares[i].firstChild.innerText = "O";
            message.innerText = xTurn;
          }
          clickCounter += 1;
          checkWin();
          // checking against the click counter here 
          catsGame();
        }
      });
    }
  }
  // --------------------------Calling setUpSquares Here -----------------------------------------
  setUpSquares();

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
    clickCounter = 0;
    gameOn = true;
  });

  message.innerText = initialMessage;


});
