var board = [];
for (var i=0;i<9;i++){
 board[i] = document.getElementById("box"+i);
}
board[0].addEventListener("click", function(){
  turnM(0);
})
board[1].addEventListener("click", function(){
  turnM(1);
})
board[2].addEventListener("click", function(){
  turnM(2);
})
board[3].addEventListener("click", function(){
  turnM(3);
}) 
board[4].addEventListener("click", function(){
  turnM(4);
})
board[5].addEventListener("click", function(){
  turnM(5);
}) 
board[6].addEventListener("click", function(){
  turnM(6);
}) 
board[7].addEventListener("click", function(){
  turnM(7);
})
board[8].addEventListener("click", function(){
  turnM(8);
})
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2"); 
var turnM = function(coordinate){
  if (board[coordinate].innerHTML==="X"||board[coordinate].innerHTML==="O"){
  } else if (turnX){
    board[coordinate].innerHTML="X";
    changeT();
    winOX();
    } else {  
      board[coordinate].innerHTML="O";
      changeT();
      winOX();
  }
}
var turnX=true;
var changeT = function(){
  if (turnX) {
    turnX=false;
  }
  else {
    turnX=true;
  }
}
// 
var winOX = function(){
  //var winC = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  // for (var i=0;i<9;i++)
  // if (board[i].innerHTML==="X"
     // (box0.innerHTML==="X"&&box1.innerHTML==="X"&&box1.innerHTML==="X"||
     //  box3.innerHTML==="X"&&box4.innerHTML==="X"&&box5.innerHTML==="X"||
     //  box6.innerHTML==="X"&&box7.innerHTML==="X"&&box8.innerHTML==="X"||
    // alert("X wins");
}


var reseT = function(){
  for (var i=0;i<9; i++){
    board[i].innerHTML = "";
  }
}
var button = document.getElementById("clear");
  button.addEventListener("click", reseT());
