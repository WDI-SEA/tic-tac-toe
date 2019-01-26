console.log('Hello frontend');

var xTurn = true;

var wins = ['abc', 'def', 'ghi', 'adg', 'beh', 'cfi', 'aei', 'gdc']
var playerX = '';
var playerOh = '';

function currentPlayer() {
    if (xTurn) {
        return playerX
    } else {
        return playerOh
    }
}

function gameStart() {
    console.log("It's X's turn")
    let boxes = document.querySelectorAll('.row > *');
    boxes.forEach(box => {
        box.addEventListener('click', pick);
    });

}

function pick(event) {
    let person;
    if (xTurn) {
        person = "X"
    } else {
        person = "O"
    }
    console.log(`It's ${person}'s turn.`)
    event.target.firstChild.textContent = "X";
    if (xTurn) {
        playerX += event.target.id;
        console.log(playerX)
    } else {
        playerOh += event.target.id;
        console.log(playerOh)
    }
    event.target.removeEventListener('click', pick)
    checkGame()
    currentPlayer = !currentPlayer;
    
}

function checkGame() {
    console.log('checking game')
    for (let win of wins) {
        let count = 0;
        console.log(`checking ${win}`)
            for (let letr of win) {
                console.log(`Count is ${count}, checking ${letr}`)
                if (currentPlayer().includes(letr)) {
                    count += 1;
                    if (count === 3) {
                        return gameOver(currentPlayer)
                    }
                }
            }
    }
}

function gameOver(currentPlayer) {

}


gameStart()