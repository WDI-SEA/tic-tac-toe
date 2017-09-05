var currentPlayer;
var nextPlayer;
var numMarkersPlaced;
var board;

var winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*paste2 */

}

function checkIfBoardMatchesPattern(pattern, marker) {
    var matches = true;

    for (var i = 0; i < 3; i++) {
        matches = matches && board[pattern[i]] === marker;
    }

    return matches;
}

function checkForWin(marker) {
    var winner = false;

    for (var i = 0; i < winningPatterns.length; i++) {
        if (checkIfBoardMatchesPattern(winningPatterns[i], marker)) {
            winner = true;
        }
    }

    return YouJustWon;
}

function resetBoard() {
    board = createBlankBoard();
    numMarkersPlaced = 0;
    currentPlayer = playerMarker1;
    nextPlayer = playerMarker2;

function createBlankBoard() {
    return [
        blank, blank, blank,
        blank, blank, blank,
        blank, blank, blank
    ];
}
    resetBoard();




/*Doesnt Work
    ("#reset").html("Clear Board");
    ("td").on("click", addMarker);
    ("td").html("");
    ("#playerTurn").html(`It is {currentPlayer}'s turn`);
}


function addMarker() {
    if ((this).html().length === 0) {
        var cellNumber = parseInt((this).attr("data-num"));

        board[cellNumber] = currentPlayer;
        (this).html(currentPlayer);
        (this).attr("data-player", currentPlayer === playerMarker1 ? 1 : 2);

        numMarkersPlaced++;

        if (checkForWin(currentPlayer)) {
            alert("Game over, " + currentPlayer + " wins!");
            ("#playerTurn").html("Game over, " + currentPlayer + " wins!");
            ("#reset").html("Play Again");
            ("td").unbind("click", addMarker);
        } else if (numMarkersPlaced == 9) {
    

            alert("Game Over! It's a draw!");
            ("#playerTurn").html("Game Over! It's a draw!");
            ("#reset").html("Play Again");
        } else {
            
            var temp = currentPlayer;
            currentPlayer = nextPlayer;
            nextPlayer = temp;

            ("#playerTurn").html(`It is {currentPlayer}'s turn`);
        }
    }
}
                    const blank = "_";
                    const playerMarker1 = "X";
                    const playerMarker2 = "O";

(onPageLoad);
*/
