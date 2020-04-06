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
    
    fromHandToPalette(indexC) {
        this.palette.addToPalette(this.takeCardFromHand(indexC));
    }

    takeCardFromHand(indexC) {
        return this.hand.takeFromHand(indexC);
    }

    containsCard(card) {
        return this.palette.containsCard(card);
    }

    getRulePalette(rule) {
        return this.palette.getRulePalette(rule); 
    }
}

exports.Player = Player;