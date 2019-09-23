//Define variables local variables

let gameDiv = document.getElementById("game-board");
const square = document.getElementById("game-board").childNodes;
let xImg = 'img/x.png';
let oImg = 'img/o.png';
var count = 1;
var openRedMoves = 0;
var derp = [];
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
var totalCPUCol1 = 0;
var totalCPUCol2 = 0;
var totalCPUCol3 = 0;
var totalCPURow1 = 0;
var totalCPURow2 = 0;
var totalCPURow3 = 0;
var totalCPUDiag1 = 0;
var totalCPUDiag2 = 0;

// Game board objects

const gameBoardObj = [{
        id: 1,
        CPUMove: function(){
            alert("I'm Sleeping right now")
        },
        tempID: 'div1',
        activeRed: false,
        activeBlack: false,
        activeCPU: false,
        col1: false,
        row1: false,
        diag1: false,
    },{
        id: 2,
        CPUMove: function(){
            alert("I'm Sleeping right now")
        },
        tempID: 'div2',
        activeRed: false,
        activeBlack: false,
        activeCPU: false,
        col2: false,
        row1: false,
    },{
        id: 3,
        CPUMove: function(){
            alert("I'm Sleeping right now")
        },
        tempID: 'div3',
        activeRed: false,
        activeBlack: false,
        activeCPU: false,
        col3: false,
        row1: false,
        diag2: false,

    },{
        id: 4,
        CPUMove: function(){
            alert("I'm Sleeping right now")
        },
        tempID: 'div4',
        activeRed: false,
        activeBlack: false,
        activeCPU: false,
        col1: false,
        row2: false,

    },{
        id: 5,
        CPUMove: function(){
            alert("I'm Sleeping right now")
        },
        tempID: 'div5',
        activeRed: false,
        activeBlack: false,
        activeCPU: false,
        col2: false,
        row2: false,
        diag1: false,
        diag2: false,

    },{
        id: 6,
        CPUMove: function(){
            alert("I'm Sleeping right now")
        },
        tempID: 'div6',
        activeRed: false,
        activeBlack: false,
        activeCPU: false,
        col3: false,
        row2: false,

    },{
        id: 7,
        CPUMove: function(){
            alert("I'm Sleeping right now")
        },
        tempID: 'div7',
        activeRed: false,
        activeBlack: false,
        activeCPU: false,
        col1: false,
        row3: false,
        diag2: false,

    },{
        id: 8,
        CPUMove: function(){
            alert("I'm Sleeping right now")
        },
        tempID: 'div8',
        activeRed: false,
        activeBlack: false,
        activeCPU: false,
        col2: false,
        row3: false,

    },{
        id: 9,
        CPUMove: function(){
            alert("I'm Sleeping right now")
        },
        tempID: 'div9',
        activeRed: false,
        activeBlack: false,
        activeCPU: false,
        col3: false,
        row3: false,
        diag1: false,
    }
];

function createBoard() {
    for (i = 0; i < gameBoardObj.length; i++){
        createGrid(i);
    }
}
    
function createGrid(num) {
    var newDivItem = document.createElement("div");
    newDivItem.setAttribute("id", gameBoardObj[num].id);
    newDivItem.setAttribute("class", gameBoardObj[num].tempID);
    gameDiv.appendChild(newDivItem);
    square[num].onclick = function() {
        if (gameBoardObj[num].activeBlack === true || gameBoardObj[num].activeRed === true) {
            alert("Pick another square")
        }else {
            moveConditionizer(num)
        }
    }
}
function moveConditionizer(num) {
    if(count % 2 === 1) {
        move(num, 'p1')
    }else if(count % 2 === 0) {
        move(num, 'p2')
    }
}    
   
function move(num, player) {
    var gb = gameBoardObj[num];
    if (gb.id === 1) {
        gb.col1 = true;
        gb.row1 = true;
        gb.diag1 = true;
        if (player === 'p1') {
            gb.activeRed = true;
            square[num].textContent = "X";
            count ++;
            totalRedCol1++;
            totalRedDiag1++;
            totalRedRow1++;
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].textContent = "O";
            count ++;
            totalBlkCol1++;
            totalBlkDiag1++;
            totalBlkRow1++;
            checkForMatch();
        }
    }if (gb.id === 2) {
        gb.col2 = true;
        gb.row1 = true;
        if (player === 'p1') {
            gb.activeRed = true;
            square[num].textContent = "X";
            count ++;
            totalRedCol2++;
            totalRedRow1++;
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].textContent = "O";
            count ++;
            totalBlkCol2++;
            totalBlkRow1++;
            checkForMatch();
        }
    }if (gb.id === 3) {
        gb.col3 = true;
        gb.row1 = true;
        gb.diag2 = true;
        if (player === 'p1') {
            gb.activeRed = true;
            square[num].textContent = "X"
            count ++;
            totalRedCol3++;
            totalRedDiag2++;
            totalRedRow1++;
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].textContent = "O"
            count ++;
            totalBlkCol3++;
            totalBlkDiag2++;
            totalBlkRow1++;
            checkForMatch();
        }
    }if (gb.id === 4) {
        gb.col1 = true;
        gb.row2 = true;
        if (player === 'p1') {
            gb.activeRed = true;
            square[num].textContent = "X";
            count ++;
            totalRedCol1++;
            totalRedRow2++;
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].textContent = "O";
            count ++;
            totalBlkCol1++;
            totalBlkRow2++;
            checkForMatch();
        }
    }if (gb.id === 5) {
        gb.col2 = true;
        gb.row2 = true;
        gb.diag1 = true;
        gb.diag2 = true;
        if (player === 'p1') {
            gb.activeRed = true;
            square[num].textContent = "X";
            count ++;
            totalRedCol2++;
            totalRedRow2++;
            totalRedDiag1++;
            totalRedDiag2++;
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].textContent = "O";
            count ++;
            totalBlkCol2++;
            totalBlkRow2++;
            totalBlkDiag1++;
            totalBlkDiag2++;
            checkForMatch();     
        }
    }if (gb.id === 6) {
        gb.col3 = true;
        gb.row2 = true;
        if (player === 'p1') {
            gb.activeRed = true;
            square[num].textContent = "X";
            count ++;
            totalRedCol3++;
            totalRedRow2++;
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].textContent = "O";
            count ++;
            totalBlkCol3++;
            totalBlkRow2++;
            checkForMatch();
        }
    }if (gb.id === 7) {
        gb.col1 = true;
        gb.row3 = true;
        gb.diag2 = true;
        if (player === 'p1') {
            gb.activeRed = true;
            square[num].textContent = "X";
            count ++;
            totalRedCol1++;
            totalRedRow3++;
            totalRedDiag2++;
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].textContent = "O";
            count ++;
            totalBlkCol1++;
            totalBlkRow3++;
            totalBlkDiag2++;
            checkForMatch();
        }
    }if (gb.id === 8) {
        gb.col2 = true;
        gb.row3 = true;
        if (player === 'p1') {
            gb.activeRed = true;
            square[num].textContent = "X";
            count ++;
            totalRedCol2++;
            totalRedRow3++;
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].textContent = "O";
            count ++;
            totalBlkCol2++;
            totalBlkRow3++;
            checkForMatch();
        }
    }if (gb.id === 9) {
        gb.col3 = true;
        gb.row3 = true;
        gb.diag1 = true;
        if (player === 'p1') {
            gb.activeRed = true;
            square[num].textContent = "X";
            count ++;
            totalRedCol3++;
            totalRedRow3++;
            totalRedDiag1++;
            checkForMatch();
        }else if (player === 'p2') {
            gb.activeBlack = true;
            square[num].textContent = "O";
            count ++;
            totalBlkCol3++;
            totalBlkRow3++;
            totalBlkDiag1++;
            checkForMatch();
        }
    };
}

function checkForMatch() {
    if((totalBlkCol1 === 3 || totalBlkCol2 === 3 || totalBlkCol3 === 3) || (totalBlkDiag1 === 3 || totalBlkDiag2 === 3) || (totalBlkRow1 === 3 || totalBlkRow2 === 3 || totalBlkRow3 === 3) ){
        alert("Black Wins");
    }else if((totalRedCol1 === 3 || totalRedCol2 === 3 || totalRedCol3 === 3) || (totalRedDiag1 === 3 || totalRedDiag2 === 3) || (totalRedRow1 === 3 || totalRedRow2 === 3 || totalRedRow3 === 3) ){
        alert("Red Wins");
    }else if (count === 9) {
        alert("It's a Tie")
    }
}

createBoard()
