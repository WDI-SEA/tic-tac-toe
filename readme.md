![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

#Tic Tac Toe

**Objective:** Build a tic tac toe game in HTML and pure JavaScript.

This week we have been learning about writing functions, working with loops, and writing conditionals. We also learned about HTML, CSS, and the DOM.

We will be making a Tic Tac Toe game using all of these concepts.

##Requirements
* A user should be able to click on different squares to make a move.
* Every click will alternate between marking an `X` and `O`
* Upon marking of an individual cell, use JavaScript to add a class to each cell to display separate colors.
* A cell should not be able to be replayed once marked.
* Add a reset button that will clear the contents of the board.

**Have Fun** - The best way to learn is by playing with code. Let creativity guide you and try some experiments with JS and CSS and see what you can do.

##How to get started

1. Fork and clone this repository.
2. Run `npm install` to install dependencies.
  * `npm start` - start BrowserSync server
  * `npm run lint:css` - lint CSS
  * `npm run lint:js` - lint JS
  * `npm run deploy` - deploy your app to Github Pages
3. Add your necessary HTML tags, including `script` and `link` tags to link to your JavaScript and CSS respecively. Be sure to create these files as well.
4. Before you even start working with JavaScript, construct the gameboard. The gameboard page should include the 3x3 grid (of divs), and at minimum a reset button. Using `id` and `class` on clickable elements will help you wire this up in JavaScript afterwards.
5. The Javascript portion will be next
  * Locate the element first to use it within your app. Think about using `getElementById`, `getElementsByClassName`, `querySelector`, or `querySelectorAll` to locate your target elements. Try this in your browser console to make sure your selection works.
  * After finding the elements, start writing logic to use an event listener for `click` against those elements.
  * You will also need a variable to keep track of moves. As this will be used to indicate whether or not to draw an `X` or an `O`

##Bonus

* Display a message to indicate which turn is about to be played.
* After the necessary moves have been played, stop game and alert the winner if one player ends up winning with three in a row.
  * Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.

##Super Bonus

Add a simple AI to support one player vs computer mode.

