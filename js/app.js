document.addEventListener("DOMContentLoaded", (e) => {
// page loads
// coordinate elements to variables
const cells = document.querySelector(".table")

// whose turn it is use a if else with === and a for each for the cells clicked
const playerDisplay = document.querySelector('.player')

let currentPlayer = "PlayerX"

cells.forEach(cell => {
    cell.addEventListener("click", clickOutcome)
})

function clickOutcome(e) {
 const cellArray = Array.from(table)
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