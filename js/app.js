document.addEventListener("DOMContentLoaded", function() {

var turns = [];

var gameOver = false;

var highscore = localStorage.getItem("highscore");



if (highscore === null) {
  document.getElementsByClassName('scoreBoard')[0].innerText = "Wins: 0";
} else {
  document.getElementsByClassName('scoreBoard')[0].innerText = "Wins: " + highscore;
}


var objectX = {
  b1: false,
  b2: false,
  b3: false,
  b4: false,
  b5: false,
  b6: false,
  b7: false,
  b8: false,
  b9: false,
};

var objectO = {
  b1: false,
  b2: false,
  b3: false,
  b4: false,
  b5: false,
  b6: false,
  b7: false,
  b8: false,
  b9: false,
};


// if (turns.length === 1 && objectX.b1 === true || objectX.b2 === true || objectX.b3 === true || objectX.b4 === true || objectX.b6 === true || objectX.b7 === true || objectX.b8 === true || objectX.b9 === true) {
//   num = Math.ceil(Math.random()*9);
//   document.getElementById('b' + num).src = "img/o.png"
// }
//checks the objects for a win of X
var checkForWinX = function() {
	if (objectX.b1 && objectX.b2 && objectX.b3) {
		document.getElementById('playerturn').innerText = "Player 1:X WINS!";
    highscore++
    checkWins();
		gameOver = true;
	} else if (objectX.b4 && objectX.b5 && objectX.b6) {
		document.getElementById('playerturn').innerText = "Player 1:X WINS!";
    highscore++
    checkWins();
		gameOver = true;
	} else if (objectX.b7 && objectX.b8 && objectX.b9) {
		document.getElementById('playerturn').innerText = "Player 1:X WINS!";
    highscore++
    checkWins();
		gameOver = true;
	} else if (objectX.b1 && objectX.b4 && objectX.b7) {
		document.getElementById('playerturn').innerText = "Player 1:X WINS!";
    highscore++
    checkWins();
		gameOver = true;
	} else if (objectX.b2 && objectX.b5 && objectX.b8) {
		document.getElementById('playerturn').innerText = "Player 1:X WINS!";
    highscore++
    checkWins();
		gameOver = true;
	} else if (objectX.b3 && objectX.b6 && objectX.b9) {
		document.getElementById('playerturn').innerText = "Player 1:X WINS!";
    highscore++
    checkWins();
		gameOver = true;
	} else if (objectX.b1 && objectX.b5 && objectX.b9) {
		document.getElementById('playerturn').innerText = "Player 1:X WINS!";
    highscore++
    checkWins();
		gameOver = true;
	} else if (objectX.b3 && objectX.b5 && objectX.b7) {
		document.getElementById('playerturn').innerText = "Player 1:X WINS!";
    highscore++
    checkWins();
		gameOver = true;
	} else if (turns.length === 9) {
		document.getElementById('playerturn').innerText = "DRAW!";
		gameOver = true;
	}

}

//checks for win of O
var checkForWinO = function() {
	if (objectO.b1 && objectO.b2 && objectO.b3) {
		document.getElementById('playerturn').innerText = "Player 2:O WINS!";
		gameOver = true;
	} else if (objectO.b4 && objectO.b5 && objectO.b6) {
		document.getElementById('playerturn').innerText = "Player 2:O WINS!";
		gameOver = true;
    console.log(highscore);
	} else if (objectO.b7 && objectO.b8 && objectO.b9) {
		document.getElementById('playerturn').innerText = "Player 2:O WINS!";
		gameOver = true;
    console.log(highscore);
	} else if (objectO.b1 && objectO.b4 && objectO.b7) {
		document.getElementById('playerturn').innerText = "Player 2:O WINS!";
		gameOver = true;
    console.log(highscore);
	} else if (objectO.b2 && objectO.b5 && objectO.b8) {
		document.getElementById('playerturn').innerText = "Player 2:O WINS!";
		gameOver = true;
    console.log(highscore);
	} else if (objectO.b3 && objectO.b6 && objectO.b9) {
		document.getElementById('playerturn').innerText = "Player 2:O WINS!";
		gameOver = true;
    console.log(highscore);
	} else if (objectO.b1 && objectO.b5 && objectO.b9) {
		document.getElementById('playerturn').innerText = "Player 2:O WINS!";
		gameOver = true;
    console.log(highscore);
	} else if (objectO.b3 && objectO.b5 && objectO.b7)  {
		document.getElementById('playerturn').innerText = "Player 2:O WINS!";
		gameOver = true;
	} else if (turns.length === 9) {
		document.getElementById('playerturn').innerText = "DRAW!";
		gameOver = true;
	}

}

//checks whos turn it is x or o and plays a turn. add 1 to the turns array to see whose turn it is next.
//changes the box it the appropriate object to true so you can check match
var turn = function() {
	if (!objectX[this.children[0].id] && !objectO[this.children[0].id] && !gameOver) {
    checkWins();
		if (turns.length % 2 == 0) {
			this.children[0].src = "img/x.png";
			turns.push(1);
			objectX[this.children[0].id] = true;
			document.getElementById('playerturn').innerText = "Turn: Player 2:O";
			checkForWinX();
      if(highscore !== null){
      highscore = highscore++
        localStorage.setItem("highscore", highscore);
    } else {
    localStorage.setItem("highscore", 1);
}
		} else {
			this.children[0].src = "img/o.png";
			turns.push(1);
			objectO[this.children[0].id] = true;
			document.getElementById('playerturn').innerText = "Turn: Player 1:X";
			checkForWinO();
		}
	}
}

var boxes = document.getElementsByClassName('box');
for (let i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener('click', turn);
}

var gameReset = function() {
  location.reload();
  gameOver = false;
};

function checkWins() {
  if (highscore === null) {
    document.getElementsByClassName('scoreBoard')[0].innerText = "Wins: 0";
  } else {
    document.getElementsByClassName('scoreBoard')[0].innerText = "Wins: " + highscore;
  }
}

var reset = document.getElementById('reset');
	reset.addEventListener('click', gameReset);


  });
