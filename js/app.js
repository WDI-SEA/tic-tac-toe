//Define variables local variables

let gameDiv = document.getElementById("game-board");
const square = document.getElementsByTagName("div");
let xImg = 'img/x.png';
let oImg = 'img/o.png';
var count = 0;
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
    redMove(num);
}
    
function redMove(num) {
    square[num].onclick = function () {
        square[num].textContent = "X";
        gameBoardObj[num].col = true;
        gameBoardObj[num].row = true;
        checkForMatch(num);
    }
}

function checkForMatch(num) {
    gameBoardObj.forEach(prop => {
        if(prop.col1 === true && activeRed === true ){
            totalRedCol1++
        }if(prop.col2 === true && activeRed === true ) {
            totalRedCol2++
        }if(prop.col3 === true && activeRed === true ){
            totalRedCol3++
        }if(prop.row1 === true && activeRed === true ){
            totalRedRow1++
        }if(prop.row2 === true && activeRed === true ) {
            totalRedRow2++
        }if(prop.row2 === true && activeRed === true ) {
            totalRedRow3++
        }if(prop.diag1 === true && activeRed === true ) {
            totalRedDiag1++
        }if(prop.diag3 === true && activeRed === true ) {
            totalRedDiag2++
        }
    });
    // // if (totalCol >= 3 && activeRed) {
    // //     alert('Game Over')
    // // }else if(totalRow >= 3) {
    // //     alert('Game Over')
    // // }else if(totalDiag >= 3) {
    // //     alert('Game Over')
    // // }else {
    // //     gameBoardObj[num].CPUMove();
    // //     totalRow = 0;
    // //     totalCol = 0;
    // //     totalDiag = 0;
    // }
}

createBoard()
