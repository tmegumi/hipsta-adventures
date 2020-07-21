class HomeScreen {
  constructor() {
  
  }
  
  draw() {
    this._backgroundImage();
    this._text();
    this._button();
  }
  
  _backgroundImage() {
    image(homeScreenImage, 0, 0, width, height);
  }
  
  _text() {
    textFont(gameFont);
    textAlign(CENTER);
    textSize(70);
    text('As aventuras de', width / 2, height / 4);
    textSize(120);
    text('Hipsta', width / 2, height / 2.8);
  }
  
  _button() {
    managerButton.y = height / 7 * 5;
    managerButton.draw();
  }
}