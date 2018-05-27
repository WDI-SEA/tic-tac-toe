var turn = document.getElementById("turn");
var boxes = document.querySelectorAll("#main div"), p1_or_p2 = 0;
var player1 = "X"
var player2 = "O"
var player1pic = ""
var player2pic = ""

turn.innerHTML = "Go " + player1 + "!";

function selectWinnerBoxes(b1,b2,b3) {
  b1.classList.add("win");
  b2.classList.add("win");
  b3.classList.add("win");
  turn.innerHTML = b1.innerHTML + " is the winner!";
  turn.style.fontSize = "50px";
}

function staleMate() {
  turn.innerHTML = ":(";
  turn.style.fontSize = "50px";
}

function getWinner() {

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");

 //all of the winning combos

  if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
    selectWinnerBoxes(box1,box2,box3);

    } else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
      selectWinnerBoxes(box4,box5,box6);

    } else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
      selectWinnerBoxes(box7,box8,box9);

    } else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
      selectWinnerBoxes(box1,box4,box7);

    } else if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
      selectWinnerBoxes(box2,box5,box8);

    } else if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
      selectWinnerBoxes(box3,box6,box9);

    } else if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
      selectWinnerBoxes(box1,box5,box9);

    } else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
      selectWinnerBoxes(box3,box5,box7);

    } else if (p1_or_p2 == 8)  {
      staleMate();
  }

}



//event listener for clicks

for (var i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function(){

// preventing clicked box to be clicked again

  if (this.innerHTML !== player1 && this.innerHTML !== player2) {
      if(p1_or_p2%2 === 0) {
        this.innerHTML = player1;
        turn.innerHTML = "Go " + player2 + "!";
        getWinner();
        p1_or_p2 += 1;

    } else {
        this.innerHTML = player2;
        turn.innerHTML = "Go " + player1 + "!";
        getWinner();
        p1_or_p2 += 1;
      }
    }
  }

}

//reset the board and start click count to 0

function replay() {

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("win");
    boxes[i].innerHTML = "";
    turn.innerHTML = "Go " + player1 + "!";
    turn.style.fontSize = "25px";
    p1_or_p2 = 0;

  }

}
