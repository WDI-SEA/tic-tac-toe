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
var whosUp = document.getElementById("whosUp");

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
  ["pos00", "pos01", "pos02"],
  ["pos10", "pos11", "pos12"],
  ["pos20", "pos21", "pos22"]
];


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
          boxElements[i][j].style.backgroundImage =  "";  
        } 
      } 
  } 
};

//sets board back to default
var resetGame = function(){
  for(var i = 0; i<boardInPlay.length; i++){ 
    var col = boardInPlay[i]; 
      for(var j = 0; j<col.length; j++){
      	boardInPlay[i][j]=boardStart[i][j];
      } 
  } 
  currentPlayer = "x";
  buildBoard();
  whosUp.style.backgroundImage =  "url('img/ximg.png')";
};

//anonymous - switches player and changes whosUp image
var switchPlayer = function(){
	if(currentPlayer==="x"){
		currentPlayer="o";
		whosUp.style.backgroundImage =  "url('img/oimg.png')";
	} else{
		currentPlayer="x";
		whosUp.style.backgroundImage =  "url('img/ximg.png')";
	}
}

// returns true if array elements are all the same 
var arrayAllSame = function(testArray){
	var isSame = true;
	for(var i = 1; i<testArray.length; i++){
		if(testArray[0]!==testArray[i]){
			isSame=false;
		}
	}
	return isSame;
};

//loop horizontal arrays, loop vertical arrays, check diagonals
var checkForWinner = function(player){
	var isWinner = false;
	//horizontal
	for(var i = 0; i<boardInPlay.length; i++){ 
		arrayAllSame(player); 
  	} 
	//vertical

	//diagonal
};

//accepts "coordinate" in the form posxy and value of current player
var updateBoardInPlay = function(pos,player){
	var i = pos.charAt(3);
	var j = pos.charAt(4);
	if(boardInPlay[i][j]===boardStart[i][j]){
		boardInPlay[i][j]=player;
		if(checkForWinner(player)===true){
			///winning stuff
		} else{
		switchPlayer();
		buildBoard();
		}	
	} //only updates squares that haven't been played
};



//initialize and play the game

resetGame();

idpos00.addEventListener("click",function(){updateBoardInPlay("pos00",currentPlayer);});
idpos01.addEventListener("click",function(){updateBoardInPlay("pos01",currentPlayer);});
idpos02.addEventListener("click",function(){updateBoardInPlay("pos02",currentPlayer);});
idpos10.addEventListener("click",function(){updateBoardInPlay("pos10",currentPlayer);});
idpos11.addEventListener("click",function(){updateBoardInPlay("pos11",currentPlayer);});
idpos12.addEventListener("click",function(){updateBoardInPlay("pos12",currentPlayer);});
idpos20.addEventListener("click",function(){updateBoardInPlay("pos20",currentPlayer);});
idpos21.addEventListener("click",function(){updateBoardInPlay("pos21",currentPlayer);});
idpos22.addEventListener("click",function(){updateBoardInPlay("pos22",currentPlayer);});






