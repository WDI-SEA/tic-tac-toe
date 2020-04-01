console.log('test');

//initialized variables
const gameSlots = document.querySelectorAll('#slots')

//initialized
let isItLive = true;
let checkXturn = true;

//turn tracking variables/elements

//handlers
const handleSlot = (e) => {
  
    const classList = e.target.classList;


    const domLocal = classList[1];

  

    //permanent checks, in turns
    /*credit to justin kim YouTube walkthrough for breaking down the targeting of elements of classList behaving as array elements, and being able to return nothing to enable turn by turn logic. was unsure how to write that out by syntax and how to target correctly. That was my biggest interal fear and obstacle in TTT homework. The other stuff I can figure out. 
    https://www.youtube.com/watch?v=Rzhcb4M9-0Q
    */
    if (classList[2] === 'O' || classList[2] === 'X') {
        return;
    }
    
    if (checkXturn) {
        classList.add('X');
        winConCheck();
        checkXturn = !checkXturn;
    }
    else{
        classList.add('O');
        winConCheck();
        checkXturn = !checkXturn;
    }
};



//listeners 
for (const gameSlot of gameSlots) {
    gameSlot.addEventListener('click', handleSlot)
    
};
//Win conditions && checking 


const winConCheck = () => {
    // 0, 1, 2
    // 3, 4, 5
    // 6, 7, 8
    // 0, 3, 6
    // 1, 4, 7
    // 2, 5, 8
    // 0, 4, 8
    // 2, 4, 6
//      theoretical targeting of class and or ID positions to declare win conditions for either X or O. 

    const one = gameSlots[0].classList[2];
    const two = gameSlots[0].classList[2];
    const three = gameSlots[1].classList[2];
    const four = gameSlots[2].classList[2];
    const five = gameSlots[3].classList[2];
    const six = gameSlots[4].classList[2];
    const seven = gameSlots[5].classList[2];
    const eight = gameSlots[6].classList[2];
    const nine = gameSlots[7].classList[2];

    if (one && two && three === 'X')
    //fill out the rest and debug to require all 3 slots at a time
    console.log('you win');
}
var one = slots[0].classList[2];
console.log(one);



//Win alert

//computer simple AI opponent via math.random to generate AI movement/choice. 

