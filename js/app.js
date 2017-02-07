document.addEventListener('DOMContentLoaded', function() {

	//Variabes
	var imgArr = document.getElementsByTagName("img"); 
	var resetButton = document.getElementById("reset");
	var xTurn = true; 
	var imgId = document.querySelectorAll("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9");

	//Image object
	var imagesSource = 
	{
		EMPTY: "./img/empty.png",
		X: "./img/x.png",
		O: "./img/o.png"
	};

	// var xWins =
	// {
	// 	ROW1: imgId[0].src=imagesSource.X 
		// ROW2: document.querySelectorAll("#img4, #img5, #img6").src=imagesSource.X,
		// ROW3: document.querySelectorAll("#img7, #img8, #img9").src=imagesSource.X,
	// 	COL1:
	// 	COL2:
	// 	COL3:
	// 	DIAG1:
	// 	DIAG2:

	// };

	// var oWins =
	// {
	// 	ROW1: document.getElementsByClassName("row1").src=imagesSource.O,
	// 	ROW2: document.getElementsByClassName("row2").src=imagesSource.O,
	// 	ROW3: document.getElementsByClassName("row2").src=imagesSource.O
	// // 	COL1:
	// // 	COL2:
	// // 	COL3:
	// // 	DIAG1:
	// // 	DIAG2:

	// };

	//Add a click event listener to each square 
	addEventListener(); 


	function addEventListener(){
		for (var i = 0; i < imgArr.length; i++) {
			imgArr[i].addEventListener("click", theGame);
 		}
 	};
 
 	function removeEventListener(){
 		for (var i = 0; i < imgArr.length; i++) {
 			imgArr[i].removeEventListener("click", theGame);
 		}
 	};

 	function theGame(){
 		if ((this.src = (imagesSource.EMPTY))) {
 			if (xTurn) {
 				this.src = imagesSource.X; 
 				this.removeEventListener("click", theGame);
 				//winCondition();
 			} else {
 				this.src = imagesSource.O; 
 				this.removeEventListener("click", theGame);
 				//winCondition();
 			}
 			xTurn = !xTurn; 

 		}
 	};	

//Win Condition. I have not been able to get it functioning
	// function winCondition(){
	// 	if ((imgArr[0].src = (imagesSource.X))) {
	// 		document.getElementById("board").style.background="blue";
	// 	}

	// };	
  
 	//Add a click event listener for my reset button
	resetButton.addEventListener("click", resetGame);

	//Reset button 
	function resetGame() {
		xTurn = true; 
		addEventListener(); 
		document.getElementById("board").style.background="white";
		for (var i = 0; imgArr.length; i++) {
			imgArr[i].src = imagesSource.EMPTY; 
		}
	};

});

