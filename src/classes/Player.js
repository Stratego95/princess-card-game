export class Player {
    constructor(name) {
        this.isAlive = true;
        this.name = name;
        this.onTurn = false;
        this.hand = undefined;

    }
    drawCard() {
        console.log("draw card")
    }

    playCard() {
        console.log("play card")
    }
}