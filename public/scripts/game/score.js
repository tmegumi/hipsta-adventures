class Score {
  constructor() {
    this.score = 0;
  }
  
  show() {
    textFont(gameFont);
    textAlign(RIGHT);
    fill('#FFF');
    textSize(50);
    text(parseInt(this.score), width - 30, 50);
  }
  
  addScore() {
    this.score = this.score + 0.2;
  }
}