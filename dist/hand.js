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
    if(this.cards.length < 7) this.cards.push(card);
  }

  getCardbyIndex(index) {
    return this.cards[index];
  }

  takeFromHand(card) {
    if(this.cards.length > 0) this.cards.splice((this.cards.indexOf(card)),1);
  }

}

exports.Hand = Hand;
