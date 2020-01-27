console.log('Hello frontend');

let board;

let turn = 'X';

let win;

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


board = ['X', '', '', '', '', '', '', '', ''];
document.querySelector('.board').addEventListener('click', handleTurn);
let gameInit = function() {
            
    function render() {
        board.forEach(function(mark, index) {
        console.log(board);

        let move = squares[index].innerText = mark;
});
};
render();
            
let domResetBtn = document.querySelector('.reset');
};

function handleTurn(event) {
    let index = squares.findIndex(function(square) {
    return square === event.target;
});
board[index] = turn;
turn = turn === 'X' ? 'O' : 'X';
console.log('hey');
};

function getWinner(){

}



document.addEventListener('DOMContentLoaded', function() {
    

    
    
    gameInit();
});