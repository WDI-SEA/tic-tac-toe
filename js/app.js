document.addEventListener('DOMContentLoaded', function() {

	//Variabes
	var imgArr = document.getElementsByTagName("img"); 
	var imgSrc = document.querySelector("img").getAttribute("src");
	var imgId = document.getElementById(" ");
	var resetButton = document.getElementById("reset");
	var xTurn = true; 


	//Image object
	var imagesSource = 
	{
		EMPTY: "./img/empty.png",
		X: "./img/x.png",
		O: "./img/o.png"
	};

	var xMoves = []; 
	var oMoves = []; 
	var xMovesStr = xMoves.toString();

	var winMoves = [
	[1,2,3],
 	[4,5,6],
 	[7,8,9],
 	[1,4,6],
 	[2,5,8],
 	[3,6,9],
 	[1,5,9],
 	[3,5,7]

 	];

	//Add a click event listener to each square 
	clickOnSquare(); 


	function clickOnSquare(){
		for (var i = 0; i < imgArr.length; i++) {
			imgArr[i].addEventListener("click", theGame);
 		}
 	};
 
 	function onlyClickSquareOnce(){
 		for (var i = 0; i < imgArr.length; i++) {
 			imgArr[i].removeEventListener("click", theGame);
 		}
 	};

 	function theGame(){
 		if ((this.src = (imagesSource.EMPTY))) {
 			if (xTurn) {
 				this.src = imagesSource.X; 
 				this.removeEventListener("click", theGame);
 				
 			} else {
 				this.src = imagesSource.O; 
 				this.removeEventListener("click", theGame);
 				
 			}
 			xTurn = !xTurn; 
 			gameWin()
 			
 		}
 	};	

	function gameWin(){
	for(var i = 0; i < winMoves.length; i++) {
		for (var j = 0; j < winMoves[i].length; j++) {
		if (imgId.winMoves[i][j].src = imagesSource.X) {
			console.log("hey");
		}
	}
}

}
  
 	//Add a click event listener for the reset button
	resetButton.addEventListener("click", resetGame);

	//Reset button 
	function resetGame() {
		xTurn = true; 
		clickOnSquare(); 
		document.getElementById("board").style.background="white";
		for (var i = 0; imgArr.length; i++) {
			imgArr[i].src = imagesSource.EMPTY; 
			}
		};

	});

