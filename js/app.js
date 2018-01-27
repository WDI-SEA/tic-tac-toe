var allSquares = document.getElementsByClassName("square");
var uiTurn = document.getElementById("turn");
var opp;
var turn = 1;
//for Debug only
function dataCheck(str){
  console.log(str)
}
var clearBoard = function (){
  turn = 1;
  uiTurn.textContent = 0
  for(var i=0; i<allSquares.length; i++){
    allSquares[i].style.background = "blue";
    allSquares[i].classList.remove("taken");
  }
}

var squareSelected = function (){

  if(turn%2 === 1 && !this.classList.contains("taken")){
      this.style.background = "url('./img/x.png')";
      this.classList.add("taken");
      uiTurn.textContent = turn;
      turn++;
  }else if(!this.classList.contains("taken")){
    this.style.background = "url('./img/o.png')";
    this.classList.add("taken");
    uiTurn.textContent = turn;
    turn++;
  }
}

//onLoad
document.addEventListener("DOMContentLoaded", function(){

  var rad = document.getElementsByName("gameType");
    for(var i=0;i<rad.length;i++){
      if(rad[i].checked){
        for(var i=0; i<allSquares.length; i++){
          allSquares[i].addEventListener("click", squareSelected);
        }
        document.getElementById("resetButton").addEventListener("click", clearBoard);
      }
  }
});
