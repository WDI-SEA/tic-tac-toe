// console.log('Hello frontend');
// const divX = document.getElementById('ticX')
// const box1 = document.getElementById('1tictac1')
// const wrapper = document.querySelector('.playingBox')

// const putX = () => {
//     console.log("you clicked X!")
// }

// const checkbox1 = () => {
//     console.log("you clicked box 1")
//     let tictacTrue = document.getElementsByName('tictac')
//     if (tictacTrue[0].checked) {
//         console.log("you chose X")
//     }
// }

// const clickX = divX.addEventListener("click", putX)
// wrapper.addEventListener('click', (event) => {
//     const activeDiv = event.target.nodeName === 'div';
//     if (!activeDiv) {
//         return;
//     }
//     console.log("added event listener to div")
// })

// const clickbox1 = box1.addEventListener("click", checkbox1)
// const xArray = [];
// const oArray = [];


const box = document.querySelectorAll('.playingBox');
const resetGame = document.getElementById('reset');
let playingboxes = document.getElementsByClassName('playingBox');
let tictacTrue = document.getElementsByName('tictac')
let winMessage = document.getElementById('message')
const playerX = "X";
const playerO = "O";
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
                // return alert(gameBoard[a] + " wins!");
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
    // let img = document.createElement("imgTicTacX")
    // img.src = "./img/tictacX.png"
    // console.log("GAMEBOARD", gameBoard);
    const boxValue = event.target.getAttribute("value");
    if (tictacTrue[0].checked && gameBoard[boxValue] != 'O') {
        tictacTrue[1].checked = true;
        event.target.textContent = ('X');
        // console.log('you checked X');
        gameBoard[boxValue] = 'X';
        turn++;
        isWinner(gameBoard, winCon);
        highlightRadio();
        // console.log("Xs", xArray);
    } else if (tictacTrue[1].checked && gameBoard[boxValue] != 'X') {
        tictacTrue[0].checked = true;
        event.target.textContent = ('O')
        // console.log('you checked O');
        gameBoard[boxValue] = 'O';
        turn++;
        isWinner(gameBoard, winCon);
        highlightRadio();
        // console.log("Os", oArray);
    } else {
        console.log('??????')
    }
}

let reset = () => {
    // let test1 = document.getElementById('newBox')
    for (var i = 0; i < box.length; i++) {
        box[i].innerText = ""
        // console.log("reset game")
        // console.log(gameBoard)
        turn = 0
        gameBoard = Array(9).fill(null);
        // console.log(gameBoard)
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
    box.forEach(item => {   
        item.addEventListener('click', event => {
            addMarks(event)
            // console.log(event.target.textContent);
            // console.log("INDEX", event.target.getAttribute("position"));
        })
    }
)}

resetGame.addEventListener('click', reset)
highlightRadio()
startGame()

