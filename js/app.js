let user = "x"

const addSquareListeners = () => {
    // console.log('Add square listeners')
    let squares = document.querySelectorAll('.square')
    // Loop through each square
    for (let i = 0; i < squares.length; i++) {        
        // add event listener for click! 
        squares[i].addEventListener('click',clickSquare)
    }
}

const clickSquare = e => {
    // change to the clicked square class
    e.target.classList.add(user)
    if (user === "x") { 
        user = "o"
    } else {
        user = "x"
    }
}

const start = () => {
    console.log('started')
    user = 'x'
    //squares = document.querySelectorAll('.square')
    addSquareListeners()
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('content was loaded')
    document.getElementById('play').addEventListener('click', start)
})
