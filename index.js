const _ = require("lodash");

const { Deck } = require('./dist/deck');
const { Player } = require('./dist/player');
const { Hand } = require('./dist/hand');
const { Palette } = require('./dist/palette');

//crear deck nou i barrejar cartes
const deck = new Deck();
deck.createDeck();
deck.shuffleDeck();

console.log(deck.getLength());

//crear 4 jugadors amb 4 hands amb 7 cartes i 4 palettes buides
let p1 = new Player("one", new Hand(deck.newHand()));
let p2 = new Player("two", new Hand(deck.newHand()));
let p3 = new Player("three", new Hand(deck.newHand()));
let p4 = new Player("four", new Hand(deck.newHand()));

console.log(deck.getLength());
console.log(p1);
console.log(p1.getHand());
console.log(p2);
console.log(p3);
console.log(p4);

//treure la primera regla
let ruleCard = deck.takeFirstRule();

console.log(ruleCard);
console.log(deck.getLength());