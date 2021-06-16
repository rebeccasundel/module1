let i = 0;

while (i < 5) {
  console.log(i);
  i++; // i = i + 1
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

for (let i = 10; i > 3; i--) {
  console.log(i);
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

const greeting = "hey there!";

// char is a placeholder
for (const char of greeting) {
  console.log(char);
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// count from 1 to 20 (use a loop)
// if number is divisible by 3 print "FIZZ"
// if number is divisible by 5 print "BUZZ"
// if number is divisible by 3 and 5 print "FIZZBUZZ"

let count = 1;

while (count <= 20) {
  if (count % 3 === 0 && count % 5 === 0) console.log("FIZZBUZZ");
  else if (count % 3 === 0) console.log("FIZZ");
  else if (count % 5 === 0) console.log("BUZZ");
  else console.log(count);

  count++;
}

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FIZZBUZZ");
  else if (i % 3 === 0) console.log("FIZZ");
  else if (i % 5 === 0) console.log("BUZZ");
  else console.log(i);
}
