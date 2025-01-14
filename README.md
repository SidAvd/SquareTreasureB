# Square Treasure Game

## Description

Square Treasure is a React-based game inspired by Minesweeper, where the objective is to find the hidden treasure (💎) on a grid. The grid cells display the distance to the treasure, and players need to flip the cells strategically to uncover the treasure. The game is won when the player finds the hidden treasure.

## Features

- **Responsive Design**: The board dynamically adjusts the number of columns based on the screen size (mobile or desktop).
- **Moves Counter**: Tracks the number of moves made by the player.
- **Win Condition**: Displays a "You Win" message when the treasure is found.
- **Game Restart**: Allows the player to restart the game at any time.
- **Dynamic Grid**: The grid is generated dynamically, with each cell showing the distance to the treasure or a unique treasure indicator when flipped.

## Technologies Used

- **React**: For building the user interface.
- **React Hooks**: Using `useReducer`, `useState`, and `useEffect` for managing game state.
- **CSS-in-JS**: Inline styles for styling the application.

## How to Play

1. The game is played on a grid of squares. Each square has a number or a symbol:
   - **Numbers**: Represent the Manhattan distance to the treasure.
   - **💎**: Represents the hidden treasure.
   - **?**: Indicates squares that are far from the treasure (based on a certain threshold).
   
2. Click on a square to flip it and reveal its content. If it contains the treasure, you win the game.
3. The number of moves is tracked, and you can restart the game using the **Restart** button at the bottom.
4. The game is over once you find the treasure.

## Getting Started

Follow these steps to set up and run the game locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system. You can check by running:

```bash
node -v
