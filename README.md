# Andres' Design of Tic-Tac-Toe for General Assembly

## Game Mechancis

* cannot mark an occupied box
* one mark per turn

## Game States

### Game Start

### Game In Progress

* alternate between X and O players
    * even / odd turn changes if X or O is printed

### Game Over States

* 3, of one type, in a row
    * player who last clicked gets victory
        * example: "X wins!" or "O wins!"
* 3, of one type, in a row impossible (draw)
    * results in a draw

## Options

* reset

## Feedback

* game over
* game reset
* X or O player's turn
* score keeping

## Players

* Two human players
* One AI, one human

# Implementation

## Game Board

* 3x3 tiles
    * use a CSS grid?
    * otherwise, we're talking 3 columns repeated 2 more times
        * seems like this would be unwieldy code
    * instructions say 3x3 grid of divs
        * does this conflict with css grid?
    * how to handle shared borders?

## Markers

* X for player 1
    * green
* O for player 2
    * red

## End Game

* board interaction disabled

## Reset

* do not refresh the page

## AI

* computer plays Xs
    * either pick randomly or
    * use mini-max algorithm (i assume computer must go first)
        * add a delay to computer turn (lame)
