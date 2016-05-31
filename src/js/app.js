console.log('Hello frontend');

document.addEventListener('DOMContentLoaded', function() {
  console.log('dom loaded!');

var boxZero = document.getElementById('box0');
var boxOne = document.getElementById('box1');
var boxTwo = document.getElementById('box2');
var boxThree = document.getElementById('box3');
var boxFour = document.getElementById('box4');
var boxFive = document.getElementById('box5');
var boxSix = document.getElementById('box6');
var boxSeven = document.getElementById('box7');
var boxEight = document.getElementById('box8');

// var player1 = document.getElementById('player1');
// var player2 = document.getElementById('player2');

// When someone clicks on a box, what should happen?
// It should display an 'X'

var gameboard = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0]
];


var turn = 2;
boxZero.addEventListener('click', function() {
      if (gameboard[0][0] === 0) {
        if (turn % 2 === 0) {
            boxZero.className += ' boxbgblue';
            boxZero.textContent = 'X';
            // player2.className += ' player2turn';
            gameboard[0][0] = 1;
            console.log(gameboard);
            // lastplayer = X;
            turn++;
        } else {
            boxZero.className += 'boxbgred';
            boxZero.textContent = 'O';
            // player1.className += ' player1turn';
            gameboard[0][0] = 1;
            console.log(gameboard);
            // lastplayer = Y;
            turn++;
        }
}});
boxOne.addEventListener('click', function() {
      if (gameboard[0][1] === 0) {
        if (turn % 2 === 0) {
            boxOne.className += ' boxbgblue';
            boxOne.textContent = 'X';
            // player2.className += ' player2turn';
            gameboard[0][1] = 1;
            console.log(gameboard);
            turn++;
        } else {
            boxOne.className += ' boxbgred';
            boxOne.textContent = 'O';
            // player1.className += ' player1turn';
            gameboard[0][1] = 1;
            console.log(gameboard);
            turn++;
        }
}});
boxTwo.addEventListener('click', function() {
      if (gameboard[0][2] === 0) {
        if (turn % 2 === 0) {
            boxTwo.className += ' boxbgblue';
            boxTwo.textContent = 'X';
            // player2.className += ' player2turn';
            gameboard[0][2] = 1;
            console.log(gameboard);
            turn++;
        } else {
            boxTwo.className += ' boxbgred';
            boxTwo.textContent = 'O';
            // player1.className += ' player1turn';
            gameboard[0][2] = 1;
            console.log(gameboard);
            turn++;
        }
}});
boxThree.addEventListener('click', function() {
      if (gameboard[1][0] === 0) {
        if (turn % 2 === 0) {
            boxThree.className += ' boxbgblue';
            boxThree.textContent = 'X';
            gameboard[1][0] = 1;
            console.log(gameboard);
            // player2.classList('player2turn')
            turn++;
        } else {
            boxThree.className += ' boxbgred';
            boxThree.textContent = 'O';
            gameboard[1][0] = 1;
            console.log(gameboard);
            // player1.classList('player1turn');
            turn++;
        }
}});
boxFour.addEventListener('click', function() {
      if (gameboard[1][1] === 0) {
        if (turn % 2 === 0) {
            boxFour.className += ' boxbgblue';
            boxFour.textContent = 'X';
            gameboard[1][1] = 1;
            console.log(gameboard);
            // player2.classList.add('player2turn')
            turn++;
        } else {
            boxFour.className += ' boxbgred';
            boxFour.textContent = 'O';
            gameboard[1][1] = 1;
            console.log(gameboard);
            // player1.classList.add('player1turn');
            turn++;
        }
}});
boxFive.addEventListener('click', function() {
      if (gameboard[1][2] === 0) {
        if (turn % 2 === 0) {
            boxFive.className += ' boxbgblue';
            boxFive.textContent = 'X';
            gameboard[1][2] = 1;
            console.log(gameboard);
            // player2.classList.add('player2turn')
            turn++;
        } else {
            boxFive.className += ' boxbgred';
            boxFive.textContent = 'O';
            gameboard[1][2] = 1;
            console.log(gameboard);
            // player1.classList.add('player1turn');
            turn++;
        }
}});
boxSix.addEventListener('click', function() {
      if (gameboard[2][0] === 0) {
        if (turn % 2 === 0) {
            boxSix.className += ' boxbgblue';
            boxSix.textContent = 'X';
            gameboard[2][0] = 1;
            console.log(gameboard);
            // player2.classList.add('player2turn')
            turn++;
        } else {
            boxSix.className += ' boxbgred';
            boxSix.textContent = 'O';
            gameboard[2][0] = 1;
            console.log(gameboard);
            // player1.classList.add('player1turn');
            turn++;
        }
}});
boxSeven.addEventListener('click', function() {
      if (gameboard[2][1] === 0) {
        if (turn % 2 === 0) {
            boxSeven.className += ' boxbgblue';
            boxSeven.textContent = 'X';
            gameboard[2][1] = 1;
            console.log(gameboard);
            // player2.classList.add('player2turn')
            turn++;
        } else {
            boxSeven.className += ' boxbgred';
            boxSeven.textContent = 'O';
            gameboard[2][1] = 1;
            console.log(gameboard);
            // player1.classList.add('player1turn');
            turn++;
        }
}});
boxEight.addEventListener('click', function() {
      if (gameboard[2][2] === 0) {
        if (turn % 2 === 0) {
            boxEight.className += ' boxbgblue';
            boxEight.textContent = 'X';
            gameboard[2][2] = 1;
            console.log(gameboard);
            // player2.classList.add('player2turn')
            turn++;
        } else {
            boxEight.className += ' boxbgred';
            boxEight.textContent = 'O';
            gameboard[2][2] = 1;
            console.log(gameboard);
            // player1.classList.add('player1turn');
            turn++;
        }
}});


});  // This closes the DOM Content Loaded
