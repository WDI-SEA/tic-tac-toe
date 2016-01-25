var player = 1;
function clickBt(bt){
	if(player == 1){
		document.getElementById(bt).value = "x";
		document.getElementById(bt).disabled = "null";
		player -= 1;
		winner();
	}else {
		document.getElementById(bt).value = "o";
		document.getElementById(bt).disabled = "null";
		player += 1;
		winner();
	}
}
function winner(){
	if(
		document.getElementById("bt1").value == "x" &&
		document.getElementById("bt2").value == "x" &&
		document.getElementById("bt3").value == "x" ||
		document.getElementById("bt4").value == "x" &&
		document.getElementById("bt5").value == "x" &&
		document.getElementById("bt6").value == "x" ||
		document.getElementById("bt7").value == "x" &&
		document.getElementById("bt8").value == "x" &&
		document.getElementById("bt9").value == "x" ||
		document.getElementById("bt1").value == "x" &&
		document.getElementById("bt4").value == "x" &&
		document.getElementById("bt7").value == "x" ||
		document.getElementById("bt2").value == "x" &&
		document.getElementById("bt5").value == "x" &&
		document.getElementById("bt8").value == "x" ||
		document.getElementById("bt3").value == "x" &&
		document.getElementById("bt6").value == "x" &&
		document.getElementById("bt9").value == "x" ||
		document.getElementById("bt1").value == "x" &&
		document.getElementById("bt5").value == "x" &&
		document.getElementById("bt9").value == "x" ||
		document.getElementById("bt3").value == "x" &&
		document.getElementById("bt5").value == "x" &&
		document.getElementById("bt7").value == "x"
){
		alert("X Player Wins");
		reset();

	}else if(
		document.getElementById("bt1").value == "o" &&
		document.getElementById("bt2").value == "o" &&
		document.getElementById("bt3").value == "o" ||
		document.getElementById("bt4").value == "o" &&
		document.getElementById("bt5").value == "o" &&
		document.getElementById("bt6").value == "o" ||
		document.getElementById("bt7").value == "o" &&
		document.getElementById("bt8").value == "o" &&
		document.getElementById("bt9").value == "o" ||
		document.getElementById("bt1").value == "o" &&
		document.getElementById("bt4").value == "o" &&
		document.getElementById("bt7").value == "o" ||
		document.getElementById("bt2").value == "o" &&
		document.getElementById("bt5").value == "o" &&
		document.getElementById("bt8").value == "o" ||
		document.getElementById("bt3").value == "o" &&
		document.getElementById("bt6").value == "o" &&
		document.getElementById("bt9").value == "o" ||
		document.getElementById("bt1").value == "o" &&
		document.getElementById("bt5").value == "o" &&
		document.getElementById("bt9").value == "o" ||
		document.getElementById("bt3").value == "o" &&
		document.getElementById("bt5").value == "o" &&
		document.getElementById("bt7").value == "o"
){
		alert("O Player Wins!");
		reset();
	}
}

function reset(){
		document.getElementById("bt1").value = "";
		document.getElementById("bt2").value = "";
		document.getElementById("bt3").value = "";
		document.getElementById("bt4").value = "";
		document.getElementById("bt5").value = "";
		document.getElementById("bt6").value = "";
		document.getElementById("bt7").value = "";
		document.getElementById("bt8").value = "";
		document.getElementById("bt9").value = "";
		document.getElementById("bt1").disabled = "";
		document.getElementById("bt2").disabled = "";
		document.getElementById("bt3").disabled = "";
		document.getElementById("bt4").disabled = "";
		document.getElementById("bt5").disabled = "";
		document.getElementById("bt6").disabled = "";
		document.getElementById("bt7").disabled = "";
		document.getElementById("bt8").disabled = "";
		document.getElementById("bt9").disabled = "";
}

function rainbow(numOfSteps, step) {
    // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
    // Adam Cole, 2011-Sept-14
    // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
    var r, g, b;
    var h = step / numOfSteps;
    var i = ~~(h * 6);
    var f = h * 6 - i;
    var q = 1 - f;
    switch(i % 6){
        case 0: r = 1; g = f; b = 0; break;
        case 1: r = q; g = 1; b = 0; break;
        case 2: r = 0; g = 1; b = f; break;
        case 3: r = 0; g = q; b = 1; break;
        case 4: r = f; g = 0; b = 1; break;
        case 5: r = 1; g = 0; b = q; break;
    }
    var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
    return (c);
}

document.querySelectorAll("#board").style.color="random";


// ---------------------------------------------------
// //VARIABLES

// var p1 = "x";
// var p2 = "o";

// var turn = 0;

// var space = document.querySelectorAll(".td")
// for (i = 0; i < space.length; i++) {
// 	i[0].space.addEventListener("click", function(){
// 		console.log(click);
// 	});
// }
// var boardArray = [[a,b,c], [d,e,f], [g,h,i]];
// // var a = 
// var winArray = [[a,b,c], [d,e,f], [g,h,i], [a,d,g], [b,e,h], [c,f,i], [a,e,i], [c,e,g]];
// var boardStatus = document.querySelector(".board");

// var xWin = false;
// var oWin = false;
// var ifWin;

// var winDeclare;
// // var resetB = document.getElementsByClass("reset").addEventListener("click", function(){

// // });
// var restartGame;
// //MULTIPLAYER




// //SINGLEPLAYER



// //RESET

