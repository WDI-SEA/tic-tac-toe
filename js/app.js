//this program defines a tic tac toe game

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
		
		document.getElementById("apple").textContent = "Player 1 Apple: Wait...";
		document.getElementById("orange").textContent = "Player 2 Orange: Go";

			this.removeEventListener("click", changeImage);   //remove ability to change image after click

		var appleWins = function() {
			(window.alert("Apple WINS!"))
		};	



		if (numOfPlays <= 5) {
							//first apple win function block
					var winCombo1Str = winCombo1.toString();
					var winCombo1Split = winCombo1Str.split(",");
						console.log("winCombo1Split= " + winCombo1Split)
					var applePlayerStr = applePlayer.toString();
					var applePlayerSplit = applePlayerStr.split(",");
						console.log("applePlayerSplit= " + applePlayerSplit)

					var matchApple1 = [];

					var success1 = function() {

						for (var i = 0; i < applePlayerSplit.length; i++) {
							if (winCombo1Split.indexOf(applePlayerSplit[i]) > -1) {
								matchApple1.push(applePlayerSplit[i]);
							}
						}
						return matchApple1;
					}
					success1();

					var matchApple1Sort = matchApple1.sort();
						console.log("matchApple1Sort= " + matchApple1Sort);

							//second apple win function block

					var winCombo2Str = winCombo2.toString();
					var winCombo2Split = winCombo2Str.split(",");
						console.log("winCombo2Split= " + winCombo2Split)

					var matchApple2 = [];

					var success2 = function() {

						for (var i = 0; i < applePlayerSplit.length; i++) {
							if (winCombo2Split.indexOf(applePlayerSplit[i]) > -1) {
								matchApple2.push(applePlayerSplit[i]);
							}
						}
						return matchApple2;
					}
					success2();

					var matchApple2Sort = matchApple2.sort();
						console.log("matchApple2Sort= " + matchApple2Sort)

							//third apple win function block

					var winCombo3Str = winCombo3.toString();
					var winCombo3Split = winCombo3Str.split(",");

					var matchApple3 = [];

					var success3 = function() {

						for (var i = 0; i < applePlayerSplit.length; i++) {
							if (winCombo3Split.indexOf(applePlayerSplit[i]) > -1) {
								matchApple3.push(applePlayerSplit[i]);
							}
						}
						return matchApple3;
					}
					success3();

					var matchApple3Sort = matchApple3.sort();

							//fourth apple win function block

					var winCombo4Str = winCombo4.toString();
					var winCombo4Split = winCombo4Str.split(",");

					var matchApple4 = [];

					var success4 = function() {

						for (var i = 0; i < applePlayerSplit.length; i++) {
							if (winCombo4Split.indexOf(applePlayerSplit[i]) > -1) {
								matchApple4.push(applePlayerSplit[i]);
							}
						}
						return matchApple4;
					}
					success4();

					var matchApple4Sort = matchApple4.sort();

							//fifth apple win function block

					var winCombo5Str = winCombo5.toString();
					var winCombo5Split = winCombo5Str.split(",");

					var matchApple5 = [];

					var success5 = function() {

						for (var i = 0; i < applePlayerSplit.length; i++) {
							if (winCombo5Split.indexOf(applePlayerSplit[i]) > -1) {
								matchApple5.push(applePlayerSplit[i]);
							}
						}
						return matchApple5;
					}
					success5();

					var matchApple5Sort = matchApple5.sort();

							 //sixth apple win function block

					var winCombo6Str = winCombo6.toString();
					var winCombo6Split = winCombo6Str.split(",");

					var matchApple6 = [];

					var success6 = function() {

						for (var i = 0; i < applePlayerSplit.length; i++) {
							if (winCombo6Split.indexOf(applePlayerSplit[i]) > -1) {
								matchApple6.push(applePlayerSplit[i]);
							}
						}
						return matchApple6;
					}
					success6();

					var matchApple6Sort = matchApple6.sort();

							//seventh apple win function block

					var winCombo7Str = winCombo7.toString();
					var winCombo7Split = winCombo7Str.split(",");

					var matchApple7 = [];

					var success7 = function() {

						for (var i = 0; i < applePlayerSplit.length; i++) {
							if (winCombo7Split.indexOf(applePlayerSplit[i]) > -1) {
								matchApple7.push(applePlayerSplit[i]);
							}
						}
						return matchApple7;
					}
					success7();

					var matchApple7Sort = matchApple7.sort();

								//eighth apple win function block

					var winCombo8Str = winCombo8.toString();
					var winCombo8Split = winCombo8Str.split(",");

					var matchApple8 = [];

					var success8 = function() {

						for (var i = 0; i < applePlayerSplit.length; i++) {
							if (winCombo8Split.indexOf(applePlayerSplit[i]) > -1) {
								matchApple8.push(applePlayerSplit[i]);
							}
						}
						return matchApple8;
					}
					success8();

					var matchApple8Sort = matchApple8.sort();

			if (matchApple1Sort.toString() == winCombo1Split.toString() || 
				matchApple2Sort.toString() == winCombo2Split.toString() || 
				matchApple3Sort.toString() == winCombo3Split.toString() || 
				matchApple4Sort.toString() == winCombo4Split.toString() || 
				matchApple5Sort.toString() == winCombo5Split.toString() || 
				matchApple6Sort.toString() == winCombo6Split.toString() || 
				matchApple7Sort.toString() == winCombo7Split.toString() || 
				matchApple8Sort.toString() == winCombo8Split.toString())	{
		             document.getElementById("apple").textContent = "Player 1 Apple: WINS!";
					 document.getElementById("orange").textContent = "Player 2 Orange: So sad.";
				 	 window.setTimeout(appleWins, 100);	

					pic1.removeEventListener("click", changeImage);  //disable image click after win
					pic2.removeEventListener("click", changeImage); 
					pic3.removeEventListener("click", changeImage); 
					pic4.removeEventListener("click", changeImage);
					pic5.removeEventListener("click", changeImage); 
					pic6.removeEventListener("click", changeImage); 
					pic7.removeEventListener("click", changeImage); 
					pic8.removeEventListener("click", changeImage); 
					pic9.removeEventListener("click", changeImage); 

				} else {
							var tie = function() {
							    (window.alert("Tie game! Press reset button to start over."));
							};

							if (applePlayer.length > 4) {
								window.setTimeout(tie, 100);
							}
				}
			};

	
	} else {
		this.setAttribute("src", "img/orange.png");
		orangePlayer.push(this.id);
			console.log("orangePlayer= " + orangePlayer);
		numOfPlays--;
			console.log("numOfPlays= " + numOfPlays);

		document.getElementById("apple").textContent = "Player 1 Apple: Go";
		document.getElementById("orange").textContent = "Player 2 Orange: Wait...";

			this.removeEventListener("click", changeImage);   //remove ability to change image after click

		var orangeWins = function() {
			(window.alert("Orange WINS!"));
		};

		if (numOfPlays <= 5) {

							//first orange win function block
					var winCombo1Str = winCombo1.toString();
					var winCombo1Split = winCombo1Str.split(",");
						console.log("winCombo1Split= " + winCombo1Split)
					var orangePlayerStr = orangePlayer.toString();
					var orangePlayerSplit = orangePlayerStr.split(",");
						console.log("orangePlayerSplit= " + orangePlayerSplit)

					var matchOrange9 = [];

					var success9 = function() {

						for (var i = 0; i < orangePlayerSplit.length; i++) {
							if (winCombo1Split.indexOf(orangePlayerSplit[i]) > -1) {
								matchOrange9.push(orangePlayerSplit[i]);
							}
						}
						return matchOrange9;
					}
					success9();

					var matchOrange9Sort = matchOrange9.sort();
						console.log("matchOrange9Sort= " + matchOrange9Sort);


							//second orange win function block
					var winCombo2Str = winCombo2.toString();
					var winCombo2Split = winCombo2Str.split(",");
						console.log("winCombo2Split= " + winCombo2Split)

					var matchOrange10 = [];

					var success10 = function() {

						for (var i = 0; i < orangePlayerSplit.length; i++) {
							if (winCombo2Split.indexOf(orangePlayerSplit[i]) > -1) {
								matchOrange10.push(orangePlayerSplit[i]);
							}
						}
						return matchOrange10;
					}
					success10();

					var matchOrange10Sort = matchOrange10.sort();

							//third orange win function block
					var winCombo3Str = winCombo3.toString();
					var winCombo3Split = winCombo3Str.split(",");

					var matchOrange11 = [];

					var success11 = function() {

						for (var i = 0; i < orangePlayerSplit.length; i++) {
							if (winCombo3Split.indexOf(orangePlayerSplit[i]) > -1) {
								matchOrange11.push(orangePlayerSplit[i]);
							}
						}
						return matchOrange11;
					}
					success11();

					var matchOrange11Sort = matchOrange11.sort();

							//fourth orange win function block
					var winCombo4Str = winCombo4.toString();
					var winCombo4Split = winCombo4Str.split(",");

					var matchOrange12 = [];

					var success12 = function() {

						for (var i = 0; i < orangePlayerSplit.length; i++) {
							if (winCombo4Split.indexOf(orangePlayerSplit[i]) > -1) {
								matchOrange12.push(orangePlayerSplit[i]);
							}
						}
						return matchOrange12;
					}
					success12();

					var matchOrange12Sort = matchOrange12.sort();

							//fifth orange win function block
					var winCombo5Str = winCombo5.toString();
					var winCombo5Split = winCombo5Str.split(",");

					var matchOrange13 = [];

					var success13 = function() {

						for (var i = 0; i < orangePlayerSplit.length; i++) {
							if (winCombo5Split.indexOf(orangePlayerSplit[i]) > -1) {
								matchOrange13.push(orangePlayerSplit[i]);
							}
						}
						return matchOrange13;
					}
					success13();

					var matchOrange13Sort = matchOrange13.sort();

							//sixth orange win function block
					var winCombo6Str = winCombo6.toString();
					var winCombo6Split = winCombo6Str.split(",");

					var matchOrange14 = [];

					var success14 = function() {

						for (var i = 0; i < orangePlayerSplit.length; i++) {
							if (winCombo6Split.indexOf(orangePlayerSplit[i]) > -1) {
								matchOrange14.push(orangePlayerSplit[i]);
							}
						}
						return matchOrange14;
					}
					success14();

					var matchOrange14Sort = matchOrange14.sort();

							//seventh orange win function block
					var winCombo7Str = winCombo7.toString();
					var winCombo7Split = winCombo7Str.split(",");

					var matchOrange15 = [];

					var success15 = function() {

						for (var i = 0; i < orangePlayerSplit.length; i++) {
							if (winCombo7Split.indexOf(orangePlayerSplit[i]) > -1) {
								matchOrange15.push(orangePlayerSplit[i]);
							}
						}
						return matchOrange15;
					}
					success15();

					var matchOrange15Sort = matchOrange15.sort();

								//eighth orange win function block
					var winCombo8Str = winCombo8.toString();
					var winCombo8Split = winCombo8Str.split(",");

					var matchOrange16 = [];

					var success16 = function() {

						for (var i = 0; i < orangePlayerSplit.length; i++) {
							if (winCombo8Split.indexOf(orangePlayerSplit[i]) > -1) {
								matchOrange16.push(orangePlayerSplit[i]);
							}
						}
						return matchOrange16;
					}
					success16();

					var matchOrange16Sort = matchOrange16.sort();


			if (matchOrange9Sort.toString() == winCombo1Split.toString() || 
				matchOrange10Sort.toString() == winCombo2Split.toString() || 
				matchOrange11Sort.toString() == winCombo3Split.toString() || 
				matchOrange12Sort.toString() == winCombo4Split.toString() || 
				matchOrange13Sort.toString() == winCombo5Split.toString() || 
				matchOrange14Sort.toString() == winCombo6Split.toString() || 
				matchOrange15Sort.toString() == winCombo7Split.toString() || 
				matchOrange16Sort.toString() == winCombo8Split.toString())	{
		             document.getElementById("apple").textContent = "Player 1 Apple: So sad.";
					 document.getElementById("orange").textContent = "Player 2 Orange: WINS!";
				 	 window.setTimeout(orangeWins, 100);	

					pic1.removeEventListener("click", changeImage);  //disable image click after win
					pic2.removeEventListener("click", changeImage); 
					pic3.removeEventListener("click", changeImage); 
					pic4.removeEventListener("click", changeImage);
					pic5.removeEventListener("click", changeImage); 
					pic6.removeEventListener("click", changeImage); 
					pic7.removeEventListener("click", changeImage); 
					pic8.removeEventListener("click", changeImage); 
					pic9.removeEventListener("click", changeImage); 
				 } 
		};
    };
};


pic1.addEventListener("click", changeImage); //change img1 to apple on 1st click
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

    applePlayer.length = 0;
	orangePlayer.length = 0;

		pic1.addEventListener("click", changeImage); //change img1 to apple on click
		pic2.addEventListener("click", changeImage); 
		pic3.addEventListener("click", changeImage); 
		pic4.addEventListener("click", changeImage);
		pic5.addEventListener("click", changeImage); 
		pic6.addEventListener("click", changeImage); 
		pic7.addEventListener("click", changeImage); 
		pic8.addEventListener("click", changeImage); 
		pic9.addEventListener("click", changeImage); 

		document.getElementById("apple").textContent = "Player 1 Apple: Go";
		document.getElementById("orange").textContent = "Player 2 Orange: Wait...";

	// location.reload();
	};
};

var button = document.getElementById("button"); //get reset button
button.addEventListener("click", resetImages);  //change images to tree when button clicked






