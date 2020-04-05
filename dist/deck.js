const { Card } = require('./card');
const { Hand } = require('./hand');
const { Palette } = require('./palette');

class Deck {
    constructor() {
        this.deck = [];
    }

    createDeck() {
        const Colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
        const Numbers = [1, 2, 3, 4, 5, 6, 7];

        for (let i=0; i < Colors.length; i++) {
            for (let j = 0; j < Numbers.length; j++) {
                this.deck.push(new Card(Colors[i], Numbers[j]));
            }
        }

        return this.deck;
    }

    shuffleDeck() {
        let counter = this.deck.length, temp, i;

        while (counter) {
            i = Math.floor(Math.random() * counter--);
            temp = this.deck[counter];
            this.deck[counter] = this.deck[i];
            this.deck[i] = temp;
        }

        return this.deck;
    }

    newHand() { 
        let hand = new Hand([]);        
        return hand.newHand(this.deck);
    }

    newPalette() {
        let palette = new Palette([]);
        return palette.newPalette(this.deck);
    }

    drawOne(hand) {
        if (hand.length < 7) { //comprova que no tingui més de 7 cartes
        return hand.push(this.deck.shift());
        }

        else { //sino no roba
            console.log("hand length is too long, can't draw card");
        }
    }   

    takeFirstRule() {
        let rule = new Card;
        rule = this.deck.shift();
        return rule.getColor();
    }

    addOne(card) {
        this.deck.unshift(card);
    }

    getLength(){
        return this.deck.length;
    }
}

exports.Deck = Deck;
