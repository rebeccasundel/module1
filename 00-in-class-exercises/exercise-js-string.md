<br><br>

1. Create variables with your first name, last name and age.
2. Make the first letters of your first and last name capitalized.
3. Concatenate your first and last name to give your full name.
4. Use the `console.log()` method to output the sentence with the following structure: `My name is _________ and I am _____`.

### Solution

```js
// Create variables with your first name, last name and age.

let firstName1 = "fernando";
let lastName = "salcedo";
let age = 31;

// Make the first letters of your first and last name, capitalized.

let fName = firstName1.charAt(0).toUpperCase() + firstName1.substring(1);
console.log(fName); // Fernando

let lName = lastName[0].toUpperCase() + lastName.substring(1);
console.log(lName); // Salcedo

// Concatenate your first and last name to give your full name.

console.log(`The full name: ${fName} ${lName}`); // The full name: Fernando Salcedo

// Use console.log() method to output the sentence with the following structure: My name is __________ and I am _____.

console.log(`My name is ${fName} ${lName} and I am ${age}.`); // My name is Fernando Salcedo and I am 31
```
