var form, player, game;
var database, gameState = 0, playerCount;
var allPlayers;

function preload()
{

}

function setup()
{
    createCanvas(displayWidth - 20, displayHeight - 20);
    background("red");

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw()
{
    if(game.type === "Multiplayer")
    {
        if(player.nPlayer === "2 Players")
        {
            if(playerCount === 2)
            {
                game.update(1);
            }
        }

        if(player.nPlayer === "3 Players")
        {
            if(playerCount === 3)
            {
                game.update(1);
            }
        }

        if(player.nPlayer === "4 Players")
        {
            if(playerCount === 4)
            {
                game.update(1);
            }
        }
    }
    if(gameState === 1)
    {
        game.play();
    }
}