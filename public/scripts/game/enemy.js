class Enemy extends Animation {
  constructor(matrix, image, x, yVariation, animationWidth, animationHeight, spriteWidth, spriteHeight, speed) { //, delay
    super(matrix, image, x, yVariation, animationWidth, animationHeight, spriteWidth, spriteHeight);
    
    this.speed = speed;
    //this.delay = delay;
    //this.x = width + this.delay;
    this.x = width;
  }
  
  move() {
    this.x = this.x - this.speed;
    
    //if (this.x < -this.animationWidth - this.delay) {
    //if (this.x < -this.animationWidth) {
    //  this.x = width;
    //}
  }
  
  appear() {
    this.x = width;
  }
}