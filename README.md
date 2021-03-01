# Key project 02: Card Game in Javascript

RED7 Cards game library in JavaScript

This project consists of a JavaScript library that represents the RED7 card game. You can find the original game rules <a href="https://github.com/martadell/RED7_js/blob/master/doc/Red7Rules.pdf">here</a>.

![screenshot](https://github.com/martadell/RED7_js/blob/master/doc/demo.gif)

This is a simplified\* version of the actual game. The game ends when there is only one player left (and it becomes the winner). Apart from the color rules I have implemented the action rules aswell, but theese are not available in the random demo. Since the game requires a lot of user interaction I could not simulate it with random numbers all the time (also the game ends really fast if you keep playing with random cards because each round the player has to win).

\*Does not include the point scoring system as mentioned. It does not include the advanced rule aswell (When you discard a card to the Canvas, if the number on that card is higher than the total number of cards in your Palette, you may draw an additional card from the Draw Deck (unless the Draw Deck is empty)).
