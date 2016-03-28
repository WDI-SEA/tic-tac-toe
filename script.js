

var result = ['', '', '',
              '', '', '',
              '', '', ''
];

var board = document.querySelectorAll("div.square");
var keepPlaying = true;



//Reset button

document.getElementById('clear').addEventListener('click', function(event) {
  
  document.getElementById('whose-turn').textContent = 'X goes first...';
  keepPlaying = true;
  for (var i = 0; i < board.length; i++) {
    board[i].textContent = '';
    board[i].className = 'square';
    result.splice(i, 1, '');
  }
});


// Started Computer Move

function enableComputer(f) { 
    if (document.getElementById('playervscpu').checked){
      return computerMove;
}   else {
      return null;
}
}

function computerMove(randomIndex){
do {
  var randomIndex = Math.floor(Math.random() * (8)) + 1;
    if (!result[randomIndex]){
      board[randomIndex].textContent = 'O';
      result[randomIndex] = 'O';
      return true;
}}
while (result[randomIndex] != '');
}




// Function to Stop Game when there is a winner
function running(win) {
  var win = getWinner(result);
  if (win) {
    keepPlaying = false;
    document.getElementById('whose-turn').textContent = 'We have a winner!';
    console.log('operation should stop');
  } else {
    console.log('keep playing...')
    keepPlaying = true;
  }
}



function countItemsTruthy(result) {
  var count = 0;
  for (i = 0; result.length >= i; i++) {
    if (result[i] === 'X' || result[i] === 'O') {
      count++;
    }
  }
  return count;
  console.log(count);
};


function tieGame(tieCount) {
  var tieCount = countItemsTruthy(result);
  var isWinner = getWinner(result);
  if (tieCount === 9 && !isWinner) {
    document.getElementById('whose-turn').textContent = 'Tie game!';
    return true
  } 
}

// Function to alternate X and O

function whoseTurn(countOutput) {
  var countOutput = countItemsTruthy(result);
  if (countOutput % 2 === 0) {
    document.getElementById('whose-turn').textContent = 'Now O...';
    return 'X';
  } else {
    document.getElementById('whose-turn').textContent = 'Now X...';
    return 'O';
  }
}

// Function to get winner

function getWinner(result){
  if (result[0] == result[1] && result[1] == result[2] && result[1] != ''){
    console.log('winner');
    board[0].className = 'square winner-box';
    board[1].className = 'square winner-box';
    board[2].className = 'square winner-box';
    return true;
  } else if (result[3] == result[4] && result[4] == result[5] && result[4] != ''){
    board[3].className = 'square winner-box';
    board[4].className = 'square winner-box';
    board[5].className = 'square winner-box';
    console.log('winner');
    return true;
  } else if (result[6] == result[7] && result[7] == result[8] && result[7] != ''){
    board[6].className = 'square winner-box';
    board[7].className = 'square winner-box';
    board[8].className = 'square winner-box';
    console.log('winner');
    return true;
  } else if (result[0] == result[3] && result[3] == result[6] && result[3] != ''){
    board[0].className = 'square winner-box';
    board[3].className = 'square winner-box';
    board[6].className = 'square winner-box';
    console.log('winner');
    return true;
  } else if (result[1] == result[4] && result[4] == result[7] && result[4] != ''){
    board[1].className = 'square winner-box';
    board[4].className = 'square winner-box';
    board[7].className = 'square winner-box';
    console.log('winner');
    return true;
  } else if (result[2] == result[5] && result[5] == result[8] && result[5] != ''){
    board[2].className = 'square winner-box';
    board[5].className = 'square winner-box';
    board[8].className = 'square winner-box';
    console.log('winner');
    return true;
  } else if (result[0] == result[4] && result[4] == result[8] && result[4] != ''){
    board[0].className = 'square winner-box';
    board[4].className = 'square winner-box';
    board[8].className = 'square winner-box';
    console.log('winner');
    return true;
  } else if (result[2] == result[4] && result[4] == result[6] && result[4] != ''){
    board[2].className = 'square winner-box';
    board[4].className = 'square winner-box';
    board[6].className = 'square winner-box';
    console.log('winner');
    return true;
  } else {
    console.log('no winner');
    return null;
  }
}



// Function to make cells change color when each player moves 

function makeCellColorful(i) {
  if (document.getElementsByClassName('square')[i].innerText == 'X'){
    board[i].className += ' blue-box';
  } else if (document.getElementsByClassName('square')[i].innerText == 'O'){
    board[i].className += ' yellow-box';
  } else {
    return null;
  }
}

// Two player game click event

var twoPlayer = function(i) {
  var currentBox = board[i];
  var currentResult = result[i];
  currentBox.addEventListener("click", function(event) {
    if (!currentBox.innerText && keepPlaying) {
      currentBox.innerText = whoseTurn(countItemsTruthy);
      makeCellColorful(i);
      result.splice(i, 1, currentBox.innerText);
      getWinner(result);
      running(getWinner);
      tieGame();
      console.log(result);
    }
  })
}

for (var i = 0; i < board.length; i++) {
  board[i].addEventListener('mouseover', function(e) {
    e.target.classList.add('hover-square');
  });
  board[i].addEventListener('mouseout', function(e) {
    e.target.classList.remove('hover-square');
  })
  twoPlayer(i);
}
    















