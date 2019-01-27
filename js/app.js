console.log('Hello frontend');

var xTurn = true;
var simpleAI = false;
var minimaxiAi = false;

var wins = ['abc', 'def', 'ghi', 'adg', 'beh', 'cfi', 'aei', 'gec']
var playerX = '';
var playerOh = '';
var catsGameRscs;

var scoreElX = document.querySelector('.scorebox-content__X')
var scoreElOh = document.querySelector('.scorebox-content__Oh')

var playerXScore = 0;
var playerOhScore = 0;

function notifyTurn() {
    document.querySelector('alert').forEach(alert => {
        alert.className = alert.className.replace('show', 'hide')
    })
    if (xTurn) {
        let x = document.querySelector('.alertX')
        x.className = x.className.replace('hide', 'show')
    } else {
        let o = document.querySelector('.alertOh')
        o.className = o.className.replace('hide', 'show')
    }
}
document.querySelectorAll('.alert span').forEach(span => {
    addEventListener('click', event => {
        event.target.parentElement.parentElement.className = event.target.parentElement.parentElement.className.replace('show', 'hide')
    });
});

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
    notifyTurn()
    
}

function catsGame() {
    // get all rsc
    // make a function to animate them
    // 

}
// document.querySelectorAll('.alert .unhide').addEventListener('click', event => {
//         console.log(event.target);
//     });
// });


function gameOver(xTurn) {
    if (xTurn) {
        console.log("X wins it! Woohoo!");
        playerXScore++;
    } else {
        console.log('Oh wins it! Woohoo!');
        playerOhScore++;
    }
    scoreElOh.textContent = `O:${playerOhScore}`
    scoreElX.textContent = `X:${playerXScore}`
    console.log(`Current score: X:${playerXScore} || O:${playerOhScore}`)
    document.querySelectorAll('.box').forEach(box => {
        box.removeEventListener('click', pick);
    })
}

function checkGame() {
    console.log('checking game')
    if (playerOh.length + playerX.length < 5) {
        console.log('Win not possible')
    } else {
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

function chooseRandom() {
    let boxCodex = 'abcdefghi'
    
    let choice = Math.floor(Math.random() * 9)

    document.querySelector(`#${boxCodex[choice]}`).click()
}

function chooseMiniMaxi() {

}

function animateRsc(rsc) {
     // Original JavaScript code by Chirp Internet: www.chirp.com.au
     // Please acknowledge use of this code by including this header.
    let scrnHeight = window.innerWidth;
    let scrnWidth = window.innerHeight;

    let rscWidth = rsc.offsetWidth;
    let rscHeight = rsc.offsetHeight;
    let start = null;
    let duration = 5;
    let gridSize = 1000;

    function step(timestamp) {
        console.log('stepping')
        if (!start) {
            start = timestamp
        }

        progress = (timestamp - start) / 1000 / duration //this is a value between 0 and 1
        let x = progress * scrnWidth/gridSize;
        let y = x/2;


        rsc.style.left = Math.min(scrnWidth, x * gridSize) + "px";
        rsc.style.top = (gridSize * y) + "px"

        if (progress >= 1) {
            start = null;
        }
        requestAnimationFrame(step)
    }
    window.requestAnimationFrame(step)
}