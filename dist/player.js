const { Deck } = require('./deck');
const { Hand } = require('./hand');
const { Palette } = require('./palette');


class Player {

    constructor(name, hand) {
        this.name = name;
        this.hand = hand;
        this.palette = new Palette([]);
    }

    getHand() {
        return this.hand;
    }

    getPalette() {
        return this.palette;
    }
}

exports.Player = Player;