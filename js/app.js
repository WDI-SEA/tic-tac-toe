
window.addEventListener("DOMContentLoaded", () => {
    // Capture DOM elements from page to store as vars
    let displayResults = document.getElementById("displayResults")
    let resetBtn = document.getElementById("reset")
    let gameboard = document.getElementById("gameboard")
    let displayTurn = document.getElementById("displayTurn")
    // set intial turn message
    displayTurn.innerText = "Brazil goes first."

    // Create or declare all game logic variables and conditions
    let turnNum = 0
    let playerB = []
    let playerA = []

    let winCombo = [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["0", "4", "8"],
        ["2", "4", "6"],
        ["2", "5", "8"],
        ["1", "4", "7"],
        ["0", "3", "6"]
    ]

    // FUNCTION: boxClick() --> triggers game tile play
    function boxClick(event) {
        let tileCheck = event.target

        //// if box already played, alert user to find a new game tile to play
        if (tileCheck.classList.contains("playedB") || tileCheck.classList.contains("playedA")) {
            displayTurn.innerText = "Tile already played. Click again."
        } else {
            //// check for X or O turn and display message in displayTurn box accordingly
            if (turnNum % 2 === 0) {
                // LOGIC FOR PLAYER X's TURN

                // add the playedX class to target div
                tileCheck.classList.add("playedB")

                // update innerText of target div to say X
                tileCheck.innerText = "🇧🇷"

                // update the text for player's turn to be played next (O's turn)
                displayTurn.innerText = "Argentina's turn."

                // update turnNum by 1
                turnNum++

                // push to array played tile #id
                playerB.push(tileCheck.id)
            } else {
                // LOGIC FOR PLAYER O's TURN
                tileCheck.classList.add("playedA")
                tileCheck.innerText = "🇦🇷"
                displayTurn.innerText = "Brazil's turn."
                turnNum++

                // push play id
                playerA.push(tileCheck.id)
            }
            //// if greater than 4 turns then check to see if game has been won
            if (turnNum >= 4) {
                gameOver()
            }

            //// check and see if there have been x9 turns but no winner; call tied game
            if (turnNum === 9) {
                gameOver()

                if (displayTurn.innerText !== "") {
                     displayResults.innerText = "GAME TIED"
                    displayTurn.innerText = "PLAY AGAIN"
                    stopGame()
                }

            }
        }
    }
    // add event listener on user click of game tile
    gameboard.addEventListener("click", boxClick)

    // FUNCTION: gameOver() --> checks if winner of game
    //// check and see if there is a winner on every turn
    function gameOver() {
        // loop through all possible win combos (winCombo array)
        for (let i = 0; i < winCombo.length; i++) {
          // console.log(`Current array: ${winCombo[i]}`)
      
          // if user has had any matches for x or O so far AKA declare count for x and O
          let winFoundB = 0
          let winFoundA = 0
          // loop through individual win combo
          for (let y = 0; y < winCombo[i].length; y++) {
            //console.log(`Current id: ${winCombo[i][y]}`)
            if (playerB.includes(winCombo[i][y])){
              winFoundB++
              if (winFoundB === 3) {
                ////// send message to displayResults div and displayTurn div
                displayResults.innerText = "Brazil has won the game!"
                displayTurn.innerText = ""
                //// if player has won, run stopGame()
                stopGame()
              }
            }
      
            if (playerA.includes(winCombo[i][y])) {
              winFoundA++
              if (winFoundA === 3) {
                displayResults.innerText = "Argentina has won the game!"
                displayTurn.innerText = ""
                stopGame()
              }
            }
          }
        }
      }

    // FUNCTION: stopGame() --> doesn't allow for further game play once game won
    function stopGame() {
        gameboard.removeEventListener("click", boxClick)
    }

    // FUNCTION: resetGameboard() --> add event listener to #reset button on click
    resetBtn.addEventListener("click", function resetGameboard() {
        
        // loop through all gameboard tiles and remove any classes that are not gameTile
        let gameTiles = document.getElementsByClassName("gameTile")

        for (let i = 0; i <gameTiles.length; i++) {
            gameTiles[i].classList = "gameTile" 
            gameTiles[i].innerText = ""
        }

        // update player turn message as if game has re-started; player x plays first
        displayTurn.innerText = "Brazil goes first."
        displayResults.innerText = ""

        // re-set all starting variables to initial values
         turnNum = 0
         playerB = []
         playerA = []

        // add back click event listener to gameboard
        gameboard.addEventListener("click", boxClick)
    })
})
