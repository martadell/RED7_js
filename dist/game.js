const { Deck } = require("./deck");
const { Palette } = require("./palette");
const { Hand } = require("./hand");
const { Player } = require("./player");

class Game {
  constructor() {
    this._deck;
    this._rule;
    this._players = [];
    this._currentPlayer;
    this._loser;
    this._actionRule;
  }

  newGame(qPlayers) {
    this._deck = new Deck();
    this._deck.createDeck();

    for (let i = 0; i < qPlayers; i++) {
      let hand = new Hand();
      hand.createHand(this._deck.takeSeven());
      let palette = new Palette();
      palette.createPalette(this._deck.takeOne());

      this._players.push(new Player(`p${i + 1}`, hand, palette));
    }

    this._rule = this._deck.takeOne();
    this._currentPlayer = 0;
  }

  get deck() {
    return this._deck;
  }

  get rule() {
    return this._rule;
  }

  get ruleInfo() {
    return this.rule.rule;
  }

  get players() {
    return this._players;
  }

  get currentPlayer() {
    return this._currentPlayer;
  }

  get actionRule() {
    return this._actionRule;
  }

  get loser() {
    return this._loser;
  }

  changeRule(ruleCard) {
    this._rule = ruleCard;
  }

  makeMove(option, iCard1, iCard2) {
    //!! només es fa servir a la versió random
    switch (option) {
      case 1:
        console.log("Case 1: play a hand's card to the palette");
        this._players[this.currentPlayer].fromHandToPalette(iCard1);
        console.log("Palette changed to: ");
        console.log(this.players[this.currentPlayer].palette.cards);
        if (!this.compareRulePalettes()) this.loseGame(this.currentPlayer);
        else {
          console.log("OK, next turn!");
          this.nextPlayer();
        }
        break;
      case 2:
        console.log("Case 2: play a hand's card as a rule");
        this.changeRule(
          this._players[this.currentPlayer].takeCardFromHand(iCard1)
        );
        console.log("Rule changed to: " + this.ruleInfo);
        if (!this.compareRulePalettes()) this.loseGame(this.currentPlayer);
        else {
          console.log("OK, next turn!");
          this.nextPlayer();
        }
        break;
      case 3:
        console.log(
          "Case 3: play first a hand's card to the palette and then another one as a rule (Case 2)"
        );
        this._players[this.currentPlayer].fromHandToPalette(iCard1);
        console.log(
          "Palette changed to: " + this.players[this.currentPlayer].palette
        );
        this.makeMove(2, iCard2);
        break;
      case 4:
        console.log("Case 4: pass (and lose)");
        this.loseGame(this.currentPlayer);
        break;
    }
  }

  makeAMove(option, iCard) {
    //!! versió alternativa per l'html
    switch (option) {
      case 1: //cas 1: tirar carta a la paleta
        let cardNum = this.players[this.currentPlayer].hand.cards[iCard].number;
        this.checkActionRule(cardNum);
        this._players[this.currentPlayer].fromHandToPalette(iCard);
        break;
      case 2: //cas 2: tirar carta a com a regla
        this.changeRule(
          this._players[this.currentPlayer].takeCardFromHand(iCard)
        );
        if (!this.compareRulePalettes()) this.loseGame(this.currentPlayer);
        else {
          this.nextPlayer();
        }
        break;
      case 3: //cas 3: passar i perdre
        this.loseGame(this.currentPlayer);
        break;
      case 4: //!! (next), es crida després del cas 1 si no es vol jugar regla també
        if (!this.compareRulePalettes()) this.loseGame(this.currentPlayer);
        else {
          this.nextPlayer();
        }
        break;
    }
  }

  //ACTION RULES ONLY TESTED (and implemented) index.js !!
  checkActionRule(cardNum) {
    if (cardNum == 1 || cardNum == 3 || cardNum == 5 || cardNum == 7)
      this._actionRule = cardNum;
    else this._actionRule = 0;
  }

  action1(iPlayer2, iP2Card) {
    this._actionRule = 0;
    //roba una carta d'un rival i descarta-la a la pila
    let checkFirst = false; //primer mirem si és més petit que algun al menys
    for (let i = 0; i < this.players.length; i++) {
      if (
        this.players[i].palette.length >
        this.players[this.currentPlayer].palette.length
      )
        checkFirst = true;
    }

    if (checkFirst) {
      if (
        this.players[this.currentPlayer].palette.length <
        this.players[iPlayer2].palette.length
      ) {
        this.deck.addOne(this._players[iPlayer2].takeCardFromPalette(iP2Card));
        return 1;
      } else {
        console.log(
          "You selected a player with less cards than you, please choose another one"
        );
        return 0;
      }
    }
  }

  action3() {
    //roba una carta
    if (this.deck.length > 0) {
      this.players[this.currentPlayer].addToHand(this.deck.takeOne());
    } else {
      console.log("Deck run out of cards, can't take another card");
    }
    this._actionRule = 0;
  }

  action5(iCard) {
    //torna a jugar una carta a la palette
    this.makeAMove(1, iCard);
    this._actionRule = 0;
  }

  action7(iCard) {
    this.changeRule(
      this._players[this.currentPlayer].takeCardFromPalette(iCard)
    );
    this.makeAMove(4);
    this._actionRule = 0;
  }

  action7discard(iCard) {
    this.deck.addOne(
      this._players[this.currentPlayer].takeCardFromPalette(iCard)
    );
    this._actionRule = 0;
  }

  //passar al següent jugador (i mirar si ha perdut)
  nextPlayer() {
    this.players.forEach((player, index) => {
      if (index != this.currentPlayer && player.hand.length == 0) {
        this.loseGame(index);
      }
    });

    if (this.currentPlayer + 1 >= this._players.length) {
      this._currentPlayer = 0;
    } else {
      this._currentPlayer++;
    }
  }

  //"fer perdre a algú", treure'l de la llista de players (les cartes es queden inactives, no tornen al deck)
  loseGame(loser) {
    this._loser = this.players[loser].name;
    console.log("Oh no, " + this.loser + " loses!");
    this._players.splice(loser, 1);
    if (loser + 1 > this._players.length) this._currentPlayer = 0;
  }

  //comparar les cartes de les paletes que compleixen la norma actual
  compareRulePalettes() {
    let palettes = [];

    this._players.forEach((p) => {
      palettes.push(p.getRulePalette(this.rule));
    });

    palettes.sort((a, b) => {
      if (a.length !== 0) {
        //filtre per si estan buides
        if (a.length > b.length) {
          return -1;
        }
        if (a.length < b.length) {
          return +1;
        }
        if (a[0] !== undefined && b[0] !== undefined) {
          if (a.length == b.length) {
            if (a[0].isHigher(b[0])) {
              return -1;
            } else {
              return +1;
            }
          }
        }
        if (a !== undefined) {
          //si es comparen cartes només perquè és un array de cartes (regla red)
          if (a.isHigher(b)) {
            return -1;
          } else {
            return +1;
          }
        }
      }
      return 0;
    });

    console.log(palettes);

    if (palettes[0].length !== 0) {
      //filtre per si "ningu guanya" (perdrà el jugador actual igualment)
      if (palettes[0][0] !== undefined) {
        //verifiquem que sigui un array d'arrays de cartes que compleixen
        if (this.players[this.currentPlayer].containsCard(palettes[0][0]))
          return true;
      } else if (palettes[0] !== undefined) {
        //sino només hi ha una carta que compleix (com a la regla 7)
        if (this.players[this.currentPlayer].containsCard(palettes[0]))
          return true;
      }
    }
    return false;
  }

  getPlayerIndexByName(name) {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].name == name) return i;
    }
  }
}

exports.Game = Game;
