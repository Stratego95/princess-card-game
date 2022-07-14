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

    playCard() {
        console.log("play card")
    }
}