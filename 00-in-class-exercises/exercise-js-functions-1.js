// Create a function that accepts 3 numbers as parameters, and returns their sum.

function calculateSum(a, b, c) {
  // const total = a + b + c;
  // return total;

  return a + b + c;
}

calculateSum(2, 3, 4);

// Create a function named isNameOddOrEven() that accepts a string as a parameter. The function should return whether a received string has an odd or even number of letters. The expected return should be in the following format - string: ’<name> has an even/odd number of letters’.

function isNameOddOrEven(string) {
  if (typeof string !== "string" || !string) {
    return `Please enter a valid name!`;
  }

  if (string.length % 2 === 0) {
    return `${string} has even number of letters.`;
    // console.log("hellooooo");
  }

  return `${string} has odd number of letters.`;
  // console.log("hellooooo 123");
}

isNameOddOrEven("ivan");
