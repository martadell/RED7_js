const { Game } = require("../game");

let game = new Game();
game.newGame(3);


game.players.forEach ((player) => {
    console.log(player.name);
    console.log(player.hand);
    console.log(player.palette);
});

while(game.players.length > 1) {
    console.log("current player "+game.currentPlayer);
    console.log("current rule "+game.ruleInfo);
    game.makeMove((Math.floor(Math.random() * 2) + 1),
    0,
    0);  
    game.players.forEach ((player) => {
        console.log(player.name);
        console.log(player.hand);
        console.log(player.palette);
    });
}

console.log("Game finsihed! The winner is: " + game.players[0].name);