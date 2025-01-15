# Square Treasure Game

![react_native](<assets/rn.png>)

## Description

Square Treasure is a React-based game inspired by Minesweeper, where the objective is to find the hidden treasure (💎) on a grid. The grid cells display the distance to the treasure, and players need to flip the cells strategically to uncover it. The game is won when the player finds the treasure.

## How to Play

Hit this and play: https://sidavd.github.io/SquareTreasureB/

![Square Treasure Game](<assets/SquareTreasureGame_0.png>)

## Features

- **Responsive Design**: The board dynamically adjusts the number of columns based on the screen size (mobile or desktop).
- **Moves Counter**: Tracks the number of moves made by the player.
- **Win Condition**: Displays a "You Win" message when the treasure is found.
- **Game Restart**: Allows the player to restart the game at any time.
- **Dynamic Grid**: The grid is generated dynamically, with each cell showing the distance to the treasure or a unique treasure indicator when flipped.

![Square Treasure Game](<assets/SquareTreasureGame_1.png>)

## Technologies Used

- **React**: For building the user interface.
- **React Hooks**: Using `useReducer`, `useState`, and `useEffect` for managing game state.
- **CSS-in-JS**: Inline styles for styling the application.

## Game Instructions

1. The game is played on a grid of squares. Each square has a number or a symbol:
   - **Numbers**: Represent the distance to the treasure.
   - **💎**: Represents the hidden treasure.
   - **?**: Indicates squares that are far from the treasure (based on a certain threshold).
   
2. Click on a square to flip it and reveal its content. If it contains the treasure, you win the game.
3. The number of moves is tracked, and you can restart the game using the **Restart** button at the bottom.
4. The game is over once you find the treasure.

![Square Treasure Game](<assets/SquareTreasureGame_2.png>)





```bash
node -v
