console.log("let's do this");
var tiles = [];
var turn = 1;
var player1 = [];
var player2 = [];
//functions I think I'll need
assignClicks();
document.getElementById("reset").addEventListener("click", assignClicks)

//assign click events
function assignClicks (){
	//reset values
	turn = 1;
	tiles = [];
	player1 = [];
	player2 = [];
	document.getElementById("titleH1").textContent= "Player 1's Turn"
	
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

//when clicked
	//don't need to check it, because i'm removing click events when activated
	// function clickedTile (turn){

	// }	
	// change contents of gameTile to correct player can pass whos turn it is into this function? function clickTile(turn)
function changeTile(i){

	
	//check who's turn it is - could probably make into it's own function that returns the number and sets these things
	//check to make sure it's not a cats cradle


	if (turn === 1){
		console.log("Player 1 clicked:",this.id)
		
		//remove click event
			this.removeEventListener("click", changeTile)

		//mark tile
			this.innerText= "x"
			this.style.backgroundColor ="red"
		//store the tile player and adds to players array
			this.setAttribute('player', '1')
			player1.push(this.id)
			console.log(player1)
			// console.log(this)
		
		//change turn
			turn = 2;
			
		//display turn at top 
			document.getElementById("titleH1").textContent= "Player 2's Turn"
		
		//console log
			console.log("player:",this.getAttribute('player'))
			console.log('')
			

	} else {
		console.log("Player 2 clicked:",this.id)
		
		//remove click event
			this.removeEventListener("click", changeTile)
		
		//mark tile
			this.innerText= "o"
			this.style.backgroundColor ="blue"

		//store the tile player adds to players array
			this.setAttribute('player', '2')
			player2.push(this.id)
			console.log(player2)

		//change turn
			turn = 1;

		//display turn at top 
			document.getElementById("titleH1").textContent= "Player 1's Turn"
		
			
		//console log
			console.log("player:",this.getAttribute('player'))
			console.log('')


			
	}
	// total moves
	console.log('total moves:', player1.length+player2.length)

	//check to see if this is a win
	checkWin();
		

}

function checkWin(){


		//move this to END of the win checker
		if (player1.length + player2.length === tiles.length) {
		
		//display so at top 
			document.getElementById("titleH1").textContent= "YOU BOTH SUCK"
		} 

}

function clearTiles (){

	//for loop through the tiles and set inner text, background color and owner


			this.innerText= "o"
			this.style.backgroundColor ="blue"
}


//win(turn)
	//increase win counter(turn)

//keep track of who's turn it is?  indicate it