console.log('Hello frontend');

let board;

let turn = 'X';

let win;

let mark = "X";

let squares = Array.from(document.querySelectorAll('#board div'));

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
document.querySelector('.board').addEventListener('click', currentTurn);
let gameInit = function() {
            

    board.forEach(function(mark, index) {
    console.log('ugh');
    squares[index].innerText = mark;
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
    return square === e.target;
});
board[index] = turn;
turn = turn === 'X' ? 'O' : 'X';
console.log(board);
if (turn === 'X') {
    document.querySelector('.square').src = "https://images.squarespace-cdn.com/content/v1/55ece940e4b048d1ed401c11/1450136257542-4DATU4KRB70MDENGJXJX/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/X%3A++The+Unknown"
}

};
document.querySelector('.square').textContent = e.target;

function checkWin(){
    console.log("checking for win");
}



document.addEventListener('DOMContentLoaded', function() {
    

    
    
    gameInit();
});