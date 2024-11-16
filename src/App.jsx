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


// Inline CSS για styling
const styles = {
  containerSafe: {
    flex: 1,
    height: '100vh',  // Χρησιμοποιούμε height 100vh για να καλύψουμε όλο το ύψος της οθόνης
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
};