var currentPlayer = "x";

//get html divs corresponding to game squares
var idpos00 = document.getElementById("pos00");
var idpos01 = document.getElementById("pos01");
var idpos02 = document.getElementById("pos02");
var idpos10 = document.getElementById("pos10");
var idpos11 = document.getElementById("pos11");
var idpos12 = document.getElementById("pos12");
var idpos20 = document.getElementById("pos20");
var idpos21 = document.getElementById("pos21");
var idpos22 = document.getElementById("pos22");

//contain DOM elements for gameboard boxes
var boxElements = [
  [idpos00, idpos01, idpos02],
  [idpos10, idpos11, idpos12],
  [idpos20, idpos21, idpos22]
];

var boardStart = [
  ["pos00", "pos01", "pos02"],
  ["pos10", "pos11", "pos12"],
  ["pos20", "pos21", "pos22"]
];

var boardInPlay = [
  ["x", "pos01", "o"],
  ["pos10", "pos11", "pos12"],
  ["pos20", "x", "pos22"]
];

//sets board back to default
var resetGame = function(){
  for(var i = 0; i<boardInPlay.length; i++){ 
    var col = boardInPlay[i]; 
      for(var j = 0; j<col.length; j++){
      	boardInPlay[i][j]=boardStart[i][j];
      } 
  } 
  currentPlayer = "x";
};

//builds board based on the boardInPlay array
var buildBoard = function(){
  for(var i = 0; i<boardInPlay.length; i++){ 
    var col = boardInPlay[i]; 
      for(var j = 0; j<col.length; j++){
        if(boardInPlay[i][j]==="x"){
          boxElements[i][j].style.backgroundImage =  "url('img/ximg.png')";  
        } else if(boardInPlay[i][j]==="o"){
          boxElements[i][j].style.backgroundImage =  "url('img/oimg.png')"; 
        } else {
          boxElements[i][j].style.backgroundImage =  "light gray";  
        } 
      } 
  } 
};


buildBoard();
// resetGame();






