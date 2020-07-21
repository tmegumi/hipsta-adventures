class Character extends Animation { 
  constructor(matrix, image, x, yVariation, animationWidth, animationHeight, spriteWidth, spriteHeight) {
    super(matrix, image, x, yVariation, animationWidth, animationHeight, spriteWidth, spriteHeight);
    
    this.yVariation = yVariation;
    this.baseY = height - this.animationHeight - 30;
    this.y = this.baseY;
    
    this.jumpSpeed = 0;
    this.gravity = 5;
    this.jumpHeight = -50;
    this.jumps = 0;
    
    this.invincible = false;
  }
    
  jump() {
    if (this.jumps < 2) {
      this.jumpSpeed = this.jumpHeight;
      this.jumps++;
    }
  }
  
  applyGravity() {
    this.y = this.y + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravity;
    
    if (this.y > this.baseY) {
      this.y = this.baseY;
      this.jumps = 0;
    }
  }
  
  isInvincible() {
    this.invincible = true;
    
    setTimeout(() => {
      this.invincible = false;
    }, 1000);
  }
  
  isColliding(enemy) {
    if (this.invincible) {
      return false;
    }
    
    const precision = .7;
    
    const collide = collideRectRect(
      this.x, 
      this.y, 
      this.animationWidth * precision, 
      this.animationHeight * precision,
      enemy.x,
      enemy.y, 
      enemy.animationWidth * precision, 
      enemy.animationHeight * precision
    );
    
    return collide;
  }
}