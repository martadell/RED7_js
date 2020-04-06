const { Card } = require('./card');

class Deck {
    constructor() {
        this.cards = [];
    }

    createDeck() {
        const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
        const numbers = [1, 2, 3, 4, 5, 6, 7];

        for (let i=0; i < colors.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                this.cards.push(new Card(colors[i], numbers[j]));
            }
        }

        this.shuffleDeck(); 
    }
    
    shuffleDeck() {
        let counter = this.cards.length, temp, i;

        while (counter) {
            i = Math.floor(Math.random() * counter--);
            temp = this.cards[counter];
            this.cards[counter] = this.cards[i];
            this.cards[i] = temp;
        }
    }

    takeOne() {
        return this.cards.pop();
    }

    takeSeven() {
        let sCards=[];
        for(let i=0;i<7;i++) {
            sCards.push(this.cards.pop());
        }
        return sCards;
    }

    addOne(card) {
        this.cards.push(card);
    }

    getLength(){
        return this.cards.length;
    }
}

exports.Deck = Deck;
