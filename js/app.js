//Variable Dec Section
var allSquares = document.getElementsByClassName("square");
var rad = document.getElementsByName("gameType");
var uiTurn = document.getElementById("turn");
var centerSquare = document.getElementsByClassName("mid cent")[0];
var blips = "url('./img/blips.png')";
var citadel = "url('./img/citadel.png')"
var checkEnd = false;
var aiStop = false;
var turn = 1;
var positions = ["top", "mid", "bot", "left", "cent", "right", "diag1", "diag2"];
var winningSquares = [];
var avail = [];
var jerryTimer;
var opp;
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
var clearBoard = function (){
  console.clear();
  getPlayType();
  turn = 1;
  for(var i in xClaim){
    xClaim[i] = 0;
    oClaim[i] = 0;
  }
  winningSquares = [];
  openSquares = [];
  aiStop = false;
  checkEnd = false;
  uiTurn.textContent = "Player 1 Pick a square";
  for(var i=0; i<allSquares.length; i++){
    allSquares[i].style.backgroundImage = "url('./img/squareBack.jpg')";
    allSquares[i].classList.remove("taken");
    allSquares[i].classList.remove("x");
    allSquares[i].classList.remove("o");
    allSquares[i].classList.remove("winner");
  }
}
var endGame = function(winSym, winObj) {
  aiStop = true;
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
    uiTurn.textContent = "Game is a Draw! Reset or Pick new opponent."
  }else{
    //change winning squares
    for(var i in winningSquares){
      winningSquares[i].classList.add("winner");
    }
    uiTurn.textContent = winSym+" WINS! Reset or Pick new opponent.";
  }
  for(var i=0;i<allSquares.length;i++){
    allSquares[i].removeEventListener("click",squareSelected);
  }
}
var addSquare = function (sym, newClaim){
  var appTo = (sym ==="x") ? xClaim : oClaim;
  var check = newClaim.classList;
  for(var i=0;i<positions.length;i++){
    if(check.contains(positions[i])){
      appTo[positions[i]] += 1;
      appTo[positions[i]] === 3 ? checkEnd = true : "";
    }
  }
  if(sym === "x"){
    sym = "BLIPSnCHITZ";
  }  else{
    sym = "The Citidel";
  }
  if(checkEnd){
    endGame(sym, appTo);
  }
  availCheck = getOpenSquare();
  if(availCheck.length < 1 && checkEnd === false){
      endGame("draw");
  }
}
var getOpenSquare = function(filter){
  var openSquares = [];
  if(!filter){
    for(var i=0;i<allSquares.length;i++){
      if(!allSquares[i].classList.contains("taken")){
        openSquares.push(allSquares[i]);
      }
    }
    return openSquares;
  }else{
    for(var i=0;i<allSquares.length;i++){
      if(!allSquares[i].classList.contains("taken") && allSquares[i].classList.contains(filter)){
        openSquares.push(allSquares[i]);
      }
    }
    return openSquares;
  }
}
var hardAiTurn = function(prevPick){
  var stillTurn = true;
  if(!centerSquare.classList.contains("taken")){
    claimSquare(centerSquare, citadel, "o");
    stillTurn = false;
  }
  if(stillTurn){
    var threat = [];
    var strike = [];
    for(var i=0;i<positions.length; i++){
      if(xClaim[positions[i]] > 1 && getOpenSquare(positions[i]).length === 1){
        threat.push(positions[i]);
      }
      if(oClaim[positions[i]] >1 && getOpenSquare(positions[i]).length === 1){
        strike.push(positions[i]);
      }
    }
    if(strike.length > 0 && stillTurn){
      claimSquare(getOpenSquare(strike[0])[0],citadel, "o");
      stillTurn = false;
    }
    if(threat.length > 0 && stillTurn){
      claimSquare(getOpenSquare(threat[0])[0], citadel, "o");
      stillTurn = false;
    }
    if(stillTurn){
      avail = getOpenSquare("diag1").concat(getOpenSquare("diag2"));
      var random = Math.floor(Math.random()*avail.length);
      claimSquare(avail[random], citadel, "o");
      stillTurn = false;
    }
  }
  uiTurn.textContent = "Player 1 Pick a square";
  turn++;
}
var easyAiTurn = function (){
  avail =  getOpenSquare();
  var random = Math.floor(Math.random()*avail.length);
  claimSquare(avail[random], citadel, "o")
  uiTurn.textContent = "Player 1 Pick a square";
  turn++;
}
var claimSquare = function (square, img, sym){
  square.style.background = img;
  square.classList.add("taken");
  square.classList.add(sym);
  addSquare(sym, square);
}
var squareSelected = function (){
  if(opp === "human"){
    if(turn%2 === 1 && !this.classList.contains("taken")){
      uiTurn.textContent = "Player 2 Pick a square";
      claimSquare(this, blips, "x");
      turn++;
    }else if(!this.classList.contains("taken")){
      uiTurn.textContent = "Player 1 Pick a square";
      claimSquare(this, citadel, "o")
      turn++;
    }
  }
  if(opp === "easy"){
    if(turn%2 === 1 && !this.classList.contains("taken")){
      claimSquare(this, blips, "x");
      turn++;
      if(!aiStop){
        uiTurn.textContent = "Jerry is thinking";
        setTimeout(easyAiTurn,3000);
      }
    }
  }
  if(opp === "hard"){
    if(turn%2 === 1 && !this.classList.contains("taken")){
      claimSquare(this, blips, "x");
      turn++;
      if(!aiStop){
        uiTurn.textContent = "Rick was distraced";
        setTimeout(function(){
          hardAiTurn(this);
        },500);
      }
    }
  }
}
var getPlayType = function (){
  for(var i=0;i<rad.length;i++){
    if(rad[i].checked){
      opp = rad[i].value;
    }
    rad[i].removeEventListener("click", getPlayType);
  }
  for(var j=0; j<allSquares.length; j++){
    allSquares[j].addEventListener("click", squareSelected);
  }
  document.getElementById("resetButton").addEventListener("click", clearBoard);
  if(opp === "human"){
    document.getElementById("opp1Img").src = "img/meseeks.png";
    uiTurn.textContent = "Player 1 Pick a square"
  }else if(opp === "easy"){
    uiTurn.textContent = "Player 1 Pick a square"
    document.getElementById("opp1Img").src = "img/jerrOpp.png";
  }else if(opp === "hard"){
    document.getElementById("opp1Img").src = "img/rick.png"
  }
}
document.addEventListener("DOMContentLoaded", function(){
  for(var i =0;i<rad.length;i++){
    rad[i].addEventListener("click", getPlayType);
  }
});
