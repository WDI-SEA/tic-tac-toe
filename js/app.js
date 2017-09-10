var resetGame = document.getElementById("button");
var div1 = document.getElementById('1');
var div2 = document.getElementById('2');
var div3 = document.getElementById('3');
var div4 = document.getElementById('4');
var div5 = document.getElementById('5');
var div6 = document.getElementById('6');
var div7 = document.getElementById('7');
var div8 = document.getElementById('8');
var div9 = document.getElementById('9');
var tieBoard = document.getElementsByClassName('box');
var playChange = document.getElementById('playChange');
var winner = document.getElementById('winner');
var turnCounter = 0;
keepPlaying = true;
var photo;
var tie = false;

var turn = function() {
	if(turnCounter % 2 === 0) {
		photo = "Sloth";
		playChange.textContent = "Otter";
		return 'X';
	} else {
		photo = "Otter";
		playChange.textContent = "Sloth";
		return 'O';
	}
};

var displayWinner = function() {
	winner.textContent = photo;
	playChange.textContent = ('');
	keepPlaying = false;
};

var resetBoard = function() {
    var clearSquares = document.getElementsByClassName('box');
    for(var i=0; i < clearSquares.length; i++) {
        clearSquares[i].classList.remove('X');
        clearSquares[i].classList.remove('O');
        turnCounter = 0;
        keepPlaying = true;
        //winner.remove('');
	}
}; 

// var checkForTie = function() {
// 	var checkSquares = document.getElementsByClassName('box');
// 	for(var i=0; i < checkSquares.length; i++) {
// 		keepPlaying = false;
// 		tie = true;
// 		console.log('im in the tie game function');
// 		return winner.textContent = "TIE GAME!";
// 	}
// };

var checkForWinner = function() {
	var cuteAnimal = turn();
	switch (true) {
		case div1.classList.contains(cuteAnimal) && div2.classList.contains(cuteAnimal) && div3.classList.contains(cuteAnimal):
			displayWinner();
			console.log("line one winner");
			//checkForTie();
		break;
		case div4.classList.contains(cuteAnimal) && div5.classList.contains(cuteAnimal) && div6.classList.contains(cuteAnimal):
			displayWinner();
			//checkForTie();
		break;
		case div7.classList.contains(cuteAnimal) && div8.classList.contains(cuteAnimal) && div9.classList.contains(cuteAnimal):
			displayWinner();
			//checkForTie();
		break;
		case div1.classList.contains(cuteAnimal) && div4.classList.contains(cuteAnimal) && div7.classList.contains(cuteAnimal):
			displayWinner();
			//checkForTie();
		break;
		case div2.classList.contains(cuteAnimal) && div5.classList.contains(cuteAnimal) && div8.classList.contains(cuteAnimal):
			displayWinner();
			//checkForTie();
		break;
		case div3.classList.contains(cuteAnimal) && div6.classList.contains(cuteAnimal) && div9.classList.contains(cuteAnimal):
			displayWinner();
			//checkForTie();
		break;
		case div1.classList.contains(cuteAnimal) && div5.classList.contains(cuteAnimal) && div9.classList.contains(cuteAnimal):
			displayWinner();
			//checkForTie();
		break;
		case div3.classList.contains(cuteAnimal) && div5.classList.contains(cuteAnimal) && div7.classList.contains(cuteAnimal):
			displayWinner();
			//checkForTie();
		break;
		//case div1.classList.contains(cuteAnimal) && div2.classList.contains(cuteAnimal) && div3.classList.contains(cuteAnimal) && div4.classList.contains(cuteAnimal) && div5.classList.contains(cuteAnimal) && div6.classList.contains(cuteAnimal) && div7.classList.contains(cuteAnimal) && div8.classList.contains(cuteAnimal) && div9.classList.contains(cuteAnimal):
			//(turnCounter === 8):
			//console.log("You Tie");
		//break;
	}
};

var play = function() {
	if(!this.classList.contains('X') && !this.classList.contains('O') && keepPlaying) {
		this.classList.add(turn());
		checkForWinner();
		turnCounter++;
			}
		};

var checkForTie = function() {
	if(turnCounter === 8);
	console.log("you tie");
}

var startBoard = function() {
	var gameBoxes = document.getElementsByClassName('box');
	for(var i=0; i < gameBoxes.length; i++) {
		gameBoxes[i].addEventListener('click', play);
	}
};

resetGame.addEventListener("click", resetBoard);        

startBoard();

