console.log('Hello frontend');

let board;

let turn = 'X';

let win;

let mark = "X";
let squareZero = document.getElementById('0');
let squareOne = document.getElementById('1');
let squareTwo = document.getElementById('2');
let squareThree = document.getElementById('3');
let squareFour = document.getElementById('4');
let squareFive = document.getElementById('5');
let squareSix = document.getElementById('6');
let squareSeven = document.getElementById('7');
let squareEight = document.getElementById('8');

let squares = Array.from(document.querySelectorAll('#board div'));

let message = document.getElementById('message');

let resetBtn = document.querySelector('.reset');



const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


board = [];

let current = document.querySelectorAll('.square')
let gameInit = function() {
    board = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    //console.log(current)
    for (i = 0; i <= current.length; i++) {
        //console.log(current[i])
        current[i].addEventListener('click', handleBoardClick)
    }
}

let handleBoardClick = function (event) {
    //console.log(event)
    let index = event.target.id;
    
    if (board[index] !== 'X' && board[index] !== 'O' && board[index] !== 'z') {
    board[index] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    message.innerText = `It is ${turn}'s turn!`
    if (turn === 'O') {
    event.target.src = "https://images.squarespace-cdn.com/content/v1/55ece940e4b048d1ed401c11/1450136257542-4DATU4KRB70MDENGJXJX/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/X%3A++The+Unknown"
    } else if (turn === 'X') {
    event.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZVweA-T9ZNXFmIPD0zFe3ZKnC9s3Ag71WkKy2zIYfW34UMq8&s"
    } 
} else if (board[index] == 'X' || board[index] == 'O') { 
    message.innerText = 'Not a valid move! Try agian!';
} else if (board[index] == 'z') {
    message.innerText = `${turn} Won!`;
}
checkWin();
console.log(board);
console.log(squares);

}
let gameOver = function() {
    board = ['z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z'];
    message.innerText = `Winner!`;
}
console.log(board);
let checkWin = function(){
    
    switch (true) {
        case ((board[0] === board [1]) && (board[1] === board[2])):
            console.log('Yay you won');
            gameOver();
            break;
        case ((board[3] === board [4]) && (board[4] === board[5])):
            console.log('Yay you won');
            gameOver();
            break;
        case ((board[6] === board [7]) && (board[7] === board[8])):
            console.log('Yay you won');
            gameOver();
            break;
        case ((board[0] === board [3]) && (board[3] === board[6])):
            console.log('Yay you won');
            gameOver();
            break;
        case ((board[1] === board [4]) && (board[4] === board[7])):
            console.log('Yay you won');
            gameOver();
            break;
        case ((board[2] === board [5]) && (board[5] === board[8])):
            console.log('Yay you won');
            gameOver();
            break;
        case ((board[0] === board [4]) && (board[4] === board[8])):
            console.log('Yay you won');
            gameOver();
            break;
        case ((board[2] === board [4]) && (board[4] === board[6])):
            console.log('Yay you won');
            gameOver();
            break;
            default:
                console.log('what is happening');
    }
}

let resetGame = function() {
    board = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    squareZero.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwCAMAAACYaRRsAAAAA1BMVEX///+nxBvIAAAANUlEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL4NebAAASAP41MAAAAASUVORK5CYII='
    squareOne.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwCAMAAACYaRRsAAAAA1BMVEX///+nxBvIAAAANUlEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL4NebAAASAP41MAAAAASUVORK5CYII='
    squareTwo.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwCAMAAACYaRRsAAAAA1BMVEX///+nxBvIAAAANUlEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL4NebAAASAP41MAAAAASUVORK5CYII='
    squareThree.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwCAMAAACYaRRsAAAAA1BMVEX///+nxBvIAAAANUlEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL4NebAAASAP41MAAAAASUVORK5CYII='
    squareFour.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwCAMAAACYaRRsAAAAA1BMVEX///+nxBvIAAAANUlEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL4NebAAASAP41MAAAAASUVORK5CYII='
    squareFive.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwCAMAAACYaRRsAAAAA1BMVEX///+nxBvIAAAANUlEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL4NebAAASAP41MAAAAASUVORK5CYII='
    squareSix.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwCAMAAACYaRRsAAAAA1BMVEX///+nxBvIAAAANUlEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL4NebAAASAP41MAAAAASUVORK5CYII='
    squareSeven.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwCAMAAACYaRRsAAAAA1BMVEX///+nxBvIAAAANUlEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL4NebAAASAP41MAAAAASUVORK5CYII='
    squareEight.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwCAMAAACYaRRsAAAAA1BMVEX///+nxBvIAAAANUlEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL4NebAAASAP41MAAAAASUVORK5CYII='
    message.innerText = 'Click to Start!';
}


resetBtn.addEventListener('click', resetGame);




document.addEventListener('DOMContentLoaded', function() {
    gameInit();
});