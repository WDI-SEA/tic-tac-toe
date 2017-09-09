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
var playChange = document.getElementById('playChange');
var winner = document.getElementById('winner');
var turnCounter = 0;
keepPlaying = true;
var photo;

var turn = function (){
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

var displayWinner = function (){
	winner.textContent = photo;
	playChange.textContent = '';
	keepPlaying = false;
};

// var displayTie = function (turn){
// 	if(turn == 9 && keepPlaying = true){

// 	}
// }

var checkForWinner = function(){
	var cuteAnimal = turn();
	switch (true) {
		case div1.classList.contains(cuteAnimal) && div2.classList.contains(cuteAnimal) && div3.classList.contains(cuteAnimal):
			displayWinner();
		break;
		case div4.classList.contains(cuteAnimal) && div5.classList.contains(cuteAnimal) && div6.classList.contains(cuteAnimal):
			displayWinner();
		break;
		case div7.classList.contains(cuteAnimal) && div8.classList.contains(cuteAnimal) && div9.classList.contains(cuteAnimal):
			displayWinner();
		break;
		case div1.classList.contains(cuteAnimal) && div4.classList.contains(cuteAnimal) && div7.classList.contains(cuteAnimal):
			displayWinner();
		break;
		case div2.classList.contains(cuteAnimal) && div5.classList.contains(cuteAnimal) && div8.classList.contains(cuteAnimal):
			displayWinner();
		break;
		case div3.classList.contains(cuteAnimal) && div6.classList.contains(cuteAnimal) && div9.classList.contains(cuteAnimal):
			displayWinner();
		break;
		case div1.classList.contains(cuteAnimal) && div5.classList.contains(cuteAnimal) && div9.classList.contains(cuteAnimal):
			displayWinner();
		break;
		case div3.classList.contains(cuteAnimal) && div5.classList.contains(cuteAnimal) && div7.classList.contains(cuteAnimal):
			displayWinner();
		break;
	}
};

var play = function (){
	if(!this.classList.contains('X') && !this.classList.contains('O') && keepPlaying) {
		this.classList.add(turn());
		checkForWinner();
		//add check for winner function here
		turnCounter++;
			}
		};

var startBoard = function (){
	var gameBoxes = document.getElementsByClassName('box');
	for(var i=0; i < gameBoxes.length; i++) {
		gameBoxes[i].addEventListener('click', play);
	}
};

var resetBoard = function () {
    var clearSquares = document.getElementsByClassName('box');
    console.log('Im in the function')
    for (var i=0; i < clearSquares.length; i++) {
          clearSquares[i].classList.remove('X');
          clearSquares[i].classList.remove('O');
          turnCounter = 0;
          keepPlaying = true;
          winner.remove('');
	}
};  


resetGame.addEventListener("click", resetBoard);        

startBoard();

