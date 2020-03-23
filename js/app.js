var xTurn = true;
var turn = 0;

document.getElementById("s_1").addEventListener("click", playerTurn);
document.getElementById("s_2").addEventListener("click", playerTurn);
document.getElementById("s_3").addEventListener("click", playerTurn);
document.getElementById("s_4").addEventListener("click", playerTurn);
document.getElementById("s_5").addEventListener("click", playerTurn);
document.getElementById("s_6").addEventListener("click", playerTurn);
document.getElementById("s_7").addEventListener("click", playerTurn);
document.getElementById("s_8").addEventListener("click", playerTurn);
document.getElementById("s_9").addEventListener("click", playerTurn);
var box1 = document.getElementById("s_1")
var box2 = document.getElementById("s_2")
var box3 = document.getElementById("s_3")
var box4 = document.getElementById("s_4")
var box5 = document.getElementById("s_5")
var box6 = document.getElementById("s_6")
var box7 = document.getElementById("s_7")
var box8 = document.getElementById("s_8")
var box9 = document.getElementById("s_9")

var winner = document.getElementById("whoW");

   


function playerTurn () {
  if (xTurn === true){
      this.innerHTML = "X";
      xTurn = false;
    } else {
      this.innerHTML = "O";
      xTurn = true;
    }
    turn = turn + 1;
    winCom();
};


function winCom (){
    if (box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X"){
    winner.textContent = "X Won";
    winCom = true;
    } else if (box4.textContent === "X" && box5.textContent === "X" && box6.textContent === "X"){
    winner.textContent = "X Won";
    winCom = true;
    } else if (box7.textContent === "X" && box8.textContent === "X" && box9.textContent === "X"){
    winner.textContent = "X Won";
    winCom = true;
    }else if (box1.textContent === "X" && box4.textContent === "X" && box7.textContent === "X"){
    winner.textContent = "X Won";
    winCom = true;
    }else if (box2.textContent === "X" && box5.textContent === "X" && box8.textContent === "X"){
    winner.textContent = "X Won";
    winCom = true;
    }else if (box3.textContent === "X" && box6.textContent === "X" && box9.textContent === "X"){
    winner.textContent = "X Won";
    winCom = true;
    }else if (box1.textContent === "X" && box5.textContent === "X" && box9.textContent === "X"){
    winner.textContent = "X Won";
    winCom = true;
    }else if (box3.textContent === "X" && box5.textContent === "X" && box7.textContent === "X"){
    winner.textContent = "X Won";
    winCom = true;
    }else if (box1.textContent === "O" && box2.textContent === "O" && box3.textContent === "O"){
    winner.textContent = "O Won";
    winCom = true;
    }else if (box4.textContent === "O" && box5.textContent === "O" && box6.textContent === "O"){
    winner.textContent = "O Won";
    winCom = true;
    }else if (box7.textContent === "O" && box8.textContent === "O" && box9.textContent === "O"){
    winner.textContent = "O Won";
    winCom = true;
    }else if (box1.textContent === "O" && box4.textContent === "O" && box7.textContent === "O"){
    winner.textContent = "O Won";
    winCom = true;
    }else if (box2.textContent === "O" && box5.textContent === "O" && box8.textContent === "O"){
    winner.textContent = "O Won";
    winCom = true;
    }else if (box3.textContent === "O" && box6.textContent === "O" && box9.textContent === "O"){
    winner.textContent = "O Won";
    winCom = true;
    }else if (box1.textContent === "O" && box5.textContent === "O" && box9.textContent === "O"){
    winner.textContent = "O Won";
    winCom = true;
    }else if (box3.textContent === "O" && box5.textContent === "O" && box7.textContent === "O"){
    winner.textContent = "O Won";
    winCom = true;
    } 
    if (turn === 9 && winCom != true) {
        winner.textContent = "No Winner!!"
    }
    
    removeClick()
    
};

function removeClick(){

  if (box1 === "X" || "O" ){
    document.getElementById("s_1").removeEventListener("click", winCom)
  }

  else if (box2 === "X" || "O" ){
  document.getElementById("s_2").removeEventListener("click", winCom)
  }

  else if (box3 === "X" || "O" ){
  document.getElementById("s_3").removeEventListener("click", winCom)
  }

  else if (box4 === "X" || "O" ){
  document.getElementById("s_4").removeEventListener("click", winCom)
  }

  else if (box5 === "X" || "O" ){
  document.getElementById("s_5").removeEventListener("click", winCom)
  }

  else if (box6 === "X" || "O" ){
  document.getElementById("s_6").removeEventListener("click", winCom)
  }

  else if (box7 === "X" || "O" ){
  document.getElementById("s_7").removeEventListener("click", playerTurn)
  }

  else if (box8 === "X" || "O" ){
  document.getElementById("s_8").removeEventListener("click", playerTurn)
  }

  else if (box9 === "X" || "O" ){
  document.getElementById("s_9").removeEventListener("click", playerTurn)
  }
}



function resetGame(){
    location.reload();
};
document.getElementById("reset").addEventListener("click", resetGame);
