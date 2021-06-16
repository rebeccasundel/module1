// true or false value

// = --> assignment operator

let blah = "something";

// == --> compares just using value

let x = 5; // type of number
let y = "5"; // type of string

console.log("is 5 equal to '5': ", x == y); // true

// === --> compares using value and the type
console.log("is 5 equal to '5': ", x === y); // false

// falsy values will evaluate as false
// false
// 0
// "" (an empty string)
// null
// undefined
// NaN

if (undefined) {
  console.log("value is truthy");
} else {
  console.log("value is falsy"); // ✅
}

// truthy values will evaluate as true
// true
// "0"
// "false"
// 22 (any number)

if (888) {
  console.log("value is truthy"); // ✅
} else {
  console.log("value is falsy");
}
