<h1 align="center">
  <a href="http://thedevtron.com/projects/tic-tac-toe/">Tic Tac Toe</a>
</h1>

<p align="center">
  <strong>General Assembly Deliverable</strong>
  <br>
</p>

<p align="center">
  This project was done in week 1 of my code camp at General Assembly. We used a combination of HTML, CSS, and Javascript to create a functional tic tac toe website. 
</p>

<p align="center">
  <a href="https://twitter.com/intent/follow?screen_name=generalassembly">
    <img src="https://img.shields.io/twitter/follow/reactnative.svg?label=Follow%20@generalassembly" alt="Follow @generalassembly" />
  </a>
  <img src="https://img.shields.io/badge/Languages-HTML%20/%20CSS%20/%20JS-greeen" alt="Coding languages used are HTML, CSS, and Javascript">
</p>

# Language Breakdown

#### HTML

I used HTML to create a skeletal structure that I could then manipulate with CSS and javascript. I included a spot for my tic tac toe board, a header, score board, and a reset button after each game. In my HTML each box of the tic tac toe grid had a unique id of zero to nine to allow for me to assign each one in my clickedBoxes object. This was the easiest way for me at the time to assign values without having to clutter my javascript with further lines of code.

###### HTML Grid

```html
<div class="grid">
  <div class="box" id="box1"></div>
  <div class="box" id="box2"></div>
  <div class="box" id="box3"></div>
  <div class="box" id="box4"></div>
  <div class="box" id="box5"></div>
  <div class="box" id="box6"></div>
  <div class="box" id="box7"></div>
  <div class="box" id="box8"></div>
  <div class="box" id="box9"></div>
</div>
```

#### CSS

In my CSS I included styling to develop an overall theme for my project, I wanted each player to have a color specific to their move, and allow my html to render in a clear way. I setup my tic tac toe board using grid css and assigning the percentage to each column as auto so that spacing was even for each box.

###### CSS .Grid

```css
.grid {
  height: 500px;
  width: 500px;

  display: grid;
  grid-template-columns: auto auto auto;
  
  padding: 10px;

  background-color: #ffffff;
}
```

#### JS

##### Box Clicking

My javascript part of the project is the main brain. When the player clicks in the grid div it will take the target box and assign the current player's X or O to the box and prevent the next player from clicking on it. I implemented that feature by utilizing an Event Listener and some conditional code as shown below.

```javascript
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
```

This code snippet is essential in ensuring that I just don't have a grid with a bunch of X and O's, it will trigger the checkForWinner function that will go through all the winning combinations in another checkForMatch function to eventually see if we need to end the game if someone won or they tied. If a player clicks on a box that was already clicked on previously that box was added to the clickedBoxes object with their html id so that I can sort through each one. We also assign the player who clicked that previous box in the event listener.

##### Hover Coloring

This code snippet has need for refining and should be modified to either work entirely in CSS or work in a way that a timeout function is not necessary to revert the coloring of a box that was hovered. This code snippet pretty much takes the current hovered over box from the mouse and colors it with the current player's color and ignoring any box that has been selected. The idea behind this is that it offers another visual clue to the player as it's something they can interact with and choose as their option for a move. If you wanted to try and teach a user the most effective strategies to tic tac toe you could probably utilize this feature by making the best move off the current board be a bright green and orange for an okay move and red for a completely bad move. 

```javascript
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
```


