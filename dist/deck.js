const { Card } = require('./card');

class Deck {
    constructor() {
        this._cards = [];
    }

    createDeck() {
        const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
        const numbers = [1, 2, 3, 4, 5, 6, 7];

        for (let i=0; i < colors.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                this._cards.push(new Card(colors[i], numbers[j]));
            }
        }

        this.shuffleDeck(); 
    }
    
    shuffleDeck() {
        let counter = this._cards.length, temp, i;

        while (counter) {
            i = Math.floor(Math.random() * counter--);
            temp = this._cards[counter];
            this._cards[counter] = this._cards[i];
            this._cards[i] = temp;
        }
    }

    takeOne() {
        return this._cards.pop();
    }

    takeSeven() {
        let sCards=[];
        for(let i=0;i<7;i++) {
            sCards.push(this._cards.pop());
        }
        return sCards;
    }

    addOne(card) {
        this._cards.push(card);
    }

    getLength(){
        return this._cards.length;
    }
}

exports.Deck = Deck;
