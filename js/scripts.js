

var state = {
	"one": false,
	"two": false,
	"three": false,
	"four": false,
	"five": false,
	"six": false,
	"seven": false,
	"eight": false,
	"nine": false,
};
document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("one").addEventListener("click", buttonListener1);
	document.getElementById("two").addEventListener("click", buttonListener1);
	document.getElementById("three").addEventListener("click", buttonListener1);
	document.getElementById("four").addEventListener("click", buttonListener1);
	document.getElementById("five").addEventListener("click", buttonListener1);
	document.getElementById("six").addEventListener("click", buttonListener1);
	document.getElementById("seven").addEventListener("click", buttonListener1);
	document.getElementById("eight").addEventListener("click", buttonListener1);
	document.getElementById("nine").addEventListener("click", buttonListener1);
	document.getElementById("clearB").addEventListener("click", clrListener);
});

var clrListener = function() {
	event.preventDefault();
	for (num in state)
	{
		state[num] = false;
		document.getElementById(num).className = "sq";
		document.getElementById(num).addEventListener("click", buttonListener1);
		document.getElementById(num).innerHTML = "?";
	}
}

var buttonListener1 = function (e) {
	event.preventDefault();
	console.log("worked");
	console.log(e);
	console.log(e.target.id);
	if (e.target.innerHTML ==="X")
	{
		e.target.innerHTML = "O";
		e.target.className = "sqg";
	}
	else {
		e.target.innerHTML = "X";
		e.target.className = "sqb";
	}
	console.log("ID " + e.target.id);
	//console.log("State " +state(e.target.id));
	console.log(state["one"])
	state[e.target.id] = true;
	for(num in state)
	{
		if (state[num]===true && num != e.target.id)
		{
			document.getElementById(num).removeEventListener("click", buttonListener1);
		}
	}
	

	

}

// var buttonListener = function () {
// 	event.preventDefault();
// 	num = "one"
// 	console.log("worked");
// 	var block = document.getElementById(num);
// 	var state = block.innerHTML;
// 	console.log(state);
// 	if(block.innerHTML ==="X")
// 	{
// 		block.innerHTML = "O";
// 	}
// 	else
// 	{
// 		block.innerHTML = "X"
// 	}

// }