class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);

    Cars=[car1,car2,car3,car4];
  }
  play(){
    form.hide();
    Player.getPlayerInfo();

    if (allPlayers!==undefined){
      var x=0;
      var y;

      var index=0

      for(var I in allPlayers){
       index+=1;
       x+=200;
       y=height-allPlayers[I].distance;

       Cars[index-1].x=x;
       Cars[index-1].y=y

        if(index===player.index){
        Cars[index-1].shapeColor='red';
        camera.position.x=width/2;
        camera.position.y=Cars[index-1].y
        }
        else{
          Cars[index-1].shapeColor='black';
        }
      }
    } 
    if (keyIsDown(UP_ARROW)&& player.index!=null){
      player.distance+=50;
      player.update();
    }

 drawSprites();
  }
}
