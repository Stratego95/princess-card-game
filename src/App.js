import * as React from 'react';
import { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import GamePage from './components/GamePage';
import { initDeck } from "./utils/generateObjects"

function App() {
  const [players, setPlayers] = useState([])
  const [startGame, setStartGame] = useState(false)
  const [deck, setDeck] = useState(undefined)

  const handleUpdatePlayers = (updatedPlayers) => {
    setPlayers(updatedPlayers)
  }

  const initGame = () => {
    setDeck(initDeck())
    setStartGame(true)
  }

  return (
    <div className="App">
      {!startGame &&
        <WelcomePage onStartGame={() => initGame()} onPlayersChanged={handleUpdatePlayers} />
      }
      {startGame &&
        <GamePage deck={deck} players={players} />
      }
    </div>
  );
}

export default App;
