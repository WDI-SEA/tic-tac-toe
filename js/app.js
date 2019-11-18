console.log('Hello frontend')

const unclickedSquares = document.getElementsByClassName('square')

const clickSquare = e => {
    // change to the clicked square class
    e.target.
}

const clickSquare = (event) => {
        console.log(event)
        let targetSquare = event.target
        targetSquare.classList.remove("unclicked")
        targetSquare.classList.add("clicked")
}
for (let i = 0; i < unclickedSquares.length; i++) {
    square = unclickedSquares[i]
    square.classList.add("unclicked")
    square.addEventListener('click', 
        event.target.removeEventListener('click')
        alert('Clicked!');
    })
}

console.log(document.getElementsByClassName('unclicked'))


/* 
const playButton = document.getElementById('play')
 */
// Add a handler for the 'click' event
/* 
playButton.addEventListener('click', (event) => {
    alert('New game!');
})
 */