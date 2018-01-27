//Variable Dec Section
var allSquares = document.getElementsByClassName("square");
var rad = document.getElementsByName("gameType");
var uiTurn = document.getElementById("turn");
var winningSquares = [];
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
  getPlayType(); //Determine if opponent changed
  turn = 1; //reset turn count to 1 for decidng whos turn
  for(var i in xClaim){ //clear x and o claim objects
    xClaim[i] = 0;
    oClaim[i] = 0;
  }
  winningSquares = []; //reset wining square array
  uiTurn.textContent = "Player 1 Pick a square" //reset UI for player1
  for(var i=0; i<allSquares.length; i++){ //reset all previously assigned square classes
    allSquares[i].style.background = "blue";
    allSquares[i].classList.remove("taken");
    allSquares[i].classList.remove("x");
    allSquares[i].classList.remove("o");
    allSquares[i].classList.remove("winner");
  }
}

var endGame = function(winSym, winObj) {
  //Collect winning Squares into Array - handles T win 
  for(var i in winObj){
    if(winObj[i] === 3){
      for(var j =0;j<allSquares.length;j++){
        if(allSquares[j].classList.contains(i)){
          winningSquares.push(allSquares[j]);
        }
      }
    }
  }
  if(winSym === "draw"){//event of draw
    dc("Ends In Draw");
  }else{
    //change winning squares
    dc(winningSquares);
    for(var i in winningSquares){
      winningSquares[i].classList.add("winner");
    }
    dc("Winner is: "+winSym);
  }
  for(var i=0;i<allSquares.length;i++){
    allSquares[i].removeEventListener("click",squareSelected);
  }
}

var addSquare = function (sym, newClaim){
  var appTo = (sym ==="x") ? xClaim : oClaim; //determine object to append
  var check = newClaim.classList; //shorthand box.classList
  var checkEnd = false;
  if(check.contains("top")){
    appTo.top += 1;
    appTo.top === 3 ? checkEnd = true : "";
  }
  if (check.contains("cent")){
    appTo.cent += 1;
    appTo.cent === 3 ? checkEnd = true : "";
  }
  if (check.contains("bot")){
    appTo.bot += 1;
    appTo.bot === 3 ? checkEnd = true : "";
  }
  if (check.contains("left")){
    appTo.left += 1;
    appTo.left === 3 ? checkEnd = true : "";
  }
  if (check.contains("mid")){
    appTo.mid += 1;
    appTo.mid === 3 ? checkEnd = true : "";
  }
  if (check.contains("right")){
    appTo.right += 1;
    appTo.right === 3 ? checkEnd = true : "";
  }
  if (check.contains("diag1")){
    appTo.diag1 += 1;
    appTo.diag1 === 3 ? checkEnd = true : "";
  }
  if (check.contains("diag2")){
    appTo.diag2 += 1;
    appTo.diag2 === 3 ? checkEnd = true : "";
  }

  if(checkEnd){
    endGame(sym, appTo);
  }
}

var squareSelected = function (){
  if(opp === "human"){
    if(turn%2 === 1 && !this.classList.contains("taken")){
      this.style.background = "url('./img/x.png')";
      this.classList.add("taken");
      this.classList.add("x");
      uiTurn.textContent = "Player 2 Pick a square";
      addSquare("x",this);
      turn++;
    }else if(!this.classList.contains("taken")){
      this.style.background = "url('./img/o.png')";
      this.classList.add("taken");
      this.classList.add("o");
      uiTurn.textContent = "Player 1 Pick a square";
      addSquare("o", this);
      turn++;
    }else if(opp === "easy"){
      dc("easy AI selected");
      if(turn%2 === 1 && !this.classList.contains("taken")){
        this.style.background = "url('./img/x.png')";
        this.classList.add("taken");
        this.classList.add("x");
        uiTurn.textContent = "Player 2 Pick a square";
        addSquare("x",this);
        turn++;
        easyAiTurn();
      }
    }else if(opp === "hard"){
      dc("Hard AI selected");
      if(turn%2 === 1 && !this.classList.contains("taken")){
        this.style.background = "url('./img/x.png')";
        this.classList.add("taken");
        this.classList.add("x");
        uiTurn.textContent = "Player 2 Pick a square";
        addSquare("x",this);
        turn++;
        hardAiTurn();
      }
    }
  }
}

//determine input from user and activate board
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
//add eventList for radio
  for(var i =0;i<rad.length;i++){
    rad[i].addEventListener("click", getPlayType);
  }
});
