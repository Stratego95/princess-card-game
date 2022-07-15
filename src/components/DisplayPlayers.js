
import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import GameCard from "./GameCard"
import { playersContext } from "./../App";

const DisplayPlayers = () => {
    const [players, setPlayers] = useState([])
    const playersC = useContext(playersContext);

    useEffect(() => {
        setPlayers(playersC)
    }, [playersC])

    const createCards = players.map((player, idx) => {
        const hand = player.hand;
        return hand.map((card, idx) => {
            return <GameCard key={player.name + idx} playerObj={player} playerName={player.name} card={card} />
        })
    })

    return (
        <div>
            {createCards}
        </div>
    );
}

export default DisplayPlayers;
