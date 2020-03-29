import Card from "./card"

export default class Deck {
    constructor() {
        this.cards = [];
    }

    createDeck() {
        let Colors = [red, orange, yellow, green, blue, indigo, purple];
        let Numbers = [1, 2, 3, 4, 5, 6, 7];
        let ExtraRules = [0, 1, 3, 5, 7];

        for (let i=0; i < Colors.length; i++) {
            for (let j = 0; j < Numbers.length; j++) {
                if (j === 0) {
                this.cards.push(new Card(Colors[i]), Numbers[j], ExtraRules[1]);
                } else if (j === 2) {
                    this.cards.push(new Card(Colors[i]), Numbers[j], ExtraRules[2]);
                } else if (j === 4) {
                    this.cards.push(new Card(Colors[i]), Numbers[j], ExtraRules[3]);
                } else if (j === 6) {
                    this.cards.push(new Card(Colors[i]), Numbers[j], ExtraRules[4]);
                } else {
                    this.cards.push(new Card(Colors[i]), Numbers[j], ExtraRules[0]);
                }
            }
        }
    }

    shuffleDeck() {
        //todo: mesclar les cartes
    }

    newPalette() {
        //todo: treu (i retorna) les 7 primeres cartes de la pila
    }

    takeOne() {
        //todo: treu (i retorna) la primera carta de la pila
    }

    addOne() {
        //todo: afegeix al principi una carta
    }
}