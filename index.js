
import Card from "./dist/card.js";
import Deck from "./dist/deck.js";
import Player from "./dist/player.js";
import Hand from "./dist/hand.js";
import Palette from "./dist/palette.js";

//crear deck nou i barrejar cartes
const deck = new Deck();
deck.createDeck;
deck.shuffleDeck;

//crear 4 jugadors amb 4 palettes amb 7 cartes i 4 hands buides
let p1 = new Player("one", new Palette(deck.newPalette()), new Hand([]));
let p2 = new Player("two", new Palette(deck.newPalette()), new Hand([]));
let p3 = new Player("three", new Palette(deck.newPalette()), new Hand([]));
let p4 = new Player("four", new Palette(deck.newPalette()), new Hand([]));

//treure la primera regla
let ruleCard = new Card(deck.takeOne().getColor, deck.takeOne().getNumber, deck.takeOne().getExtraRule);