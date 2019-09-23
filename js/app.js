//Global variables

var turnNotification = document.getElementById('turn-notif');
var gameDiv = document.getElementById('game-board');
var resetBtn = document.getElementById('reset');
var CPUBtn = document.getElementById('cpuactive');
const square = document.getElementById('game-board').childNodes;
var count = 1;
var totalRedCol1 = 0;
var totalRedCol2 = 0;
var totalRedCol3 = 0;
var totalRedRow1 = 0;
var totalRedRow2 = 0;
var totalRedRow3 = 0;
var totalRedDiag1 = 0;
var totalRedDiag2 = 0;
var totalBlkCol2 = 0;
var totalBlkCol1 = 0;
var totalBlkCol3 = 0;
var totalBlkRow1 = 0;
var totalBlkRow2 = 0;
var totalBlkRow3 = 0;
var totalBlkDiag1 = 0;
var totalBlkDiag2 = 0;
var CPUActive = 0;
var open = [];
var rand = 0;

// Game board objects

const gameBoardObj = [{
        id: 0,
        CPUMove: '',
        tempID: 'div1',
        activeRed: false,
        activeBlack: false,
        col1: false,
        row1: false,
        diag1: false,
    },{
        id: 1,
        tempID: 'div2',
        activeRed: false,
        activeBlack: false,
        col2: false,
        row1: false,
    },{
        id: 2,
        tempID: 'div3',
        activeRed: false,
        activeBlack: false,
        col3: false,
        row1: false,
        diag2: false,

    },{
        id: 3,
        tempID: 'div4',
        activeRed: false,
        activeBlack: false,
        col1: false,
        row2: false,

    },{
        id: 4,
        tempID: 'div5',
        activeRed: false,
        activeBlack: false,
        col2: false,
        row2: false,
        diag1: false,
        diag2: false,

    },{
        id: 5,
        tempID: 'div6',
        activeRed: false,
        activeBlack: false,
        col3: false,
        row2: false,

    },{
        id: 6,
        tempID: 'div7',
        activeRed: false,
        activeBlack: false,
        col1: false,
        row3: false,
        diag2: false,

    },{
        id: 7,
        tempID: 'div8',
        activeRed: false,
        activeBlack: false,
        col2: false,
        row3: false,

    },{
        id: 8,
        tempID: 'div9',
        activeRed: false,
        activeBlack: false,
        col3: false,
        row3: false,
        diag1: false,
    }
];

//Function used to create board as first step in program

function createBoard() {
    for (i = 0; i < gameBoardObj.length; i++){
        createGrid(i);
    }
}
   
// Hands off to this function that creates relationship with DOM objects and object array.

function createGrid(num) {
    var newDivItem = document.createElement("div");
    newDivItem.setAttribute("id", gameBoardObj[num].id);
    newDivItem.setAttribute("class", gameBoardObj[num].tempID);
    gameDiv.appendChild(newDivItem);
    square[num].onclick = function() {
        if (gameBoardObj[num].activeBlack === true || gameBoardObj[num].activeRed === true) {
            alert("Pick another square")
        }else {
            if(CPUActive === 1){
                CPUConditionizer(num);
            }else if (CPUActive === 0) {
                moveConditionizer(num);
            }
        }
    }
}

//Makes initial decision on how to handle user moves

function moveConditionizer(num) {
    if(count % 2 === 1) {
        move(num, 'p1')
    }else if(count % 2 === 0) {
        move(num, 'p2')
    }
}

//Starts decision making on how CPU handles moves

function CPUConditionizer(num){
    move(num, 'p1');
    CPUMoveChoice();
}

//CPU makes choices based on availability

function CPUMoveChoice() {
    Object.keys(gameBoardObj).forEach(function (sq) {
        if(gameBoardObj[sq].activeRed === false && gameBoardObj[sq].activeBlack === false) {
            open.push(gameBoardObj[sq].id);
            rand = open[Math.floor((Math.random()*open.length))];
        }
    });
    setTimeout(function() {
        move(rand, 'p2');
        open = [];
    }, 1000);
}

//Function that creates random index value for CPU moves

function getRandomArrValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//Move logic that is shared between user and CPU
   
function move(num, player) {
    var gb = gameBoardObj[num];
    if (gb.id === 0) {
        gb.col1 = true;
        gb.row1 = true;
        gb.diag1 = true;
        if (player === 'p1') {
            gb.activeRed = true;
            square[num].innerHTML = `<p class="player-red">X</p>`;
            count ++;
            totalRedCol1++;
            totalRedDiag1++;
            totalRedRow1++;
            turnNotification.textContent = "Black Turn";
            turnNotification.style.backgroundColor = "black";
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].innerHTML = `<p class="player-blk">O</p>`;
            count ++;
            totalBlkCol1++;
            totalBlkDiag1++;
            totalBlkRow1++;
            turnNotification.textContent = "Red Turn";
            turnNotification.style.backgroundColor = "red";
            checkForMatch();
        }
    }if (gb.id === 1) {
        gb.col2 = true;
        gb.row1 = true;
        if (player === 'p1') {
            gb.activeRed = true;
            square[num].innerHTML = `<p class="player-red">X</p>`;
            count ++;
            totalRedCol2++;
            totalRedRow1++;
            turnNotification.textContent = "Black Turn";
            turnNotification.style.backgroundColor = "black";
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].innerHTML = `<p class="player-blk">O</p>`;
            count ++;
            totalBlkCol2++;
            totalBlkRow1++;
            turnNotification.textContent = "Red Turn";
            turnNotification.style.backgroundColor = "red";
            checkForMatch();
        }
    }if (gb.id === 2) {
        gb.col3 = true;
        gb.row1 = true;
        gb.diag2 = true;
        if (player === 'p1') {
            gb.activeRed = true;
            square[num].innerHTML = `<p class="player-red">X</p>`;
            count ++;
            totalRedCol3++;
            totalRedDiag2++;
            totalRedRow1++;
            turnNotification.textContent = "Black Turn";
            turnNotification.style.backgroundColor = "black";
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].innerHTML = `<p class="player-blk">O</p>`;
            count ++;
            totalBlkCol3++;
            totalBlkDiag2++;
            totalBlkRow1++;
            turnNotification.textContent = "Red Turn";
            turnNotification.style.backgroundColor = "red";
            checkForMatch();
        }
    }if (gb.id === 3) {
        gb.col1 = true;
        gb.row2 = true;
        if (player === 'p1') {

            gb.activeRed = true;
            square[num].innerHTML = `<p class="player-red">X</p>`;
            count ++;
            totalRedCol1++;
            totalRedRow2++;
            turnNotification.textContent = "Black Turn";
            turnNotification.style.backgroundColor = "black";
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].innerHTML = `<p class="player-blk">O</p>`;
            count ++;
            totalBlkCol1++;
            totalBlkRow2++;
            turnNotification.textContent = "Red Turn";
            turnNotification.style.backgroundColor = "red";
            checkForMatch();
        }
    }if (gb.id === 4) {
        gb.col2 = true;
        gb.row2 = true;
        gb.diag1 = true;
        gb.diag2 = true;
        if (player === 'p1') {
            gb.activeRed = true;
            square[num].innerHTML = `<p class="player-red">X</p>`;
            count ++;
            totalRedCol2++;
            totalRedRow2++;
            totalRedDiag1++;
            totalRedDiag2++;
            turnNotification.textContent = "Black Turn";
            turnNotification.style.backgroundColor = "black";
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].innerHTML = `<p class="player-blk">O</p>`;
            count ++;
            totalBlkCol2++;
            totalBlkRow2++;
            totalBlkDiag1++;
            totalBlkDiag2++;
            turnNotification.textContent = "Red Turn";
            turnNotification.style.backgroundColor = "red";
            checkForMatch();
        }
    }if (gb.id === 5) {
        gb.col3 = true;
        gb.row2 = true;
        if (player === 'p1') {
            gb.activeRed = true;
            square[num].innerHTML = `<p class="player-red">X</p>`;
            count ++;
            totalRedCol3++;
            totalRedRow2++;
            turnNotification.textContent = "Black Turn";
            turnNotification.style.backgroundColor = "black";
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].innerHTML = `<p class="player-blk">O</p>`;
            count ++;
            totalBlkCol3++;
            totalBlkRow2++;
            turnNotification.textContent = "Red Turn";
            turnNotification.style.backgroundColor = "red";
            checkForMatch();
        }
    }if (gb.id === 6) {
        gb.col1 = true;
        gb.row3 = true;
        gb.diag2 = true;
        if (player === 'p1') {
            gb.activeRed = true;
            square[num].innerHTML = `<p class="player-red">X</p>`;
            count ++;
            totalRedCol1++;
            totalRedRow3++;
            totalRedDiag2++;
            turnNotification.textContent = "Black Turn";
            turnNotification.style.backgroundColor = "black";
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].innerHTML = `<p class="player-blk">O</p>`;
            count ++;
            totalBlkCol1++;
            totalBlkRow3++;
            totalBlkDiag2++;
            turnNotification.textContent = "Red Turn";
            turnNotification.style.backgroundColor = "red";
            checkForMatch();
        }
    }if (gb.id === 7) {
        gb.col2 = true;
        gb.row3 = true;
        if (player === 'p1') {
            gb.activeRed = true;
            square[num].innerHTML = `<p class="player-red">X</p>`;
            count ++;
            totalRedCol2++;
            totalRedRow3++;
            turnNotification.textContent = "Black Turn";
            turnNotification.style.backgroundColor = "black";
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].innerHTML = `<p class="player-blk">O</p>`;
            count ++;
            totalBlkCol2++;
            totalBlkRow3++;
            turnNotification.textContent = "Red Turn";
            turnNotification.style.backgroundColor = "red";
            checkForMatch();
        }
    }if (gb.id === 8) {
        gb.col3 = true;
        gb.row3 = true;
        gb.diag1 = true;
        if (player === 'p1') {
            gb.activeRed = true;
            square[num].innerHTML = `<p class="player-red">X</p>`;
            count ++;
            totalRedCol3++;
            totalRedRow3++;
            totalRedDiag1++;
            turnNotification.textContent = "Black Turn";
            turnNotification.style.backgroundColor = "black";
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].innerHTML = `<p class="player-blk">O</p>`;
            count ++;
            totalBlkCol3++;
            totalBlkRow3++;
            totalBlkDiag1++;
            turnNotification.textContent = "Red Turn";
            turnNotification.style.backgroundColor = "red";
            checkForMatch();
        }
    };
}

//Logic used to check for game match - Win, Lose or draw.

function checkForMatch() {
    if((totalBlkCol1 === 3 || totalBlkCol2 === 3 || totalBlkCol3 === 3) || (totalBlkDiag1 === 3 || totalBlkDiag2 === 3) || (totalBlkRow1 === 3 || totalBlkRow2 === 3 || totalBlkRow3 === 3) ){
        // alert("Black Wins");
            turnNotification.textContent = "Game Over, Black Wins";
            turnNotification.style.backgroundColor = "blue";
    }else if((totalRedCol1 === 3 || totalRedCol2 === 3 || totalRedCol3 === 3) || (totalRedDiag1 === 3 || totalRedDiag2 === 3) || (totalRedRow1 === 3 || totalRedRow2 === 3 || totalRedRow3 === 3) ){
        // alert("Red Wins");
        turnNotification.textContent = "Game Over, Red Wins";
        turnNotification.style.backgroundColor = "blue";
    }else if (count === 10) {
        // alert("It's a Tie");
        turnNotification.textContent = "Tie Game, Try again";
        turnNotification.style.backgroundColor = "blue";
    }
}

//Function used to reset game board

function activateReset() {
    resetBtn.onclick = function() {
        turnNotification.textContent = "";
        turnNotification.style.backgroundColor = "transparent";
        count = 1;
        open = [];
        totalRedCol1 = 0;
        totalRedCol2 = 0;
        totalRedCol3 = 0;
        totalRedRow1 = 0;
        totalRedRow2 = 0;
        totalRedRow3 = 0;
        totalRedDiag1 = 0;
        totalRedDiag2 = 0;
        totalBlkCol2 = 0;
        totalBlkCol1 = 0;
        totalBlkCol3 = 0;
        totalBlkRow1 = 0;
        totalBlkRow2 = 0;
        totalBlkRow3 = 0;
        totalBlkDiag1 = 0;
        totalBlkDiag2 = 0;
        totalCPUCol1 = 0;
        totalCPUCol2 = 0;
        totalCPUCol3 = 0;
        totalCPURow1 = 0;
        totalCPURow2 = 0;
        totalCPURow3 = 0;
        totalCPUDiag1 = 0;
        totalCPUDiag2 = 0;
        for (i = 0; i < gameBoardObj.length; i++){
            var gb = gameBoardObj[i];
            square[i].textContent = ' ';
            if(gb.id === 0) {
                gb.activeRed = false;
                gb.activeBlack = false;
                gb.activeCPU = false;
                gb.col1 = false;
                gb.row1 = false;
                gb.diag1 = false;
            }else if(gb.id === 1) {
                gb.activeRed = false;
                gb.activeBlack = false;
                gb.activeCPU = false;
                gb.col2 = false;
                gb.row1 = false;
            }else if(gb.id === 2) {
                gb.activeRed = false;
                gb.activeBlack = false;
                gb.activeCPU = false;
                gb.col3 = false;
                gb.row1 = false;
                gb.diag2 = false;
            }else if(gb.id === 3) {
                gb.activeRed = false;
                gb.activeBlack = false;
                gb.activeCPU = false;
                gb.col1 = false;
                gb.row2 = false;
            }else if(gb.id === 4) {
                gb.activeRed = false;
                gb.activeBlack = false;
                gb.activeCPU = false;
                gb.col2 = false;
                gb.row2 = false;
                gb.diag1 = false;
                gb.diag2 = false;
            }else if(gb.id === 5) {
                gb.activeRed = false;
                gb.activeBlack = false;
                gb.activeCPU = false;
                gb.col3 = false;
                gb.row2 = false;
            }else if(gb.id === 6) {
                gb.activeRed = false;
                gb.activeBlack = false;
                gb.activeCPU = false;
                gb.col1 = false;
                gb.row3 = false;
                gb.diag2 = false;
            }else if(gb.id === 7) {
                gb.activeRed = false;
                gb.activeBlack = false;
                gb.activeCPU = false;
                gb.col2 = false;
                gb.row3 = false;
            }else if(gb.id === 8) {
                gb.activeRed = false;
                gb.activeBlack = false;
                gb.activeCPU = false;
                gb.col3 = false;
                gb.row3 = false;
                gb.diag1 = false;
            }
        }
    }
}

//Initalized functions and events that are active on DOM ready

createBoard();
activateReset();
CPUBtn.onclick = function() {
    if (CPUActive % 2 === 0) {
        CPUActive = 1;
    }else if (CPUActive % 2 === 1) {
        CPUActive = 0;
    }
}

