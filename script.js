var moves = 0;
var move = "";
var box = document.querySelectorAll(".box");

for(var i = 0; i < box.length; i++){

    box[i].addEventListener("click", function(e) {

        if ( moves % 2 == 0 || moves == 0) {
			move = "x";
		} else {
			move = "o";
		}

		if ( e.target.innerHTML == "" ) {
			moves++;
			e.target.innerHTML = move;
		}
		
		document.getElementById("reset").addEventListener("click", function(){
			moves = 0;
			move = "";
			e.target.innerHTML = "";
		});

    });
}
