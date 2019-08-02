// GLOBAL VARIABLES
let turn = 1;
let currentPlayer = "X";
let playerX = [];
let playerO = [];
var score;
var imgSrc;
let gameOver = false;

//======================DOM SELECTORS AND CALL FUNCTIONS======================//
var positions = document.querySelectorAll("#gameBoard div");
console.log(positions);
load();


// ==================CHECK WINS AND/OR DRAW======================//

function getClass(index) {
    return positions[index].getAttribute("class");
}

function checkWin() {
    if ((getClass(0) == 'box imageX' && getClass(1) == 'box imageX' && getClass(2) == 'box imageX') || (getClass(0) == 'box imageO' && getClass(1) == 'box imageO' && getClass(2) == 'box imageO')) {
        this.removeEventListener('click', boxClicked);
        // document.getElementById('message').innerHTML = 'We have a winner!';
    } else if ((getClass(3) == 'box imageX' && getClass(4) == 'box imageX' && getClass(5) == 'box imageX') || (getClass(3) == 'box imageO' && getClass(4) == 'box imageO' && getClass(5) == 'box imageO')) {
        // alert('Ladies and Gentlemen, we have a winner!');
        removeEventListener('click', boxClicked);
    } else if ((getClass(6) == 'box imageX' && getClass(7) == 'box imageX' && getClass(8) == 'box imageX') || (getClass(6) == 'box imageO' && getClass(7) == 'box imageO' && getClass(8) == 'box imageO')) {
        alert('Ladies and Gentlmen, we have a winner!');
        removeEventListener('click', boxClicked);
    } else if ((getClass(0) == 'box imageX' && getClass(4) == 'box imageX' && getClass(8) == 'box imageX') || (getClass(0) == 'box imageO' && getClass(4) == 'box imageO' && getClass(8) == 'box imageO')) {
        alert('Ladies and Gentlmen, we have a winner!');
        removeEventListener('click', boxClicked);
    } else if ((getClass(2) == 'box imageX' && getClass(4) == 'box imageX' && getClass(6) == 'box imageX') || (getClass(2) == 'box imageO' && getClass(4) == 'box imageO' && getClass(6) == 'box imageO')) {
        alert('Ladies and Gentlmen, we have a winner!');
        removeEventListener('click', boxClicked);
    } else if ((getClass(0) == 'box imageX' && getClass(3) == 'box imageX' && getClass(6) == 'box imageX') || (getClass(0) == 'box imageO' && getClass(3) == 'box imageO' && getClass(6) == 'box imageO')) {
        alert('Ladies and Gentlmen, we have a winner!');
        removeEventListener('click', boxClicked);
    } else if ((getClass(1) == 'box imageX' && getClass(4) == 'box imageX' && getClass(7) == 'box imageX') || (getClass(1) == 'box imageO' && getClass(4) == 'box imageO' && getClass(7) == 'box imageO')) {
        alert('Ladies and Gentlmen, we have a winner!');
        removeEventListener('click', boxClicked);
    } else if ((getClass(2) == 'box imageX' && getClass(5) == 'box imageX' && getClass(8) == 'box imageX') || (getClass(2) == 'box imageO' && getClass(5) == 'box imageO' && getClass(8) == 'box imageO')) {
        alert('Ladies and Gentlmen, we have a winner!');
        removeEventListener('click', boxClicked);
    }
    else {
        draw();
    }
        removeEventListener('click', boxClicked);
        document.getElementById('message').innerHTML = 'We have a winner!';
}


function draw() {
    // alert("its a draw");
    resetGame();
}


// ==================ADD EVENT LISTENERS======================//

function boxListener() {
    // grab all the boxes to add listeners
    var positions = document.querySelectorAll(".box");
    // check for positions
    for (var i = 0; i < positions.length; i++) {
        positions[i].addEventListener('click', boxClicked);  
    }
}

// ====================END-GAME STATE ======================//

function removeEventListener() {
    var positions = document.querySelectorAll(".box");
    for (var i = 0; i < positions.length; i++) {
        positions[i].removeEventListener('click', boxClicked);
    }
}
// create a function sets the game-over event
function isGameOver() {
	document.getElementById("message").innerText = "Play again?"
}
function resetGame() {
    // set listener for reset button
    // var newGame = document.getElementById('newGame');
    // newGame.addEventListener("click", boxClicked);
    document.getElementById('reset-button').addEventListener('click', load);
 }


// ===================== GAME STATE =============================//

function boxClicked() {
    if (currentPlayer === "X") {
        this.classList.add('imageX');// gets the id of box clicked
        var positionClicked = this.getAttribute('id'); // this pushed id-value into player array
        playerX.push(positionClicked);
        // set the img to compare
        imgSrc = this.getAttribute('class');
        console.log(imgSrc);
        console.log("player X array: ", playerX);
        currentPlayer = "O";
    } 
    else {
        this.classList.add('imageO');
        var positionClicked = this.getAttribute('id');
        playerO.push(positionClicked);
        console.log("player O array: ", playerO);
        currentPlayer = "X"
    }
    turn+= 1
    if(playerO.length || playerX.length == 3) {
        checkWin()
    }
    else {
        console.log('lololol')
    }
    this.removeEventListener('click', boxClicked);
}

function load() {
    boxListener(); 
}
