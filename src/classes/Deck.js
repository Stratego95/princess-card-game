export class Deck {
    constructor(cards) {
        this.cards = cards;
        this.numberOfCards = 16;
    }

    updateDeck() {
        console.log("update Deck")
    }

    selectCard() {
        console.log("select card")
    }
}