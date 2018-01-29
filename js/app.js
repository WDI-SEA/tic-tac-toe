


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
//the bg-image of the game board unit and alters the
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
//a very ugly conditional statement that runs while the 
//turnCount is >=4. if any of the statements are true, then
//it checks to see if the span color is green/red--if it's green
//then the sith went last and won and vice versa. depending on
//the winner, it adds a score to the respective scoreboard, n shakes
//the saber. 

//regardless of who wins, it plays the audio, changes
//the content and style of .words, and animates the 
//two ships. it also removes any event listeners on 
//ANY of the board pieces. 
var checkIfWin = function() {

		//spaces variables 
	var topL = gameBoard[0].firstElementChild.className;
	var topM = gameBoard[1].firstElementChild.className;
	var topR = gameBoard[2].firstElementChild.className;

	var midL = gameBoard[3].firstElementChild.className;
	var midM = gameBoard[4].firstElementChild.className;
	var midR = gameBoard[5].firstElementChild.className;

	var botL = gameBoard[6].firstElementChild.className;
	var botM = gameBoard[7].firstElementChild.className;
	var botR = gameBoard[8].firstElementChild.className;
	
	while (turnCount >= 4) {
		if (
	      (topL === topM && topM === topR)  ||
	      (midL === midM && midM === midR)  ||
	      (botL === botM && botM === botR)  ||
	      (topL === midL && midL === botL)  ||
	      (topM === midM && midM === botM)  ||
	      (topR === midR && midR === botR)  ||
	      (topL === midM && midM === botR)  ||
	      (topR === midM && midM === botL) 
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

	      xWing.className = "animateX";
	      tieFighter.className = "animateTie";
	      for (var i = 0; i < 9; i++) {
	      	imgs[i].removeEventListener('click', swapImage);
	      }

	      if (winner === 1) {
	      	words.innerText = "A WINNER, WE HAVE!!!";
	      	words.style.color = "red";
	      	words.style.fontWeight = 600;
	      } else {
	      	words.innerText = "A WINNER, WE HAVE!!!";
		    words.style.color = "lightgreen";
		    words.style.fontWeight = 600;
	      }

	      return true;

	    } else {
	      
	      return false;
	    
	    }
	}
}

//reset sets board back to stars, 
//span of player name back to initial, 
//adds eventlisteners to pieces again, 
//fixes the paragraph and span,
//resets the turnCount
//and handles the classNames of the 
//ships and sabers
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


