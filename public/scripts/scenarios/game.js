class Game {
  constructor() {
    this.index = 0;
    this.map = cartridge.map;
  }

  setup() {
    scenario = new Scenario(scenarioImage, 3);
    character = new Character(characterMatrix, characterImage, 0, 30, 110, 135, 220, 270);
    score = new Score();
    life = new Life(cartridge.config.maxLifes, cartridge.config.initialLifes);

    const enemy = new Enemy(enemyMatrix, enemyImage, width, 30, 52, 52, 104, 104, 10); //, 100
    const bigEnemy = new Enemy(bigEnemyMatrix, bigEnemyImage, width, 0, 200, 200, 400, 400, 15); //, 100
    const flyingEnemy = new Enemy(flyingEnemyMatrix, flyingEnemyImage, width, 200, 100, 75, 200, 150, 10); //, 100

    enemies.push(enemy);
    enemies.push(bigEnemy);
    enemies.push(flyingEnemy);
  }
  
  keyPressed(key) {
    if (key === 'ArrowUp') {
      character.jump();
      jumpSound.play();
    }
  }
  
  draw() {
    scenario.show();
    scenario.move();
    
    life.draw();

    score.show();
    score.addScore();

    character.show();
    character.applyGravity();

    const currentLine = this.map[this.index];
    const currentEnemy = enemies[currentLine.enemy];
    const isEnemyVisible = currentEnemy.x < -currentEnemy.animationWidth;

    currentEnemy.speed = currentLine.speed;
    
    currentEnemy.show();
    currentEnemy.move();
    
    if (isEnemyVisible) {
      this.index++;
      currentEnemy.appear();

      if (this.index > this.map.length - 1) {
        this.index = 0;
      }
    }

    if (character.isColliding(currentEnemy)) {
      life.lostLife();
      character.isInvincible();
      
      if (life.lifes === 0) {
        image(gameOverImage, width / 2 - 200, height / 3);
        noLoop();
      }
    }
  }
}