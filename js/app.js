
document.addEventListener("DOMContentLoaded",
  function () {

    



    const playerX = "X";
    const playerO = "O";
    //these were to set up my win funciton and condition. I could not get 
    //a winner function put together but wanted to turn in what I have.


    let modal = document.querySelector("#modal")
    let tL = document.querySelector("#topLeft");
    let tC = document.querySelector("#topCenter");
    let tR = document.querySelector("#topRight");
    let mL = document.querySelector("#middleLeft");
    let mC = document.querySelector("#middleCenter");
    let mR = document.querySelector("#middleRight");
    let bL = document.querySelector("#bottomLeft");
    let bC = document.querySelector("#bottomCenter");
    let bR = document.querySelector("#bottomRight");

    const arrayCells = [

      tL, tC, tR, mL, mC, mR, bL, bC, bR
    ]

    function checkCells(obj) {
      if (obj.a.innerHTML === obj.b.innerHTML && obj.a.innerHTML === obj.c.innerHTML) {
        return obj.a.innerHTML;
      } else {
        return false;
      }
    }
    function checkForVictory() {
      let array = [
        { a: tL, b: tC, c: tR },
        { a: mL, b: mC, c: mR },
        { a: bL, b: bC, c: bR },
        { a: tL, b: mL, c: bL },
        { a: tC, b: mC, c: bC },
        { a: tR, b: mR, c: bR },
        { a: tL, b: mC, c: bR },
        { a: tR, b: mC, c: bL },
      ]
      for (let i = 0; i < array.length; i++) {
      
        var win = checkCells(array[i])
        if (win && turnsDone !== 9) {
         // alert("victory");
         toggleClass(modal, "show")
          boxesAreClickable = false;
          modal.innerHTML= "Player " + win + " won! Do you want to play again? Click Below!";
          //here you would write to the modal who won
          return win;
        }else if(!win && turnsDone === 9){
          modal.innerHTML = "It's a tie! Play again?";
          toggleClass(modal, "show")
          boxesAreClickable = false;
          return win;

        }
      }
      return false;
    }



    var boxesAreClickable = true;
    var turnsDone = 0;


    let currentPlayer = playerX

    var box1Clicked = false;
    const box1 = document.querySelector("#topLeft")
    box1.onclick = function () {
      if (box1Clicked == false && boxesAreClickable) {
        box1.innerHTML = currentPlayer
        if (currentPlayer === playerX) {
          currentPlayer = playerO;
        } else {
          currentPlayer = playerX;
        }
        box1Clicked = true;
        turnsDone++;
      }
      checkForVictory()
    }


    var box2Clicked = false;
    const box2 = document.querySelector("#topCenter")
    box2.onclick = function () {
      if (box2Clicked == false && boxesAreClickable) {
        box2.innerHTML = currentPlayer
        if (currentPlayer === playerX) {
          currentPlayer = playerO;
        } else {
          currentPlayer = playerX;
        }
        box2Clicked = true;
        turnsDone++;
      }
      checkForVictory()
    }
    var box3Clicked = false;
    const box3 = document.querySelector("#topRight")
    box3.onclick = function () {
      if (box3Clicked == false && boxesAreClickable) {
        box3.innerHTML = currentPlayer
        if (currentPlayer === playerX) {
          currentPlayer = playerO;
        } else {
          currentPlayer = playerX;
        }
        box3Clicked = true;
        turnsDone++;
      }
      checkForVictory()
    }
    var box4Clicked = false;
    const box4 = document.querySelector("#middleLeft")
    box4.onclick = function () {
      if (box4Clicked == false && boxesAreClickable) {
        box4.innerHTML = currentPlayer
        if (currentPlayer === playerX) {
          currentPlayer = playerO;
        } else {
          currentPlayer = playerX;
        }
        box4Clicked = true;
        turnsDone++;
      }
      checkForVictory()
    }
    var box5Clicked = false;
    const box5 = document.querySelector("#middleCenter")
    box5.onclick = function () {
      if (box5Clicked == false && boxesAreClickable) {
        box5.innerHTML = currentPlayer
        if (currentPlayer === playerX) {
          currentPlayer = playerO;
        } else {
          currentPlayer = playerX;
        }
        box5Clicked = true;
        turnsDone++;
      }
      checkForVictory()
    }
    var box6Clicked = false;
    const box6 = document.querySelector("#middleRight")
    box6.onclick = function () {
      if (box6Clicked == false && boxesAreClickable) {
        box6.innerHTML = currentPlayer
        if (currentPlayer === playerX) {
          currentPlayer = playerO;
        } else {
          currentPlayer = playerX;
        }
        box6Clicked = true;
        turnsDone++;
      }
      checkForVictory()
    }
    var box7Clicked = false;
    const box7 = document.querySelector("#bottomLeft")
    box7.onclick = function () {
      if (box7Clicked == false && boxesAreClickable) {
        box7.innerHTML = currentPlayer
        if (currentPlayer === playerX) {
          currentPlayer = playerO;
        } else {
          currentPlayer = playerX;
        }
        box7Clicked = true;
        turnsDone++;
      }
      checkForVictory()
    }
    var box8Clicked = false;
    const box8 = document.querySelector("#bottomCenter")
    box8.onclick = function () {
      if (box8Clicked == false && boxesAreClickable) {
        box8.innerHTML = currentPlayer
        if (currentPlayer === playerX) {
          currentPlayer = playerO;
        } else {
          currentPlayer = playerX;
        }
        box8Clicked = true;
        turnsDone++;
      }
      checkForVictory()
    }
    var box9Clicked = false;
    const box9 = document.querySelector("#bottomRight")
    box9.onclick = function () {
      if (box9Clicked == false && boxesAreClickable) {
        box9.innerHTML = currentPlayer
        if (currentPlayer === playerX) {
          currentPlayer = playerO;
        } else {
          currentPlayer = playerX;
        }
        box9Clicked = true;
        turnsDone++;
      }
      checkForVictory()
    }


    reset.addEventListener('click', () => {
      for (let y = 0; y < arrayCells.length; y++) {
        arrayCells[y].innerHTML = ""
    
      }
      boxesAreClickable = true;
      box1Clicked = false;
      box2Clicked = false;
      box3Clicked = false;
      box4Clicked = false;
      box5Clicked = false;
      box6Clicked = false;
      box7Clicked = false;
      box8Clicked = false;
      box9Clicked = false;
      turnsDone = 0;
      modal.innerHTML = "Game Over"
      toggleClass(modal, "show")
      // window.location.reload(false);
    });
    
    function toggleClass(target, className){
      target.classList.toggle(className)
    }
     

  });
