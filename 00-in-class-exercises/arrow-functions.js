// arrow function

function multiply(num1, num2) {
  console.log(num1 * num2);
}

// multiply(3, 7);

// es5
const multiply2 = function (num1, num2) {
  console.log(num1 * num2);
};

// es6
// function expression with arrow syntax
const multiply1 = (num1, num2) => {
  console.log(num1 * num2);
};

// multiply1(4, 5);

// ********************************************************************************************

// method - function that belongs to an object

const user = {
  name: "ana",
  age: 29,
  // we can't use arrow func here as it would bind "this" to the Window object (global scope)
  getOlder: function () {
    setInterval(() => {
      this.age += 1;

      //thanks to arrow func syntax, "this" is bind to "user" object
      console.log(this.age);
    }, 1000);
  }
};

user.getOlder();

// Benefits of arrow functions:
// Arrow syntax automatically binds `this` to the surrounding code’s context.
// The syntax allows an implicit return when there is no body block, resulting in shorter and simpler code.
// `=>` is shorter and simpler than regular function syntax.
