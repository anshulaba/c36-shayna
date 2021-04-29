class game
{
  constructor()
  {

  }

  getState()
  {
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value",function(data){
      gameState=data.val();
      });
  }

  update(state)
  {
      database.ref('/').update({
      gameState : state
      });
  }

  start()
  {
      if(gameState===0)
      {
          player=new player();
          player.getCount();
          form= new form();
          form.display();
      }
  }

      
  

}