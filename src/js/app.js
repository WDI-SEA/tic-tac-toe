document.addEventListener('DOMContentLoaded', function() {

    var gameBoard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];


    // the game board positions are set to variables for later use

    var tleft = document.getElementById('tleft');
    var tmid = document.getElementById('tmid');
    var tright = document.getElementById('tright');
    var mleft = document.getElementById('mleft');
    var mmid = document.getElementById('mmid');
    var mright = document.getElementById('mright');
    var bleft = document.getElementById('bleft');
    var bmid = document.getElementById('bmid');
    var bright = document.getElementById('bright');


    // vars
    var messagebox = document.getElementById('messageBox');
    var turn = 2;
    console.log(turn + ' <--this turn');




    var lookForNext = function() {
        for (var rownum = 0; rownum < gameBoard.length; rownum++) {

            for (var cellnum = 0; cellnum < gameBoard[rownum].length; cellnum++) {

                if (turn % 2 === 1) {
                    if (gameBoard[rownum][cellnum] === gameBoard[0][0] && gameBoard[0][0] === 0) {
                        console.log('look for next turned up a 0 at cellnum ' + gameBoard[rownum][cellnum] + " at rownum " + rownum + " and replaced it with a 2");


                        turn++;
                        console.log(turn + ' <--this turn');

                        tleft.className = 'redBg';
                        tleft.innerHTML = "<img src='images/cointail.png'>";
                        return gameBoard[0][0] = 2;
                        // }
                    } else if (gameBoard[rownum][cellnum] === gameBoard[0][1] && gameBoard[0][1] === 0) {
                        console.log('look for next turned up a 0 at cellnum ' + gameBoard[rownum][cellnum] + " at rownum " + rownum + " and replaced it with a 2");




                        turn++;
                        console.log(turn + ' <--this turn');

                        tmid.className = 'redBg';
                        tmid.innerHTML = "<img src='images/cointail.png'>";
                        return gameBoard[0][1] = 2;
                    } else if (gameBoard[rownum][cellnum] === gameBoard[0][2] && gameBoard[0][2] === 0) {
                        console.log('look for next turned up a 0 at cellnum ' + gameBoard[rownum][cellnum] + " at rownum " + rownum + " and replaced it with a 2");



                        turn++;
                        console.log(turn + ' <--this turn');

                        tright.className = 'redBg';
                        tright.innerHTML = "<img src='images/cointail.png'>";
                        return gameBoard[0][2] = 2;
                    } else if (gameBoard[rownum][cellnum] === gameBoard[1][0] && gameBoard[1][0] === 0) {
                        console.log('look for next turned up a 0 at cellnum ' + gameBoard[rownum][cellnum] + " at rownum " + rownum + " and replaced it with a 2");


                        turn++;
                        console.log(turn + ' <--this turn');

                        mleft.className = 'redBg';
                        mleft.innerHTML = "<img src='images/cointail.png'>";
                        return gameBoard[1][0] = 2;
                    } else if (gameBoard[rownum][cellnum] === gameBoard[1][1] && gameBoard[1][1] === 0) {
                        console.log('look for next turned up a 0 at cellnum ' + gameBoard[rownum][cellnum] + " at rownum " + rownum + " and replaced it with a 2");


                        turn++;
                        console.log(turn + ' <--this turn');

                        mmid.className = 'redBg';
                        mmid.innerHTML = "<img src='images/cointail.png'>";
                        return gameBoard[1][1] = 2;
                    } else if (gameBoard[rownum][cellnum] === gameBoard[1][2] && gameBoard[1][2] === 0) {
                        console.log('look for next turned up a 0 at cellnum ' + gameBoard[rownum][cellnum] + " at rownum " + rownum + " and replaced it with a 2");


                        turn++;
                        console.log(turn + ' <--this turn');

                        mright.className = 'redBg';
                        mright.innerHTML = "<img src='images/cointail.png'>";
                        return gameBoard[1][2] = 2;
                    } else if (gameBoard[rownum][cellnum] === gameBoard[2][0] && gameBoard[2][0] === 0) {
                        console.log('look for next turned up a 0 at cellnum ' + gameBoard[rownum][cellnum] + " at rownum " + rownum + " and replaced it with a 2");


                        turn++;
                        console.log(turn + ' <--this turn');

                        bleft.className = 'redBg';
                        bleft.innerHTML = "<img src='images/cointail.png'>";
                        return gameBoard[2][0] = 2;
                    } else if (gameBoard[rownum][cellnum] === gameBoard[2][1] && gameBoard[2][1] === 0) {
                        console.log('look for next turned up a 0 at cellnum ' + gameBoard[rownum][cellnum] + " at rownum " + rownum + " and replaced it with a 2");


                        turn++;
                        console.log(turn + ' <--this turn');

                        bmid.className = 'redBg';
                        bmid.innerHTML = "<img src='images/cointail.png'>";
                        return gameBoard[2][1] = 2;
                    } else if (gameBoard[rownum][cellnum] === gameBoard[2][2] && gameBoard[2][2] === 0) {
                        console.log('look for next turned up a 0 at cellnum ' + gameBoard[rownum][cellnum] + " at rownum " + rownum + " and replaced it with a 2");


                        turn++;
                        console.log(turn + ' <--this turn');

                        bright.className = 'redBg';
                        bright.innerHTML = "<img src='images/cointail.png'>";
                        return gameBoard[2][2] = 2;
                    }
                }
                break;
            }
        }
    };

    var computerMove = function() {
        move = Math.floor(Math.random() * 9) + 1;
        console.log(move);
        switch (move) {
            case 1:
                if (gameBoard[0][0] === 0) {
                    console.log('move' + "1");
                    tleft.innerHTML = "<img src='images/cointail.png'>";
                    turn++;
                    console.log(turn + ' <--this turn');

                    tleft.className = 'redBg';
                    gameBoard[0][0] = 2;
                } else {
                    lookForNext();
                }
                break;

            case 2:
                if (gameBoard[0][1] === 0) {
                    console.log('move' + "2");
                    tmid.innerHTML = "<img src='images/cointail.png'>";
                    turn++;
                    console.log(turn + ' <--this turn');

                    tmid.className = 'redBg';
                    gameBoard[0][1] = 2;
                } else {
                    lookForNext();
                }
                break;

            case 3:
                if (gameBoard[0][2] === 0) {
                    console.log('move' + "3");
                    tright.innerHTML = "<img src='images/cointail.png'>";
                    turn++;
                    console.log(turn + ' <--this turn');

                    tright.className = 'redBg';
                    gameBoard[0][2] = 2;
                } else {
                    lookForNext();
                }
                break;

            case 4:
                if (gameBoard[1][0] === 0) {
                    console.log('move' + "4");
                    mleft.innerHTML = "<img src='images/cointail.png'>";
                    turn++;
                    console.log(turn + ' <--this turn');

                    mleft.className = 'redBg';
                    gameBoard[1][0] = 2;
                } else {
                    lookForNext();
                }
                break;

            case 5:
                if (gameBoard[1][1] === 0) {
                    console.log('move' + "5");
                    mmid.innerHTML = "<img src='images/cointail.png'>";
                    turn++;
                    console.log(turn + ' <--this turn');

                    mmid.className = 'redBg';
                    gameBoard[1][1] = 2;
                } else {
                    lookForNext();
                }
                break;

            case 6:
                if (gameBoard[1][2] === 0) {
                    console.log('move' + "6");
                    mright.innerHTML = "<img src='images/cointail.png'>";
                    turn++;
                    console.log(turn + ' <--this turn');

                    mright.className = 'redBg';
                    gameBoard[1][2] = 2;
                } else {
                    lookForNext();
                }
                break;

            case 7:
                if (gameBoard[2][0] === 0) {
                    console.log('move' + "7");
                    bleft.innerHTML = "<img src='images/cointail.png'>";
                    turn++;
                    console.log(turn + ' <--this turn');

                    bleft.className = 'redBg';
                    gameBoard[2][0] = 2;
                } else {
                    lookForNext();
                }
                break;

            case 8:
                if (gameBoard[2][1] === 0) {
                    console.log('move' + "8");
                    bmid.innerHTML = "<img src='images/cointail.png'>";
                    turn++;
                    console.log(turn + ' <--this turn');

                    bmid.className = 'redBg';
                    gameBoard[2][1] = 2;
                } else {
                    lookForNext();
                }
                break;

            case 9:
                if (gameBoard[2][2] === 0) {
                    console.log('move' + "9");
                    bright.innerHTML = "<img src='images/cointail.png'>";
                    turn++;
                    console.log(turn + ' <--this turn');

                    bright.className = 'redBg';
                    gameBoard[2][2] = 2;
                } else {
                    lookForNext();
                }
                break;
                default:
                    console.log('default switch');
                    lookForNext();
        }

    };


    // lots of if statements checking board positions by accessing
    // nested array values

    var winState = function() {
        for (var rownum = 0; rownum < gameBoard.length; rownum++) {
            for (var cellnum = 0; cellnum < gameBoard[rownum].length; cellnum++) {
                // human win check
                // checking rows for a win
                if ((gameBoard[0][0] === 1 && gameBoard[0][1] === 1 && gameBoard[0][2] === 1)) {
                    messagebox.innerHTML = "You win!";
                    console.log(JSON.stringify(gameBoard));
                } else if ((gameBoard[1][0] === 1 && gameBoard[1][1] === 1 && gameBoard[1][2] === 1)) {
                    messagebox.innerHTML = "You win!";
                    console.log(JSON.stringify(gameBoard));
                } else if ((gameBoard[2][0] === 1 && gameBoard[2][1] === 1 && gameBoard[2][2] === 1)) {
                    messagebox.innerHTML = "You win!";
                    console.log(JSON.stringify(gameBoard));
                }
                // checking columns for a win
                else if ((gameBoard[0][0] === 1 && gameBoard[1][0] === 1 && gameBoard[2][0] === 1)) {
                    messagebox.innerHTML = "You win!";
                    console.log(JSON.stringify(gameBoard));
                } else if ((gameBoard[0][1] === 1 && gameBoard[1][1] === 1 && gameBoard[2][1] === 1)) {
                    messagebox.innerHTML = "You win!";
                    console.log(JSON.stringify(gameBoard));
                } else if ((gameBoard[0][2] === 1 && gameBoard[1][2] === 1 && gameBoard[2][2] === 1)) {
                    messagebox.innerHTML = "You win!";
                    console.log(JSON.stringify(gameBoard));
                }
                // checking diags for a win
                else if ((gameBoard[0][0] === 1 && gameBoard[1][1] === 1 && gameBoard[2][2] === 1)) {
                    messagebox.innerHTML = "You win!";
                    console.log(JSON.stringify(gameBoard));
                } else if ((gameBoard[0][2] === 1 && gameBoard[1][1] === 1 && gameBoard[2][0] === 1)) {
                    messagebox.innerHTML = "You win!";
                    console.log(JSON.stringify(gameBoard));
                }
                // other player win check
                // checking rows for a win
                else if ((gameBoard[0][0] === 2 && gameBoard[0][1] === 2 && gameBoard[0][2] === 2)) {
                    messagebox.innerHTML = "The second player won!";
                    console.log(JSON.stringify(gameBoard));
                } else if ((gameBoard[1][0] === 2 && gameBoard[1][1] === 2 && gameBoard[1][2] === 2)) {
                    messagebox.innerHTML = "The second player won!";
                    console.log(JSON.stringify(gameBoard));
                } else if ((gameBoard[2][0] === 2 && gameBoard[2][1] === 2 && gameBoard[2][2] === 2)) {
                    messagebox.innerHTML = "The second player won!";
                    console.log(JSON.stringify(gameBoard));
                }
                // checking columns for a win
                else if ((gameBoard[0][0] === 2 && gameBoard[1][0] === 2 && gameBoard[2][0] === 2)) {
                    messagebox.innerHTML = "The second player won!";
                    console.log(JSON.stringify(gameBoard));
                } else if ((gameBoard[0][1] === 2 && gameBoard[1][1] === 2 && gameBoard[2][1] === 2)) {
                    messagebox.innerHTML = "The second player won!";
                    console.log(JSON.stringify(gameBoard));
                } else if ((gameBoard[2][0] === 2 && gameBoard[2][1] === 2 && gameBoard[2][2] === 2)) {
                    messagebox.innerHTML = "The second player won!";
                    console.log(JSON.stringify(gameBoard));
                }
                // checking diags for a win
                else if ((gameBoard[0][0] === 2 && gameBoard[1][1] === 2 && gameBoard[2][2] === 2)) {
                    messagebox.innerHTML = "The second player won!";
                    console.log(JSON.stringify(gameBoard));
                } else if ((gameBoard[0][2] === 2 && gameBoard[1][1] === 2 && gameBoard[2][0] === 2)) {
                    messagebox.innerHTML = "The second player won!";
                    console.log(JSON.stringify(gameBoard));
                }
            }
        }
    };

    tleft.addEventListener('click', function() {
        if (gameBoard[0][0] === 0) {
            // if (turn % 2 === 0){
            tleft.innerHTML = "<img src='images/coinhead.png'>";
            gameBoard[0][0] = 1;
            tleft.className = 'blueBg';
            turn++;
            computerMove();
            winState();
            // }
        }
    });

    tmid.addEventListener('click', function() {
        if (gameBoard[0][1] === 0) {
            // if (turn % 2 === 0){
            tmid.innerHTML = "<img src='images/coinhead.png'>";
            gameBoard[0][1] = 1;
            tmid.className = 'blueBg';
            turn++;
            computerMove();
            winState();
            // }
        }
    });

    tright.addEventListener('click', function() {
        if (gameBoard[0][2] === 0) {
            // if (turn % 2 === 0){
            tright.innerHTML = "<img src='images/coinhead.png'>";
            gameBoard[0][2] = 1;
            tright.className = 'blueBg';
            turn++;
            computerMove();
            winState();
            // }
        }
    });

    mleft.addEventListener('click', function() {
        if (gameBoard[1][0] === 0) {
            // if (turn % 2 === 0){
            mleft.innerHTML = "<img src='images/coinhead.png'>";
            gameBoard[1][0] = 1;
            mleft.className = 'blueBg';
            turn++;
            computerMove();
            winState();
            // }
        }
    });

    mmid.addEventListener('click', function() {
        if (gameBoard[1][1] === 0) {
            // if (turn % 2 === 0){
            mmid.innerHTML = "<img src='images/coinhead.png'>";
            gameBoard[1][1] = 1;
            mmid.className = 'blueBg';
            turn++;
            computerMove();
            winState();
            // }
        }
    });

    mright.addEventListener('click', function() {
        if (gameBoard[1][2] === 0) {
            // if (turn % 2 === 0){
            mright.innerHTML = "<img src='images/coinhead.png'>";
            gameBoard[1][2] = 1;
            mright.className = 'blueBg';
            turn++;
            computerMove();
            winState();
            // }
        }
    });

    bleft.addEventListener('click', function() {
        if (gameBoard[2][0] === 0) {
            // if (turn % 2 === 0){
            bleft.innerHTML = "<img src='images/coinhead.png'>";
            gameBoard[2][0] = 1;
            bleft.className = 'blueBg';
            turn++;
            computerMove();
            winState();
            // }
        }
    });

    bmid.addEventListener('click', function() {
        if (gameBoard[2][1] === 0) {
            // if (turn % 2 === 0){
            bmid.innerHTML = "<img src='images/coinhead.png'>";
            gameBoard[2][1] = 1;
            bmid.className = 'blueBg';
            turn++;
            computerMove();
            winState();
            // }
        }
    });

    bright.addEventListener('click', function() {
        if (gameBoard[2][2] === 0) {
            // if (turn % 2 === 0){
            bright.innerHTML = "<img src='images/coinhead.png'>";
            gameBoard[2][2] = 1;
            bright.className = 'blueBg';
            turn++;
            computerMove();
            winState();
            // }
        }
    });

});
