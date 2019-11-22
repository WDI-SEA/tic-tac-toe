console.log('Loaded')

let marker = 'x'
let clicks = 0

const unclickedSquares = document.getElementsByClassName('square')

// Function to mark with X or O
const addSquareListeners = e => {
    const squares = document.querySelectorAll('.square') 
    console.log(squares)
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', clickSquare)
    }
}
  
// Add event listener to table
// const el = document.getElementById("outside");
// el.addEventListener("click", modifyText, false);

const clickSquare = (event) => {

    //clicks += 1

    console.log(event)        

    let targetSquare = event.target
    targetSquare.classList.remove("unclicked")
    targetSquare.classList.add("clicked")

    /*
    if {clicks %2 === 0} {
        marker = 'x'
    } else {
        marker = 'o'
    }
    */
    targetSquare.classList.add(`${marker}`)
    if (marker === 'x') {
        marker = 'o'
    } else {
        marker = 'x'
    }

}

/*
for (let i = 0; i < unclickedSquares.length; i++) {
    square = unclickedSquares[i]
    square.classList.add("unclicked")
    square.addEventListener('click', 
        event.target.removeEventListener('click'))
    alert('Clicked!')
}
*/

//console.log(document.getElementsByClassName('unclicked')) {}

addSquareListeners()

/* 
const playButton = document.getElementById('play')
 */
// Add a handler for the 'click' event
/* 
playButton.addEventListener('click', (event) => {
    alert('New game!');
})
 */
