 class Card {
    constructor(color, number) {
        this.color = color;
        this.number = number;
    }

    getColor() {
        return this.color;
    }

    getNumber() {
        return this.number;
    }

    isHigher(card2) {
        if(this.number > card2.getNumber()) return true;
        else if(this.number === card2.getNumber()) return this.isHigherColor(card2);
        else return false;
    }

    isHigherColor(card2) {
    let Colors = ["purple", "indigo", "blue", "green", "yellow", "orange", "red"];
        if(Colors.indexOf(this.color) > Colors.indexOf(card2.getColor())) return true;
        else return false;
    }
}

exports.Card = Card;

