class Form {
  constructor() {
    this.title = createElement('h2')
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }
  hide(){
  this.greeting.hide();
  this.button.hide();
  this.input.hide();
}

  display(){
    this.title.html("Car Racing Game");
    this.title.position(width/2-50,50);
  
    this.input.position(width/2-40,height/2-80);
    this.button.position(width/2+30,height/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name )
      this.greeting.position(width/2-30,height/4)
    });

  }
}
