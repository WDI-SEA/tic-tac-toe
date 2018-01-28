console.log('Hello frontend');

var xedBox = {
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

var oedBox = {
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


var markBox = function(elementId, color) {
	var newColor = document.getElementById(elementId)
	newColor.style.background = color;
};


var checkBox = function() {
	
	if (!xedBox[this.id] && !oedBox[this.id]) {
 		markBox(this.id, "black");
	}
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

	

});




