
import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Player } from './../classes/Player';
import Avatar from '@mui/material/Avatar';

const WelcomePage = ({ onStartGame }) => {
    const [players, setPlayers] = useState([])
    const [currentPlayerName, setCurrentPlayerName] = useState("")

    const handleAddPlayer = () => {
        if (!currentPlayerName.length) return;
        setPlayers([...players, new Player(currentPlayerName)])
        setCurrentPlayerName("")
    }

    const handleDeletePlayer = (idx) => {
        const updatedPlayers = [...players]
        updatedPlayers.splice(idx, 1)
        setPlayers(updatedPlayers)
    }

    const playersComp = players.map((player, idx) => {
        return <Avatar key={idx} onClick={() => handleDeletePlayer(idx)}>{player.name[0]}</Avatar>
    })

    return (
        <div>
            <h1>Princess Game</h1>
            <TextField id="outlined-basic" label="Enter Player Name" variant="outlined" value={currentPlayerName} onChange={(event) => setCurrentPlayerName(event.target.value)} />
            <Button variant="outlined" onClick={handleAddPlayer} disabled={players.length === 6}>Add Player</Button>
            <Button variant="outlined" onClick={onStartGame} disabled={players.length < 2 || players.length > 6}>Start Game</Button>
            {playersComp}
        </div >
    );
}

export default WelcomePage;
