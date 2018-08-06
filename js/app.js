var playerIntroMav;
var playerIntroArya;
var gameIntro;
var clickSound;
var player = null;
// var playerOne; 'Maverick';
// var playerTwo; 'Arya';
// var pOne = 'Maverick';
// var pTwo = 'Arya';
var cardsAll = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];
var cardsNotPlayable = [];
var maverickTurns = [];
var aryaTurns = [];
var diagonalWin = [];
var rowWin = []; //figure out if I can do something cooler than regular expressions
var colWin = []; //same as row
var card;
var cardUsed;
var cardsPlayable = document.querySelectorAll('.boardBtn');
	document.addEventListener('DOMContentLoaded', function(){
	});

function reset() {
  console.log('starting game');
  
  for (var i = 0; i < cardsPlayable.length; i++) {
      cardsPlayable[i].addEventListener('click', cardClick);
      cardsPlayable[i].value = " ";
    }
  cardsNotPlayable = [];
}

function playerOne() {
  gameIntro = document.getElementById('introSound');
  gameIntro.play();
  playerIntroMav = document.getElementById('mavSound');
  playerIntroMav.play();
}

function playerTwo() {
  gameIntro = document.getElementById('introSound');
  gameIntro.play();
  playerIntroArya = document.getElementById('aryaSound');
  playerIntroArya.play();
}


/*console.log("Hi there");
var cardsPlayable = document.querySelectorAll('.boardBtn');
for (var i = 0; i < cardsPlayable.length; i++) {
  cardsPlayable[i].addEventListener('click', cardClick);
}*/  

function cardClick() {
  if (player === null) {
    player = 'maverick';
  }
  // console.log('First Player is: ' + player);
  // console.log('maverickTurns ' + maverickTurns.length  + 'Arya turns ' + aryaTurns.length);
  // console.log('player is: ' + player);
  cardInPlay = this.id;
  // console.log("in the cardClick function" + "ID is " + this.id);
  var cardUsed = (cardsNotPlayable.indexOf(cardInPlay));
  if (cardUsed < 0){
    console.log("!!!!!")
    this.value = player;
    playCard(this);
    checkWin()
    switchPlayer();
  } 
}

function playCard(card) {
  cardsNotPlayable.push(cardInPlay);
  if (player === 'maverick'){
    maverickTurns.push(cardInPlay);
  }
  else {
    aryaTurns.push(cardInPlay);
  }
  card.removeEventListener('click', cardClick);
  // card.style.cursor = 'default'; 
}

function switchPlayer() {
  if (player === 'maverick') {
    player = 'arya';
  }
  else {
    player = 'maverick';
  }
  
}

function checkWin() {
  // if ((`${player}Turns`.includes('A1') && `${player}Turns`.includes('A2') && `${player}Turns`.includes('A3')) 
  //   || (`${player}Turns`.includes('A1') && `${player}Turns`.includes('B1') && `${player}Turns`.includes('C1')) 
  //   ) {
  if ((document.getElementById('A1').value == player && document.getElementById('A2').value == player && document.getElementById('A3').value == player)
    || (document.getElementById('B1').value == player && document.getElementById('B2').value == player && document.getElementById('B3').value == player)
    || (document.getElementById('C1').value == player && document.getElementById('C2').value == player && document.getElementById('C3').value == player)
    // Vertical Options
    || (document.getElementById('A1').value == player && document.getElementById('B1').value == player && document.getElementById('C1').value == player)
    || (document.getElementById('A2').value == player && document.getElementById('B2').value == player && document.getElementById('C2').value == player)
    || (document.getElementById('A3').value == player && document.getElementById('B3').value == player && document.getElementById('C3').value == player)
    // Diagonal Options
    || (document.getElementById('A1').value == player && document.getElementById('B2').value == player && document.getElementById('C3').value == player)
    || (document.getElementById('A3').value == player && document.getElementById('B2').value == player && document.getElementById('C1').value == player)) {
    console.log(player + 'wins');
    for (var i = 0; i < cardsPlayable.length; i++) {
      cardsPlayable[i].removeEventListener('click', cardClick);
      cardsPlayable[i].style.cursor = 'default'; 

    }
  }
  else {
    if (cardsNotPlayable.length === 9) {
      console.log('It is a tie');
    }
    else {
    console.log('no winner yet');
    }
  }
}
