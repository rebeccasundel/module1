// Fireball
class Component {
  constructor(classGame, x, y, w, h, imageSrc) {
    this.game = classGame; // i need context from the class Game so I am passing it down from the Game where I use it to create fireball object
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.img = new Image();
    this.img.src = imageSrc;
  }

  // to make fireball appear on the canvas
  drawComponent() {
    this.game.context.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  // otherComponent is basically the superman
  didCollide(otherComponent) {
    if (
      otherComponent.x + otherComponent.width - 50 < this.x ||
      otherComponent.y > this.y + this.height ||
      this.x + this.width < otherComponent.x ||
      otherComponent.y + otherComponent.height < this.y
    ) {
      if (this.x === 0) {
        this.game.score++;
      }
      return false;
    } else {
      return true;
    }
  }
}
