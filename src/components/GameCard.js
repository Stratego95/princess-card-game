import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { CardActionArea } from '@mui/material';

const GameCard = ({ playerObj, playerName, card }) => {
    return (
        <Card style={{ backgroundColor: "lightgrey", margin: "5px", alignContent: "center", maxWidth: "200px" }}>
            <CardActionArea onClick={() => playerObj.playCard(card)}>
                <CardContent>
                    <Avatar>{playerName[0]}</Avatar>
                    <Typography variant="h5" component="div">
                        {card.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {card.number}
                    </Typography>
                    <Typography variant="body2">
                        {card.abilityDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default GameCard;
