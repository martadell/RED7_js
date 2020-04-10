class Hand {
  constructor() {
    this._cards = [];
  }

  createHand(deckCards) {
    for (let i = 0; i < 7; i++) {
      this._cards.push(deckCards[i]);
    }
  }

  addToHand(card) {
    this._cards.push(card);
  }

  takeFromHand(indexC) {
    if (this._cards.length > 0) return this._cards.splice(indexC, 1)[0];
  }

  get handLength() {
    return this._cards.length;
  }

  get cards() {
    return this._cards;
  }
}

exports.Hand = Hand;
