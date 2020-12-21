// page loads
// coordinate elements to variables
    const cells = document.querySelectorAll(".cell")
    const cellArray = Array.from(cells)

    const restartButton = document.querySelector(".restartButton");
    restartButton.addEventListener('click', ()=> {
        cells.forEach(cell => cell.value = '')
    });


    // document.querySelector(".restartButton").addEventListener("click", );

    // restartButton.addEventListener("click",() => {
    //     cellArray.forEach((cells, index => {
    //         cells[index] = null;
    //     }))
    // })
    

// whose turn it is use a if else with === and a for each for the cells clicked
    const playerDisplay = document.querySelector('.player')

    let currentPlayer = "PlayerX"
    let table = document.querySelector(".table")


    cells.forEach(cell => {
        cell.addEventListener("click", e=> {clickOutcome(e)})
    })
    function clickOutcome(e) {
        
    
        const indicator = cellArray.indexOf(e.target)
        playerDisplay.innerHTML = currentPlayer

        if(currentPlayer === "PlayerX") {
            cells[indicator].classList.add("PlayerX")
            currentPlayer = "PlayerO"
        } else {
            cells[indicator].classList.add("PlayerO")
            currentPlayer = "PlayerX"
        }
        
    }

    function checkForWin() {
        const choices = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const index = Math.floor(Math.random() * 3);
        
        if ((choices[index] === "1" && choices[index] === "2" && choices[index] === "3")
    }
//  random tries
    // const statusDisplay = document.querySelector("winningMessage")
    // letgameActive = true;
    // let gameState = ["", "", "", "", "", "", "", "", ""]

    // function render() {
    //     table.forEach(function(mark,index) {
    //         cells[index].textContent = mark;
    //     });
    // };

    // let board;
    // let turn = "X";

    // document.getElementByClass('table').addEventListener("click", handleTurn);

    // function handleTurn(e) {
    //     let idx = cells.findIndex(function(cell) {
    //         return cell === e.target;
    //     })
    // }



