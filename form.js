class form
{
    constructor()
    {

    }

    display()
    {
        var title = createElement('h2');
        title.html("car racing game");
        title.position(130,0);

        var input = createInput("name");
        var button = createButton('PLAY');
        var greeting = createElement('h3');

        input.position(130,150);
        button.position(250,200);

        button.mousePressed(function(){
        input.hide();
        button.hide();

        var name=input.val();

        playerCount+=1;
        player.update(name);
        player.updateCount(playerCount);
        });

    }
}