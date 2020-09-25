class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.title = createElement('h2');
    this.greeting = createElement('h2');

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("fight covid");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 30);
    this.button.position(displayWidth/2 + 40, displayHeight/2 - 1);
    player.name = this.input.value();
    playerCount += 1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);
    this.greeting.html("Hello " + player.name)
    this.greeting.position(400,250);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      
    });


  }
}