class Player {

    constructor(name, hand, palette) {
        this.name = name;
        this.hand = hand;
        this.palette = palette;
    }

    getName() {
        return this.name;
    }

    getHand() {
        return this.hand;
    }

    getPalette() {
        return this.palette;
    }
}

exports.Player = Player;