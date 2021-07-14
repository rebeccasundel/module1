const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// console.log("is this working");

{
  /* <img src=""/> */
}

const natureImg = new Image();
natureImg.src = "./images/waterfalls.jpeg";

// console.log(natureImg);

natureImg.addEventListener("load", () => {
  context.drawImage(natureImg, 10, 10, 260, 160);
});

// natureImg.onload = () => {
//   context.drawImage(natureImg, 10, 10, 260, 160);
// };
