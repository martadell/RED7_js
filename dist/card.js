export default class Card {
    constructor(color, number, extraRule) {
        this.privateColor = color;
        this.privateNumber = numer;
        this.privateExtraRule = extraRule;
    }

    get color() { return this.privateColor; }
    get number() { return this.privateNumber; }
    get extraRule() { return this.privateExtraRule; }
    
}

