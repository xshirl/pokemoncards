POKEMON CARDS

In this game, there will be two players. The first player selects five cards that have been randomly shuffled. When
the cards have been chosen, the backs of the cards will be shown, showing the pokemon on the player's team. These 
pokemon will be on the first player's team. Then the second player will select the remaining pokemon, and those 
pokemon will be on the second player's team. 

Then the game will initialize. Player 1 pushes the left key to fight while player 2 pushes the right key to fight. Every time
the player makes a move, the other player's pokemon will lose HP. The amount of HP lost depends on the effectiveness of the 
opponent's move. If it is super effective, the pokemon loses all of its HP. If it is not effective, the pokemon loses 25 HP.
If it is normal, 50 HP is lost. The players go back and forth until all the pokemon are beaten for one player. If there are no
more pokemon on the player's team, the other player is the winner. 

A winning player screen shows with the winning pokemon. A replay button is shown for the players to replay the game. 

Technologies Used:
HTML, CSS, Javascript, and Jquery were used. 

First the players input their names into the form, which is saved and used for later. The submit button's click triggers the page with the randomly shuffled cards to be shown. The cards were randomly shuffled using
a shuffle function that was taken from stackoverflow. This is the only part of the code that was taken from elsewhere. The 
remaining code is original. Objects with the pokemon, pokemon's name, type, and moves were declared. An array of all the objects
was also declared, and the shuffle function shuffled the array so the pokemon are random. Player 1 and player 2 have teams 
with the pokemon they have chosen. 
