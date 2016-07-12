![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

#Tic Tac Toe

##Objectives

* Build a tic tac toe game in HTML, CSS, and vanilla JavaScript
* Use best practices when writing code

This week we have been learning about writing functions, working with loops, and writing conditionals. We also learned about HTML, CSS, and the DOM.

We will be making a Tic Tac Toe game using all of these concepts.

##Getting Started

* Fork and clone this repository.
* Run `npm install` to install dependencies.
  * `npm start` - start BrowserSync server
  * `npm run lint:css` - lint CSS
  * `npm run lint:js` - lint JS
* Before you even start working with JavaScript, construct the gameboard. The gameboard page should include the 3x3 grid (of divs), and at minimum a reset button. Using `id` and `class` on clickable elements will help you wire this up in JavaScript afterwards.
* The JavaScript portion will be next
  * Select elements and attach functions via event listeners
  * You will also need a variable to keep track of moves. This will be used to indicate whether or not to draw an `X` or an `O`

##Requirements
* A user should be able to click on different squares to make a move.
* Every click will alternate between marking an `X` and `O`
* Upon marking of an individual cell, use JavaScript to add a class to each cell to display separate colors.
* A cell should not be able to be replayed once marked.
* Add a reset button that will clear the contents of the board.

**Have Fun** - The best way to learn is by playing with code. Let creativity guide you and try some experiments with JS and CSS and see what you can do.

##Bonuses

* Display a message to indicate which turn is about to be played.
* After the necessary moves have been played, stop game and alert the winner if one player ends up winning with three in a row.
  * Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.
* Add a simple AI to support one player vs computer mode. Note that randomly selecting a space would count as "simple". Try that and iterate from there.

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
