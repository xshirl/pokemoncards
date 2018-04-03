POKEMON CARDS

Wireframe: https://github.com/xshirl/pokemoncards/blob/master/img/wireframe.jpg
GitHub Page: https://xshirl.github.io/pokemoncards/

SUMMARY
In this game, there will be two players. The first player selects five cards that have been randomly shuffled. When
the cards have been chosen, the backs of the cards will be shown, showing the pokemon on the player's team. These 
pokemon will be on the first player's team. Then the second player will select the remaining pokemon, and those 
pokemon will be on the second player's team. 

Then the game will initialize. Player 1 pushes the LEFT key to fight while player 2 pushes the RIGHT key to fight. Every time
the player makes a move, the other player's pokemon will lose HP. The amount of HP lost depends on the effectiveness of the 
opponent's move. If it is super effective, the pokemon loses all of its HP. If it is not effective, the pokemon loses 25 HP.
If it is normal, 50 HP is lost. The players go back and forth until all the pokemon are beaten for one player. If there are no
more pokemon on the player's team, the other player is the winner. 

A winning player screen shows with the winning pokemon. A replay button is shown for the players to replay the game. 

INSTRUCTIONS
1. Input your name.
2. Select five cards.
3. Press LEFT key if you're player 1 and RIGHT key if you're player 2 to fight. 

TECHNOLOGIES AND WIREFRAMES
HTML, CSS, Javascript, and Jquery were used. I wireframed the game to have a landing page, a game initalization page, a game play page, and a game winner page. 

MVP:
Game initialization:
shuffling cards
displaying backs of cards
flipping cards - CSS transitions
pushing pokemon into player's array
create pokemon objects with name, type, HP, moves
Game play:
Show pokemon
Fight
first pokemon is one with higher speed, if/else compare speeds
Pull move from move array from pokemon object
Update HP for both pokemon
Take turns
Change pokemon when pokemon's HP is zero.
See end of game when one player has no more pokemon.

I used Jquery for the game logic, for example, when the pokemon battle, I integrated if else statements so that based on the pokemon's type, a certain amount of HP would be lost for the opponent's pokemon. I also used Jquery to create the pokemon objects with their name, type, and moves so I can use that later in the game. Later in the game, I show the name, moves and next pokemon up on the screen. 

EXPLANATION OF GAME
First the players input their names into the form, which is saved and used for later. The submit button's click triggers the page with the randomly shuffled cards to be shown. The cards were randomly shuffled using
a shuffle function that was taken from stackoverflow. This is the only part of the code that was taken from elsewhere. The 
remaining code is original. Objects with the pokemon, pokemon's name, type, and moves were declared. An array of all the objects was also declared, and the shuffle function shuffled the array so the pokemon are random. Player 1 and player 2 have teams with the pokemon they have chosen. Press play game and you are brought to the fighting page. The last pokemon chosen for each player is pitted against each other. Press LEFT and player 1 moves, and press RIGHT and player 2 moves. I made if/else statements where, depending on the pokemon's type, the opponent's pokemon loses a certain amount of HP, ranging from not effective (25 HP) to super effective (100 HP). The players go back and forth until there are no more pokemon left for one of the players, then the other player wins. The winning page is brought with the winning pokemon and a winner stated. A replay button is on the winning player page. 

FEATURES
- randomly shuffled deck of pokemon cards
- HP Bar that keeps track of the pokemon's HP. It goes down when the opponent makes a move. 
- Shows next pokemon that is in line to fight
- shows number of wins that the player has
- Shows pokemon move that is being used
- Shows winner at the end of the game
- Replay button

CONSTRAINTS
I wanted the players to alternate while selecting cards, but I couldn't figure out the logic of it so I instead just had the 
first player select five cards first and leave the remaining five to the next player. The players have to select the cards
to push each pokemon into the player's team. 

I couldn't figure out why the text moves down when the pokemon fight or why the winner's text moves right with the transition of the card in the winner's page. 

