console.log('Hello frontend');

let board;

let turn = 'X';

let win;

let mark = "X";

let squares = Array.from(document.querySelectorAll('board'));

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


board = ['X', '', '', '', '', '', '', '', ''];
document.querySelector('.board').addEventListener('click', currentTurn);
let gameInit = function() {
            

    board.forEach(function(mark, index) {
    console.log('ugh');
    squares.findIndex.innerText = mark;
    document.querySelector('.square').addEventListener('click', currentTurn);
// ..........kjfnsdkjbvkjwb
//for (let i = 0; i < 9; i++) {
    //squares[i].innerText = mark;

});
console.log('nothing');
};




let domResetBtn = document.querySelector('.reset');

function currentTurn(e) {
    let index = squares.findIndex(function(square) {
    return squares === e.target;
    document.querySelector('.square').textContent = "X";
});
board[index] = turn;
turn = turn === 'X' ? 'O' : 'X';
console.log('hey');
};

function checkWin(){
    console.log("checking for win");
}



document.addEventListener('DOMContentLoaded', function() {
    

    
    
    gameInit();
});