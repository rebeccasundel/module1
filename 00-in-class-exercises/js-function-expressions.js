// function declaration (statement) - gets hoisted

printInfo("car", 3000); // declaration is hoisted, not the value so we will not see "car price is 3000".
// Instead we will see "undefined" and our code won't be broken (no error will show up)

function printInfo(product, price) {
  return `${product} price is ${price}`;
}

console.log(printInfo("sandwich", 8));

// productPrice("samsung", 700); // ReferenceError - we can't call this function before it was declared (defined)

// function expression - doesn't get hoisted
const productPrice = function (product, price) {
  return `${product} price is ${price}`;
};

console.log(productPrice("apple", 2));

// hoisting

console.log("name: ", name); // name:
var name = "sandra";

// console.log("name 1: ", name1) // ReferenceError: Cannot access 'name1' before initialization
let name1 = "marcos";

// A function declaration is a named function and can be stored in a variable if needed.
const coffee = printInfo("coffee", 2);

// A function expression is an un-named (or so-called anonymous) function that is stored in the variable.
// Both can be reused throughout the code.
