const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.style.border = "1px solid black";

ctx.font = "30px Arial";

// ctx.fillText("This is text", 50, 50);

// ctx.strokeText("This is another text", 50, 100);

const img = new Image();
img.src = "./fireworks.png";

// img.onload = () => ctx.drawImage(img, 0, 0);

const backgroundImg = new Image();
backgroundImg.src = "./mountain-sunset.jpg";

img.addEventListener("load", () => {});

window.onload = () => {
  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, 50, 50);
};
let x = 0;
let dx = 3;
let y = 0;
let letters = "";

setInterval(() => {
  x += dx;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
  ctx.fillText(letters.toUpperCase(), 100, 100);
  ctx.drawImage(img, x, y, 50, 50);
  if (x > 550 || x < 0) {
    // x = 0;
    dx = -dx;
  }
}, 50);

window.onkeypress = (event) => {
  switch (event.keyCode) {
    case 119:
      if (y < 550) y += 10; // 600 50
      //   removeDoubles(letters + "w");
      break;
    case 115:
      if (y > 0) y -= 10;
      break;
    default:
      console.log(event.keyCode);
    //   letters += letters.includes(event.key) ? '' : event.key;
  }
};
