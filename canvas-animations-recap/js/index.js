const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let speed1 = 1;
let speed2 = 2;
let speed3 = 3;

const makeSquare = (x, y, w, h, color) => {
  context.fillStyle = color;
  context.fillRect(x, y, w, h);
};

const updateCanvas = () => {
  speed1 += 1;
  speed2 += 2;
  speed3 += 3;

  context.clearRect(0, 0, canvas.width, canvas.height);

  makeSquare(10, speed1, 50, 50, "blue");
  makeSquare(70, speed2, 50, 50, "red");
  makeSquare(150, speed3, 50, 50, "green");

  // 1
  setTimeout(updateCanvas, 30);

  // 2
  //   requestAnimationFrame(updateCanvas);

  // 3
  //   setInterval(updateCanvas, 1000 / 24);
};

updateCanvas();
