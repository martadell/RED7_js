class Palette {
    constructor() {
        this.cards = [];
    }

    createPalette(deckCard) {
        this.cards.push(deckCard);
    }

    sortPalette() { //ordena la palette del 7 a l'1 (i de vermell a lila)
        this.cards.sort((a, b) => {
            if (a.isHigher(b)) {
                return -1
            } 
            if (b.isHigher(a)) {
                return +1
            }
            return 0;
        });
    }

    sortByColor() {
        this.cards.sort((a, b) => {
            if (a.isHigherColor(b)) {
                return -1
            } 
            if (b.isHigherColor(a)) {
                return +1
            }
            return 0;
        })
    }

    calcHighest() { //red rule: return la carta més alta
        return this.cards[0]; //com està ordenat per valors treu la primera
    }

    calcSameNum() { //orange rule: return les maximes cartes repetides (mateix numero)let numbers = [[]];
        let prevCard = this.cards[0];
        let numbers = [[]];

        this.cards.forEach((card) => { //1. fem un array d'arrays amb cartes del mateix numero 
            if(card.getNumber() !== prevCard.getNumber()) numbers.push([]);
            numbers[numbers.length - 1].push(card);
            prevCard = card;
        });

        numbers.sort((a, b) => b.length - a.length); //2. i agafem el més llarg
        return numbers[0];
    }

    calcSameColor() { //yellow rule: return maxim cartes amb mateix color (igual que l'anterior pero amb color)
        this.sortByColor(); //ordenem per colors
        let colors = [[]];
        let prevCard = this.cards[0];

        this.cards.forEach((card) => { //1. fem un array d'arrays amb cartes del mateix color  
            if(card.getColor() !== prevCard.getColor()) colors.push([]);
            colors[colors.length - 1].push(card);
            prevCard = card;
        });

        this.sortPalette(); //ordenem per numeros perque quedi com abans

        colors.sort((a, b) => {
            while(a !== undefined && b !== undefined) {
            if (a.length > b.length) {
                return -1;
            } 
            if (a.length < b.length) {
                return +1;
            }            
            if (a.length === b.length) {
                if((a[0]).isHigher(b[0])) {
                    return -1;
                }
                else {
                    return +1;
                }
            }
            return 0;
            }
        }); //2. i agafem el més llarg

        return colors[0];
    }

    calcEvens() { //green rule: return les cartes parells
        let evenCards = [];

        this.cards.forEach((card) => {
            if(card.getNumber() % 2 == 0) evenCards.push(card);
        });

        return evenCards;
    }

    calcDifColor() { //blue rule: return cartes amb diferents colors
        this.sortByColor(); //ordenem per colors
        let difColorCards = [this.cards[0]];
        let prevCard = this.cards[0];

        this.cards.forEach((card) => {                  //per cada carta
            if(card.getColor() != prevCard.getColor()) { //si al nostre array no hi ha carta de color se li fica
                difColorCards.push(card);
                prevCard = card;                         //i el color passa ser el que hem ficat
            }
        });

        this.sortPalette(); //ordenem per numeros perque quedi com abans
        return difColorCards;
    }

    calcRun() { //indigo rule: return cartes de l'escala més llarga
        let runs = [];
        let prevCard = this.cards[0];

        this.cards.forEach((card) => { //1. fem un array amb les diferents escales  
            if(card.getNumber() - prevCard.getNumber() != -1) runs.push([]);
            runs[runs.length - 1].push(card);
            prevCard = card;
        });

        runs.sort((a, b) => b.length - a.length); //2. i agafem el més llarg
        return runs[0];
    }

    calcBellowFour() { //purple rule: return cartes que tenen com a valor <4
        let bellowFourCards = [];

        this.cards.forEach((card) => {
            if(card.getNumber() <4) bellowFourCards.push(card);
        });

        return bellowFourCards;
    }

    addToPalette(card) {
        this.cards.push(card);
        this.sortPalette();
    }

    takeFromPalette(card) {
        if(this.cards.length > 0) this.cards.splice((this.cards.indexOf(card)),1);
    }

    getCardbyIndex(index) {
        return this.cards[index];
    }

    containsCard(card2){
        let y = false;
        this.cards.forEach((card) => {
            if (card.isSameCard(card2)) y = true;
        });
        return y;
    }

    getRulePalette(ruleCard) {
        let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
        let ruleP = [];

        switch (ruleCard.getColor()){
            case colors[0]:
            ruleP = this.calcHighest();
            break;
            case colors[1]:
            ruleP = this.calcSameNum();
            break;
            case colors[2]:
            ruleP = this.calcSameColor();
            break;
            case colors[3]:
            ruleP = this.calcEvens();
            break;
            case colors[4]:
            ruleP = this.calcDifColor();
            break;
            case colors[5]:
            ruleP = this.calcRun();
            break;
            case colors[6]:
            ruleP = this.calcBellowFour();
            break;
        }
        return ruleP; 
    }
}

exports.Palette = Palette;

