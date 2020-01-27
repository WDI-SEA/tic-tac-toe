gameIcon1 'x'
gameIcon2 'o'
var gameState = {
    gameIcon1: "x",
    gameIcon2: "o",
    squares: [
    "","","","","","","","",""
    ]
  };

//winning arrays
const winCombo = [
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [0,4,8]
    [2,4,6]
];
