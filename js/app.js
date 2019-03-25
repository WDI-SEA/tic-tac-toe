console.log("let's do this");
var tiles = [];
var turn = 1;
var player1 = [];
var player2 = [];
wins1 = 0;
wins2 = 0;
player1Color="red"
player2Color="blue"

//Assign objects on the board
assignClicks();

//assign the reset click - which triggers the assignClicks function
document.getElementById("reset").addEventListener("click", assignClicks)

//used to sort player1[] & player2[] clicked tiles
function sortNumber(a,b) {
        return a - b;
    }

//assign click events
function assignClicks (){
	//reset values
		turn = 1;
		tiles = [];
		player1 = [];
		player2 = [];
		document.getElementById("titleH1").textContent= "Player 1's Turn"
		document.getElementById("titleH1").style.color= player1Color

	//get how many tiles
		countTiles = document.getElementsByClassName("gameTile");
		console.log("creating",countTiles.length,"tiles.")
	
	//loop through how many tiles
		for (var i = 0; i < countTiles.length; i++){
			var obj = {};
			obj['id'] = i
			
			//initiall sets player to null
			obj['player'] = null
			tiles.push(obj);

			//assign id to div
			countTiles[i].setAttribute('id', i)
			//add event listener
			countTiles[i].addEventListener("click", changeTile);
			countTiles[i].style.backgroundColor = "white"
			countTiles[i].innerText =""
		}
		console.log(tiles)
};

function changeTile(whosTurn){
	
	//check who's turn it is - could probably make into it's own function that returns the number and sets these things

	if (turn === 1){
		console.log("Player 1 clicked:",this.id)
		
		//remove click event
			this.removeEventListener("click", changeTile)

		//mark tile
			// this.getElementsByTagName("p").innerText= "x"
			this.style.backgroundColor =player1Color

		//store the tile player and adds to players array
			this.setAttribute('player', '1')
			player1.push(this.id)
			console.log(player1)
		
		//change turn
			turn = 2;
			
		//display turn at top 
			document.getElementById("titleH1").textContent= "Player 2's Turn"
			document.getElementById("titleH1").style.color= "blue"
		
		//console log
			console.log("player:",this.getAttribute('player'))
			console.log('')

		//check win
			console.log("passing player 1 to check---------")
			console.log(player1)
			checkWinHC(player1, "player1");
		
	} else {
		console.log("Player 2 clicked:",this.id)
		
		//remove click event
			this.removeEventListener("click", changeTile)
		
		//mark tile
			//this.getElementsByTagName.innerText= "o"
			this.style.backgroundColor ="blue"

		//store the tile player adds to players array
			this.setAttribute('player', '2')
			player2.push(this.id)
			console.log("after push",player2)
	
		//change turn
			turn = 1;

		//display turn at top 
			document.getElementById("titleH1").textContent= "Player 1's Turn"
			document.getElementById("titleH1").style.color= player1Color
			
			
		//console log
			console.log("player:",this.getAttribute('player'))
			console.log('')

		//check win
			
			console.log("passing player 2 to check---------")
			console.log(player2)
			checkWinHC(player2, "player2");
	}
	// total moves
	//console.log('total moves:', player1.length+player2.length)

};

function checkWinHC(player, playerTurn){
	var currentPlayer = player
	console.log(playerTurn)
    if (player.includes('0') && player.includes('4') && player.includes('8')==true) {
    	console.log(playerTurn,"GOT A WIN: DIAGONAL 0")
    	playerWins(playerTurn);
    } else if (player.includes('2') && player.includes('4') && player.includes('6')==true) {
    	console.log(playerTurn,"GOT A WIN: DIAGONAL 1")
    	playerWins(playerTurn);

    }else if (player.includes('0') && player.includes('1') && player.includes('2')==true) {
    	console.log(playerTurn,"GOT A WIN: HORIZONTAL 0")
    	playerWins(playerTurn);

    }else if (player.includes('3') && player.includes('4') && player.includes('5')==true) {
    	console.log(playerTurn,"GOT A WIN: HORIZONTAL 1")
    	playerWins(playerTurn);

    }else if (player.includes('6') && player.includes('7') && player.includes('8')==true) {
    	console.log(playerTurn,"GOT A WIN: HORIZONTAL 2")
    	playerWins(playerTurn);

    }else if (player.includes('0') && player.includes('3') && player.includes('6')==true) {
    	console.log(playerTurn,"GOT A WIN: VERTICAL 0")
    	playerWins(playerTurn);

    }else if (player.includes('1') && player.includes('4') && player.includes('7')==true) {
    	console.log(playerTurn,"GOT A WIN: VERTICAL 1")
    	playerWins(playerTurn);

    }else if (player.includes('2') && player.includes('5') && player.includes('8')==true) {
    	console.log(playerTurn,"GOT A WIN: VERTICAL 2")
    	playerWins(playerTurn);

    } else if(player1.length + player2.length === tiles.length) {
	
	//display so at top 
		document.getElementById("titleH1").textContent= "YOU BOTH SUCK"
		document.getElementById("titleH1").style.color= "purple"

	} else {
    	console.log("NO WINNER")
    }

};

function playerWins(player){
	console.log('playerWins RAN')
	console.log(player)
	if(player=="player1"){
		wins1 += 1
		document.getElementById("titleH1").textContent= "PLAYER 1 WINS!";
		document.getElementById("titleH1").style.color= player1Color
		document.getElementById("player1Wins").textContent= "Player 1: "+'\xa0' + wins1;
	}else{
		wins2 = wins2 + 1
		console.log("wins 2=", wins2)
		document.getElementById("titleH1").textContent= "PLAYER 2 WINS!";
		document.getElementById("titleH1").style.color= "blue"
		document.getElementById("player2Wins").textContent= "Player 2: "+ '\xa0' + wins2;

	}
	
	//shut off the tiles
	for (var i = 0; i < countTiles.length; i++){
		countTiles[i].removeEventListener("click", changeTile);
	}
};