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
};

// 2. add images to canvas

const superman = {
  x: 0,
  y: 200,
  width: 150,
  height: 150
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

  if (fireball.x === 0) {
    score++;
  }

  requestAnimationFrame(drawLoop);
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

drawLoop();
