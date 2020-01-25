let row0 = [
	{
		marked: false,
		type: ""
	},
	{
		marked: false,
		type: ""
	},
	{
		marked: false,
		type: ""
	}
];
let row1 = [
	{
		marked: false,
		type: ""
	},
	{
		marked: false,
		type: ""
	},
	{
		marked: false,
		type: ""
	}
];
let row2 = [
	{
		marked: false,
		type: ""
	},
	{
		marked: false,
		type: ""
	},
	{
		marked: false,
		type: ""
	}
];
var numberOfMoves = 0;
let gameBoard = [row0,row1,row2];
console.log(gameBoard);
console.log(gameBoard[0][1].type);


let checkBoxHandler = function(e){
	let idString = e.target.id;
	let stringSplit = idString.split("-")
	let currRow = parseInt(stringSplit[0].slice(3), 10);
	console.log(currRow);
	let currColumn = parseInt(stringSplit[1].slice(3), 10);
	console.log(currColumn);
	console.log(gameBoard[currRow][currColumn].type);



}











document.addEventListener("DOMContentLoaded", function(){
	document.querySelector(".row-space").addEventListener("click", checkBoxHandler)

})
