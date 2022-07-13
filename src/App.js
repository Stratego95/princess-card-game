import * as React from 'react';
import { useState } from 'react';
import WelcomePage from './components/WelcomePage';

function App() {
  const [players, setPlayers] = useState([])
  const [startGame, setStartGame] = useState(false)

  const handleUpdatePlayers = (updatedPlayers) => {
    setPlayers(updatedPlayers)
  }

  return (
    <div className="App">
      {!startGame &&
        <WelcomePage onStartGame={() => setStartGame(true)} onPlayersChanged={handleUpdatePlayers} />
      }
      {startGame &&
        <h1>Start game</h1>
      }
    </div>
  );
}

export default App;
