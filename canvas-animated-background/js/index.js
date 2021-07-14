const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const backgroundImg = new Image();

backgroundImg.src =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.x3nAVrcgNoQ8wRNnjF4reAHaEK%26pid%3DApi&f=1";

let i = 0;

let j = canvas.width;

const draw = () => {
  let animation = requestAnimationFrame(draw);
  context.clearRect(0, 0, canvas.width, canvas.height);
  i--;
  if (i <= -canvas.width) i = canvas.width;

  j--;
  if (j <= -canvas.width) j = canvas.width;

  // if you want canvas to go in opposite direction
  //   i++;
  //   if (i >= canvas.width) i = -canvas.width;

  //   j++;
  //   if (j >= canvas.width) j = -canvas.width;

  if (i > 500) {
    cancelAnimationFrame(animation);
  }

  context.drawImage(backgroundImg, i, 0, canvas.width, canvas.height);
  context.drawImage(backgroundImg, j, 0, canvas.width, canvas.height);
};

draw();
