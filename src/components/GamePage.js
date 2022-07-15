
import * as React from 'react';
import { useEffect, useContext } from 'react';
import DisplayPlayers from './DisplayPlayers';
import { playersContext } from "./../App";

const GamePage = ({ deck }) => {

    const players = useContext(playersContext);

    useEffect(() => {
        // for game initialization draw one card each player
        for (const player of players) {
            player.drawCard(deck)
        }

        // first player draws second card immediately
        if (players.length) {
            players[0].drawCard(deck)
            players[0].onTurn = true;
        }
    }, [])

    return (
        <div>
            <h1>Start game</h1>
            <DisplayPlayers />
        </div >
    );
}

export default GamePage;
