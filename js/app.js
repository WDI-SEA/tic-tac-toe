var currentPlayer = "X";
var playCounter = 0;

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
var sidebarText = document.getElementById("sidebarText");

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
    var row = boardInPlay[i]; 
      for(var j = 0; j<row.length; j++){
        if(boardInPlay[i][j]==="X"){
          boxElements[i][j].style.backgroundImage =  "url('img/ximg.png')";  
        } else if(boardInPlay[i][j]==="O"){
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
    var row = boardInPlay[i]; 
      for(var j = 0; j<row.length; j++){
      	boardInPlay[i][j]=boardStart[i][j];
      } 
  } 
  currentPlayer = "X";
  buildBoard();
  playCounter = 0;
  whosUp.style.backgroundImage =  "url('img/ximg.png')";
  sidebarText.textContent = "Click the board to place an:"
};

//anonymous - switches player and changes whosUp image
var switchPlayer = function(){
	if(currentPlayer==="X"){
		currentPlayer="O";
		whosUp.style.backgroundImage =  "url('img/oimg.png')";
	} else{
		currentPlayer="X";
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
		if(arrayAllSame(boardInPlay[i])===true){
		  isWinner = true;
		  console.log(player + "wins");
		  return isWinner; 
      	}
    }
	//vertical
	for(var j = 0; j<boardInPlay.length;j++){
		var colArray = [];
		for(var i = 0; i<boardInPlay.length; i++){ 
     		colArray.push(boardInPlay[i][j]);
  		} 
      if(arrayAllSame(colArray)===true){
		    isWinner = true;
		    console.log(player + "wins");
		    return isWinner;
      }
	}
	 
	// diagonal
	var diagDown = [];
		for(var i = 0; i<boardInPlay.length; i++){ 
     		diagDown.push(boardInPlay[i][i]);
     	}
		if(arrayAllSame(diagDown)===true){
		  isWinner = true;
		  console.log(player + "wins");
		  return isWinner; 
      	}

	var diagUp = [];
		for(var i = 0; i<boardInPlay.length; i++){
			var j = boardInPlay.length - 1 - i;
     		diagUp.push(boardInPlay[i][j]);
     	}
		if(arrayAllSame(diagUp)===true){
		  isWinner = true;
		  console.log(player + "wins");
		  return isWinner; 
      	} 
      playCounter++;
      return isWinner;
};

//accepts "coordinate" in the form posij and value of current player
var updateBoardInPlay = function(pos,player){
	var i = pos.charAt(3);
	var j = pos.charAt(4);
	if(boardInPlay[i][j]===boardStart[i][j]){
		boardInPlay[i][j]=player;
		if(checkForWinner(player)===true){
			buildBoard();
			whosUp.style.backgroundImage =  "url('img/win.gif')";
			sidebarText.textContent = player + " wins!";
		} else if (playCounter===9){
			buildBoard();
			whosUp.style.backgroundImage =  "";
			sidebarText.textContent = "It's a draw!  Reset to play again.";
		}
		else{
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






