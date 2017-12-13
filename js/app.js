(function Game() {
  
    // Elements
    var game = document.getElementById('game');
    var boxes = document.querySelectorAll('li');
    var resetGame = document.getElementById('reset-game');
    var turnDisplay = document.getElementById('whos-turn');
    var gameMessages = document.getElementById('game-messages');
    var playerOneScoreCard = document.getElementById('player-one-score');
    var playerTwoScoreCard = document.getElementById('player-two-score');
    //Elements

    var context = { 'player1' : 'x', 'player2' : 'o' };
    var board = [];

    var playerOneScore = 0;
    var playerTwoScore = 0;

    var turns;
    var currentContext;

    var init = function() {
        turns = 0;


        currentContext = computeContext();


        board[0] = new Array(3);
        board[1] = new Array(3);
        board[2] = new Array(3);

        for(var i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener('click', clickHandler, false);
        }

        resetGame.addEventListener('click', resetGameHandler, false);
    }

    var computeContext = function() {
        return (turns % 2 == 0) ? context.player1 : context.player2;
    }

    var clickHandler = function() {
        this.removeEventListener('click', clickHandler);

        this.className = currentContext;
        this.innerHTML = currentContext;

        var pos = this.getAttribute('data-pos').split(',');
        board[pos[0]][pos[1]] = computeContext() == 'x' ? 1 : 0;

        if(checkStatus()) {
            gameWon();
        }

        turns++;
        currentContext = computeContext();
        turnDisplay.className = currentContext;
    }


    // Check to see if player has won
    var checkStatus = function() {
        var used_boxes = 0;

        for(var rows = 0; rows < board.length; rows++ ) {
            var row_total = 0;
            var column_total = 0;

            for(var columns = 0; columns < board[rows].length; columns++) {
                row_total += board[rows][columns];
                column_total += board[columns][rows];

                if(typeof board[rows][columns] !== "undefined") {
                    used_boxes++;
                }
            }
            var diagonal_tl_br = board[0][0] + board[1][1] + board[2][2]; // diagonal top left to bottom right
            var diagonal_tr_bl = board[0][2] + board[1][1] + board[2][0]; // diagonal top right bottom left

            if(diagonal_tl_br == 0 || diagonal_tr_bl == 0 || diagonal_tl_br == 3 || diagonal_tr_bl == 3) {
                return true;
            }


            if(row_total == 0 || column_total == 0 || row_total == 3 || column_total == 3) {
                return true;
            }
            //draw
            if(used_boxes == 9) {
                gameDraw();
            }
        }
    }
    var gameWon = function() {
        clearEvents();

        gameMessages.className = 'player-' + computeContext() + '-win';

        switch(computeContext()) {
            case 'x':
                playerOneScoreCard.innerHTML = ++playerOneScore;
                break;
            case 'o':
                playerTwoScoreCard.innerHTML = ++playerTwoScore;
        }
    }

    var gameDraw = function() {
        gameMessages.className = 'draw';
        clearEvents();
    }

    var clearEvents = function() {
        for(var i = 0; i < boxes.length; i++) {
            boxes[i].removeEventListener('click', clickHandler);
        }
    }

    var resetGameHandler = function() {
        clearEvents();
        init();

        for(var i = 0; i < boxes.length; i++) {
            boxes[i].className = '';
            boxes[i].innerHTML = '';
        }

        turnDisplay.className = currentContext;
        gameMessages.className = '';
    }
    game && init();
})();

var currentPlayer = prompt("X or O? (X=1 O=2)");


var grid=new Array(3);
    grid[0]=new Array(3);
    grid[1]=new Array(3);
    grid[2]=new Array(3);

for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    grid[i][j]=0;
  }
}

function clickCell(x,y) {
      if (grid[x][y]>0) {

  }
// ClickBoxes
    else {
      if (currentPlayer==1) {
        document.getElementById("cell_"+x+"_"+y).style.color="black";
        document.getElementById("cell_"+x+"_"+y).innerHTML="X";
      grid[x][y]=1;
      currentPlayer=2;
    } else {
        document.getElementById("cell_"+x+"_"+y).style.color="purple";
        document.getElementById("cell_"+x+"_"+y).innerHTML="O";
      grid[x][y]=2;
      currentPlayer=1;
    }
  }
}
// Reset Game
function reset() {
  for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    grid[i][j]=0;
    document.getElementById("cell_"+i+"_"+j).innerHTML="&nbsp;";
  }
}
 currentPlayer=1;
}

