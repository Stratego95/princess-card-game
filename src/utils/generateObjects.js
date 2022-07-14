import { Ambassador, Bible, Broker, Detective, Duke, King, Spy, Weakling } from "../classes/Cards"
import { Deck } from "../classes/Deck"

export const initDeck = () => {
    return new Deck(initCards())
}

const initCards = () => {
    const cards = []

    const king = new King()
    const duke = new Duke()
    const broker = new Broker()
    const ambassador1 = new Ambassador()
    const ambassador2 = new Ambassador()
    const bible1 = new Bible()
    const bible2 = new Bible()
    const weakling1 = new Weakling()
    const weakling2 = new Weakling()
    const spy1 = new Spy()
    const spy2 = new Spy()
    const detective1 = new Detective()
    const detective2 = new Detective()
    const detective3 = new Detective()
    const detective4 = new Detective()
    const detective5 = new Detective()

    cards.push(king, duke, broker, ambassador1, ambassador2, bible1, bible2, weakling1, weakling2, spy1, spy2, detective1, detective2, detective3, detective4, detective5)
    return cards
}