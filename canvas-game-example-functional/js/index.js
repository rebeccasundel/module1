const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let score = 0;

// 1. set the background

const drawBackground = () => {
  context.fillStyle = "pink";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // 1.1 make score visible on the board

  context.fillStyle = "green";

  context.font = "25px Arial";

  context.fillText(`Score: ${score}`, 800, 50);
  context.fillText(`Lives: ${superman.lives}`, 800, 80);
};

// 2. add images to canvas

const superman = {
  x: 0,
  y: 200,
  width: 150,
  height: 150,
  lives: 3,
  immunity: false
};

const supermanImg = new Image();
supermanImg.src = "./images/superman.png";

// supermanImg.addEventListener("load", () => {
//   context.drawImage(supermanImg, superman.x, superman.y, superman.width, superman.height);
// });

const fireball = {
  x: 800,
  y: 200,
  width: 70,
  height: 70
};

const fireballImg = new Image();
fireballImg.src = "./images/fireball.png";

// fireballImg.addEventListener("load", () => {
//   context.drawImage(fireballImg, fireball.x, fireball.y, fireball.width, fireball.height);
// });

const drawEverything = () => {
  context.drawImage(supermanImg, superman.x, superman.y, superman.width, superman.height);
  context.drawImage(fireballImg, fireball.x, fireball.y, fireball.width, fireball.height);

  if (didCollide(superman, fireball)) {
    if (superman.lives === 0) {
      // alert("GAME OVER!");
      gameOver();
    }
  }
};

const drawLoop = () => {
  //   console.log("hey");
  context.clearRect(0, 0, canvas.width, canvas.height);

  drawBackground();
  drawEverything();

  fireball.x -= 5;

  if (fireball.x < -fireball.width) {
    fireball.x = canvas.width;

    fireball.y = Math.random() * (canvas.height - fireball.height);
  }

  if (superman.lives > 0) {
    requestAnimationFrame(drawLoop);
  }
};

// player movements

document.addEventListener("keydown", (event) => {
  //   console.log(event.code);

  switch (event.code) {
    case "ArrowRight":
    case "KeyD":
      superman.x += 10;
      break;
    case "ArrowLeft":
    case "KeyA":
      if (superman.x > -2) superman.x -= 10;
      break;
    case "ArrowUp":
    case "KeyW":
      superman.y -= 10;
      break;
    case "ArrowDown":
    case "KeyX":
      superman.y += 10;
      break;
    default:
      console.log("Are you even moving?!?!");
  }
});

const didCollide = (superman, fireball) => {
  if (
    superman.x + superman.width - 50 < fireball.x ||
    superman.y > fireball.y + fireball.height ||
    fireball.x + fireball.width < superman.x ||
    superman.y + superman.height < fireball.y
  ) {
    if (fireball.x === 0) {
      score++;
    }
    return false;
  } else {
    if (superman.immunity === false) {
      superman.lives -= 1;
      switchImmunity();
    }
    return true;
  }
};

const switchImmunity = () => {
  superman.immunity = true;
  setTimeout(() => {
    superman.immunity = false;
  }, 1000);
};

const gameOver = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  drawBackground();

  const tiredSuperman = {
    x: 400,
    y: 250,
    width: 150,
    height: 150
  };

  const tiredSupermanImg = new Image();
  tiredSupermanImg.src = "./images/tired-superman.png";

  tiredSupermanImg.addEventListener("load", () => {
    context.drawImage(tiredSupermanImg, tiredSuperman.x, tiredSuperman.y, tiredSuperman.width, tiredSuperman.height);
  });

  context.fillStyle = "red";
  context.font = "70px Arial";

  context.fillText("GAME OVER!", 300, 200);
};

drawLoop();
