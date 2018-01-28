console.log('Hello frontend');

var blackBox = {
	boxtopleft: false,
	boxtopmiddle: false,
	boxtopright: false,
	boxmiddleleft: false,
	boxmiddlemiddle: false,
	boxmiddleright: false,
	boxbottomleft: false,
	boxbottommiddle: false,
	boxbottomright: false
};

var redBox = {
	boxtopleft: false,
	boxtopmiddle: false,
	boxtopright: false,
	boxmiddleleft: false,
	boxmiddlemiddle: false,
	boxmiddleright: false,
	boxbottomleft: false,
	boxbottommiddle: false,
	boxbottomright: false
};

var player = 0;
var boxPosition;

var markBox = function(elementId, boxClickedRedOrBlack) {
	var newColor = document.getElementById(elementId)
	//newColor.style.background = color;
	newColor.classList.add(boxClickedRedOrBlack);
	newColor.classList.remove("box");
};

var playerChange = function() {
	player = player + 1;
};

var playerGo = function() {
	var newPlayer = document.getElementsByTagName("p")[0];
	if (player % 2){
		newPlayer.textContent = "first player go";
	} else {
		newPlayer.textContent = "second player go";
	}
};

var checkBox = function() {
	boxPosition = this.id;
	console.log(boxPosition)
	
	if (!blackBox[boxPosition] && !redBox[boxPosition]) {
 		playerGo();
 		if (player % 2) {
 			markBox(boxPosition, "boxClickedRed");
			blackBox[boxPosition] = true;
			playerChange();
 		} else {
 			markBox(boxPosition, "boxClickedBlack");
			redBox[boxPosition] = true;
			playerChange();
 		}
		
	}
};

var reset = function() {

};



document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("boxtopleft").addEventListener('click', checkBox);
	document.getElementById("boxtopmiddle").addEventListener('click', checkBox);
	document.getElementById("boxtopright").addEventListener('click', checkBox);
	document.getElementById("boxmiddleleft").addEventListener('click', checkBox);
	document.getElementById("boxmiddlemiddle").addEventListener('click', checkBox);
	document.getElementById("boxmiddleright").addEventListener('click', checkBox);
	document.getElementById("boxbottomleft").addEventListener('click', checkBox);
	document.getElementById("boxbottommiddle").addEventListener('click', checkBox);
	document.getElementById("boxbottomright").addEventListener('click', checkBox);

	document.getElementsByTagName("button")[0].addEventListener('click', reset);

});




