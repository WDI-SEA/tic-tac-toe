var turn = 0
var lastPlayed = '';

const restart = () => {
    
    removeBoxListeners()
    document.getElementById('reset').addEventListener('click', start)
    //grab all the boxes from the DOM
    
    let boxes = document.querySelectorAll('.box')
    
    //loop through each box
    for (let i = 0; i < boxes.length; i++) {
        //clear each box
        boxes[i].textContent = ''
    }

}

const endGame = () => {
    document.getElementById('jingle').pause()
    
    removeBoxListeners()
}

const winner = (str) => {
    endGame()

    document.getElementById('win').play()

    document.getElementById('message').textContent = 'Player ' + str + ' wins!'

}

const areEqual = (a,b,c) => {
    if (a.textContent.length > 0 && b.textContent.length > 0 && c.textContent.length > 0) {
        if (a.getAttribute('entry') == b.getAttribute('entry') && b.getAttribute('entry') == c.getAttribute('entry')) {
            return true
        } 
    }
    return false
}

const checkWin = () => {
    let boxes = document.querySelectorAll('.box')
        
    //create all winning conditions

        //check all other conditions
            if (areEqual(boxes[0], boxes[1], boxes[2]) || 
            areEqual(boxes[3], boxes[4], boxes[5]) ||
            areEqual(boxes[6], boxes[7], boxes[8]) ||
            areEqual(boxes[0], boxes[3], boxes[6]) ||
            areEqual(boxes[1], boxes[4], boxes[7]) ||
            areEqual(boxes[2], boxes[5], boxes[8]) ||
            areEqual(boxes[0], boxes[4], boxes[8]) ||
            areEqual(boxes[2], boxes[4], boxes[6]) ) {
                //win conditions
                return true
            }
    //draw condition        
    return false
}

const play = (e) => {
    //track turns
    turn += 1
    console.log(turn)
    
        if (turn % 2 == 0) {
            //add the x or o - depends on turn
          e.target.innerHTML = `O`
          e.target.setAttribute('entry', 'o')
          lastPlayed = '2 (O)'
          document.getElementById('message').textContent = 'Player 1 (X), it\'s your turn!'
        } else if (turn == 9) {
            e.target.innerHTML = `X`
            e.target.setAttribute('entry', 'x')
            lastPlayed = '1 (X)'
            document.getElementById('message').textContent = 'It\'s a draw!'
        } else {
            e.target.innerHTML = `X`
            e.target.setAttribute('entry', 'x')
            lastPlayed = '1 (X)'
            document.getElementById('message').textContent = 'Player 2 (O), it\'s your turn!'
        }

    document.getElementById('click').play()
    e.target.removeEventListener('click', play)

    //check win condition
    if (turn >= 5) {
          if (checkWin()) {
            //you won
            winner(lastPlayed)
            console.log('winner!')
          }
    }
}

const removeBoxListeners = ()  => {
    let boxes = document.querySelectorAll('.box')
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener('click', play)
    }
}

const addBoxListeners = () => {
        
    //grab all the boxes from the DOM
        let boxes = document.querySelectorAll('.box')
    
        //loop through each box
        for (let i = 0; i < boxes.length; i++) {
            //add event listener for click on each box
            boxes[i].addEventListener('click', play)
        }
}

const start = () => {
    //board should be clear
    document.getElementById('start').removeEventListener('click', start)
    //jingle starts playing + pauses other sounds
    document.getElementById('jingle').volume = '0.1'
    document.getElementById('jingle').play()

    //message alerts user to pick box
    document.getElementById('message').textContent = 'Welcome! You\'re Player 1 (X), choose a box!'
    
    //continues to play
    
    //display leaderboard


    //remove all box listeners + add box listeners
    removeBoxListeners()
    addBoxListeners()
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start').addEventListener('click', start)
        //activate the restart button
    document.getElementById('reset').addEventListener('click', restart)
})