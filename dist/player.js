class Player {
    constructor(name, hand, palette) {
        this._name = name;
        this._hand = hand;
        this._palette = palette;
    }

    get name() {
        return this._name;
    }

    get hand() {
        return this._hand;
    }

    get palette() {
        return this._palette;
    }
    
    fromHandToPalette(indexC) {
        this._palette.addToPalette(this.takeCardFromHand(indexC));
    }

    takeCardFromHand(indexC) {
        return this.hand.takeFromHand(indexC);
    }

    addToHand(card) {
        this._hand.addToHand(card);
    }

    containsCard(card) {
        return this._palette.containsCard(card);
    }

    getRulePalette(rule) {
        return this._palette.getRulePalette(rule); 
    }
}

exports.Player = Player;