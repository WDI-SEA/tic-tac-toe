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
    * reset score another option?
* select mode
    * multiplayer
    * singleplayer

## Feedback

* game over
* game reset
* X or O player's turn
* score keeping

## Players

* multiplayer
    * two humans
* singleplayer
    * one AI, one human

# Implementation

## Game Board

* 3x3 tiles
    * use a CSS grid
        * 1 parent div (board game)
        * 9 child divs (tiles)
    * tiles are numbered like a 2D array starting at 0,0
        * 0,0 being represented as zero-zero
* tile dimensions
    * auto size for wide screens
    * 75px by 75px seems okay for mobile

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
