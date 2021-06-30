console.log("connected!");

// forEach, map, filter, reduce
const divs = document.getElementsByClassName("div");

for (let i = 0; i < divs.length; i++) {
  //   console.log(divs[i]);
}

const divsArray = Array.from(divs);

// console.log(divsArray);

const h1 = document.getElementById("heading");

console.log(h1);

const firstElementWithDivClass = document.querySelector(".div");

console.log(firstElementWithDivClass);

const allDivClassElements = document.querySelectorAll(".div");

console.log("NodeList with all div class elements", allDivClassElements);

h1.style.color = "green";
