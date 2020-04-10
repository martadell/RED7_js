const _ = require("lodash");
const { Game } = require("./dist/game");

//inici del joc amb 4 jugadors
let numPlayers = 4;
let playersCont = numPlayers;
let game;
game = new Game();
game.newGame(numPlayers);

createHand();
createPalettes();
createRule();

let currentMove = 0;

//Buttons
////Restart: reinicia el joc amb el numero de jugadors seleccionats
let restartBttn = document.getElementById("restartBttn");
restartBttn.onclick = function () {

  let retVal = confirm("Do you want to restart the game with " + numPlayers + " players?");
  if (retVal == true) {
  restart();
  return true;
  } else {
    return false;
  }
};

////Card to palette
let ctPaletteBttn = document.getElementById("ctPaletteBttn");
ctPaletteBttn.onclick = function () {
  currentMove = 1;
  ctPaletteBttn.classList.add("selected");
  document.getElementById("ctPaletteBttn").style.display = "none";
  document.getElementById("finishBttn").style.display = "block";
};

////Card as rule
let caRuleBttn = document.getElementById("caRuleBttn");
caRuleBttn.onclick = function () {
  currentMove = 2;
  caRuleBttn.classList.add("selected");
  document.getElementById("ctPaletteBttn").style.display = "none";  
  document.getElementById("finishBttn").style.display = "none";
};

////Finish (havent tirat carta a la palette)
let finishBttn = document.getElementById("finishBttn");
finishBttn.onclick = function () {
  currentMove = 4;
  game.makeAMove(currentMove);
  checkWinner();
};

////Pass
let passBttn = document.getElementById("passBttn");
passBttn.onclick = function () {
  let retVal = confirm(
    "Are you sure you want to pass? You will lose the game ):"
  );
  if (retVal == true) {
    currentMove = 3;
    game.makeAMove(currentMove);
    checkWinner();
    return true;
  } else {
    return false;
  }
};

//Cartes
////Hand: Sel·leccionar una carta de la hand
let hCards = getHandCards();
for (let i = 0; i < hCards.length; i++) {
  hCards[i].onclick = function () {
    if (currentMove == 0) alert("Please select first your game option");
    else {
      game.makeAMove(currentMove, i);
      checkWinner();
    }
  };
}

function checkWinner() {
  //actualitzem cartes
  changeHand();
  changePalettes();
  changeRule();

  //treiem el color del botó seleccionat
  if (document.getElementsByClassName("selected") !== undefined) {
    let selectedBttns = document.getElementsByClassName("selected");
    for (let i = 0; i < selectedBttns.length; i++) {
      selectedBttns[i].classList.remove("selected");
    }
  }

  //i tornem a mostrar el primer i amagar l'extra
  if (currentMove != 1) {
    document.getElementById("ctPaletteBttn").style.display = "block";    
    document.getElementById("finishBttn").style.display = "none";
  currentMove = 0;
  }

  //busquem si ha perdut algú i ho fiquem en blanc perquè es noti
  if (game.players.length < playersCont) {
    document.getElementById(`p${game.loser}`).classList.add("unavailable");

    alert("Oh no! Player " + game.loser + " has lost");
    playersCont--;
  }

  //canvi de torn al següent jugador al text d'adalt
  document.getElementById("aPlayer").innerHTML = `Player ${
    game.players[game.currentPlayer].name
  }'s turn`;

  if (game.players.length < 2) {
    //si acaba el joc es reinicia
    alert("Game finished! The winner is Player " + game.players[0].name);
    restart();
    return false;
  }
}

function getHandCards() {
  let hCards = document.getElementById("hand").getElementsByClassName("card");
  return hCards;
}

function restart() {
  let selector = document.getElementById("playersNum");
  numPlayers = parseInt(selector.options[selector.selectedIndex].text);
  playersCont = numPlayers;

  game = new Game();
  game.newGame(numPlayers);

  changeHand();
  changePalettes();
  changeRule();
  currentMove = 0;

  //treure el color dels "Unavailable"
  if (document.getElementsByClassName("unavailable") != undefined) {
    let palettes = document.getElementsByClassName("palette");
    for (let i = 0; i < 4; i++) {
      palettes[i].className = "palette h";
    }
  }

  if (numPlayers < 4) {
    //buidem les palettes que han quedat plenes de l'altre joc
    for (let i = 4; i > numPlayers; i--) {
      changetoEmptyCards(`p${i}`);
    }
  }

  document.getElementById("aPlayer").innerHTML = `Player ${
    game.players[game.currentPlayer].name
  }'s turn`;
}

function createHand() {
  createCards(game.players[game.currentPlayer].hand.cards, "hand");
}

function changeHand() {
  let cards = game.players[game.currentPlayer].hand.cards;
  changeCards(cards, "hand");
}
function createPalettes() {
  for (let i = 0; i < numPlayers; i++) {
    let cards = game.players[i].palette.cards;
    let paletteName = `p${i + 1}`;
    createCards(cards, paletteName);
  }
}

function changePalettes() {
  for (i = 0; i < numPlayers; i++) {
    if (game.players[i] != undefined) {
      let cards = game.players[i].palette.cards;
      changeCards(cards, `p${game.players[i].name}`);
    }
  }
}

function createRule() {
  document.getElementById("rule").appendChild(createCard(game.rule));
}

function changeRule() {
  changeCard(document.getElementById("rule").lastChild, game.rule);
}

//"Canviadors" de cartes
function changeCards(cards, place) {
  let pCards = document.getElementById(place).getElementsByClassName("card");
  for (let i = 0; i < pCards.length; i++) {
    if (cards[i] == undefined) {
      pCards[i].innerHTML = "";
      pCards[i].className = "card empty";
    } else changeCard(pCards[i], cards[i]);
  }
}

function changetoEmptyCards(place) {
  let pCards = document.getElementById(place).getElementsByClassName("card");
  console.log(pCards);
  for (let i = 0; i < pCards.length; i++) {
    pCards[i].innerHTML = "";
    pCards[i].className = "card empty";
  }
}

function changeCard(pCard, gCard) {
  switch (gCard.color) {
    case "red":
      pCard.className = "card red";
      break;
    case "orange":
      pCard.className = "card orange";
      break;
    case "yellow":
      pCard.className = "card yellow";
      break;
    case "green":
      pCard.className = "card green";
      break;
    case "blue":
      pCard.className = "card blue";
      break;
    case "indigo":
      pCard.className = "card indigo";
      break;
    case "purple":
      pCard.className = "card purple";
      break;
  }
  switch (gCard.number) {
    case 1:
      pCard.innerHTML = "1";
      break;
    case 2:
      pCard.innerHTML = "2";
      break;
    case 3:
      pCard.innerHTML = "3";
      break;
    case 4:
      pCard.innerHTML = "4";
      break;
    case 5:
      pCard.innerHTML = "5";
      break;
    case 6:
      pCard.innerHTML = "6";
      break;
    case 7:
      pCard.innerHTML = "7";
      break;
  }
}

//"Creadors de cartes"
function createCard(gCard) {
  let card = document.createElement("div");
  switch (gCard.color) {
    case "red":
      card.className = "card red";
      break;
    case "orange":
      card.className = "card orange";
      break;
    case "yellow":
      card.className = "card yellow";
      break;
    case "green":
      card.className = "card green";
      break;
    case "blue":
      card.className = "card blue";
      break;
    case "indigo":
      card.className = "card indigo";
      break;
    case "purple":
      card.className = "card purple";
      break;
  }
  switch (gCard.number) {
    case 1:
      card.append(1);
      break;
    case 2:
      card.append(2);
      break;
    case 3:
      card.append(3);
      break;
    case 4:
      card.append(4);
      break;
    case 5:
      card.append(5);
      break;
    case 6:
      card.append(6);
      break;
    case 7:
      card.append(7);
      break;
  }
  return card;
}

function createEmptyCard() {
  let emptyCard = document.createElement("div");
  emptyCard.className = "card empty";
  return emptyCard;
}

function createCards(cards, place) {
  for (let i = 0; i < cards.length; i++) {
    document.getElementById(place).appendChild(createCard(cards[i]));
  }

  if (place == "p1" || place == "p2" || place == "p3" || place == "p4") {
    for (i = 0; i < 7; i++) {
      document.getElementById(place).appendChild(createEmptyCard());
    }
  }
}
