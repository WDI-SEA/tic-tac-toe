
const box = document.querySelectorAll('.playingBox');
const resetGame = document.getElementById('reset');
// let playingboxes = document.getElementsByClassName('playingBox');
let tictacTrue = document.getElementsByName('tictac')
let winMessage = document.getElementById('message')

let gameBoard = Array(9).fill(null);
let turn = 0;
const winCon = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const isWinner = (gameBoard, winCon) => {
    if (turn >= 3) {
        for (let i = 0; i < winCon.length; i++) {
            const [a, b, c] = winCon[i];
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                winMessage.textContent = gameBoard[a] + " wins!"
            }
        }
    } else {
        return console.log("No Winner Yet...");
    }
}

const highlightRadio = () => {
    let highX = document.getElementById('imgX')
    let highO = document.getElementById('imgO')
    if (tictacTrue[0].checked) {
        highX.style.backgroundColor = "yellow"
        highO.style.backgroundColor = "darkgray"
    } else {
        highO.style.backgroundColor = "yellow"
        highX.style.backgroundColor = "darkgray"
    }
}

const addMarks = (event) => {
    const boxValue = event.target.getAttribute("value");
    if (tictacTrue[0].checked) {
        tictacTrue[1].checked = true;
        event.target.textContent = ('X');
        gameBoard[boxValue] = 'X';
        turn++;
        isWinner(gameBoard, winCon);
        event.target.removeEventListener("click", addMarks)
        highlightRadio();
    } else if (tictacTrue[1].checked) {
        tictacTrue[0].checked = true;
        event.target.textContent = ('O')
        gameBoard[boxValue] = 'O';
        turn++;
        isWinner(gameBoard, winCon);
        event.target.removeEventListener("click", addMarks)
        highlightRadio();
    } else {
        console.log('??????')
    }
}

let reset = () => {
    for (var i = 0; i < box.length; i++) {
        box[i].innerText = ""
        turn = 0
        gameBoard = Array(9).fill(null);
        tictacTrue[0].checked = true;
        addClickies();
        highlightRadio();
        winMessage.textContent = ""
    }
}

const startGame = () => {
    addClickies()
}


const addClickies = () => {
    for (i = 0; i < box.length; i++)
        box[i].addEventListener("click", addMarks)
}

resetGame.addEventListener('click', reset)
highlightRadio()
startGame()
