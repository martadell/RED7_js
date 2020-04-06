class Game {
    constructor(deck, rule, players) {
        this.deck = deck;
        this.rule=rule;
        this.players=players;
        this.currentPlayer=0;
    }

    getRule() {
        return this.rule.getRule();
    }

    changeRule(rule) {
        this.rule=rule;
    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }

    makeMove(option, iCard1, iCard2) {
        console.log(this.players[this.currentPlayer].getName() +  "'s turn");
        switch(option) {
        case 1:
            console.log("case 1: play a hand's card to the palette");
            this.players[this.currentPlayer].fromHandToPalette(iCard1);
            if (!this.compareRulePalettes()) this.loseGame();
            break;
        case 2:
            console.log("case 2: play a hand's card as a rule");
            this.changeRule(this.players[this.currentPlayer].takeCardFromHand(iCard1));
            if (!this.compareRulePalettes()) this.loseGame();
            break;
        case 3:
            console.log("case 3: play a hand's card to the palette and a hand's card as a rule");
            this.players[this.currentPlayer].fromHandToPalette(iCard1);
            this.changeRule(this.players[this.currentPlayer].takeCardFromHand(iCard2));
            if (!this.compareRulePalettes()) this.loseGame();
            break;
        case 4:
            console.log("case 4: pass (and lose)");
            this.loseGame();
            break;
        }

        if (this.currentPlayer++ > this.players.length) {
            this.currentPlayer === 0;
        }
        else  {
            this.currentPlayer++;
        }
    }

    loseGame() {        
        console.log("Oh no, " +  this.players[this.currentPlayer].getName() + " loses!");
        this.removeCurrentPlayer();
    }

    removeCurrentPlayer(){
        this.players.splice(this.players[this.currentPlayer],1);
    }

    compareRulePalettes() {
        let palettes=[];

        this.players.forEach(p => {
            palettes.push(p.getRulePalette(this.rule));
        });

        palettes.sort((a, b) => {
            if(a.length !==0) { //filtre per si estàn buides
            if (a.length > b.length) {
                return -1;
            } 
            if (a.length < b.length) {
                return +1;
            }  
            if(a[0] !== undefined && b[0] !== undefined) {      
                if (a.length == b.length) {
                    if((a[0]).isHigher(b[0])) {
                        return -1;
                    }
                    else {
                        return +1;
                    }
                    }
                }
            if(a !== undefined){ //si es comparen cartes només perquè és un array de cartes (regla red)
                    if((a).isHigher(b)) {
                        return -1;
                    }
                    else {
                        return +1;
                    }
                }
            }
            return 0;
        });

        if (palettes[0].length !==0){ //filtre per si "ningu guanya" (perdrà el jugador actual igualment)
            if (palettes[0][0] !== undefined) { //verifiquem que sigui un array d'arrays de cartes que compleixen
                if (this.players[this.currentPlayer].containsCard(palettes[0][0])) return true;
            }            
            else if (palettes[0] !== undefined){ //sino només hi ha una carta que compleix (com a la regla 7)
            if(this.players[this.currentPlayer].containsCard(palettes[0])) return true;
            }
        }
        return false;       
        
    }
}

exports.Game = Game;