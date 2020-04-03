const { Card } = require('./card');

class Deck {
    constructor() {
        this.deck = [];
    }

    createDeck() {
        let Colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
        let Numbers = [1, 2, 3, 4, 5, 6, 7];
        let ExtraRules = [0, 1, 3, 5, 7];

        for (let i=0; i < Colors.length; i++) {
            for (let j = 0; j < Numbers.length; j++) {
                if (j === 0) {
                this.deck.push(new Card(Colors[i], Numbers[j], ExtraRules[1]));
                } else if (j === 2) {
                    this.deck.push(new Card(Colors[i], Numbers[j], ExtraRules[2]));
                } else if (j === 4) {
                    this.deck.push(new Card(Colors[i], Numbers[j], ExtraRules[3]));
                } else if (j === 6) {
                    this.deck.push(new Card(Colors[i], Numbers[j], ExtraRules[4]));
                } else {
                    this.deck.push(new Card(Colors[i], Numbers[j], ExtraRules[0]));
                }
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
        //treu (i retorna a una hand) les 7 primeres cartes de la pila
        let hand = [];
        while (hand.length < 7) {
            hand.push(this.deck.shift());
        }

        return hand;
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
        return this.deck.shift();
    }

    addOne(card) {
        this.deck.unshift(card);
    }

    getLength(){
        return this.deck.length;
    }
}

exports.Deck = Deck;
