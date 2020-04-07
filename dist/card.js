 class Card {
    constructor(color, number) {
        this._color = color;
        this._number = number;
    }

    get color() {
        return this._color;
    }

    get rule() {
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

    get number() {
        return this._number;
    }

    isHigher(card2) {
        if(this.number > card2.number) return true;
        if(this.number === card2.number) return this.isHigherColor(card2);
        return false;
    }

    isHigherColor(card2) {
    let colors = ["purple", "indigo", "blue", "green", "yellow", "orange", "red"];
        if(colors.indexOf(this.color) > colors.indexOf(card2.color)) return true;
        return false;
    }

    isSameCard(card2) {
        return ((this.color === card2.color) &&
        (this.number === card2.number));
    }
}

exports.Card = Card;

