 class Card {
    constructor(color, number) {
        this.color = color;
        this.number = number;
    }

    getColor() {
        return this.color;
    }

    getRule() {
        let rule;
        let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
        switch (this.color){
            case colors[0]:
            rule = "red: highest card wins";
            break;
            case colors[1]:
            rule = "orange: highest quant. of same num cards wins";
            break;
            case colors[2]:
            rule = "yellow: highest quant. of same color cards wins";
            break;
            case colors[3]:
            rule = "green: highest quant. of even num cards wins";
            break;
            case colors[4]:
            rule = "blue: highest quant. of dif. color cards wins";
            break;
            case colors[5]:
            rule = "indigo: highest run wins";
            break;
            case colors[6]:
            rule = "purple: highest quant. of num cards < 4 wins";
            break;
        }
        return rule; 
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
    let colors = ["purple", "indigo", "blue", "green", "yellow", "orange", "red"];
        if(colors.indexOf(this.color) > colors.indexOf(card2.getColor())) return true;
        else return false;
    }

    isSameCard(card2) {
        return ((this.getColor() === card2.getColor() &&
        this.getNumber() === card2.getNumber()));
    }
}

exports.Card = Card;

