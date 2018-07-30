document.addEventListener("DOMContentLoaded", function() {

var turns = [];

var gameOver = false;

var score = 0;
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


//checks the objects for a win of X
var checkForWinX = function() {
	if (objectX.b1 && objectX.b2 && objectX.b3) {
		document.getElementById('playerturn').innerText = "Player 1:X WINS!";
    highscore++
    checkWins();
    // if(highscore !== null){
    //     highscore = 1
    //         localStorage.setItem("highscore", score);
    //     } else {
    //       highscore = score + 1
    //     localStorage.setItem("highscore", score);
    // }
		gameOver = true;
    console.log(highscore);
	} else if (objectX.b4 && objectX.b5 && objectX.b6) {
		document.getElementById('playerturn').innerText = "Player 1:X WINS!";
    highscore++
    checkWins();
    // if(highscore !== null){
    //     highscore = 1
    //         localStorage.setItem("highscore", score);
    //     } else {
    //       highscore = score + 1
    //     localStorage.setItem("highscore", score);
    // }
		gameOver = true;
    console.log(highscore);
	} else if (objectX.b7 && objectX.b8 && objectX.b9) {
		document.getElementById('playerturn').innerText = "Player 1:X WINS!";
    highscore++
    checkWins();
    // if(highscore !== null){
    //     highscore = 1
    //         localStorage.setItem("highscore", score);
    //     } else {
    //       highscore = score + 1
    //     localStorage.setItem("highscore", score);
    // }
		gameOver = true;
    console.log(highscore);
	} else if (objectX.b1 && objectX.b4 && objectX.b7) {
		document.getElementById('playerturn').innerText = "Player 1:X WINS!";
    highscore++
    checkWins();
    // if(highscore !== null){
    //     highscore = 1
    //         localStorage.setItem("highscore", score);
    //     } else {
    //       highscore = score + 1
    //     localStorage.setItem("highscore", score);
    // }
		gameOver = true;
    console.log(highscore);
	} else if (objectX.b2 && objectX.b5 && objectX.b8) {
		document.getElementById('playerturn').innerText = "Player 1:X WINS!";
    highscore++
    checkWins();
    // if(highscore !== null){
    //     highscore = 1
    //         localStorage.setItem("highscore", score);
    //     } else {
    //       highscore = score + 1
    //     localStorage.setItem("highscore", score);
    // }
		gameOver = true;
    console.log(highscore);
	} else if (objectX.b3 && objectX.b6 && objectX.b9) {
		document.getElementById('playerturn').innerText = "Player 1:X WINS!";
    highscore++
    checkWins();
    // if(highscore !== null){
    //     highscore = 1
    //         localStorage.setItem("highscore", score);
    //     } else {
    //       highscore = score + 1
    //     localStorage.setItem("highscore", score);
    // }
		gameOver = true;
    console.log(highscore);
	} else if (objectX.b1 && objectX.b5 && objectX.b9) {
		document.getElementById('playerturn').innerText = "Player 1:X WINS!";
    highscore++
    checkWins();
    // if(highscore !== null){
    //     highscore = 1
    //         localStorage.setItem("highscore", score);
    //     } else {
    //       highscore = score + 1
    //     localStorage.setItem("highscore", score);
    // }
		gameOver = true;
    console.log(highscore);
	} else if (objectX.b3 && objectX.b5 && objectX.b7) {
		document.getElementById('playerturn').innerText = "Player 1:X WINS!";
    highscore++
    checkWins();
    // if(highscore !== null){
    //     highscore = 1
    //         localStorage.setItem("highscore", score);
    //     } else {
    //       highscore = score + 1
    //     localStorage.setItem("highscore", score);
    // }
		gameOver = true;
    console.log(highscore);
	} else if (turns.length === 9) {
		document.getElementById('playerturn').innerText = "DRAW!";
		gameOver = true;
	}

}

//checks for win of O
var checkForWinO = function() {
	if (objectO.b1 && objectO.b2 && objectO.b3) {
		document.getElementById('playerturn').innerText = "Player 2:O WINS!";
    // if(highscore !== null){
    //     highscore = score + 1
    //         localStorage.setItem("highscore", score);
    //     } else {
    //     localStorage.setItem("highscore", score);
    // }
		gameOver = true;
    console.log(highscore);
	} else if (objectO.b4 && objectO.b5 && objectO.b6) {
		document.getElementById('playerturn').innerText = "Player 2:O WINS!";
    // if(highscore !== null){
    //     highscore = score + 1
    //         localStorage.setItem("highscore", score);
    //     } else {
    //     localStorage.setItem("highscore", score);
    // }
		gameOver = true;
    console.log(highscore);
	} else if (objectO.b7 && objectO.b8 && objectO.b9) {
		document.getElementById('playerturn').innerText = "Player 2:O WINS!";
    // if(highscore !== null){
    //     highscore = score + 1
    //         localStorage.setItem("highscore", score);
    //     } else {
    //     localStorage.setItem("highscore", score);
    // }
		gameOver = true;
    console.log(highscore);
	} else if (objectO.b1 && objectO.b4 && objectO.b7) {
		document.getElementById('playerturn').innerText = "Player 2:O WINS!";
    // if(highscore !== null){
    //     highscore = score + 1
    //         localStorage.setItem("highscore", score);
    //     } else {
    //     localStorage.setItem("highscore", score);
    // }
		gameOver = true;
    console.log(highscore);
	} else if (objectO.b2 && objectO.b5 && objectO.b8) {
		document.getElementById('playerturn').innerText = "Player 2:O WINS!";
    // if(highscore !== null){
    //     highscore = score + 1
    //         localStorage.setItem("highscore", score);
    //     } else {
    //     localStorage.setItem("highscore", score);
    // }
		gameOver = true;
    console.log(highscore);
	} else if (objectO.b3 && objectO.b6 && objectO.b9) {
		document.getElementById('playerturn').innerText = "Player 2:O WINS!";
    // if(highscore !== null){
    //     highscore = score + 1
    //         localStorage.setItem("highscore", score);
    //     } else {
    //     localStorage.setItem("highscore", score);
    // }
		gameOver = true;
    console.log(highscore);
	} else if (objectO.b1 && objectO.b5 && objectO.b9) {
		document.getElementById('playerturn').innerText = "Player 2:O WINS!";
    // if(highscore !== null){
    //     highscore = score + 1
    //         localStorage.setItem("highscore", score);
    //     } else {
    //     localStorage.setItem("highscore", score);
    // }
		gameOver = true;
    console.log(highscore);
	} else if (objectO.b3 && objectO.b5 && objectO.b7)  {
		document.getElementById('playerturn').innerText = "Player 2:O WINS!";
    // if(highscore !== null){
    //     highscore = score + 1
    //         localStorage.setItem("highscore", score);
    //     } else {
    //     localStorage.setItem("highscore", score);
    // }
		gameOver = true;
    console.log(highscore);
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
	// document.getElementById('playerturn').innerText = "Turn: Player 1:X";
  // var elem1 = document.getElementById("b1");
  // elem1.parentNode.removeChild(elem1);
  // var elem2 = document.getElementById("b2");
  // elem2.parentNode.removeChild(elem2);
  // var elem3 = document.getElementById("b3");
  // elem3.parentNode.removeChild(elem3);
  // var elem4 = document.getElementById("b4");
  // elem4.parentNode.removeChild(elem4);
  // var elem5 = document.getElementById("b5");
  // elem5.parentNode.removeChild(elem5);
  // var elem6 = document.getElementById("b6");
  // elem6.parentNode.removeChild(elem6);
  // var elem7 = document.getElementById("b7");
  // elem7.parentNode.removeChild(elem7);
  // var elem8 = document.getElementById("b8");
  // elem8.parentNode.removeChild(elem8);
  // var elem9 = document.getElementById("b9");
  // elem9.parentNode.removeChild(elem9);
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
