class Player
{
    constructor()
    {
        this.name = null;
        this.score = 0;
        this.index = null;
        this.nPlayer = null;
    }

    getCount()
    {
        var playerCountRef;
        playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data)=> 
        {
            playerCount = data.val();
        }
        );
    }

    updateCount(playerCount)
    {
        database.ref("/").update({playerCount: playerCount});
    }

    update()
    {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update(
        {
            name: this.name,
            score : this.score
        }
        );
    }

    static getPlayerInfo()
    {
        database.ref("players").on("value", (data) =>
        {
            allPlayers = data.val();
        }
        );
    }
}