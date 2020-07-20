document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector('.grid')
    const reset = document.querySelector('#reset')
    const xScoreBox = document.querySelector('#xScore')
    const oScoreBox = document.querySelector('#oScore')
    const tieScoreBox = document.querySelector('#tieScore')
    const currentPlayerBox = document.querySelector('#currentPlayer')

    let clickedBoxes = {}

    let currentPlayer = "X"
    let xScore = 0
    let oScore = 0
    let tieScore = 0
    let gameWon = false

    grid.addEventListener("click", (e) => {
        var box = e.target
        

        if (box.className === "grid") { return }
        
        if (clickedBoxes[box.id] == null && gameWon === false) {
            clickedBoxes[box.id] = {}
            clickedBoxes[box.id].player = currentPlayer


            if (currentPlayer === "X") {
                box.classList.add("playerX")
                
                currentPlayer = "O"
                currentPlayerBox.innerText = `Current Player: ${currentPlayer}`
            } else {
                box.classList.add("playerO")

                currentPlayer = "X"
                currentPlayerBox.innerText = `Current Player: ${currentPlayer}`
            }
            
            checkForWinner(clickedBoxes)
        }
    })

    grid.addEventListener("mouseover", (e) => {
        var box = e.target

        if (box.className === "grid" || box.className === "box playerX" || box.className === "box playerO" || gameWon === true) { return }
    
        if (currentPlayer === "X") {
          box.style.backgroundColor = "DarkTurquoise"
        } else {
          box.style.backgroundColor = "Orange"
        }
      
        // reset the color after a short delay
        setTimeout(function() {
          box.style.backgroundColor = ""
        }, 100)
    })

    reset.addEventListener("click", () => {
        gameWon = false

        let allBoxes = Array.from(grid.children)
        
        gameWon = false

        currentPlayer = "X"
        currentPlayerBox.innerText = "Current Player: X"

        allBoxes.forEach(box => {
            box.className = "box"
        })

        clickedBoxes = {}
    })

    checkForWinner = (clickedBoxes) => {

        //For sure a better way to do this (Refactor if time)
        checkForMatch(clickedBoxes["box1"], clickedBoxes["box2"], clickedBoxes["box3"])
        checkForMatch(clickedBoxes["box4"], clickedBoxes["box5"], clickedBoxes["box6"])
        checkForMatch(clickedBoxes["box7"], clickedBoxes["box8"], clickedBoxes["box9"])
        checkForMatch(clickedBoxes["box1"], clickedBoxes["box4"], clickedBoxes["box7"])
        checkForMatch(clickedBoxes["box2"], clickedBoxes["box5"], clickedBoxes["box8"])
        checkForMatch(clickedBoxes["box3"], clickedBoxes["box6"], clickedBoxes["box9"])
        checkForMatch(clickedBoxes["box1"], clickedBoxes["box5"], clickedBoxes["box9"])
        checkForMatch(clickedBoxes["box3"], clickedBoxes["box5"], clickedBoxes["box7"])
        
        if (gameWon === false) {
            checkForTie(clickedBoxes)
        }
    }

    checkForMatch = (firstBox, secondBox, thirdBox) => {
        if (gameWon === true) { return }

        let xBox = 0
        let oBox = 0
        let checkedBoxes = [firstBox, secondBox, thirdBox]

        checkedBoxes.forEach(checkedBox => {
            if (checkedBox == null) { return; }
            if (checkedBox.player === "X") {
                xBox++
            } else {
                oBox++
            }
        })

        if (xBox === 3) {
            triggerWin("X")
            gameWon = true
        } else if (oBox === 3) {
            triggerWin("O")
            gameWon = true
        }
    }

    checkForTie = (clickedBoxes) => {
        if (Object.keys(clickedBoxes).length === 9) {
            if (gameWon === false) {
                triggerWin("TIE")
                gameWon = true
            }
        }
    }

    triggerWin = (playerWinner) => {

        if (playerWinner === "X") {
            xScore++

            xScoreBox.innerText = xScore

            setTimeout(function() {
                alert("Player X has Won!");
            }, 0)

        } else if (playerWinner === "O") {
            oScore++

            oScoreBox.innerText = oScore

            setTimeout(function() {
                alert("Player O has Won!");
            }, 0)
        } else {
            tieScore++

            tieScoreBox.innerText = tieScore

            setTimeout(function() {
                alert("CAT has Won!");
            }, 0)
        }
    }

})
