document.addEventListener("DOMContentLoaded", function(){
 
 var board = document.getElementById("board");
 var turn = 0;
 var oMoves = []; 
 var xMoves = []; 
 var oMovesStr = oMoves.toString();
 
 var winMoves = ["1,2,3","4,5,6","7,8,9","1,4,7","2,5,8","3,6,9","1,5,9","3,5,7",];
 
   xTurn = document.getElementById("xTurn");
   oTurn = document.getElementById("oTurn");
   xWin = document.getElementById("xWin");
   oWin = document.getElementById("oWin");
 
   function clickBox(){
     for (var i = 0; i < board.children.length; i) {
       board.children[i].addEventListener("click", isClicked);
     }
   }
   clickBox();
 
   function isClicked(){
     if (turn % 2 === 0){
       this.style.background = "url('./img/paintbrushes.png') no-repeat center";
       document.querySelector("img").src = "./img/paint-splatter.png";
       xMoves.push(this.id);
     } else {
       this.style.background = "url('./img/paint-splatter.png') no-repeat center";
       document.querySelector("img").src = "./img/paintbrushes.png";
       oMoves.push(this.id);
     }
 
     turn
 
     this.removeEventListener("click", isClicked);
 
     gameWinX();
     gameWinO();
     gameTie();
   } 
 
 
 
   document.getElementById("restart").addEventListener("click", restartGame);
 
   function restartGame(){
     turn = 0;
     xMoves = [];
     oMoves = [];
     var clearBox = document.querySelectorAll("#board div");
     for (var i = 0; i < clearBox.length; i) {
       clearBox[i].style.backgroundImage = "";
     }
     clickBox();
 
     document.getElementById("message").innerHTML = "Turn = <br><img src=\'./img/paintbrushes.png\' class='scaled'>"
     xWin.pause();
     oWin.pause();
   }
 
   function gameWinX(){
     for (var i = 0; i<winMoves.length; i){
       xMoves.sort();
       if(xMoves.toString() == winMoves[i]){
         document.getElementById("message").innerHTML = "<img src=\'./img/paintbrushes.png\' class='scaled'> Wins!"
         xTurn.pause();
       }
     }
   }
 
   function gameWinO(){
     for (var i = 0; i<winMoves.length; i){
       oMoves.sort();
       if(oMoves.toString() == winMoves[i]){
         document.getElementById("message").innerHTML = "<img src=\'./img/paint-splatter.png\' class='scaled'> Wins!"
         oTurn.pause();
       }
     }
   }
 
   function gameTie(){
     if(turn === 9){
       document.getElementById("message").innerHTML = "<img src=\'./img/paintbrushes.png\' class='scaled'> TIE <img src=\'./img/paint-splatter.png\' class='scaled'>"
     }
   }
 
 });