//Global variables
let turn = 1;
let board = document.getElementById('board')
let box = document.querySelectorAll('.box');
let reset = document.getElementById('reset');
let again = document.getElementById('again');
let message = document.getElementById('message');
let tieCnt = document.getElementById('tieCounter');
let p1 = document.getElementsByClassName('p1');
let p2 = document.getElementsByClassName('p2');
let score1 = 0;
let score2 = 0;
let tie = 0;

// function to play each turn
const playTurn = (e) => {
    if ((e.target.textContent !== 'O') && (e.target.textContent !== 'X')) {
        if (turn % 2 === 0 && turn <= 9) {
            e.target.textContent = 'O';
            e.target.classList.add('p2');
            console.log('turn:' + turn)
        } else if (turn <= 9) {
            e.target.textContent = 'X';
            e.target.classList.add('p1');
            console.log('turn:' + turn)
        }
        checkWin();
        turn++;
    } else {
        message.textContent = 'Please pick another square!'
    }
}

// Adds event listener to board to start game on click
const enableTurn = () => {
    board.addEventListener('click', playTurn);
}

//function to reset turn
const resetTurn = () => {
    turn = 1;
}
//function to reset board
const resetBoard = () => {
    for (let i = 0; i < box.length; i++) {
        box[i].textContent = '';
    }
    resetTurn();
    message.textContent = '';
    enableTurn();
}
const playAgain = () => {
    resetBoard();
}

//check win condition 
const checkWin = () => {
    for (let i = 0; i < box.length; i++) {
        //horizontal wins
        if ((box[0].textContent !== '') && (box[0].textContent === box[1].textContent) && (box[1].textContent === box[2].textContent)) {
            winGame();
            console.log(tie)
        } else if ((box[3].textContent !== '') && (box[3].textContent === box[4].textContent) && (box[4].textContent === box[5].textContent)) {
            winGame();
        } else if ((box[6].textContent !== '') && (box[6].textContent === box[7].textContent) && (box[7].textContent === box[8].textContent)) {
            winGame();
            //vertical wins
        } else if ((box[0].textContent !== '') && (box[0].textContent === box[3].textContent) && (box[3].textContent === box[6].textContent)) {
            winGame();
        } else if ((box[1].textContent !== '') && (box[1].textContent === box[4].textContent) && (box[4].textContent === box[7].textContent)) {
            winGame();
        } else if ((box[2].textContent !== '') && (box[2].textContent === box[5].textContent) && (box[5].textContent === box[8].textContent)) {
            winGame();
            //diagonal wins
        } else if ((box[0].textContent !== '') && (box[0].textContent === box[4].textContent) && (box[4].textContent === box[8].textContent)) {
            winGame();
        } else if ((box[2].textContent !== '') && (box[2].textContent === box[4].textContent) && (box[4].textContent === box[6].textContent)) {
            winGame();
        }  //add tie condition
        else {
            console.log(tie)
            tieGame();
            break;
        }
    }
}
const tieGame = () => {
    if (turn === 9) {
        message.textContent = "It's a tie!";
        tie += 1;
        tieCnt.textContent = (tie);   
    } 
}


const endGame = () => {
    board.removeEventListener('click', playTurn);
    resetTurn();
}

const winGame = () => {
    message.textContent = 'You WIN!!!!';
    endGame();
    //TO DO: identify which player won and incerement counter
}


//attaching reset function to reset button
reset.addEventListener('click', resetBoard);
//attaching play again function to button 
again.addEventListener('click', playAgain)


