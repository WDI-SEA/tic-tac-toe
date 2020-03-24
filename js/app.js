//Global variables
let turn = 1;
let board = document.getElementById('board')
let box = document.querySelectorAll('.box');
let reset = document.getElementById('reset');
let again = document.getElementById('again');
let message = document.getElementById('message');
let tieCnt = document.getElementById('tieCounter');
let p2 = document.getElementById('p2');
let p1 = document.getElementById('p1');
let score1 = 0;
let score2 = 0;
let tie = 0;

// function to play each turn
const playTurn = (e) => {
    if ((e.target.textContent !== 'O') && (e.target.textContent !== 'X')) {
        if (turn % 2 === 0 && turn <= 9) {
            e.target.textContent = 'O';
            e.target.classList.add('p2'); //hwk requirement, but never used in function
        } else if (turn <= 9) {
            e.target.textContent = 'X';
            e.target.classList.add('p1'); //hwk requirement, but never used in function
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
//function to play again board, keeps the scoreboard
const playAgain = () => {
    for (let i = 0; i < box.length; i++) {
        box[i].textContent = '';
    }
    message.textContent = '';
    resetTurn();
    enableTurn();
}
//function to reset entire game, including scoreboard
const resetBoard = () => {
    playAgain();
    tieCnt.textContent = '0';
    score1.textContent = '0';
    score2.textContent = '0';
}

//check win condition 
const checkWin = () => {
    for (let i = 0; i < box.length; i++) {
            //horizontal wins
        if ((box[0].textContent !== '') && (box[0].textContent === box[1].textContent) && (box[1].textContent === box[2].textContent)) {
            console.log(turn)
            winGame();
            break;
        } else if ((box[3].textContent !== '') && (box[3].textContent === box[4].textContent) && (box[4].textContent === box[5].textContent)) {
            winGame();
            break;
        } else if ((box[6].textContent !== '') && (box[6].textContent === box[7].textContent) && (box[7].textContent === box[8].textContent)) {
            winGame();
            break;
            //vertical wins
        } else if ((box[0].textContent !== '') && (box[0].textContent === box[3].textContent) && (box[3].textContent === box[6].textContent)) {
            winGame();
            break;
        } else if ((box[1].textContent !== '') && (box[1].textContent === box[4].textContent) && (box[4].textContent === box[7].textContent)) {
            winGame();
            break;
        } else if ((box[2].textContent !== '') && (box[2].textContent === box[5].textContent) && (box[5].textContent === box[8].textContent)) {
            winGame();
            break;
            //diagonal wins
        } else if ((box[0].textContent !== '') && (box[0].textContent === box[4].textContent) && (box[4].textContent === box[8].textContent)) {
            winGame();
            break;
        } else if ((box[2].textContent !== '') && (box[2].textContent === box[4].textContent) && (box[4].textContent === box[6].textContent)) {
            winGame();
            break;
        }  //tie condition
        else {
            tieGame();
            break;
        }
    }
}
const tieGame = () => {
    if (turn === 9) {
        message.textContent = "It's a tie!";
        tie += 1;
        tieCnt.textContent = tie;   
    } 
}


const endGame = () => {
    board.removeEventListener('click', playTurn);
    resetTurn();
}

const idWinner = () => {
    if ((turn % 2 === 0) && (turn > 4)) {
        score2 += 1;
        p2.textContent = score2;
    } else {
        score1 += 1;
        p1.textContent = score1;
    }
}

const winGame = () => {
    idWinner();
    message.textContent = 'YOU WIN!!!!';
    endGame();
}
//attaching reset function to reset button
reset.addEventListener('click', resetBoard);
//attaching play again function to button 
again.addEventListener('click', playAgain)


