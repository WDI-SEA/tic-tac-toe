// keeps track of which player is up
var turnRecord = document.getElementById("player");

//reset button
var resBut = document.getElementById("reset");

//deals w scoreboards
var words = document.querySelector('p');
var sithScore = document.getElementById('scoreboardSith');
var rebScore = document.getElementById('scoreboardReb');

//gets all the divs holding the backgrounds for tiles
var gameBoard = document.querySelectorAll("#gameboard > .unit");

//initializes the animated ships and sabers
var tieFighter = document.getElementById("ship1");
var xWing = document.getElementById('ship2');
var sithSaber = document.getElementById('saber');
var rebSaber = document.getElementById('saber2');

//resets the animated ships to default
var tieTimeout = setTimeout(function () {
	tieFighter.className = "invisShip";
}, 1000);
var xTimeout = setTimeout(function () {
	xWing.className = "invisShip";
}, 1000);

//audio tracks
var tieFly = document.getElementById('fly');
var tieShoot = document.getElementById('fire');

//variable initialization for counters
var turnCount = 0;

//for all the images/squares
var imgs = document.querySelectorAll(".image");

//this function is the move functionality, it swaps
//the image n background of the game board and alters the
//span to show the player up. also adds to the turn count
//which ultimately determines who's up w the main if/else
var swapImage = function() {
	if (turnCount%2 === 1) {
		this.className = "red";
		this.removeEventListener('click', swapImage);
		turnRecord.style.color="lightgreen";
		turnRecord.innerText ="Rebellion's";
		checkIfWin();
		turnCount++;
	} else {
		this.className = "green";
		this.removeEventListener('click', swapImage);
		turnRecord.style.color="red";
		turnRecord.innerText ="Sith's";
		checkIfWin();
		turnCount++;
	}
};

//adds an eventListener to each image
for (var i = 0; i < imgs.length; i++) {
	imgs[i].addEventListener("click", swapImage);
}

var winner = null;
var sScore = 0;
var rScore = 0;

//HECK 
//these iterators collect whether or not the green/red blocks (parent) classes
//contain any of the winning class names. how to determine if 3 match??
var checkIfWin = function() {
	
	while (turnCount >= 4) {
		if (
	      gameBoard[0].firstElementChild.className === gameBoard[1].firstElementChild.className && gameBoard[1].firstElementChild.className === gameBoard[2].firstElementChild.className  ||
	      gameBoard[3].firstElementChild.className === gameBoard[4].firstElementChild.className && gameBoard[4].firstElementChild.className === gameBoard[5].firstElementChild.className  ||
	      gameBoard[6].firstElementChild.className === gameBoard[7].firstElementChild.className && gameBoard[7].firstElementChild.className === gameBoard[8].firstElementChild.className  ||
	      gameBoard[0].firstElementChild.className === gameBoard[3].firstElementChild.className && gameBoard[3].firstElementChild.className === gameBoard[6].firstElementChild.className  ||
	      gameBoard[1].firstElementChild.className === gameBoard[4].firstElementChild.className && gameBoard[4].firstElementChild.className === gameBoard[7].firstElementChild.className  ||
	      gameBoard[2].firstElementChild.className === gameBoard[5].firstElementChild.className && gameBoard[5].firstElementChild.className === gameBoard[8].firstElementChild.className ||
	      gameBoard[0].firstElementChild.className === gameBoard[4].firstElementChild.className && gameBoard[4].firstElementChild.className === gameBoard[8].firstElementChild.className  ||
	      gameBoard[2].firstElementChild.className === gameBoard[4].firstElementChild.className && gameBoard[4].firstElementChild.className === gameBoard[6].firstElementChild.className 
	    ) {
	      console.log("we have a winner!");
	       if (turnRecord.style.color === "lightgreen") {
	      	winner = 1;
	      	sScore++;
	      	console.log('sith wins');
	      	sithScore.innerHTML = sScore;
	      	sithSaber.className = "shakeSaber";
	      } else {
	      	winner = 2;
	      	rScore++;
	      	console.log('rebels win');
	      	rebScore.innerHTML = rScore;
	      	rebSaber.className = "shakeSaber";
	      }

	      tieFly.play();
	      var shootTimeout = setTimeout(function (){
				tieShoot.play();
			}, 1200);

	      words.innerText = "A WINNER, WE HAVE!!!";
	      words.style.color = "cyan";
	      words.style.fontWeight = 600;
	      xWing.className = "animateX";
	      tieFighter.className = "animateTie";
	      for (var i = 0; i < 9; i++) {
	      	imgs[i].removeEventListener('click', swapImage);
	      }

	      return true;

	    } else {
	      return false;
	    }
	}
}

//reset sets board back to stars, span of player name back to initial, 
//adds action listeners to pieces again, fixes the paragraph and span
//and resets the turn count
reset.onclick = function () {
	for (var i=0; i < imgs.length; i++) {
		imgs[i].className = "stars";
		imgs[i].addEventListener("click", swapImage);
		turnRecord.style.color="lightgreen";
		turnRecord.innerText ="Rebellion's";
	}
	words.innerHTML = "The " + "<span id='player'>Rebellion's</span>" + " turn, it is!";
	words.style.color = "black";
	words.style.fontWeight = 200;
	xWing.className = 'invisShip';
	tieFighter.className = 'invisShip';
	sithSaber.className = null;
	rebSaber.className = null;
	turnCount=0;
	winner=0;
}


