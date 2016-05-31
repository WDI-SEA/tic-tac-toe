// Pick Player 1 Random Number Generator function
// 1 person gets a number and the next person gets a number by pressing
// the random number button. The highest number is player 1
var randNum = document.getElementById('randomBtn');

randNum.addEventListener('click', function() {
  var num = randNum.innerHTML = Math.random();
  document.getElementById('outputNum').textContent = num;
});

// Display Game Winner or Cats Cradle, 2 Functions to check the X's and O's
var winnerArray = [];
var outDiv = document.getElementById('outputDiv');

// Checks Winning Combinations
function winArray() {
  if (winnerArray[0] === 'X' && winnerArray[1] === 'X' && winnerArray[2] === 'X') {
    outDiv.textContent = 'Winner X! Winner X! Winner X! Winner X! Winner X!';
  } else if (winnerArray[3] === 'X' && winnerArray[4] === 'X' && winnerArray[5] === 'X') {
    outDiv.textContent = 'Winner X! Winner X! Winner X! Winner X! Winner X!';
  } else if (winnerArray[6] === 'X' && winnerArray[7] === 'X' && winnerArray[8] === 'X') {
    outDiv.textContent = 'Winner X! Winner X! Winner X! Winner X! Winner X!';
  } else if (winnerArray[0] === 'X' && winnerArray[3] === 'X' && winnerArray[6] === 'X') {
    outDiv.textContent = 'Winner X! Winner X! Winner X! Winner X! Winner X!';
  } else if (winnerArray[1] === 'X' && winnerArray[4] === 'X' && winnerArray[7] === 'X') {
    outDiv.textContent = 'Winner X! Winner X! Winner X! Winner X! Winner X!';
  } else if (winnerArray[2] === 'X' && winnerArray[5] === 'X' && winnerArray[8] === 'X') {
    outDiv.textContent = 'Winner X! Winner X! Winner X! Winner X! Winner X!';
  } else if (winnerArray[0] === 'X' && winnerArray[4] === 'X' && winnerArray[8] === 'X') {
    outDiv.textContent = 'Winner X! Winner X! Winner X! Winner X! Winner X!';
  } else if (winnerArray[2] === 'X' && winnerArray[4] === 'X' && winnerArray[6] === 'X') {
    outDiv.textContent = 'Winner X! Winner X! Winner X! Winner X! Winner X!';
  } else if (winnerArray[0] === 'O' && winnerArray[1] === 'O' && winnerArray[2] === 'O') {
    outDiv.textContent = 'Winner O! Winner O! Winner O! Winner O! Winner O!';
  } else if (winnerArray[3] === 'O' && winnerArray[4] === 'O' && winnerArray[5] === 'O') {
    outDiv.textContent = 'Winner O! Winner O! Winner O! Winner O! Winner O!';
  } else if (winnerArray[6] === 'O' && winnerArray[7] === 'O' && winnerArray[8] === 'O') {
    outDiv.textContent = 'Winner O! Winner O! Winner O! Winner O! Winner O!';
  } else if (winnerArray[0] === 'O' && winnerArray[3] === 'O' && winnerArray[6] === 'O') {
    outDiv.textContent = 'Winner O! Winner O! Winner O! Winner O! Winner O!';
  } else if (winnerArray[1] === 'O' && winnerArray[4] === 'O' && winnerArray[7] === 'O') {
    outDiv.textContent = 'Winner O! Winner O! Winner O! Winner O! Winner O!';
  } else if (winnerArray[2] === 'O' && winnerArray[5] === 'O' && winnerArray[8] === 'O') {
    outDiv.textContent = 'Winner O! Winner O! Winner O! Winner O! Winner O!';
  } else if (winnerArray[0] === 'O' && winnerArray[4] === 'O' && winnerArray[8] === 'O') {
    outDiv.textContent = 'Winner O! Winner O! Winner O! Winner O! Winner O!';
  } else if (winnerArray[2] === 'O' && winnerArray[4] === 'O' && winnerArray[6] === 'O') {
    outDiv.textContent = 'Winner O! Winner O! Winner O! Winner O! Winner O!';
  } else if (winnerArray.length === 9 && winnerArray != null) {
    outDiv.textContent = "The cats in the cradle and the silver spoon " +
                          "Little boy blue and the man on the moon " +
                          "When you comin home Dad, I don't when " +
                          "But we'll get together then " +
                          "You know well have a good time then";
  }
}

// Button Variables for game board
var resetButton = document.getElementById('resetBtn');

// X buttons, div turns lightblue
var xBtn1 = document.getElementById('xButton1');
var xBtn2 = document.getElementById('xButton2');
var xBtn3 = document.getElementById('xButton3');
var xBtn4 = document.getElementById('xButton4');
var xBtn5 = document.getElementById('xButton5');
var xBtn6 = document.getElementById('xButton6');
var xBtn7 = document.getElementById('xButton7');
var xBtn8 = document.getElementById('xButton8');
var xBtn9 = document.getElementById('xButton9');

// O Buttons, div turns lightgreen
var oBtn1 = document.getElementById('oButton1');
var oBtn2 = document.getElementById('oButton2');
var oBtn3 = document.getElementById('oButton3');
var oBtn4 = document.getElementById('oButton4');
var oBtn5 = document.getElementById('oButton5');
var oBtn6 = document.getElementById('oButton6');
var oBtn7 = document.getElementById('oButton7');
var oBtn8 = document.getElementById('oButton8');
var oBtn9 = document.getElementById('oButton9');

// Reset button
resetButton.addEventListener('click', function() {
  location.reload();
});

// X button, Square 1
xBtn1.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('1').textContent = 'X';
  document.getElementById('1').style.backgroundColor = '#002244';
  document.getElementById('1').style.color = 'white';
  winnerArray[0] = numStor;
  winArray(winnerArray);
});

// O button, Square 1
oBtn1.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('1').textContent = 'O';
  document.getElementById('1').style.backgroundColor = '#69BE28';
  winnerArray[0] = numStor;
  winArray(winnerArray);
});

// X button, Square 2
xBtn2.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('2').textContent = 'X';
  document.getElementById('2').style.backgroundColor = '#002244';
  document.getElementById('2').style.color = 'white';
  winnerArray[1] = numStor;
  winArray(winnerArray);
});

// O button, Square 2
oBtn2.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('2').textContent = 'O';
  document.getElementById('2').style.backgroundColor = '#69BE28';
  winnerArray[1] = numStor;
  winArray(winnerArray);
});

// X button, Square 3
xBtn3.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('3').textContent = 'X';
  document.getElementById('3').style.backgroundColor = '#002244';
  document.getElementById('3').style.color = 'white';
  winnerArray[2] = numStor;
  winArray(winnerArray);
});

// O button, Square 3
oBtn3.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('3').textContent = 'O';
  document.getElementById('3').style.backgroundColor = '#69BE28';
  winnerArray[2] = numStor;
  winArray(winnerArray);
});

// X button, Square 4
xBtn4.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('4').textContent = 'X';
  document.getElementById('4').style.backgroundColor = '#002244';
  document.getElementById('4').style.color = 'white';
  winnerArray[3] = numStor;
  winArray(winnerArray);
});

// O button, Square 4
oBtn4.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('4').textContent = 'O';
  document.getElementById('4').style.backgroundColor = '#69BE28';
  winnerArray[3] = numStor;
  winArray(winnerArray);
});

// X button, Square 5
xBtn5.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('5').textContent = 'X';
  document.getElementById('5').style.backgroundColor = '#002244';
  document.getElementById('5').style.color = 'white';
  winnerArray[4] = numStor;
  winArray(winnerArray);
});

// O button, Square 5
oBtn5.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('5').textContent = 'O';
  document.getElementById('5').style.backgroundColor = '#69BE28';
  winnerArray[4] = numStor;
  winArray(winnerArray);
});

// X button, Square 6
xBtn6.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('6').textContent = 'X';
  document.getElementById('6').style.backgroundColor = '#002244';
  document.getElementById('6').style.color = 'white';
  winnerArray[5] = numStor;
  winArray(winnerArray);
});

// O button, Square 6
oBtn6.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('6').textContent = 'O';
  document.getElementById('6').style.backgroundColor = '#69BE28';
  winnerArray[5] = numStor;
  winArray(winnerArray);
});

// X button, Square 7
xBtn7.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('7').textContent = 'X';
  document.getElementById('7').style.backgroundColor = '#002244';
  document.getElementById('7').style.color = 'white';
  winnerArray[6] = numStor;
  winArray(winnerArray);
});

// O button, Square 7
oBtn7.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('7').textContent = 'O';
  document.getElementById('7').style.backgroundColor = '#69BE28';
  winnerArray[6] = numStor;
  winArray(winnerArray);
});

// X button, Square 8
xBtn8.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('8').textContent = 'X';
  document.getElementById('8').style.backgroundColor = '#002244';
  document.getElementById('8').style.color = 'white';
  winnerArray[7] = numStor;
  winArray(winnerArray);
});

// O button, Square 8
oBtn8.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('8').textContent = 'O';
  document.getElementById('8').style.backgroundColor = '#69BE28';
  winnerArray[7] = numStor;
  winArray(winnerArray);
});

// X button, Square 9
xBtn9.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('9').textContent = 'X';
  document.getElementById('9').style.backgroundColor = '#002244';
  document.getElementById('9').style.color = 'white';
  winnerArray[8] = numStor;
  winArray(winnerArray);
});

// O button, Square 9
oBtn9.addEventListener('click', function(event) {
  event.preventDefault();
  var numStor = document.getElementById('9').textContent = 'O';
  document.getElementById('9').style.backgroundColor = '#69BE28';
  winnerArray[8] = numStor;
  winArray(winnerArray);
});
