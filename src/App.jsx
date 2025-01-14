import React from 'react';
import Board from './components/Board';

function App() {

  return (
    <div style={styles.containerSafe}>
      <div style={styles.container}>
        <Board />
      </div>
    </div>
  )
}

export default App


// Inline CSS for styling
const styles = {
  containerSafe: {
    flex: 1,
    height: '100vh',  // Ηeight 100vh to cover the full height of the screen
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
};
