class Player extends Component {
  constructor(classGame, x, y, w, h, imageSrc) {
    super(classGame, x, y, w, h, imageSrc);

    this.immunity = false;
    this.lives = 3;
  }

  move() {
    document.addEventListener("keydown", (event) => {
      //   console.log(event.code);

      switch (event.code) {
        case "ArrowRight":
        case "KeyD":
          this.x += 10;
          break;
        case "ArrowLeft":
        case "KeyA":
          if (this.x > -2) this.x -= 10;
          break;
        case "ArrowUp":
        case "KeyW":
          this.y -= 10;
          break;
        case "ArrowDown":
        case "KeyX":
          this.y += 10;
          break;
        default:
          console.log("Are you even moving?!?!");
      }
    });
  }

  switchImmunity = () => {
    this.immunity = true;
    setTimeout(() => {
      this.immunity = false;
    }, 1000);
  };
}
