class Hand {
  constructor() {
    this._cards = [];
  }

  createHand(deckCards) {
    for(let i=0; i<7; i++) {
        this._cards.push(deckCards[i]);
    }
}

  addToHand(card) {
    this._cards.push(card);
  }

  takeFromHand(indexC) {
    if(-1 < indexC && this._cards.length > indexC) {
      if(this._cards.length > 1) return this._cards.splice(indexC,1)[0];
      else console.log("Can't take card from hand, you don't have enought cards");
    }
  }

  get handLength() {
    return this._cards.length;
  }

}

exports.Hand = Hand;
