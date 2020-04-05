class Hand {
  constructor(cards) {
    this.cards = cards;
  }

  newHand(deck) {      
    //treu (i retorna a una hand) les 7 primeres cartes de la pila
    let hand = [];
    while (hand.length < 7) {
        hand.push(deck.shift());
    }
    return hand;
  }


  addToHand(card) {
    if(this.cards.length < 7) this.cards.push(card);
  }

  takeFromHand(card) {
    if(this.cards.length > 0) this.cards.splice((this.cards.indexOf(card)-1),1);
  }

}

exports.Hand = Hand;
