class Game
{
    constructor()
    {
        this.type = null;
    }

    getState()
    {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", (data) =>
        {
            gameState = data.val();
        }
        );
    }

    updateState(gameState)
    {
        database.ref("/").update(
            {
                gameState: gameState
            }
            );
    }

    getType()
    {
        database.ref("type").on("value", (data) => 
        {
            this.type = data.val();
        }
        );
    }

    updateType()
    {
        database.ref("/").update({"type": this.type});
    }

    async start()
    {
        if(gameState === 0)
        {
            form = new Form();
            form.display();

        
            player = new Player();

            var playerCountRef = await database.ref("playerCount").once("value");
            if(playerCountRef.exists())
              {
                    playerCount = playerCountRef.val();
                    player.getCount();
              }

        }
    }

    play()
    {

    }

    end()
    {

    }
}