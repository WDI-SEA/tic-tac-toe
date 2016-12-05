var playerOptions = ["X","O"]; // x = 1-x to switch between; math.random to pick who goes first
var playerIter = Math.round(Math.random());
var player = playerOptions[playerIter];  //will be one of the playerOptions
var gameStatus = 0; //0 is not playing, 1 is playing
var score = {"X":0, "O":0};
var tileStatus = [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN]; //will be NaN to start, X or O after played; zero-based array for each tile
var tileValue; //the tile array index of the tile clicked
var plays = 0;

var columnMatch = function(){
  for(i=0; i<3; i++){
    if(tileStatus[i]==player & tileStatus[i+3]==player & tileStatus[i+6]==player){
        console.log(player+" matches column!");
        document.getElementById("tile"+i).className = document.getElementById("tile"+i).className + " win";
        document.getElementById("tile"+(i+3)).className = document.getElementById("tile"+(i+3)).className + " win";
        document.getElementById("tile"+(i+6)).className = document.getElementById("tile"+(i+6)).className + " win";
        return true;
    }
  }
};

var rowMatch = function(){
  for(i=0; i<7; i+=3){
    if(tileStatus[i]==player & tileStatus[i+1]==player & tileStatus[i+2]==player){
        console.log(player+" matches row!");
        document.getElementById("tile"+i).className = document.getElementById("tile"+i).className + " win";
        document.getElementById("tile"+(i+1)).className = document.getElementById("tile"+(i+1)).className + " win";
        document.getElementById("tile"+(i+2)).className = document.getElementById("tile"+(i+2)).className + " win";
        return true;
    }
  }
};

var diagMatch = function(){
  if(tileStatus[0]==player & tileStatus[4]==player & tileStatus[8]==player){
      console.log(player+" matches diagonal!");
      document.getElementById("tile"+0).className = document.getElementById("tile"+0).className + " win";
      document.getElementById("tile"+(4)).className = document.getElementById("tile"+(4)).className + " win";
      document.getElementById("tile"+(8)).className = document.getElementById("tile"+(8)).className + " win";
      return true;
  }
  if(tileStatus[2]==player & tileStatus[4]==player & tileStatus[6]==player){
      console.log(player+" matches diagonal!");
      document.getElementById("tile"+2).className = document.getElementById("tile"+2).className + " win";
      document.getElementById("tile"+(4)).className = document.getElementById("tile"+(4)).className + " win";
      document.getElementById("tile"+(6)).className = document.getElementById("tile"+(6)).className + " win";
      return true;
  }
};

var tileClick = function(element){
  if(gameStatus==1){
    val = element.getAttribute("value");
    if(tileStatus[val]=="X"|tileStatus[val]=="O"){
    } else{
      plays++;
      tileStatus[val] = player;
      element.innerHTML = player;
      columnMatch();
      rowMatch();
      diagMatch();
      if(columnMatch()||rowMatch()||diagMatch()){
        gameStatus=0;
        document.getElementById("nav").innerHTML = player+" wins round!";
        score[player]++;
        document.getElementById("score-X").textContent = "\"X\" wins: "+score.X;
        document.getElementById("score-O").textContent = "\"O\" wins: "+score.O;
      }else{
        if(plays==9){
          gameStatus=0;
          plays=0;
          document.getElementById("nav").textContent = "Draw!";
        }else {
          playerIter = 1 - playerIter;
          player = playerOptions[playerIter];
          document.getElementById("nav").textContent = player+"'s turn!";
        }
      }
    }
  } else{
  }
};


var reset = function(){
  playerIter = Math.round(Math.random()); //comment this line if you don't want it to be random start each turn
  player = playerOptions[playerIter];
  plays= 0;
  document.getElementById("nav").textContent = player+"'s turn!";
  score = {"X":0, "O":0};
  gameStatus = 1;
  tileStatus = [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN];
  for(i=0; i<9; i++){
    document.getElementById("tile"+i).className = "tile";
    document.getElementById("tile"+i).textContent = "";
  }
  document.getElementById("score-X").textContent = "X wins: "+score.X;
  document.getElementById("score-O").textContent = "O wins: "+score.O;

};

var play = function(){
  // playerIter = Math.round(Math.random()); //comment this line if you don't want it to be random start each turn
  playerIter = 1 - playerIter;
  player = playerOptions[playerIter];
  plays = 0;
  document.getElementById("nav").textContent = player+"'s turn!";
  gameStatus = 1;
  tileStatus = [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN];
  for(i=0; i<9; i++){
    document.getElementById("tile"+i).className = "tile";
    document.getElementById("tile"+i).textContent = "";
  }
};
