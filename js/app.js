var allSquares = document.getElementsByClassName("square");
var rad = document.getElementsByName("gameType");
var uiTurn = document.getElementById("turn");
var appTo;
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

var oClaim = {
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
  console.clear();
  getPlayType();
  turn = 1;
  for(var i in xClaim){
    xClaim[i] = 0;
    oClaim[i] = 0;
  }
  uiTurn.textContent = "Player 1 Pick a square"
  for(var i=0; i<allSquares.length; i++){
    allSquares[i].style.background = "blue";
    allSquares[i].classList.remove("taken");
    allSquares[i].classList.remove("x");
    allSquares[i].classList.remove("o");
  }
}

var endGame = function(win) {
  if(win === "draw"){
    dc("Ends In Draw");
  }else{
    dc("Winner is: "+win);
  }
  for(var i=0;i<allSquares.length;i++){
    allSquares[i].removeEventListener("click",squareSelected);
  }
}

var checkWin = function (sym, newClaim){
  if(sym === "x"){
    var appTo = xClaim;
  }else if(sym === "o"){
    var appTo = oClaim;
  }
  var check = newClaim.classList;
    if(check.contains("top")){
      appTo.top += 1;
    }
    if (check.contains("center")){
      appTo.cent += 1;
    }
    if (check.contains("bot")){
      appTo.bot += 1;
    }
    if (check.contains("left")){
      appTo.left += 1;
    }
    if (check.contains("mid")){
      appTo.mid += 1;
    }
    if (check.contains("right")){
      appTo.right += 1;
    }
    if (check.contains("diag1")){
      appTo.diag1 += 1;
    }
    if (check.contains("diag2")){
      appTo.diag2 += 1;
    }
  for(var i in appTo){
    if(appTo[i] === 3){
      endGame(sym);
    }
  }
  if(turn >= 9){
    endGame("draw");
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
    }else if(opp === "easy"){
      dc("easy AI selected");
      if(turn%2 === 1 && !this.classList.contains("taken")){
        this.style.background = "url('./img/x.png')";
        this.classList.add("taken");
        this.classList.add("x");
        uiTurn.textContent = "Player 2 Pick a square";
        checkWin("x",this);
        turn++;
        easyAiTurn();
      }
    }else if(opp === "hard"){
      dc("Hard AI selected")
    }
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
