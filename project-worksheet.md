# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

I am making a pokemon card game. The games starts with two players entering their names
on the landing page. When they submit their names, we enter the game initialization page. 
There will be 10 cards on the page that have been shuffled randomly. The back side of the card
is showing, not showing the pokemon. Player 1 will choose a card by clicking on it, and the card
will flip over and the pokemon joins Player 1's team. Player 2 will choose a card and that card
will be on player 2's team. After all the cards have been chosen, there will be a Play button. 
The pokemon on the cards will face each other. They will have 2 moves with type of moves listed.
If the move is super effective against the other, the other pokemon will lose. If it is normal effectiveness, 1/2 of the HP will be reduced. If it is weak against the other, 1/4 of the HP will be reduced. If the pokemon loses, has zero HP, the next pokemon will show up. This will continue until one player has no more pokemon so the other player wins the game. 


## Wireframes

Include images of your wireframes. 
![Image of wireframe]
(https://github.com/xshirl/pokemoncards/blob/master/img/wireframe.jpg)

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

- Creating Landing Page - high priority, low time
- Creating Game Initialization Page - high priority, high time 
    - shuffling cards
    - displaying backs of cards
    - flipping cards - CSS transitions
    - pushing pokemon into player's array
    - create pokemon objects with name, type, HP, moves
- Game play - high priority, high time
    - Show pokemon
    - Fight
    - first pokemon is one with higher speed, if/else compare speeds
    - Pull move from move array from pokemon object
    - Update HP for both pokemon
    - Take turns
    - Change pokemon when pokemon's HP is zero. 
    - See end of game when one player has no more pokemon. 
## Game Components

### Landing Page
What will a player see when they start your game?
They will see a screen with form to fill out their names and submit button. 
### Game Initialization
What will a player see when the game is started? 
Two rows of five cards each and a play button.
### Playing The Game
What will be the flow of the game, what will the user be expeted to do and what will the user expect from the gam
There will be two fight buttons, one for player1 and one for player 2. When
the fight button is pressed, the pokemon makes a move. If the move is super 
effective, the other pokemon loses all of its HP. THe next pokemon comes up.
If the move is normal, half of HP loses. If the move is not effective,
the pokemon loses 1/4 HP. 
### Winning The Game
What does it look like when the game ends, what determines winning or losing?
When all the pokemon for one player is gone, the player loses and the other
wins. The screen shows Player wins. 
### Game Reset
How will the user restart the game once it has been completed.
There will be a replay button. 
## MVP 

Include the full list of features that will be part of your MVP 
- Creating Landing Page 
- Game play 
    - create pokemon objects with name, type, HP, moves
    - push pokemon that has been clicked on into players' arrays
    - Show fighting pokemon on screen
    - Fight - press fight button
    - first pokemon is one with higher speed, if/else compare speeds
    - Pull move from move array from pokemon object
    - Update HP for both pokemon
    - Take turns - assign true/false, alert
    - Change pokemon when pokemon's HP is zero. 
    - See end of game when one player has no more pokemon.
## POST MVP
- Creating Game Initialization Page 
    - shuffling cards
    - displaying backs of cards 
    - flipping cards - CSS transitions to show pokemon
    - pushing pokemon into player's array
    - displaying pokemon on each team

Include the full list of features that you are considering for POST MVP
## Functional Components
 
function showBoard - show deck of cards
function shuffleArray - shuffle array function
function startGame - if/else statements that go through the game moves
function endGame - clears board/player wins alert


Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Component 1 | H | 10hrs| 12hrs | 12hrs |
| Total |  | 10hrs| 12hrs | 12hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
