export class Player {
    constructor(name) {
        this.isAlive = true;
        this.name = name;
        this.onTurn = false;
        this.hand = [];

    }
    drawCard(deck) {
        const card = deck.selectCard()
        this.hand.push(card)
    }

    playCard(card) {
        if (!this.onTurn) return;
        const cardNumber = card.number;
        const idx = this.hand.findIndex(card => card.number === cardNumber);
        this.hand.splice(idx, 1)
    }
}