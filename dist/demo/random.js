const { Game } = require("../game");

let game = new Game();
game.newGame(((Math.floor(Math.random() * 2) + 1)+1)); //treu de 2 a 4 jugadors

game.players.forEach ((player) => {
    console.log(player.name);
    console.log(player.hand);
    console.log(player.palette);
});

while(game.players.length > 1) {
    console.log("current rule "+game.ruleInfo);
    let card1 = (Math.floor(Math.random() * (game.players[game.currentPlayer].hand.handLength - 1)) + 1);
    let card2 = (Math.floor(Math.random() * (game.players[game.currentPlayer].hand.handLength - 1)) + 1);
    game.makeMove((Math.floor(Math.random() * 3) + 1), //tria una opció random de la 1 a la 4
    card1,
    card2); //tria una carta random de la 1 a la 7 (per opció 1, 2 i 3)
    //tria una carta random de la 1 a la 7 (per opció 3)
    game.players.forEach ((player) => {
        console.log(player.name);
        console.log(player.hand);
        console.log(player.palette);
    });
}

console.log("Game finsihed! The winner is: " + game.players[0].name);