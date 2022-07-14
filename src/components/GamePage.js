
import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Player } from './../classes/Player';
import Avatar from '@mui/material/Avatar';

const GamePage = ({ deck, players }) => {

    useEffect(() => {
        for (const player of players) {
            player.drawCard(deck)
        }
    }, [])

    return (
        <div>
            <h1>Start game</h1>
        </div >
    );
}

export default GamePage;
