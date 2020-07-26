const { Game } = require("./game.js");

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
  let aValue = confirm(
    "Do you want to restart the game with the players you selected?"
  );
  if (aValue == true) {
    restart();
    return true;
  } else {
    return false;
  }
};

////Card to palette, es pitja abans de jugar una carta de la Hand a la Palette
let ctPaletteBttn = document.getElementById("ctPaletteBttn");
ctPaletteBttn.onclick = function () {
  currentMove = 1;
  ctPaletteBttn.classList.add("selected");
  document.getElementById("ctPaletteBttn").style.display = "none";
};

////Card as rule, es pitja abans de jugar una carta de la Hand com a regla
let caRuleBttn = document.getElementById("caRuleBttn");
caRuleBttn.onclick = function () {
  currentMove = 2;
  caRuleBttn.classList.add("selected");
  document.getElementById("ctPaletteBttn").style.display = "none";
};

////Finish (havent tirat carta a la palette podem triar acabar el torn)
let finishBttn = document.getElementById("finishBttn");
finishBttn.onclick = function () {
  let aValue = confirm(
    "Are you sure you are done? You may lose the if you don't follow the actual color rule ):"
  );
  if (aValue == true) {
    currentMove = 4;
    game.makeAMove(currentMove);
    checkWinner();
    return true;
  } else {
    return false;
  }
};

//Funció per revisar si el jugador guanya a la ronda
function checkWinner() {
  //actualitzem cartes
  changeHand();
  changePalettes();
  changeRule();

  //treiem el color del botó seleccionat
  if (document.getElementsByClassName("selected") != undefined) {
    let selectedBttns = document.getElementsByClassName("selected");
    for (let i = 0; i < selectedBttns.length; i++) {
      selectedBttns[i].classList.remove("selected");
    }
  }

  //i tornem a mostrar el primer i amagar l'extra
  if (currentMove != 1) {
    showButtons();
    currentMove = 0;
  }

  //busquem si ha perdut algú i ho fiquem en blanc perquè es noti
  if (game.players.length < playersCont) {
    document.getElementById(game.loser).classList.add("unavailable");

    alert("Oh no! Player " + game.loser.substring(1) + " has lost");
    playersCont--;
  }

  //canvi de torn al següent jugador al text d'adalt
  document.getElementById("aPlayer").innerHTML = `Player ${game.players[
    game.currentPlayer
  ].name.substring(1)}'s turn`;

  //si acaba el joc es reinicia
  if (game.players.length < 2) {    
    alert(
      "Game finished! The winner is Player " + game.players[0].name.substring(1)
    );
    restart();
    return false;
  }
}

//Cartes
////Hand: Al sel·leccionar una carta de la hand es jugarà a la palette
let hCards = getHandCards();
for (let i = 0; i < hCards.length; i++) {
  hCards[i].onclick = function () {
    if (currentMove == 0) alert("Please select first your game option");
    else {
      document.getElementById("aRule").innerHTML = "";
      game.makeAMove(currentMove, i);
      if (currentMove == 1) actionRuleMove();
      checkWinner();
      if ( //si no juguem una carta d'acció abans reiniciem el tema de botons i text de cartes d'acció
        game.actionRule != 5 &&
        game.actionRule != 1 &&
        game.actionRule != 7
      ) {
        currentMove = 0;
        document.getElementById("aRule").innerHTML = "";
        showButtons();
      }
    }
    return false;
  };
}

////Palettes: definim les paletes i què fer en cas de tocar una carta de la paleta (action rules)
makeonClickPalette("p1");
makeonClickPalette("p2");
makeonClickPalette("p3");
makeonClickPalette("p4");
function makeonClickPalette(pName) {
  let pCards = getPaletteCards(pName);

  for (let i = 0; i < pCards.length; i++) {
    pCards[i].onclick = function () {
      //aqui mostrem només els botons de canviar regla i acabar
      if (game.actionRule == 1 || game.actionRule == 7) {
        if (//si action rule = 1 i cliquem una carta que no sigui de la nostra paleta
          game.actionRule == 1 &&
          game.players[game.currentPlayer].name != pName
        ) {
          document.getElementById("aRule").innerHTML = "";
          showButtonsR();          
          //mirem si la paleta jugadora no és més gran que les demés
          let check = game.action1(game.getPlayerIndexByName(pName), i);
          if (check == 0) {
            alert(
              "You selected a player with less cards than you, please chose another one"
            );
          }
          if (check == 1) {
            changePalettes();
          }//sino seguim
        } else if (
          //si action rule = 7 i cliquem una carta de la nostra paleta
          game.actionRule == 7 &&
          game.players[game.currentPlayer].name == pName
        ) {          
          document.getElementById("aRule").innerHTML = "";
          showButtonsR();
          //preguntem què volem fer amb la carta
          let aValue = confirm(
            "Play card as a new rule? (if not it will be discarded to the deck pile)"
          );//jugar com a regla
          if (aValue == true) {
            game.action7(i);
            checkWinner();
            return true;
          } else {//o retornar-la a la pila
            game.action7discard(i);
            changePalettes();
            return true;
          }
        }
      }
    };
  }
}

//Action rules
function actionRuleMove() {
  switch (game.actionRule) {
    case 1:
      document.getElementById("aRule").innerHTML =
        "Action rule: 1, choose a card from another player's palette";
      hideButtons();
      break;
    case 3:
      game.action3();
      break;
    case 5:
      document.getElementById("aRule").innerHTML =
        "Action rule: 5, select a second card to play to the palette";
      hideButtons();
      break;
    case 7:
      document.getElementById("aRule").innerHTML =
        "Action rule: 7, choose a card from your palette";
      hideButtons();
      break;
    default:
      document.getElementById("aRule").innerHTML = "";
      hideButtons();
      break;
  }
}

function getHandCards() {
  let hCards = document.getElementById("hand").getElementsByClassName("card");
  return hCards;
}

function getPaletteCards(palette) {
  let pCards = document.getElementById(palette).getElementsByClassName("card");
  return pCards;
}

//funció per reiniciar joc
function restart() {
  let selector = document.getElementById("playersNum");
  numPlayers = parseInt(selector.options[selector.selectedIndex].text);
  playersCont = numPlayers;

  //nou joc amb numero de jugadors seleccionats
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

  //fiquem com a primer jugador el primer
  document.getElementById("aPlayer").innerHTML = `Player ${game.players[
    game.currentPlayer
  ].name.substring(1)}'s turn`;
}

function showButtons() {
  //Es crida al acabar un moviment
  document.getElementById("ctPaletteBttn").style.display = "block";
  document.getElementById("caRuleBttn").style.display = "block";
}

function showButtonsR() {
  //es crida al tirar un 1 o 7
  document.getElementById("caRuleBttn").style.display = "block";
}

function hideButtons() {
  document.getElementById("ctPaletteBttn").style.display = "none";
  document.getElementById("caRuleBttn").style.display = "none";
}

//"Creadors" i "canviadors" d'elements
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
      changeCards(cards, game.players[i].name);
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

//*les empty cards les volem per tenir lloc per les futures cartes de la palette o hand
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
