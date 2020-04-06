class Hand {
  constructor() {
    this.cards = [];
  }

  createHand(deckCards) {
    for(let i=0; i<7; i++) {
        this.cards.push(deckCards[i]);
    }
}

  addToHand(card) {
    this.cards.push(card);
  }

  takeFromHand(indexC) {
    if(-1 < indexC && this.cards.length > indexC) {
      if(this.cards.length > 1) return this.cards.splice(indexC,1)[0];
      else console.log("Can't take card from hand, you don't have enought cards");
    }
    return false;
  }

}

exports.Hand = Hand;
