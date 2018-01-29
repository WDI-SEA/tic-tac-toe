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
  openSquares = []; //reset openSquares array
  aiStop = false; //allowAi to start again
  checkEnd = false;//change flag to dissallow end
  uiTurn.textContent = "Player 1 Pick a square" //reset UI for player1
  for(var i=0; i<allSquares.length; i++){ //reset all previously assigned square classes
    allSquares[i].style.backgroundImage = "url('./img/squareBack.jpg')";
    allSquares[i].classList.remove("taken");
    allSquares[i].classList.remove("x");
    allSquares[i].classList.remove("o");
    allSquares[i].classList.remove("winner");
  }
}

var endGame = function(winSym, winObj) {
  //Collect winning Squares into Array - handles T win
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
    dc("Ends In Draw");
  }else{
    //change winning squares
    for(var i in winningSquares){
      winningSquares[i].classList.add("winner");
    }
    uiTurn.textContent = winSym+" WINS! Reset or Pick new opponent.";
    dc("Winner is: "+winSym);
  }
  for(var i=0;i<allSquares.length;i++){

    allSquares[i].removeEventListener("click",squareSelected);
  }
}

var addSquare = function (sym, newClaim){
  var appTo = (sym ==="x") ? xClaim : oClaim; //determine object to append
  var check = newClaim.classList; //shorthand box.classList
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
//when called checks gameboard for avail squares
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
    dc(openSquares)
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
    }//If we have 2 and its our turn
    if(strike.length > 0 && stillTurn){
      dc("Striking!")
      claimSquare(getOpenSquare(strike[0])[0],citadel, "o");
      stillTurn = false;
    }//respond to a win scenario
    if(threat.length > 0 && stillTurn){
      dc("responding to threat")
      claimSquare(getOpenSquare(threat[0])[0], citadel, "o");
      stillTurn = false;
    }//Handle no immediate threat
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
  //gather open squares into Array
  avail =  getOpenSquare();
  //get random number not to exceed openSquare Array.length
  var random = Math.floor(Math.random()*avail.length);
  claimSquare(avail[random], citadel, "o")
  uiTurn.textContent = "Player 1 Pick a square";
  turn++;
}
//Adds replaces img of div also adds classes taken and
//the symbol to query later
var claimSquare = function (square, img, sym){
  square.style.background = img;
  square.classList.add("taken");
  square.classList.add(sym);
  addSquare(sym, square);
}
//checks opp value will perform one of following
//Human opp: check to see if square is already with taken class
//then if avail claimSquare passing square, img, and symbol
//easy opp:
//or will run AI turns
var squareSelected = function (){
  if(opp === "human"){
    //First Player
    if(turn%2 === 1 && !this.classList.contains("taken")){
      uiTurn.textContent = "Player 2 Pick a square";
      claimSquare(this, blips, "x");
      turn++;
    //Second Player
    }else if(!this.classList.contains("taken")){
      uiTurn.textContent = "Player 1 Pick a square";
      claimSquare(this, citadel, "o")
      turn++;
    }
  }
  if(opp === "easy"){
    //Player turn
    if(turn%2 === 1 && !this.classList.contains("taken")){
      claimSquare(this, blips, "x");
      turn++;
      //if AI flag not off then AI turn
      if(!aiStop){
        uiTurn.textContent = "Jerry is thinking";
        setTimeout(easyAiTurn,3000);
      }
    }
  }
  if(opp === "hard"){
    //Player Block
    if(turn%2 === 1 && !this.classList.contains("taken")){
      claimSquare(this, blips, "x");
      turn++;
      //Hard AI Block
      if(!aiStop){
        uiTurn.textContent = "Rick was distraced";
        setTimeout(function(){
          hardAiTurn(this);
        },500);
      }
    }
  }
}

//determine input from user and activate board - after execution squares are active and clickable - check squareSelected function for next step
var getPlayType = function (){
  //determine Opponent and remove eventList from radio (prevents changing opp during play)
  for(var i=0;i<rad.length;i++){
    if(rad[i].checked){
      opp = rad[i].value;
    }
    rad[i].removeEventListener("click", getPlayType);
  }
  //Apply eventList to class Square div's runs squareSelected function on click
  for(var j=0; j<allSquares.length; j++){
    allSquares[j].addEventListener("click", squareSelected);
  }
  //enables reset button
  document.getElementById("resetButton").addEventListener("click", clearBoard);
  //Check Opp variable, and depending on selection, changes left image and places player instructions into uiTurn element
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

//onLoad
document.addEventListener("DOMContentLoaded", function(){
//add eventList for radio on click runs getPlayType function as next step
  for(var i =0;i<rad.length;i++){
    rad[i].addEventListener("click", getPlayType);
  }
});
