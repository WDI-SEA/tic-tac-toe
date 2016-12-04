var playerOptions = ["X","O"]; // x = 1-x to switch between; math.random to pick who goes first
var playerIter = Math.round(Math.random());
var player = playerOptions[playerIter];  //will be one of the playerOptions
var gameStatus = 1; //0 is not playing, 1 is playing
var score; //will be used to track score
var tileStatus = [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN]; //will be NaN to start, X or O after played; zero-based array for each tile
var tileValue; //the tile array index of the tile clicked

var reset = function(){

};

var columnMatch = function(){
  for(i=0; i<3; i++){
    if(tileStatus[i]==player & tileStatus[i+3]==player & tileStatus[i+6]==player){
        console.log(player+" matches column!");
        document.getElementById("tile"+i).className = document.getElementById("tile"+i).className + " win";
        document.getElementById("tile"+(i+3)).className = document.getElementById("tile"+(i+3)).className + " win";
        document.getElementById("tile"+(i+6)).className = document.getElementById("tile"+(i+6)).className + " win";
        gameStatus=0;
        document.getElementById("footer").innerHTML = player+" wins round!";
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
        gameStatus=0;
        document.getElementById("footer").innerHTML = player+" wins round!";
    }
  }
};

var diagMatch = function(){
  if(tileStatus[0]==player & tileStatus[4]==player & tileStatus[8]==player){
      console.log(player+" matches diagonal!");
      document.getElementById("tile"+0).className = document.getElementById("tile"+0).className + " win";
      document.getElementById("tile"+(4)).className = document.getElementById("tile"+(4)).className + " win";
      document.getElementById("tile"+(8)).className = document.getElementById("tile"+(8)).className + " win";
      gameStatus=0;
      document.getElementById("footer").innerHTML = player+" wins round!";
  }
  if(tileStatus[2]==player & tileStatus[4]==player & tileStatus[6]==player){
      console.log(player+" matches diagonal!");
      document.getElementById("tile"+2).className = document.getElementById("tile"+2).className + " win";
      document.getElementById("tile"+(4)).className = document.getElementById("tile"+(4)).className + " win";
      document.getElementById("tile"+(6)).className = document.getElementById("tile"+(6)).className + " win";
      gameStatus=0;
      document.getElementById("footer").innerHTML = player+" wins round!";
  }
};

var tileClick = function(element){
  if(gameStatus==1){
    val = element.getAttribute("value");
    if(tileStatus[val]=="X"|tileStatus[val]=="O"){

    } else{
      tileStatus[val] = player;
      element.innerHTML = player;
      columnMatch();
      rowMatch();
      diagMatch();
      playerIter = 1 - playerIter;
      player = playerOptions[playerIter];
    }
  } else{

  }
};


// tile0.addEventListener('click',function(){console.log(this.getAttribute("value"));});
