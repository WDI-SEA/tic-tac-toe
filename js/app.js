$(function () {

	var player = "O";
	var checkBoard;
	var a1;
	var a2;
	var a3;
	var b1;
	var b2;
	var b3;
	var c1;
	var c2;
	var c3;
	var checkWin;
    var turn = 0;
// Take turn... Call function on click

// Checks if tile is empty, puts value, and changes turn.
function gameStart() {
 
	$("td").click(function() {
		// if it's empty, put in current players value
		if ($(this).html() !== "") {
			// REMOVE THIS
			return;
		}
        $(this).css("background-image", "url(img/" + player + "_button.png");
        $(this).html("<h1>" + player + "</h1>")
        checkBoard();
        checkWin("O");
        checkWin("X");
        turn++
        console.log(turn);
        if(turn == 9) {
            $(".head > h1").html("It's a tie!");
        }
        player = player === "X" ? "O" : "X";
    });
};

    // Reset board
    $("#reset").click(function() {
    	$("td").css("background", "");
        $("td").text("");
    	player = "O";
    	$(".head > h1").text("Tic-Tac-Toe");
        turn = 0;
    	gameStart();
    });
    // check board values
    checkBoard = function() {
    	 a1 = $("#a1").text();
		 a2 = $("#a2").text();
    	 a3 = $("#a3").text();
    	 b1 = $("#b1").text();
    	 b2 = $("#b2").text();
    	 b3 = $("#b3").text();
    	 c1 = $("#c1").text();
    	 c2 = $("#c2").text();
    	 c3 = $("#c3").text();
  }

    // Check Win
    function checkWin(val) {
    	if  ((a1 == a2 && a1 == a3 && (a1 == val)) ||
    		(a1 == b2 && a1 == c3 && (a1 == val)) ||
    		(a1 == b1 && a1 == c1 && (a1 == val)) ||
    		(a2 == b2 && a2 == c2 && (a2 == val)) ||
    		(a3 == b3 && a3 == c3 && (a3 == val)) ||
    		(a3 == b2 && a3 == c1 && (a3 == val)) ||
    		(b1 == b2 && b1 == b3 && (b1 == val)) ||
    		(c1 == c2 && c1 == c3 && (c1 == val))) {
    		$(".head > h1").html("<img src='img/" + val + "_button.png'> WON!!!")
    		$("td").unbind("click");
    	}
    };

    gameStart();
});