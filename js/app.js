console.log('loading...');

///// META /////

// .CHANGES STATE (TO REPRESENT/DISPLAY X OR O)

///// VARIABLES AND CONSTANTS /////


///// DOM GETS /////

let turnDisplay = document.getElementById('turnDisplay'); //h2 with id 'turnDisplay, contains text of who's turn it is
let turnState = document.getElementById('gameSpace'); //div with id 'gameSpace', contains all rows and cels
let cels = document.getElementsByClassName('cel'); //array of all class 'cel'
// let turnO = turnState.classList.contains('turnO') //ALWAYS RETURNS TRUE!! WHAT HECK! //returns true if turnState contains class 'turnO' ; doesn''t work for some reason
// let turnX = turnState.classList.contains('turnX') //ALWAYS RETURNS FALSE!! THIS WAS A FUN ONE! //returns true if turnState contains class 'turnX' ; doesn't work for ssome reason
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

for (let i = 0; i < cels.length; i++) {
  cels[i].style.background = "url('img/download.jpeg')"
  cels[i].textContent = ''
}

// CHOOSE X OR O ; CHANGES TURNSTATE TO XTURN OR OTURN ; DISABLED WHEN ANY CEL HAS CLASS CLICKED !!!


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

// when clicked on, adds class 'turnO' to cel and changes CSS
// for (let i = 0; i < cels.length; i++) {
//   const cel = cels[i]
//   document.getElementById(cel.id).addEventListener('click', function (e) {
//     cel.classList.add('turnO');
//     cel.style.backgroundColor = "white";
//   })
// }

// if gameState contains class 'x', places x on cel when clicked
// if gameState contains class 'turnO', places o on cel when clicked
// if gameState contains class 'x' and 'turnO', logs error in console
// if gameState contains neither class 'x' or 'turnO', logs error in console

//*********************** GAME ADVANCE EVENT HANDLER ****************************
for (let i = 0; i < cels.length; i++) {
  let cel = cels[i]
document.getElementById(cel.id).addEventListener('click', function (e) {
  if (cel.classList.contains('clicked') === true) {return}
  // else if ((turnX === true) && (turnState.classList.contains('turnO') === true)) {
  //     console.log('error in onclick, turnState contains both classes turnX and o')
  //   } //impossible. this statement is from an old version
    else if (turnState.classList.contains('turnX') === true) {
      document.getElementById('header').textContent = "CAT-DOG-LOAF!!"
      writeTurn()
      drawX(cel)
      advanceTurn(cel)
      //writeTurn()
      //checkWin()
    }
    else if (turnState.classList.contains('turnO') === true) {
      //else if (turnO === true) {
        // writeTurn()
        document.getElementById('header').textContent = "CAT-DOG-LOAF!!"
     writeTurn()
      drawO(cel)
      advanceTurn(cel)
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

// function toggleX(c) {
//   {
//   c.classList.toggle('x')
//   }
//   return
// }


// places an X (catloaf) on a cel, 
function drawX(c) {
  c.classList.add('clicked')
  c.style.background = "url('img/catloaf.jpg')"
  //c.textContent = 'X'
}

// places an O (dogloaf) on a cel
function drawO(c) {
  c.classList.add('clicked')
  c.style.background = "url('img/dogloaf.jpeg')"
  //c.textContent = 'O'
}

// if'turnX'is true, removes class'turnX'from turnState and adds class 'turnO' to turnState
// if turnO is true, removes class 'turnO' from turnState and adds class'turnX'to turnState
// else logs error to console
function advanceTurn(c) {
  if (turnState.classList.contains('turnX') === true) {
    turnState.classList.remove('turnX')
    turnState.classList.add('turnO')
    c.classList.add('clicked')
  }
  else if (turnState.classList.contains('turnO') === true) {
    turnState.classList.remove('turnO')
    turnState.classList.add('turnX')
    c.classList.add('clicked')
  }
  else {
    console.log('error in advanceTurn, turnState contains neither class x or o')
  }
}

//displays player turn in h2 'turnDisplay', based on gameSpace class'turnX'or 'turnO'
function writeTurn(c) {
  if (turnState.classList.contains('turnX') === true) {
    turnDisplay.textContent = 'Dogloaf! Woof!'
  }
  else if (turnState.classList.contains('turnO') === true) {
    turnDisplay.textContent = 'Catloaf! Choose!'
  }
  else {
    turnDisplay.textContent = "error in writeTurn"
  }
}

// resets game state
// function initialize() {
//   turnState.className = 'turnX'
//   for (i = 0; i < cels.length; i++) {
//     let cel = cels[i]
//      document.getElementById('test').textContent = 'bub'
//     }
//  }
// function initialize() {
//   turnState.classList.add = 'turnX'
//   writeTurn()
//   for (i = 0; i < cels.length; i++) {
//     let cel = cels[i]
//     cel.style.background = "url('img/download.jpeg')"
//     }
//  }

// SCORE COUNTER !!!

///// GAME LOGIC /////

// DETERMINES ENDGAME STATE, GAME ENDS IF WIN CONDITION MET OR ALL CELS HAVE CLASS CLICKED !!! RUNS AT GAME ADVANCE ONCLICK



// MINDLESS COMPUTER PLAYER !!!



//SKILLED COMPUTER PLAYER !!!




///// TEST ARGUMENTS /////

// [DONE IN CONSOLE]

///// QUESTIONS /////

// let turnO = turnState.classList.contains('turnO') //ALWAYS RETURNS TRUE!! WHAT HECK! //returns true if turnState contains class 'turnO' ; doesn''t work for some reason
// let turnX = turnState.classList.contains('turnX') //ALWAYS RETURNS FALSE!! THIS WAS A FUN ONE! //returns true if turnState contains class 'turnX' ; doesn't work for ssome reason





// initialize()
console.log('loaded!')
