function preload() {
  scenarioImage = loadImage('images/scenario/woods.png');
  characterImage = loadImage('images/character/running.png');
  enemyImage = loadImage('images/enemies/droplet.png');
  bigEnemyImage = loadImage('images/enemies/troll.png');
  flyingEnemyImage = loadImage('images/enemies/flying-droplet.png');
  gameOverImage = loadImage('assets/game-over.png');
  homeScreenImage = loadImage('images/scenario/homeScreen.png');
  lifeImage = loadImage('assets/heart.png');
  
  gameFont = loadFont('assets/gameFont.otf');
  
  gameSong = loadSound('sounds/gameSong.mp3');
  jumpSound = loadSound('sounds/jumpSound.mp3');
  
  cartridge = loadJSON('cartridge/cartridge.json');
}