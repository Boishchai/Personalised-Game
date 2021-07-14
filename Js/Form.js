class Form
{
    constructor()
    {
        this.button = createButton("Play");
        this.input = createInput("");
        this.reset = createButton("RESET");
        this.title = createElement("h1");
        this.greeting = createElement("h1");
        this.radio = createRadio();

    }

    display()
    {
        this.input.position(displayWidth/2 - 80, displayHeight/2);
        this.button.position(displayWidth/2 - 80, displayHeight/2 + 40);

        this.title.html("Warrior Rumble");
        this.title.position(displayWidth/2 - 80, displayHeight/2 - 300);

        this.radio.option("SinglePlayer");
        this.radio.option("Multiplayer");
        this.radio.position(displayWidth/2 - 100, displayHeight/2 - 50);

        this.button.mousePressed(
            ()=>
            {
                if(this.radio.selected("SinglePlayer"))
                {
                    this.button.hide();
                    this.input.hide();
                    this.radio.hide();

                    playerCount += 1;
                    player.index = playerCount;
                    player.updateCount(playerCount);

                    player.name = this.input.value();
                    player.update();

                    this.greeting.html("Hello" + player.name);
                    this.greeting.position(displayWidth/2 - 50, displayHeight/3);
                }
            }
            )

            this.radio.mousePressed(() =>
            {
                game.type = this.radio.value();
                game.updateType();

                if(game.type === "SinglePlayer")
                {
                    game.update(1);
                }

                if(game.type === "Multiplayer")
                {
                    var nPlayer = createRadio();
                    nPlayer.option("2 Players");
                    nPlayer.option("3 Players");
                    nPlayer.option("4 Players");

                    nPlayer.position(displayWidth/2 - 100, displayHeight);
                    console.log(nPlayer);
                }
            }
            );
    }
}