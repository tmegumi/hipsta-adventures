class ManagerButton {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
    
    this.button = createButton(this.text);
    this.button.mousePressed(() => this._changeScene());
    this.button.addClass('home-screen-button');
  }
  
  draw() {
    this.button.position(this.x, this.y);
    this.button.center('horizontal');
  }
  
  _changeScene() {
    this.button.remove();
    currentScene = 'game';
  }
}