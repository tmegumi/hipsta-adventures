function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(40);

  //gameSong.loop();
  
  game = new Game();
  homeScreen = new HomeScreen();
  managerButton = new ManagerButton('Iniciar', width / 2, height / 2);
  
  game.setup();
  
  scenes = {
    game,
    homeScreen
  };
}

function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  scenes[currentScene].draw();
}