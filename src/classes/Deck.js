export class Deck {
    constructor(cards) {
        this.cards = cards;
        this.numberOfCards = 16;
    }

    updateDeck() {
        console.log("update Deck")
    }

    selectCard() {
        const randomIdx = Math.floor(Math.random() * this.cards.length);
        const cardForPlayer = this.cards[randomIdx]
        this.cards.splice(randomIdx, 1)
        return cardForPlayer;
    }
}