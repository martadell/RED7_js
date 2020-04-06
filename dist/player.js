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
    
    fromHandtoPalette(card) {
        this.palette.addToPalette(card);
        this.hand.takeFromHand(card);
    }

    containsCard(card) {
        return this.palette.containsCard(card);
    }

    getHandCardByIndex(index) {
        return this.hand.getCardbyIndex(index);
    }

    getRulePalette(rule) {
        return this.palette.getRulePalette(rule); 
    }
}

exports.Player = Player;