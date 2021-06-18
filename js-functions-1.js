// ************************************
// FUNCTION DECLARATION
// INVOKING A FUNCTION
// NAMING A FUNCTION
// PARAMETERS VS. ARGUMENTS
// RETURN STATEMENT
// ************************************

// ❗️❗️ naming conventions ❗️❗️
// - name should be very descriptive and should explain what a function does
// - name should consist of a verb+something - a verb should descrive an action (ex. getUsers)
// - name should start with a lowercase and should be in the camelCase format (the same as variables)

// ✨ ✨ create a function - function declaration

//        function name
function printCoffeePrice() {
  // function body
  console.log("Coffee price is 4.99");
}

// ✨ ✨ call a function - function execution/function invocation
printCoffeePrice();

function printJuicePrice() {
  console.log("Juice price is 7.49");
}

printJuicePrice();

// product, price => ✨ placeholder (it can be any word)
// product, price => ✨ parameters - placeholders we use when we declare a function

function printProductInfo(product, price) {
  console.log(`The price of the ${product} is ${price}. `);
}

// ✨ arguments - real values that are used in function execution
printProductInfo("milk", 3.99);
printProductInfo("t-shirt", 17.0);
printProductInfo("iPhone", 799.0);

console.log("------------------------------");

// RULE: every function RETURNS something
// if there is no explicit return, function will return undefined

function printInfo(product, price) {
  return `The price of the ${product} is ${price}.`;
}

printInfo("samsung galaxy", 750.0);

// -- ✨ multiple return statements ✨  --

function printName(name) {
  // name === undefined <==> !name
  if (!name) {
    return `Please provide the name!`;
  }

  return `welcome, ${name}`;
}

printName();
