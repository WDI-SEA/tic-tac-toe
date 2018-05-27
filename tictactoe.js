//this program defines a tic tac toe game that currently must be won with only three clicks
//hope to improve the logic to account for >4 clicks


var pic1 = document.getElementById("img1");
var pic2 = document.getElementById("img2"); 
var pic3 = document.getElementById("img3"); 
var pic4 = document.getElementById("img4"); 
var pic5 = document.getElementById("img5"); 
var pic6 = document.getElementById("img6"); 
var pic7 = document.getElementById("img7"); 
var pic8 = document.getElementById("img8"); 
var pic9 = document.getElementById("img9"); 

var applePlayer = [];
var orangePlayer = [];
var numOfPlays = 9;
var winCombo1 = "img1,img2,img3";
var winCombo2 = "img4,img5,img6";
var winCombo3 = "img7,img8,img9";
var winCombo4 = "img1,img4,img7";
var winCombo5 = "img2,img5,img8";
var winCombo6 = "img3,img6,img9";
var winCombo7 = "img1,img5,img9";
var winCombo8 = "img3,img5,img7";



function changeImage() {

	if (numOfPlays % 2 != 0) {
		this.setAttribute("src", "img/apple.png");
		applePlayer.push(this.id);
			console.log("applePlayer= " + applePlayer);
		numOfPlays--;
			console.log("numOfPlays= " + numOfPlays);
		
		document.getElementById("apple").textContent = "Apple: Wait...";
		document.getElementById("orange").textContent = "Orange: Go";

			this.removeEventListener("click", changeImage);   //remove ability to change image after click

		var appleWins = function() {
			(window.alert("Apple WINS!"))
		};	



		if (numOfPlays <= 5) {
			var applePlayerSort = applePlayer.sort();				//sort player array
				console.log("applePlayerSort= " + applePlayerSort);
			};
			

			if (applePlayerSort == winCombo1 || 
				applePlayerSort == winCombo2 || 
				applePlayerSort == winCombo3 || 
				applePlayerSort == winCombo4 || 
				applePlayerSort == winCombo5 || 
				applePlayerSort == winCombo6 || 
				applePlayerSort == winCombo7 || 
				applePlayerSort == winCombo8)	{
		             document.getElementById("apple").textContent = "Apple: WIN!";
					 document.getElementById("orange").textContent = "Orange: So sad.";
				 	 window.setTimeout(appleWins, 200);	

					pic1.removeEventListener("click", changeImage);  //disable image click after win
					pic2.removeEventListener("click", changeImage); 
					pic3.removeEventListener("click", changeImage); 
					pic4.removeEventListener("click", changeImage);
					pic5.removeEventListener("click", changeImage); 
					pic6.removeEventListener("click", changeImage); 
					pic7.removeEventListener("click", changeImage); 
					pic8.removeEventListener("click", changeImage); 
					pic9.removeEventListener("click", changeImage); 

				 };	 
			

	} else {
		this.setAttribute("src", "img/orange.png");
		orangePlayer.push(this.id);
			console.log("orangePlayer= " + orangePlayer);
		numOfPlays--;
			console.log("numOfPlays= " + numOfPlays);

		document.getElementById("apple").textContent = "Apple: Go";
		document.getElementById("orange").textContent = "Orange: Wait...";

			this.removeEventListener("click", changeImage);   //remove ability to change image after click

		var orangeWins = function() {
			(window.alert("Orange WINS!"));
		};

		if (numOfPlays <= 5) {

			var orangePlayerSort = orangePlayer.sort();				//sort player array
				console.log("orangePlayerSort= " + orangePlayerSort);
			

			if (orangePlayerSort == winCombo1 ||
				orangePlayerSort == winCombo2 ||
				orangePlayerSort == winCombo3 ||
				orangePlayerSort == winCombo4 ||
				orangePlayerSort == winCombo5 ||
				orangePlayerSort == winCombo6 ||
				orangePlayerSort == winCombo7 ||
				orangePlayerSort == winCombo8)	 {
		             document.getElementById("apple").textContent = "Apple: So sad.";
					 document.getElementById("orange").textContent = "Orange: WIN!";
				 	 window.setTimeout(orangeWins, 200);	

					pic1.removeEventListener("click", changeImage);  //disable image click after win
					pic2.removeEventListener("click", changeImage); 
					pic3.removeEventListener("click", changeImage); 
					pic4.removeEventListener("click", changeImage);
					pic5.removeEventListener("click", changeImage); 
					pic6.removeEventListener("click", changeImage); 
					pic7.removeEventListener("click", changeImage); 
					pic8.removeEventListener("click", changeImage); 
					pic9.removeEventListener("click", changeImage); 

				 };	 
		};

	
    };


};

pic1.addEventListener("click", changeImage); //change img1 to apple on click
pic2.addEventListener("click", changeImage); 
pic3.addEventListener("click", changeImage); 
pic4.addEventListener("click", changeImage);
pic5.addEventListener("click", changeImage); 
pic6.addEventListener("click", changeImage); 
pic7.addEventListener("click", changeImage); 
pic8.addEventListener("click", changeImage); 
pic9.addEventListener("click", changeImage); 


var imageList = document.getElementsByTagName("img"); //get list of all images


resetImages = function() {                            //function to reset clicked images to tree image
	for (var i = 0; i < imageList.length; i++) {
    imageList[i].setAttribute("src", "img/tree.png");
    numOfPlays = 9;
    	console.log("final numOfPlays= " + numOfPlays);
    var applePlayer = [];
	var orangePlayer = [];
	location.reload();
	};
};

var button = document.getElementById("button"); //get reset button
button.addEventListener("click", resetImages);  //change images to tree when button clicked






