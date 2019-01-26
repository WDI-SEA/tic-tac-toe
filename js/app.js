console.log('Hello frontend');

var xTurn = true;

var wins = ['abc', 'def', 'ghi', 'adg', 'beh', 'cfi', 'aei', 'gec']
var playerX = '';
var playerOh = '';
var catsGameRscs;

var playerXScore = 0;
var playerOhScore = 0;


function currentPlayer() {
    if (xTurn) {
        return playerX
    } else {
        return playerOh
    }
}
function pick(event) {
    if (xTurn) {
        playerX += event.target.id;
        event.target.children[0].classList.add('X');
        console.log(playerX)
    } else {
        playerOh += event.target.id;
        event.target.children[1].classList.add('Oh');
        console.log(playerOh)
    }
    event.target.removeEventListener('click', pick);
    checkGame()
    xTurn = !xTurn;
    console.log('xTurn: ', xTurn);
    
}

function catsGame() {
    // get all rsc
    // make a function to animate them
    // 

}

function gameOver(xTurn) {
    if (xTurn) {
        console.log("X wins it! Woohoo!");
        playerXScore++;
    } else {
        console.log('Oh wins it! Woohoo!');
        playerOhScore++;
    }
    document.querySelector('.scorebox').children[1].textContent = `X:${playerXScore} || O:${playerOhScore}`
    console.log(`Current score: X:${playerXScore} || O:${playerOhScore}`)
    document.querySelectorAll('.box').forEach(box => {
        box.removeEventListener('click', pick);
    })
}

function checkGame() {
    console.log('checking game')
    for (let win of wins) {
        let count = 0;
        //console.log(`checking ${win}`)
            for (let letr of win) {
                //console.log(`Count is ${count}, checking ${letr} ${currentPlayer()}`)
                if (currentPlayer().includes(letr)) {
                    count += 1;
                    if (count === 3) {
                        return gameOver(xTurn)
                    }
                }
            }
    }
    if (playerX.length + playerOh.length > 8) {
        catsGame()
    }
    console.log('No victory yet!')
}



function gameStart() {
    // starting game
    console.log("Starting the game! Welcome to tic-tac-toe. Player X may begin.")

    let boxes = document.querySelectorAll('.row > *');
    boxes.forEach(box => {
        box.addEventListener('click', pick);
    });

    // function getRsc() {
    //     return new Promise((resolve, reject) => {
    //         let rsc = document.createElement('img');
    //         rsc.addEventListener('load', event => resolve(rsc))
    //         rsc.addEventListener('error', () => reject(`Failed to load image's URL: ${url}`))
    //         Image.src= 'https://goo.gl/BXQQc8'
    //     })
    
    // }

    // let rscs = [getRsc(), getRsc()]
    // let rscId = 0
    // for (let rsc of rscs) {
    //     rsc.id = rscId;
    //     rsc.classList.
    //     document.body.
    // }
    //https://jsfiddle.net/fracz/kf8c6t1v/
}




function reset() {
    xTurn = true;
    playerX = '';
    playerOh = '';
    document.querySelectorAll('.box').forEach(box => {
        box.removeEventListener('click', pick);
        box.children[0].classList.remove('X');
        box.children[1].classList.remove('Oh');
    });
    // ask user if wants to keep playing
    // do stuff if wants to keep playing
    // do stuff if wants to reset
    gameStart()
}

gameStart()