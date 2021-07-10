const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

canvas.style.border = "solid 1px red";

// ctx.fillStyle = "purple";
// ctx.fillRect(100, 100, 200, 200);

// ctx.clearRect(150, 150, 100, 100);

// ctx.strokeRect(175, 175, 50, 50);

// ctx.beginPath();

// ctx.moveTo(50, 150);

// ctx.lineTo(50, 50);

// ctx.strokeStyle = "red";
// ctx.stroke();
// ctx.lineTo(100, 50);

// ctx.strokeStyle = "green";

// ctx.stroke();
// ctx.fillStyle = "red";
// ctx.fill();

// ctx.closePath();

ctx.beginPath();

ctx.arc(150, 150, 60, 0, Math.PI); // radiant ~ 57deg

ctx.lineWidth = 40;

ctx.strokeStyle = "yellow";

ctx.fill();

ctx.stroke();
ctx.closePath();
