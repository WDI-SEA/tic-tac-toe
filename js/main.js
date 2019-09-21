//Global Variables
var moves;
//DOM References
var wholeBoard = document.querySelector(".whole-board");
//Functions
    //Check for win 
    //moveCounter ++ then if % 2
    //



//Event Handlers 
    //The Clicks
wholeBoard.addEventListener('click', function(e) {
    console.log(e.target.id);
})
//Array of winning conditions 
var winCond = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8]
]
