class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
    this.fireball = new Component(this, 800, 200, 70, 70, "./images/fireball.png");
    this.superman = new Player(this, 0, 200, 150, 150, "./images/superman.png");
    this.score = 0;
  }

  // game methods
  // init(){}
  start() {
    // console.log(this.context);
    this.drawLoop();

    this.superman.move();
  }

  drawBackground() {
    this.context.fillStyle = "pink";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // 1.1 make score visible on the board

    this.context.fillStyle = "green";
    this.context.font = "25px Arial";
    this.context.fillText(`Score: ${this.score}`, 800, 50);
    this.context.fillText(`Lives: ${this.superman.lives}`, 800, 80);
  }

  drawLoop() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBackground();

    this.fireball.drawComponent();
    this.superman.drawComponent();

    this.fireball.x -= 5;

    if (this.fireball.x < -this.fireball.width) {
      this.fireball.x = this.canvas.width;

      this.fireball.y = Math.random() * (this.canvas.height - this.fireball.height);
    }

    if (this.fireball.didCollide(this.superman)) {
      if (this.superman.immunity === false) {
        this.superman.lives -= 1;
        this.superman.switchImmunity();
      }
    }

    if (this.superman.lives === 0) {
      this.gameOver();
    }

    if (this.superman.lives > 0) {
      requestAnimationFrame(() => {
        this.drawLoop();
      });
    }
  }

  gameOver() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBackground();

    const tiredSuperman = new Player(this, 400, 250, 150, 150, "./images/tired-superman.png");

    tiredSuperman.img.addEventListener("load", () => {
      this.context.drawImage(
        tiredSuperman.img,
        tiredSuperman.x,
        tiredSuperman.y,
        tiredSuperman.width,
        tiredSuperman.height
      );
    });

    this.context.fillStyle = "red";
    this.context.font = "70px Arial";
    this.context.fillText("GAME OVER!", 300, 200);
  }
}
