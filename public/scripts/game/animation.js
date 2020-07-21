class Animation {
  constructor(matrix, image, x, yVariation, animationWidth, animationHeight, spriteWidth, spriteHeight) {
    this.matrix = matrix;
    this.image = image;
    this.animationWidth = animationWidth;
    this.animationHeight = animationHeight;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    
    this.x = x;
    this.yVariation = yVariation;
    this.y = height - this.animationHeight - this.yVariation;
    
    this.currentFrame = 0;
  }
    
  show() {
    image(this.image, this.x, this.y, this.animationWidth, this.animationHeight, this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1], this.spriteWidth, this.spriteHeight);
    
    this.animate();
  }
  
  
  animate() {
    this.currentFrame++;
    
    if (this.currentFrame >= this.matrix.length - 1) {
        this.currentFrame = 0;
    }
  }
}