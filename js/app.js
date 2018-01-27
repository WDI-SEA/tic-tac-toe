var allSquares = document.getElementsByClassName("square");
var rad = document.getElementsByName("gameType");
var uiTurn = document.getElementById("turn");
var opp;
var turn = 1;
var xClaim = {
  top: 0,
  cent: 0,
  bot: 0,
  left: 0,
  mid: 0,
  right: 0,
  diag1: 0,
  diag2: 0
}

var yClaim = {
  top: 0,
  cent:0,
  bot: 0,
  left: 0,
  mid: 0,
  right: 0,
  diag1: 0,
  diag2: 0
}
//for Debug only
function dc(str){
  console.log(str)
}
var clearBoard = function (){
  getPlayType();
  turn = 1;
  for(var i in xClaim){
    xClaim[i] = 0;
    yClaim[i] = 0;
  }
  uiTurn.textContent = "Player 1 Pick a square"
  for(var i=0; i<allSquares.length; i++){
    allSquares[i].style.background = "blue";
    allSquares[i].classList.remove("taken");
    allSquares[i].classList.remove("x");
    allSquares[i].classList.remove("o");
  }
}

var checkWin = function (sym, newClaim){
  var appTo = sym === "x" ? xClaim : yClaim;
  dc(appTo);
  var check = newClaim.classList;
  switch (true){
    case check.contains("top"):
      appTo.top += 1;
      break;
    case check.contains("cent"):
      appTo.cent += 1;
      break;
    case check.contains("bot"):
      appTo.bot += 1;
      break;
    case check.contains("left"):
      appTo.right += 1;
      break;
    case check.contains("mid"):
      appTo.mid += 1;
      break;
    case check.contains("right"):
      appTo.right += 1;
      break;
    case check.contains("diag1"):
      appTo.diag1 += 1;
      break;
    case check.contains("diag2"):
      appTo.diag2 += 1;
      break;
  }
  for(var i in appTo){
    if(appTo[i] === 3){
      endGame(sym);
    }
  }
}

var squareSelected = function (){
  if(opp === "human"){
    if(turn%2 === 1 && !this.classList.contains("taken")){
      this.style.background = "url('./img/x.png')";
      this.classList.add("taken");
      this.classList.add("x");
      uiTurn.textContent = "Player 2 Pick a square";
      checkWin("x",this);
      turn++;
    }else if(!this.classList.contains("taken")){
      this.style.background = "url('./img/o.png')";
      this.classList.add("taken");
      this.classList.add("o");
      uiTurn.textContent = "Player 1 Pick a square";
      checkWin("o", this);
      turn++;
    }
  }else{
    dc("AI selected");
  }
}

var getPlayType = function (){
  for(var i=0;i<rad.length;i++){
    if(rad[i].checked){
      opp = rad[i].value;
      for(var j=0; j<allSquares.length; j++){
        allSquares[j].addEventListener("click", squareSelected);
      }
      document.getElementById("resetButton").addEventListener("click", clearBoard);
    }
    rad[i].removeEventListener("click", getPlayType);
  }
  if(opp === "human"){
    uiTurn.textContent = "Player 1 Pick a square"
  }
}
//onLoad
document.addEventListener("DOMContentLoaded", function(){
//solve wherer to put all this
  for(var i =0;i<rad.length;i++){
    rad[i].addEventListener("click", getPlayType);
  }
});
