class Game {
    constructor(deck, rule, players, currentPlayer) {
        this.deck = deck;
        this.rule=rule;
        this.players=players;
        this.currentPlayer=currentPlayer;
    }

    getRule() {
        return this.rule.getRule();
    }

    changeRule(rule) {
        this.rule=rule;
    }

    removeCurrentPlayer(){
        this.players.splice(this.players.indexOf(this.currentPlayer),1);
    }

    compareRulePalettes() {
        let palettes=[];

        this.players.forEach(p => {
            palettes.push(p.getRulePalette(this.rule));
        });

        console.log(palettes);        
        
        palettes.sort((a, b) => {
            while(a.length !==0 && b.length !== 0) { //filtre per si ningu guanya
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
            if(a !== undefined & b !==undefined){ //si es comparen cartes només perquè és un array de cartes (regla red)
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

        console.log(palettes);

        while (palettes[0].length !==0){ //filtre per si "ningu guanya" (perdrà el jugador actual igualment)
            if (palettes[0][0] !== undefined) { //verifiquem que sigui un array d'arrays de cartes que compleixen   
                if (this.currentPlayer.containsCard(palettes[0][0])) return true;
            }
            if (palettes[0] !== undefined){ //sino al menys s'hauria de poder comparar una carta que compleix (1 array)
                if(this.currentPlayer.containsCard(palettes[0])) return true;
            } 
        }
        this.removeCurrentPlayer(); //sino traiem el jugador perquè ha perdut (nos 'ha de fer res més  
        return false;              //perquè les cartes queden inactives (es fiquen boca abaix))          
        
    }
}

exports.Game = Game;