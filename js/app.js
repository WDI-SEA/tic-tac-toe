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
	document.addEventListener('DOMContentLoaded', function(){
	});

console.log("Hi there");
var cardsPlayable = document.querySelectorAll('.boardBtn');
for (var i = 0; i < cardsPlayable.length; i++) {
cardsPlayable[i].addEventListener('click', cardClick);
}  

function cardClick() {
  if (player === null) {
    player = 'maverick';
  }

  
  console.log('First Player is: ' + player);
  console.log('maverickTurns ' + maverickTurns.length  + 'Arya turns ' + aryaTurns.length);
  console.log('player is: ' + player);
  cardInPlay = this.id;
  console.log("in the cardClick function" + "ID is " + this.id);
  var cardUsed = (cardsNotPlayable.indexOf(cardInPlay));
  // for (var i = 0; i < cardsNotPlayable.length; i++) {
  // if (cardUsed === cardsNotPlayable[i]){
  if (cardUsed < 0){
    this.value = player;
    
    playCard(this);
    checkWin()
    switchPlayer();
  } 

  /*else  {
    console.log(cardInPlay + 'it is in the notplayable list. Choose again');*/
    // check for win conditions
    // if (cardsNotPlayable.length > 2);
    // console.log('checking');
    // }

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
  card.style.cursor = 'default'; 
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
  }
  else {
    console.log('no winner yet');
  }
}

// function CardClick()
//     player = 'Arya';
//     cardInPlay = ' ';
//   console.log('Second Player is: ' + player);
//   console.log(pOneTurns.length, pTwoTurns.length);
//   console.log('player is: ' + player);
//   cardInPlay = this.id;
//   console.log("in the cardClick function" + "ID is " + this.id);
//   var cardUsed = (cardsNotPlayable.indexOf(cardInPlay));
//   // for (var i = 0; i < cardsNotPlayable.length; i++) {
//   // if (cardUsed === cardsNotPlayable[i]){
//     if (cardUsed < 0){
//     console.log(cardInPlay + 'card cardUsed is just fine');
//     // document.getElementById(cardInPlay).value = player;
//     cardsNotPlayable.push(cardInPlay);
//     pTwoTurns.push(cardInPlay);
//     console.log('cards in pTwoTurns = ' + pTwoTurns.length);
//     } 
//     else  {
//       console.log(cardInPlay + 'it is in the notplayable list. Choose again');
//     }
// }

    // if player === pOne {
    //   pOneTurns.push(cardInPlay);
    //   console.log('pushing to pOne ' + 'length = ' pOneTurns.length);
    // } else player === pTwo {
    //   pTwoTurns.push(cardInPlay);
    //   console.log('pushing to pTwo ' + 'length = ' pTwoTurns.length);
    // }

    // cardInPlay.removeEventListener('click', cardClick);
    // console.log(cardInPlay + 'eventlistener off');
    //cardInPlay = " ";

    // cardInPlay.style.backgroundImage = 'url('../img/mav.jpg')';

    // document.getElementById("cardInPlay").style.backgroundImage = "url('../img/mav.jpg')";

    // cardInPlay.background-image: url('../img/mav.jpg');
    // cardInPlay.removeEventListener('click', cardClick);

    // change the card to the player image
    // remove the event listener
    // add to the right pvalue

  // console.log("this is cardsPlayable after click; " + cardsPlayable);
  // var cardsAll = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];
  // cardsAll.shift(cardInPlay);
  // console.log("This is the list of cardsAll after Click: " + cardsAll);
  // pTwoTurns.push(cardInPlay);
  // console.log("cards playable after click " + cardsAll);
  // console.log("cards not playable after click " + cardsNotPlayable);
  // console.log("Mav Card array after click " + pOneTurns); 
  // console.log("Arya Card array after click " + pTwoTurns);
  
  // console.log("Card in play after push and clear of cardval " + cardInPlay);





/*function cardClick() {
  cardInPlay = this.id;
  console.log("in the cardClick function" + "ID is " + this.id);
  for (var i = 0; i < cardsPlayable.length; i++) {
  if (cardInPlay === cardsNotPlayable[i]){
  	return true;
  	console.log('card already used');
  } 
  	return false;
  	console.log('card is not used');
  }
}
*/  
// check to see if cardInPlay is in the array cardsNotPlayable
// if it is, tell player to pick another card and set cardInPlay to last item in the cardsNotPlayable array
// if it is not, then CardInPlay value is retained.

// set function for changeCard
// image changes to players image and sent to pOneTurns
// then the arrays are updated

  

// check to see if the block is already used in cardsNotPlayable;


// check for win conditions;






 // if cardsNotPlayable.valueOf(cardInPlay) === true;{
 	// console.log('NO!');}
 // Else {
 // console.log('OK!');
// }
// }

/*function currentCard() {
	console.log('You have clicked td id ' + this.id + 'and class named ' + this.class);
}


// function currentCard(){
 
    // alert("You have clicked td id = "+e.id+" and td class = "+e.class");
    //"+document.getElementById(e.id).value);
 
// }

function clickSquare() {
	var card = this.id;
	console.log('card equals ', + card.value);
	console.log('You have clicked ', + card);
	console.log('ClicksSquare exists');
}*/
//document.getElementByClassName('box').addEventListener('click', clicked);
//console.log('line27');

//event listener for cell click then into clicked function

// function clicked(A3) {
// var turn = 'A3';
// oneTurns.push(turn);
// clicked.push(turn);
// box.pop(turn);
// console.log(oneTurns.length);
// }

// if it is in clicked array, break and send the message to pick again
// if id isn't in clicked array
// send the id to oneTurns array
// check for win conditions (all matches as or comparison)

// if win, go to the gameWon function
// if tie, go to the gameTie function

// gameWon()
// alert saying it's won

// gameTie
// alert saying it's tie

// Later, set up the player object.



// function clickSquare()

