class Life {
  constructor(maxLifes, initialLife) {
    this.maxLifes = maxLifes;
    this.initialLife = initialLife;
    this.lifes = this.initialLife;
    
    this.imageWidth = 42;
    this.imageHeight = 42;
    
    this.initialX = 12;
    this.y = 12;
  }
  
  draw() {
    for(let i = 0; i < this.lifes; i++) {
      const margin = i * this.imageWidth;
      const position = this.initialX * (1 + i);
    
      image(lifeImage, position + margin, this.y, this.imageWidth,  this.imageHeight);
    }
  }
  
  winLife() {
    if (this.lifes <= this.maxLifes) {
      this.lifes++;
    }
  }
  
  lostLife() {
    this.lifes--;
  }
}