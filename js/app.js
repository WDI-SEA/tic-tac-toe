console.log('loading...');

///// META /////

// .CHANGES STATE (TO REPRESENT/DISPLAY X OR O)

///// VARIABLES AND CONSTANTS /////

//let i; //for const 'cel'

///// DOM GETS /////

let turnDisplay = document.getElementById('turnDisplay'); //h2 with id 'turnDisplay, contains text of who's turn it is
let turnState = document.getElementById('gameSpace'); //div with id 'gameSpace', contains all rows and cels
let cels = document.getElementsByClassName('cel'); //array of all class 'cel'
let turnO = (turnState.className === 'o')  //returns true if turnState contains class 'o' ; doesn''t work for some reason
let turnX = (turnState.className === 'x') //returns true if turnState contains class 'o' ; doesn't work for ssome reason
//let cel = document.getElementById('1,1')

//const cel = cel[i] //element cel at position i in array cels; i'l'l have to come back to this; should it be written as a function?

///// DOM SETS /////


///// EVENT LISTENERS /////

//adds an event listener to each cel (for debugging)
for (let i = 0; i < cels.length; i++) {
  document.getElementById(cels[i].id).addEventListener('click', function (e) {
    console.log(cels[i].id)
  })
}

// for (let i = 0; i < cels.length; i++) {
//   document.getElementById(cels[i].id).addEventListener('click', function (e) {
//     console.log(cels[i])
//   })
// }  //eureka

// when clicked on, adds class 'x' to cel and changes CSS
// for (let i = 0; i < cels.length; i++) {
//   document.getElementById(cels[i].id).addEventListener('click', function (e) {
//     cels[i].classList.add('x')
//   })
// }

// when clicked on, adds class 'o' to cel and changes CSS
// for (let i = 0; i < cels.length; i++) {
//   const cel = cels[i]
//   document.getElementById(cel.id).addEventListener('click', function (e) {
//     cel.classList.add('o');
//     cel.style.backgroundColor = "white";
//   })
// }

// if gameState contains class 'x', places x on cel when clicked
// if gameState contains class 'o', places o on cel when clicked
// if gameState contains class 'x' and 'o', logs error in console
// if gameState contains neither class 'x' or 'o', logs error in console
for (let i = 0; i < cels.length; i++) {
  let cel = cels[i]
document.getElementById(cel.id).addEventListener('click', function (e) {
  if (cel.classList.contains('clicked') === true) {return}
  else if ((turnState.className === 'x') && (turnState.className === 'o')) {
      console.log('error in onclick, turnState contains both classes x and o')
    } //impossible. this statement is from an old version
    else if (turnState.className === 'x') {
      writeTurn()
      drawX(cel)
      advanceTurn(cel)
      writeTurn()
      //checkWin()
    }
    else if (turnState.className === 'o') {
      writeTurn()
      drawO(cel)
      advanceTurn(cel)
      writeTurn()
      //checkWin
    }
    else {
      console.log('error in onclick')
    }})}

document.getElementById('resetButton').addEventListener('click', function (e) {
  initialize()
})

///// FUNCTIONS /////

// if a cel is clicked/cel.classList.contains 'clicked' = true/ loops on itself while true
// function checkClickState(cel) {
//   if (cel.classList.contains('clicked') === true) {
//   return
//   }
//   console.log('let\'s go')
// }

// places an X on a cel, 
function drawX(c) {
  // c.classList.add('clicked')
  c.textContent = 'x'
}

// places an O on a cel
function drawO(c) {
  c.classList.add('clicked')
  c.textContent = 'o'
}

// if turnX is true, removes class 'x' from turnState and adds class 'o' to turnState
// if turnO is true, removes class 'o' from turnState and adds class 'x' to turnState
// else logs error to console
function advanceTurn(c) {
  if (turnState.classList > 1) {
    console.log('error in advanceTurn')
  }
  else if (turnState.className === 'x') {
    turnState.className = 'o'
    c.classList.add('clicked')
  }
  else if (turnState.className === 'o') {
    turnState.className = 'x'
    c.classList.add('clicked')
  }
  else {
    console.log('error in advanceTurn, turnState contains neither class x or o')
  }
}

//displays player turn in h2 'turnDisplay', based on gameSpace class 'x' or 'o'
function writeTurn(c) {
  if (turnState.className === 'x') {
    turnDisplay.textContent = 'Player X\'s turn to go'
  }
  else if (turnState.className === 'o') {
    turnDisplay.textContent = 'player O\'s turn to go'
  }
  else {
    turnDisplay.textContent = "error in writeTurn, turnState contains neither x or o"
  }
}

// resets game state
// function initialize() {
//   turnState.className = 'x'
//   for (i = 0; i < cels.length; i++) {
//     let cel = cels[i]
//      document.getElementById('test').textContent = 'bub'
//     }
//  }
function initialize() {
  turnState.className = 'x'
  writeTurn()
  for (i = 0; i < cels.length; i++) {
    let cel = cels[i]
    cel.style.background = "url('img/download.jpeg')"
    }
 }

///// GAME LOGIC /////



///// TEST ARGUMENTS /////







initialize()
console.log('loaded!')
