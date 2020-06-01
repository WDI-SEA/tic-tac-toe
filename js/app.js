console.log('loading jscript...');

///// META /////

// .CHANGES STATE (TO REPRESENT/DISPLAY X OR O)

///// VARIABLES AND CONSTANTS /////


///// DOM GETS /////

let turnDisplay = document.getElementById('turnDisplay'); //h2 with id 'turnDisplay, contains text of who's turn it is
let turnState = document.getElementById('gameSpace'); //div with id 'gameSpace', contains all rows and cels
let cels = document.getElementsByClassName('cel'); //array of all class 'cel'
let colors = ["#cc2f66", "#8e25a1", "#c4c42d",
  "#e38f29", "#47d111", "#52abba",
  "#d9144f", "#b73ec7", "#f0b837"]
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
  cels[i].style.background = "light blue"
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
  let celCL = cel.classList
  document.getElementById(cel.id).addEventListener('click', function (e) {
    document.querySelector('body').style.background = colors[i]
    document.getElementById('header').style.color = "black"
    document.getElementById('turnDisplay').style.color = "black"
    document.getElementById('header').textContent = "CAT-LOAF X DOGLOAF -- ULTIMATE DEATHMATCH!!!"
    if (cel.classList.contains('clicked') === true) { return }
    else if (turnState.classList.contains('turnX') === true) {
      //writeToWinData(parseLocs(celCL))
      updateWinState(celCL)
      writeTurn()
      drawX(cel)
      checkForWin()
      //declareDraw()
      advanceTurn(cel)
    }
    else if (turnState.classList.contains('turnO') === true) {
      updateWinState(celCL)
      //writeToWinData(parseLocs(celCL))
      writeTurn()
      drawO(cel)
      checkForWin()
      //declareDraw()
      advanceTurn(cel)
    }
    console.log('error in onclick')
  }
  )
}

// document.getElementById('resetButton').addEventListener('click', function (e) {
//   initialize()
// })

///// FUNCTIONS /////

// if a cel is clicked/cel.classList.contains 'clicked' = true/ loops on itself while true
// function checkClickState(cel) {
//   if (cel.classList.contains('clicked') === true) {
//   return  
//   }
//   console.log('let\'s go')

//WRITETOWINDATA
// updates object-list winData, ++ to each row or column value for corresponding class that appears in cel clicked on (Call in drawO, drawX)



//else {
// }

// function toggleX(c) {
//   {
//   c.classList.toggle('x')  
//   }
//   return
// }

//set element to linear gradient, accepts 3 arguments !!!

// //array of keys as variables from winData{}
// const winDataKeys = ['r1', 'r2', 'r3', 'r4', 'r5', 'c1', 'c2', 'c3']
// //object representing player win potential (3 in any one key is a win state)
// const winData = { 'r1': 0, 'r2': 0, 'r3': 0, 'r4': 0, 'r5': 0, 'c1': 0, 'c2': 0, 'c3': 0 }

//WRITETOWINDATA
// helper function, writes ++ to object value within winData, based on row and/or column class in cel clicked (will use variable c for local DOM ref)

//PARSELOCS helper for writeToWinData (classList)
//returns classList, parsed against contains() of each member of list locData (this is unnecessary, but ima do it anyway!)\
//LOCDATA = list of cel classes that denote locational data (row, column)
let locData = ['r1', 'r2', 'r3', 'r4', 'r5', 'c1', 'c2', 'c3']
let testList = ['blah', 'r1', 'r2', 'blah']
// let newCL = []



function parseLocs(c) {
  let newCL = []

  for (i = 0; i < c.length; i++) {
    if (locData.includes(c[i])) {
      newCL.push(c[i])
    } else {
      console.log('error, please ignore')
    }
  }
  //console.log(newCL)
  return newCL
}


//WRITE_TO_WIN_DATA (classlist)
// accepts classlist and element, then ++ each key in winData with corresponding class in list
// c.forEach(c => {
//   (Object.keys(winData))
// })

function writeToWinData(clist) {
  if (turnState.classList.contains('turnX')) {
    for (i = 0; i < clist.length; i++) {
      //console.log(clist[i])
      winDataX[clist[i]]++
    }
  } else if (turnState.classList.contains('turnO')) {
    for (i = 0; i < clist.length; i++) {
      //console.log(clist[i])
      winDataO[clist[i]]++
    }
  } else {
    console.log('error in writeToWinData')
  }
}

//UPDATE_WIN_STATE
// runs classlist through parseLocs, then through writeToWinData

function updateWinState(c) {
  writeToWinData(parseLocs(c))
}

//CHECK_FOR_WIN
// checks on event gamestate for a win, any value of three in winData (object) signifies a win.
// checks each key in winData and compares === 3

function checkForWin() {
  if (Object.values(winDataX).includes(3) === true) {
    console.log('x wins')
    for (i = 0; i < cels.length; i++) {
      cels[i].classList.add('clicked')
    }
    turnDisplay.textContent = "CATLOAF IS WINNER!"
    return
  } else if (Object.values(winDataO).includes(3) === true) {
    console.log('o wins')
    for (i = 0; i < cels.length; i++) {
      cels[i].classList.add('clicked')
    }
    turnDisplay.textContent = "DOGLOAF IS BEST! LONG LIVE DOGLOAF!"
    return
  } else {
    return
  }
}

// places an X (catloaf) on a cel, 
function drawX(c) {
  c.classList.add('clicked')
  c.classList.add('sideX')
  c.style.background = "url('img/catloaf.jpg')"
  //writeToWinData(c)
  //c.textContent = 'X'
}

// places an O (dogloaf) on a cel
function drawO(c) {
  c.classList.add('clicked')
  c.classList.add('sideO')
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



// CHECKWIN  // ORIGINAL ATTEMPT USING OBJECTS MOVED TO QUESTIONS SECTION (DUMPSTER FIRE)

// maybe i've been making this too complicated, if statements for days. I may try to rewrite this as a switch()

function checkWinState() {
  if ((winData.r1 >= 3) || (winData.r2 >= 3) || (winData.r3 >= 3) || (winData.r4 >= 3) || (winData.r5 >= 3) || (winData.c1 >= 3) || (winData.c2 >= 3) || (winData.c3 >= 3)) {
    //winnerstate
  } else {
    return
  }
}           // that wasn't so bad.




//array of keys as variables from winData{} // not used
let winDataKeys = ['r1', 'r2', 'r3', 'r4', 'r5', 'c1', 'c2', 'c3']
//object representing player win potential (3 in any one key is a win state)
let winDataX = { 'r1': 0, 'r2': 0, 'r3': 0, 'r4': 0, 'r5': 0, 'c1': 0, 'c2': 0, 'c3': 0 }
let winDataO = { 'r1': 0, 'r2': 0, 'r3': 0, 'r4': 0, 'r5': 0, 'c1': 0, 'c2': 0, 'c3': 0 }
// let windata = [1,2,3,4,5,6,7,8]
// const winDataKeys = ['r1', 'r2', 'r3', 'r4', 'r5', 'c1', 'c2', 'c3']




//GARBAGE DATA GOES HERE///////////////////////////////
// let windata = [1,2,3,4,5,6,7,8]
// const winDataTest = { r1: 0, r2: 3, r3: 0, r4: 0, r5: 0, c1: 0, c2: 0, c3: 0 }
// let r1 = 0; let r2 = 0; let r3 = 0; let r4 = 0; let r5 = 0; let c1 = 0; let c2 = 0; let c3 = 0; //Ask about a cleaner way to do this
// winDataKeys = { 1, 2, 3, 4, 5, 1, 2, 3 }
///////////////////////////////////////////////////////

// //array of keys as variables from winData{}
// const winDataKeys = ['r1', 'r2', 'r3', 'r4', 'r5', 'c1', 'c2', 'c3']
// //object representing player win potential (3 in any one key is a win state)
// const winData = { 'r1': 0, 'r2': 0, 'r3': 0, 'r4': 0, 'r5': 0, 'c1': 0, 'c2': 0, 'c3': 0 }

// // takes an array of like nodes class c1,c2,c3 or r1,r2,r3... and counts occurences of class "clicked"
// function checkCelsByClicked() {
//   let winDataLocal = winData
//   for (i = 0; i < cels.length; i++) {
//     if (cels[i].classList.contains("clicked") === true) {
//       winDataLocal.winDataKeys[i]++
//       checkWin(winDataKeysLocal)
//     } else {
//       return
//     }
//   }
// }

// //CHECKWIN
// // accepts argument of type winData, if any winData[].key === 3, ends game with winner based on turnState 'turnX' or 'turnO'
// function checkWin(WDK) {
//   if (... >= 3) {
//     getElementsByClassName('cel').classList.add('clicked')
//     turnDisplay.textContent = turnState.classList[1]
//   } else {
//     return
//   }

// }

// console.log('huzzah!') // I was starting to lose it at this point :)

// helper function
// function getClassFromCel(cel, cls) {
//   if (cel.classList.contains(cls) === true) {
//     return cls
//   } else
//     return
// }

// function getClassesFromCels(cel, cls) {
//   cels.forEach(getClassFromCel(cel, cls))
// } first try, start over

// function checkCelsByClass(cls) {
//   cels.forEach(function (cls){
//     if (cel.classList.contains(cls) === true) {
//       return cls
//     } else
//       return
//   })
// } EFF IT IF JS WANTS TO BE DIFFICULT I'LL DO IT THE EASY WAY

// ends game if any sideO or sideX has any one of their winCheck tallies reach 3
// also ends game if all nine cells are clicked and there is no winner


//displays player turn in h2 'turnDisplay', based on gameSpace class'turnX'or 'turnO'
function writeTurn(c) {
  if (turnState.classList.contains('turnX') === true) {
    turnDisplay.textContent = 'It\'s Dogloaf\'s turn! Woof!'
  }
  else if (turnState.classList.contains('turnO') === true) {
    turnDisplay.textContent = 'Catloaf! Your turn to choose!'
  }
  else {
    turnDisplay.textContent = "error in writeTurn"
  }
}

// resets game state !!!
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




///// TEST ARGUMENTS /////  [DONE IN CONSOLE]




///// QUESTIONS /////

// TRYING TO OPERATE ON A LIST OF ELEMENTS IS GOING TO KILL ME //UPDATE I DID A DUMB THING (KEY VALUES ARE SUPPOSED TO BE STRINGS)
// helper function
// function getClassFromCel(cel, cls) {
//   if (cel.classList.contains(cls) === true) {
//     return cls
//   } else
//     returN
//}

// function getClassesFromCels(cel, cls) {
//   cels.forEach(getClassFromCel(cel, cls))
// } first try, start over

// function checkCelsByClass(cls) {
//   cels.forEach(function (cls){
//     if (cel.classList.contains(cls) === true) {
//       return cls
//     } else
//       return
//   })
// } NOT SURE WHAT I'M DOING WRONG. I'LL COME BACK TO THIS IF I'M ABLE

// const winData = {"r1": 0, "r2": 0, "r3": 0, "r4": 0, "r5": 0, "c1": 0, "c2": 0, "c3": 0}
// const winDataTest = {"r1": 0, "r2": 2, "r3": 0, "r4": 0, "r5": 1, "c1": 0, "c2": 0, "c3": 0}
// //array of keys AS NUMBERS from winData{}
// let r1=0;let r2=0;let r3=0;let r4=0;let r5=0;let c1=0;let c2=0;let c3=0; //Ask about a cleaner way to do this
// winDataKeys = {r1, r2, r3, r4, r5, c1, c2, c3}

// let turnO = turnState.classList.contains('turnO') //ALWAYS RETURNS TRUE!! WHAT HECK! //returns true if turnState contains class 'turnO' ; doesn''t work for some reason
// let turnX = turnState.classList.contains('turnX') //ALWAYS RETURNS FALSE!! THIS WAS A FUN ONE! //returns true if turnState contains class 'turnX' ; doesn't work for ssome reason

// document.getElementById('header').createRadialGradient(200, 200, 300, 400, 400, 500)
// document.getElementById('body').addColorStop(0, "red")
// document.getElementById('body').addColorStop(1, "orange")
// document.getElementById('body').fillStyle = grd
// document.getElementById('body').fillRect(0,0, 1200, 725)

// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");

// var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");
// Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 100); :(


// const winData = { r1: 0, r2: 0, r3: 0, r4: 0, r5: 0, c1: 0, c2: 0, c3: 0 }   SCRAPPED!
// const winDataTest = { 1: 0, 2: 3, 3: 0, r4: 0, r5: 1, c1: 0, c2: 1, c3: 0 }
// //array of keys as variables from winData{}
// let r1 = 0; let r2 = 0; let r3 = 0; let r4 = 0; let r5 = 0; let c1 = 0; let c2 = 0; let c3 = 0; //Ask about a cleaner way to do this
// winDataKeys = { 1, 2, 3, 4, 5, 1, 2, 3 }


// initialize()
console.log('loaded!')
