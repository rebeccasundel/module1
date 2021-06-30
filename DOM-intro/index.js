console.log("connected!");

// forEach, map, filter, reduce
const divs = document.getElementsByClassName("div");

for (let i = 0; i < divs.length; i++) {
  //   console.log(divs[i]);
}

const divsArray = Array.from(divs);

// console.log(divsArray);

const h1 = document.getElementById("heading");

// console.log(h1);

const firstElementWithDivClass = document.querySelector(".div");

// console.log(firstElementWithDivClass);

const allDivClassElements = document.querySelectorAll(".div");

// console.log("NodeList with all div class elements", allDivClassElements);

h1.style.color = "green";

const link = document.getElementsByTagName("a")[0];

link.setAttribute("href", "https://creditkarma.com");

link.setAttribute("target", "_blank");

// console.log(link);

const h3 = document.createElement("h3");
h3.innerText = "hey I'm h3";

const body = document.querySelector("body");

body.appendChild(h3);
