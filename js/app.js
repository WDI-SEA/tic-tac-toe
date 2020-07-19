// global variables
let turnCounter = 0;
let winCounter = [0, 0, 0];
const answerBox = document.querySelector('.answerBox');
// is there already a winnner?
let winCondition = '';
// find game board
const allCells = document.querySelector('.board');
// find reset button
const reset = document.querySelector('.reset');

// winner function
function someoneWon () {
    answerBox.textContent = 'Player ' + playerTurn + ' wins!';
    winCondition = 'Winner';
    winCounter[turnCounter % 2]++;
    console.log(winCounter);
};
// reset function
function clearBoard() {
    window.location.reload(false);
         // let resetCellsOne = document.querySelectorAll('.clickedCellOne');
        // let resetCellsTwo = document.querySelectorAll('.clickedCellTwo');
        // console.log(resetCellsOne);
        // console.log(resetCellsTwo);
        // for (let i = 0; i < resetCellsOne.length; i++) {
            // let currentReset = resetCellsOne.list.children[i];
            // console.log[currentReset];
            // currentReset.setAttribute('class', 'cell');
    // }
};

//reset function   ---  currently not working
// function runReset() {
//     window.location.reload(false);
// };

// wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // When cell is clicked, change background img url
    // Then check for win
    allCells.addEventListener('click', event => {
        let currentClick = event.target;
        playerTurn = (turnCounter % 2) + 1;
        
        // if cell has not been clicked
        if (currentClick.className === 'cell') {
            turnCounter += 1;
            
            // change x/o every other click
            if (playerTurn === 1) {
                currentClick.setAttribute('class', 'clickedCellOne');
            };
            if (playerTurn === 2) {
                currentClick.setAttribute('class', 'clickedCellTwo');
            };
            
            // after updating for current click
            // check for win via class's
            let topLeft = document.querySelector('#tl').className;
            let topCenter = document.querySelector('#tc').className;
            let topRight = document.querySelector('#tr').className;
            let middleLeft = document.querySelector('#ml').className;
            let middleCenter = document.querySelector('#mc').className;
            let middleRight = document.querySelector('#mr').className;
            let bottomLeft = document.querySelector('#bl').className;
            let bottomCenter = document.querySelector('#bc').className;
            let bottomRight = document.querySelector('#br').className;
            
            if (winCondition !== 'Winner'){
                if (topLeft === topCenter && topCenter === topRight && topCenter !== 'cell') {
                    someoneWon();
                    allCells.removeEventListener('click', );
                };
                if (middleLeft === middleCenter && middleCenter === middleRight && middleCenter !== 'cell') {
                    someoneWon();
                };
                if (bottomLeft === bottomCenter && bottomCenter === bottomRight && bottomCenter !== 'cell') {
                    someoneWon();
                };
                if (topLeft === middleLeft && middleLeft === bottomLeft && bottomLeft !== 'cell') {
                    someoneWon();
                };
                if (topCenter === middleCenter && middleCenter === bottomCenter && middleCenter !== 'cell') {
                    someoneWon();
                };
                if (topRight === middleRight && middleRight === bottomRight && middleRight !== 'cell') {
                    someoneWon();
                };
                if (topLeft === middleCenter && middleCenter === bottomRight && middleCenter !== 'cell') {
                    someoneWon();
                };
                if (topRight === middleCenter && middleCenter === bottomLeft && middleCenter !== 'cell') {
                    someoneWon();
                };
            }if (turnCounter === 9 && winCondition !== 'Winner') {
                answerBox.textContent = 'Tie Game';
                winCounter[2]++;
                console.log(winCounter);
            };
        };
        
    });

    // reset button function
    reset.addEventListener('click', () => {
        window.location.reload(false);
    }
    );
    
});
