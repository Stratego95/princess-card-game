import * as React from 'react';
import { useState, createContext } from 'react';
import SetUpGame from './components/SetUpGame';
import GamePage from './components/GamePage';
import { initDeck } from "./utils/generateObjects"

export const playersContext = createContext([]);

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
    <playersContext.Provider value={players}>
      <div className="App">
        <h1>Princess Game</h1>
        {!startGame &&
          <SetUpGame onStartGame={() => initGame()} onPlayersChanged={handleUpdatePlayers} />
        }
        {startGame &&
          <GamePage deck={deck} />
        }
      </div>
    </playersContext.Provider>
  );
}

export default App;
