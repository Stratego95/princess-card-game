const CardC = ({ card }) => {
    return (
        <div className="App">
            {card.name}
            {card.number}
            {card.description}
            {card.isDestroyed}
        </div>
    );
}

export default CardC;
